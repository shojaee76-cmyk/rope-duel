/*!
 * btc-feed.js v1.1.0 - standalone live BTC/USDT trade feed (multi-provider WS)
 * ---------------------------------------------------------------------------
 * Zero dependencies, UMD (browser global `BtcTradeFeed` + CommonJS).
 *
 * Streams Binance spot trades, classifies aggressor side, and converts them
 * into a rolling buy/sell pressure score in [-1, +1] plus the latest price.
 * Built for real-time 3D scenes: emits on a throttled tick (default 250 ms),
 * never one event per trade (BTCUSDT does ~2,000 trades/min).
 *
 * Side mapping (Binance spot @trade / @aggTrade, verified against docs):
 *   m === false -> buyer was taker -> AGGRESSIVE BUY  (pressure +)
 *   m === true  -> seller was taker -> AGGRESSIVE SELL (pressure -)
 * `p` (price) and `q` (qty) arrive as strings -> parsed with parseFloat.
 *
 * Endpoints (all verified live, tried in order with rotation on failure).
 * Every endpoint declares a PROVIDER ('binance' | 'bybit') and the frame
 * parser is chosen from it, so exactly ONE socket is ever open:
 *   1. wss://data-stream.binance.vision/...   market mirror (native 1s klines)
 *   2. wss://stream.bybit.com/v5/public/spot  Bybit v5 (explicit subscribe)
 *   3. wss://stream.binance.com:9443/stream?streams=...  combined stream
 *   4. wss://stream.binance.com:443/ws/...    trade only, port-443 twin
 * Binance combined `/stream?streams=` payloads are wrapped as
 * {stream:"...", data:{...}} -> unwrapped internally before parsing.
 * Bybit frames carry `topic` + `data` and need a subscribe frame after open;
 * its payloads are normalized to the same internal trade/price shape.
 *
 * WHY BYBIT SITS SECOND AND NOT LAST: Binance geo-blocks sanctioned regions
 * (HTTP 451 on REST, non-101 on WS) and ALL of its mirrors fail together, so
 * a mirrors-first rotation burns the entire demo-fallback budget before it
 * ever reaches a host that answers. Bybit streams fine from those same lines
 * (measured from an Iranian line: Binance WS refused, Bybit OPEN, ~12
 * trades/s, and its REST sends access-control-allow-origin echoing the page
 * origin). A client where binance.vision works still connects on attempt one
 * and never touches attempt two.
 *
 * Modes:
 *   'live'  real Binance feed, exponential-backoff reconnect on drop
 *   'demo'  seeded random-walk synthetic tape (works fully offline)
 *   'auto'  live first; after 2 failed attempts falls back to demo and
 *           keeps retrying live every 60 s (auto-heal back to live)
 *
 * Public API:
 *   const feed = new BtcTradeFeed({ mode: 'auto' });
 *   const off = feed.onChange(cb);   // cb({price, pressure, lastSide, ...})
 *   feed.onTrade(cb);                // per-trade hook (throttle yourself)
 *   feed.onStatus(cb);               // connection lifecycle events
 *   feed.start();  feed.stop();
 *   feed.snap();     feed.formatPrice(p?);  feed.state();
 *
 * Binance limits respected: ONE socket per page, reconnect with exponential
 * backoff + jitter (well under the 300 connects / 5 min cap), nothing sent
 * after the handshake (subscribes via URL path), auto re-subscribe on close.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.BtcTradeFeed = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var VERSION = '1.1.0';
  var SYMBOL = 'btcusdt';

  var DEFAULT_ENDPOINTS = [
    { kind: 'binance', url: 'wss://data-stream.binance.vision/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s', label: 'binance.vision (trade+ticker+1s klines)' },
    { kind: 'bybit', url: 'wss://stream.bybit.com/v5/public/spot', label: 'bybit spot (trade+ticker; answers where binance is geo-blocked)' },
    { kind: 'binance', url: 'wss://stream.binance.com:9443/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s', label: 'stream.binance.com:9443 (trade+ticker+1s klines)' },
    { kind: 'binance', url: 'wss://stream.binance.com:443/ws/btcusdt@trade', label: 'stream.binance.com:443 (trade only, candles from prints)' }
  ];
  var PROVIDER_LABELS = { binance: 'Binance', bybit: 'Bybit' };

  /* Candles: 1s BTCUSDT. History is seeded once from the public REST endpoint
   * (ACAO *, flat weight 2), then kept live by @kline_1s ticks on the SAME
   * socket (no second connection) plus every trade print (covers demo mode
   * and trade-only endpoints). */
  var MAX_CANDLES = 300; // 5 minutes of 1s tape
  var KLINE_SEED_URL = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=300';
  /* Bybit's finest kline interval is 1m, so its chart history is seeded from
   * the recent-trade tape instead and folded into 1s buckets by
   * CandleStore.ingestTrade, exactly like the live prints do. limit=1000 is
   * roughly 60-90 s of BTCUSDT history at the observed ~12 trades/s. */
  var BYBIT_SEED_URL = 'https://api.bybit.com/v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=1000';
  var BYBIT_WS_URL = 'wss://stream.bybit.com/v5/public/spot';

  function CandleStore(max) {
    this.max = max || MAX_CANDLES;
    this.rev = 0;          // bumped on every mutation; consumers redraw when it changes
    this.seeded = false;   // REST history seed applied at least once
    this.t = []; this.o = []; this.h = []; this.l = []; this.c = [];
  }
  CandleStore.prototype.lastT = function () {
    return this.t.length ? this.t[this.t.length - 1] : -1;
  };
  CandleStore.prototype._append = function (t, o, h, l, c) {
    this.t.push(t); this.o.push(o); this.h.push(h); this.l.push(l); this.c.push(c);
    if (this.t.length > this.max) {
      this.t.shift(); this.o.shift(); this.h.shift(); this.l.shift(); this.c.shift();
    }
    this.rev++;
  };
  /* Trade print: same-second slot updates h/l/c (open stays the FIRST print),
   * a newer second opens a new slot, older prints are dropped. */
  CandleStore.prototype.ingestTrade = function (ts, price) {
    if (!isFinite(price)) return;
    var sec = Math.floor(ts / 1000) * 1000;
    var n = this.t.length;
    if (n && sec === this.t[n - 1]) {
      var i = n - 1;
      if (price > this.h[i]) this.h[i] = price;
      if (price < this.l[i]) this.l[i] = price;
      this.c[i] = price;
      this.rev++;
      return;
    }
    if (sec <= this.lastT()) return;
    this._append(sec, price, price, price, price);
  };
  /* @kline_1s tick (interim x:false AND final x:true): upsert by candle time,
   * all four values authoritative from the exchange. */
  CandleStore.prototype.ingestKline = function (t, o, h, l, c) {
    if (!isFinite(t) || !isFinite(o) || !isFinite(h) || !isFinite(l) || !isFinite(c)) return;
    var n = this.t.length;
    if (n && t === this.t[n - 1]) {
      this.o[n - 1] = o; this.h[n - 1] = h; this.l[n - 1] = l; this.c[n - 1] = c;
      this.rev++;
      return;
    }
    if (t < this.lastT()) return;
    this._append(t, o, h, l, c);
  };
  /* REST seed rows: ascending [openTime, open, high, low, close, ...] strings.
   * Rows at/below the newest socket candle are skipped (live data wins). */
  CandleStore.prototype.seedRows = function (rows) {
    if (!Array.isArray(rows)) return;
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (!Array.isArray(r) || r.length < 5) continue;
      var t = +r[0], o = +r[1], h = +r[2], l = +r[3], c = +r[4];
      if (!isFinite(t) || !isFinite(c)) continue;
      if (t <= this.lastT()) continue;
      this._append(t, o, h, l, c);
    }
    this.seeded = true;
    this.rev++;
  };
  /* {t,o,h,l,c} backfill for a REST history that arrives AFTER the socket is
   * already delivering prints (the normal case: the handshake wins the race
   * against the REST round-trip). seedRows() above deliberately drops rows at
   * or below the newest live slot, which is correct for a pre-connect seed but
   * throws away the entire history here. seedHistory instead:
   *   - rows OLDER than the first live slot are prepended (history fills left)
   *   - rows NEWER than the last live slot are appended
   *   - rows that fall inside the live range are left alone (live wins)
   * Rows must be ascending by time (both providers are normalized to that). */
  CandleStore.prototype.seedHistory = function (rows) {
    if (!Array.isArray(rows) || !rows.length) return;
    var pre = [];
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (!Array.isArray(r) || r.length < 5) continue;
      var t = +r[0], o = +r[1], h = +r[2], l = +r[3], c = +r[4];
      if (!isFinite(t) || !isFinite(c)) continue;
      if (!this.t.length || t < this.t[0]) pre.push([t, o, h, l, c]);
      else if (t > this.lastT()) this._append(t, o, h, l, c);
    }
    if (pre.length) this._prepend(pre);
    this.seeded = true;
    this.rev++;
  };
  CandleStore.prototype._prepend = function (asc) {
    for (var i = asc.length - 1; i >= 0; i--) {
      var r = asc[i];
      this.t.unshift(r[0]); this.o.unshift(r[1]); this.h.unshift(r[2]);
      this.l.unshift(r[3]); this.c.unshift(r[4]);
    }
    var over = this.t.length - this.max;
    if (over > 0) {
      this.t.splice(0, over); this.o.splice(0, over); this.h.splice(0, over);
      this.l.splice(0, over); this.c.splice(0, over);
    }
  };

  CandleStore.prototype.snapshot = function () {
    return { rev: this.rev, seeded: this.seeded, count: this.t.length,
             t: this.t, o: this.o, h: this.h, l: this.l, c: this.c };
  };

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  /* ------------------------------------------------------------------ *
   * PressureAccumulator — rolling window of signed notional flow.      *
   * Trades age out of the window (default 30 s) and are additionally   *
   * exponentially decayed (tau 12 s) so pressure drifts back to 0.     *
   * Raw sum normalized to [-1, +1] with tanh scaled by an EWMA of      *
   * recent |raw| flow (adaptive: calm markets amplify, whale bursts    *
   * saturate instead of blowing out the scale).                        *
   * Trade shape: {ts, price, qty, side:'buy'|'sell'} — side = AGGRESSOR.*
   * ------------------------------------------------------------------ */
  function PressureAccumulator(opts) {
    opts = opts || {};
    this.windowMs = opts.windowMs || 30000;
    this.tauMs = opts.tauMs || 12000;
    this.alpha = opts.alpha || 0.05;      // EWMA speed per compute() call
    this.normFloor = opts.normFloor || 5000; // USD notional floor for tanh scale
    this.trades = [];
    this._ewma = 0;
  }

  PressureAccumulator.prototype.push = function (t) {
    if (!t || typeof t.price !== 'number' || typeof t.qty !== 'number') return;
    if (!isFinite(t.price) || !isFinite(t.qty)) return;
    if (t.side !== 'buy' && t.side !== 'sell') return;
    var notional = t.price * t.qty;
    if (!isFinite(notional)) return;
    this.trades.push({ ts: t.ts, v: t.side === 'sell' ? -notional : notional });
  };

  PressureAccumulator.prototype.compute = function (now) {
    while (this.trades.length && now - this.trades[0].ts > this.windowMs) {
      this.trades.shift();
    }
    var sum = 0;
    for (var i = 0; i < this.trades.length; i++) {
      var t = this.trades[i];
      sum += t.v * Math.exp(-(now - t.ts) / this.tauMs);
    }
    this._ewma += this.alpha * (Math.abs(sum) - this._ewma);
    var norm = Math.max(this._ewma * 0.6, this.normFloor);
    var p = Math.tanh(sum / norm);
    if (!isFinite(p)) p = 0;
    return { raw: sum, pressure: clamp(p, -1, 1), trades: this.trades.length };
  };

  PressureAccumulator.prototype.reset = function () {
    this.trades.length = 0;
    this._ewma = 0;
  };

  /* ------------------------------------------------------------------ *
   * DemoSource — deterministic seeded synthetic tape (random walk with *
   * momentum bias and occasional whale prints). Same trade shape as    *
   * live, so the pressure pipeline is exercised identically.           *
   * ------------------------------------------------------------------ */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function DemoSource(opts) {
    opts = opts || {};
    this.rnd = mulberry32(opts.seed !== undefined ? opts.seed : 0xC0FFEE);
    this.price = opts.startPrice || 78000;
    this.startPriceUsed = this.price;    // reference for synthetic 24h stats
    this.vol = opts.vol || 0.00035;      // relative per-trade price noise
    this.momentum = 0;
  }

  DemoSource.prototype.next = function (now) {
    var out = [];
    var n = 1 + Math.floor(this.rnd() * 5); // 1..5 prints per tick
    for (var i = 0; i < n; i++) {
      var bias = clamp(this.momentum, -0.15, 0.15);
      var side = this.rnd() < 0.5 + bias ? 'buy' : 'sell';
      var qty = Math.pow(10, -4 + this.rnd() * 3.2); // 0.0001 .. ~1.6 BTC
      var move = (this.rnd() - 0.5) * 2 * this.price * this.vol;
      if (this.rnd() < 0.02) { qty *= 5 + this.rnd() * 15; move *= 3; } // whale
      this.price = Math.max(1000, this.price + move);
      this.momentum = this.momentum * 0.9 + (side === 'buy' ? 0.01 : -0.01);
      out.push({ ts: now, price: this.price, qty: qty, side: side });
    }
    return out;
  };

  /* ------------------------------------------------------------------ *
   * BtcTradeFeed                                                       *
   * ------------------------------------------------------------------ */
  function BtcTradeFeed(opts) {
    opts = opts || {};
    this.symbol = (opts.symbol || SYMBOL).toLowerCase();
    this.mode = opts.mode || 'auto';           // 'live' | 'demo' | 'auto'
    this.emitIntervalMs = opts.emitIntervalMs || 250;
    this.endpoints = (opts.endpoints && opts.endpoints.length ? opts.endpoints : DEFAULT_ENDPOINTS);
    this.backoffBaseMs = opts.backoffBaseMs || 1000;
    this.backoffMaxMs = opts.backoffMaxMs || 15000;
    this.demoFallbackAfter = opts.demoFallbackAfter || 2; // failed attempts -> demo (auto mode)
    this.connectTimeoutMs = opts.connectTimeoutMs || 8000; // per-attempt handshake cap
    this.liveRetryMs = opts.liveRetryMs || 60000;          // auto-heal retry period
    this.demoSeed = opts.demoSeed;
    this.demoStartPrice = opts.demoStartPrice || 78000;
    this.priceDecimals = opts.priceDecimals !== undefined ? opts.priceDecimals : 2;
    this._acc = new PressureAccumulator(opts);
    this._candles = new CandleStore(opts.maxCandles);
    this._seedStarted = false;   // one REST history fetch per feed instance
    this._kind = (this.endpoints[0] && this.endpoints[0].kind) || 'binance';
    this._bsym = this.symbol.toUpperCase();  // Bybit symbols are upper-case
    this._connectTimer = null;   // handshake watchdog for the current attempt
    this._lastPing = 0;          // Bybit app-level keepalive
    this._demo = null;
    this._ws = null;
    this._running = false;
    this._closing = false;
    this._status = 'stopped';
    this._attempt = 0;          // consecutive failed attempts (rotation + backoff)
    this._endpointIdx = 0;      // stable while a connection is healthy
    this._lastError = null;
    this._price = null;
    this._lastSide = null;
    this._lastQty = null;
    this._lastTs = null;
    this._rawPressure = 0;
    this._pressure = 0;
    this._chg24hPct = null;   // 24h change % (from @ticker 'P'; demo: vs start price)
    this._chg24hAbs = null;   // 24h change absolute USD (from @ticker 'p')
    this._high24h = null;     // 24h high (from @ticker 'h'; demo: session max)
    this._low24h = null;      // 24h low  (from @ticker 'l'; demo: session min)
    this._tradeCounter = 0;
    this._tps = 0;
    this._chg = { change: [], trade: [], status: [] };
    this._emitTimer = null;
    this._backoffTimer = null;
    this._liveRetryTimer = null;
    this._fmt = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: this.priceDecimals,
      maximumFractionDigits: this.priceDecimals
    });
  }

  BtcTradeFeed.VERSION = VERSION;
  BtcTradeFeed.DEFAULT_ENDPOINTS = DEFAULT_ENDPOINTS;
  BtcTradeFeed.PressureAccumulator = PressureAccumulator;
  BtcTradeFeed.CandleStore = CandleStore;
  BtcTradeFeed.KLINE_SEED_URL = KLINE_SEED_URL;
  BtcTradeFeed.BYBIT_SEED_URL = BYBIT_SEED_URL;
  BtcTradeFeed.BYBIT_WS_URL = BYBIT_WS_URL;
  BtcTradeFeed.PROVIDER_LABELS = PROVIDER_LABELS;
  BtcTradeFeed.DemoSource = DemoSource;

  /* ---------- listeners ---------- */
  BtcTradeFeed.prototype._on = function (list, cb) {
    if (typeof cb !== 'function') return function () {};
    list.push(cb);
    var arr = list;
    return function () {
      var i = arr.indexOf(cb);
      if (i >= 0) arr.splice(i, 1);
    };
  };
  BtcTradeFeed.prototype.onChange = function (cb) { return this._on(this._chg.change, cb); };
  BtcTradeFeed.prototype.onTrade = function (cb) { return this._on(this._chg.trade, cb); };
  BtcTradeFeed.prototype.onStatus = function (cb) { return this._on(this._chg.status, cb); };

  BtcTradeFeed.prototype._fire = function (list, payload) {
    for (var i = 0; i < list.length; i++) {
      try { list[i](payload); }
      catch (e) { /* a bad consumer must never kill the feed */ }
    }
  };

  BtcTradeFeed.prototype._setStatus = function (status, detail) {
    if (this._status === status && !detail) return;
    this._status = status;
    this._fire(this._chg.status, {
      status: status,
      mode: this.effectiveMode(),
      endpoint: this._endpoint(),
      provider: this._kind,
      providerLabel: PROVIDER_LABELS[this._kind] || this._kind,
      attempt: this._attempt,
      detail: detail || null,
      lastError: this._lastError,
      ts: Date.now()
    });
  };

  BtcTradeFeed.prototype._endpoint = function () {
    var ep = this.endpoints[this._endpointIdx % this.endpoints.length];
    return ep ? ep.url : null;
  };

  BtcTradeFeed.prototype.effectiveMode = function () {
    if (this.mode === 'demo') return 'demo';
    if (this._demoFallback) return 'demo';
    return 'live';
  };

  /* ---------- lifecycle ---------- */
  BtcTradeFeed.prototype.start = function () {
    if (this._running) return;
    this._running = true;
    this._closing = false;
    if (this.mode === 'demo') {
      this._startDemo('demo mode');
    } else {
      this._connect();
    }
    this._emitTimer = setInterval(this._tick.bind(this), this.emitIntervalMs);
    /* NOTE: the REST history seed now runs on the FIRST successful handshake
     * (see _seedProvider) instead of at start(), so a provider that is
     * geo-blocked never gets a wasted cross-origin request. */
  };

  /* One REST history fetch per instance, for whichever provider actually
   * answered (both send permissive CORS headers). Failure is harmless: the
   * socket keeps building candles from live ticks, and demo mode builds its
   * own tape. Never re-fetched on stop()/start().
   * Pure demo mode skips the fetch entirely: the synthetic tape builds its
   * own candle history and the page must boot with zero network noise. */
  function seedBinance(feed) {
    return fetch(KLINE_SEED_URL, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (rows) { feed._candles.seedHistory(rows); });
  }
  function seedBybit(feed) {
    return fetch(BYBIT_SEED_URL, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var list = j && j.result && j.result.list;
        if (!Array.isArray(list)) return;
        // Bybit returns newest-first; ingestTrade requires ascending order
        var rows = [];
        for (var i = list.length - 1; i >= 0; i--) {
          var tr = list[i];
          var ts = +tr.time, price = parseFloat(tr.price);
          if (!isFinite(ts) || !isFinite(price)) continue;
          // OHLC of a print-only bucket is the print itself
          rows.push([ts, price, price, price, price]);
        }
        feed._candles.seedHistory(rows);
      });
  }
  var SEEDS = { binance: seedBinance, bybit: seedBybit };

  BtcTradeFeed.prototype._seedProvider = function (kind) {
    if (this._seedStarted) return;
    if (this.mode === 'demo') return;
    var seed = SEEDS[kind || 'binance'];
    if (!seed) return;
    this._seedStarted = true;
    try {
      seed(this).catch(function () { /* offline seed: live ticks still fill it */ });
    } catch (e) { /* fetch unavailable in this runtime */ }
  };

  BtcTradeFeed.prototype.stop = function () {
    this._running = false;
    this._closing = true;
    if (this._emitTimer) { clearInterval(this._emitTimer); this._emitTimer = null; }
    if (this._backoffTimer) { clearTimeout(this._backoffTimer); this._backoffTimer = null; }
    if (this._liveRetryTimer) { clearTimeout(this._liveRetryTimer); this._liveRetryTimer = null; }
    if (this._connectTimer) { clearTimeout(this._connectTimer); this._connectTimer = null; }
    this._lastPing = 0;
    this._stopDemo();
    if (this._ws) {
      try { this._ws.close(); } catch (e) { /* already gone */ }
      this._ws = null;
    }
    this._setStatus('stopped');
  };

  BtcTradeFeed.prototype._startDemo = function (reason) {
    if (this._demo) return;
    this._demo = new DemoSource({
      seed: this.demoSeed,
      startPrice: this._price || this.demoStartPrice
    });
    this._demoFallback = true;
    this._setStatus('demo', reason);
    if (this.mode === 'auto') this._scheduleLiveRetry();
  };

  BtcTradeFeed.prototype._stopDemo = function () {
    this._demo = null;
    this._demoFallback = false;
  };

  BtcTradeFeed.prototype._scheduleLiveRetry = function () {
    if (this.mode !== 'auto' || !this._running || this._liveRetryTimer) return;
    var self = this;
    this._liveRetryTimer = setTimeout(function () {
      self._liveRetryTimer = null;
      if (self._running && self._demoFallback) self._connect();
    }, this.liveRetryMs);
  };

  /* ---------- live websocket ---------- */
  BtcTradeFeed.prototype._connect = function () {
    if (!this._running || this._ws) return;
    var self = this;
    var ep = this.endpoints[this._endpointIdx % this.endpoints.length] || {};
    var url = ep.url;
    this._kind = ep.kind || 'binance';       // selects the frame parser
    this._setStatus(this._attempt > 0 ? 'backoff' : 'connecting');
    var ws;
    try { ws = new WebSocket(url); }
    catch (e) { this._lastError = String(e); return this._onSocketDead(false); }
    this._ws = ws;

    /* Handshake watchdog: a blocked or black-holed host can leave a socket
     * half-open indefinitely, which would stall the rotation before it ever
     * reaches a provider that answers. Closing here lets onclose drive the
     * normal rotation path, so there is exactly one code path for failure. */
    if (this._connectTimer) clearTimeout(this._connectTimer);
    this._connectTimer = setTimeout(function () {
      self._connectTimer = null;
      if (self._ws === ws) { try { ws.close(); } catch (e) { /* already dead */ } }
    }, this.connectTimeoutMs);

    ws.onopen = function () {
      if (self._ws !== ws) return;           // stale socket
      if (self._connectTimer) { clearTimeout(self._connectTimer); self._connectTimer = null; }
      /* Bybit needs an explicit subscribe frame (Binance encodes the streams
       * in the URL). Only publicTrade + tickers: Bybit's finest kline is 1m,
       * which cannot feed a 1s chart, so candles come from the prints. */
      if (self._kind === 'bybit') {
        try {
          ws.send(JSON.stringify({
            op: 'subscribe',
            args: ['publicTrade.' + self._bsym, 'tickers.' + self._bsym]
          }));
        } catch (e) { self._lastError = 'subscribe frame failed'; }
        self._lastPing = Date.now();
      }
      var healed = self._demoFallback;       // auto-heal: drop synthetic tape
      self._attempt = 0;
      self._lastError = null;
      self._stopDemo();
      if (self._liveRetryTimer) { clearTimeout(self._liveRetryTimer); self._liveRetryTimer = null; }
      self._seedProvider(self._kind);        // history from the provider that answered
      self._setStatus('open', healed ? 'recovered to live feed' : null);
    };
    ws.onmessage = function (ev) { self._handleMessage(ev.data); };
    ws.onerror = function () {
      if (self._ws === ws) self._lastError = 'websocket error';
    };
    ws.onclose = function () {
      if (self._ws !== ws) return;           // stale socket (we replaced it)
      self._ws = null;
      self._onSocketDead(true);
    };
  };

  // Called when the active socket is gone: backoff -> rotate -> reconnect,
  // or (auto mode) fall back to the synthetic tape after N failures.
  BtcTradeFeed.prototype._onSocketDead = function (allowFallback) {
    if (!this._running || this._closing) { this._setStatus('stopped'); return; }
    this._attempt++;
    this._endpointIdx++;                     // rotate to next endpoint
    var goDemo = allowFallback && this.mode === 'auto' && this._attempt >= this.demoFallbackAfter;
    if (goDemo) {
      this._startDemo('live feed unreachable after ' + this._attempt + ' attempts');
      return;
    }
    var delay = Math.min(this.backoffBaseMs * Math.pow(2, this._attempt - 1), this.backoffMaxMs);
    delay *= 0.7 + 0.6 * Math.random();      // jitter: avoid thundering herd
    delay = Math.round(delay);
    var self = this;
    this._setStatus('backoff', 'retry in ' + delay + ' ms');
    this._backoffTimer = setTimeout(function () {
      self._backoffTimer = null;
      if (self._running && !self._ws) self._connect();
    }, delay);
  };

  /* ---------- parsing ---------- */
  BtcTradeFeed.prototype._handleMessage = function (text) {
    var msg;
    try { msg = JSON.parse(text); } catch (e) { return; }
    if (this._kind === 'bybit') return this._handleBybit(msg);
    if (msg && typeof msg.stream === 'string' && msg.data) msg = msg.data; // combined unwrap
    if (!msg || typeof msg.e !== 'string') return;

    if (msg.e === 'trade' || msg.e === 'aggTrade') {
      var side;
      if (msg.m === true) side = 'sell';        // seller was taker -> AGGRESSIVE SELL
      else if (msg.m === false) side = 'buy';   // buyer was taker  -> AGGRESSIVE BUY
      else return;
      var price = parseFloat(msg.p);
      var qty = parseFloat(msg.q);
      if (!isFinite(price) || !isFinite(qty)) return;
      this._ingestTrade({ ts: msg.T || msg.E || Date.now(), price: price, qty: qty, side: side });
    } else if (msg.e === '24hrTicker') {
      var last = parseFloat(msg.c);
      if (isFinite(last)) this._price = last;
      var pct = parseFloat(msg.P);
      if (isFinite(pct)) this._chg24hPct = pct;
      var abs = parseFloat(msg.p);
      if (isFinite(abs)) this._chg24hAbs = abs;
      var hi = parseFloat(msg.h);
      if (isFinite(hi)) this._high24h = hi;
      var lo = parseFloat(msg.l);
      if (isFinite(lo)) this._low24h = lo;
    } else if (msg.e === 'kline') {
      var k = msg.k;
      if (k) this._candles.ingestKline(+k.t, +k.o, +k.h, +k.l, +k.c);
    }
  };

  /* Bybit v5 public spot frames (topic + data shape, unlike Binance's `e`).
   * Two topics ride the one socket:
   *   publicTrade.BTCUSDT -> data is an ARRAY of
   *       {T: ms epoch, p: price, v: qty, S: 'Buy'|'Sell'}
   *     S is the AGGRESSOR side (Bybit: 'Buy' = the taker bought), which maps
   *     onto the same convention as Binance `m === false -> buy`, so the
   *     pressure sign is identical across providers.
   *   tickers.BTCUSDT -> data is an OBJECT with lastPrice / highPrice24h /
   *     lowPrice24h / prevPrice24h / price24hPcnt. price24hPcnt is a FRACTION
   *     (-0.0405 means -4.05 %), so it is scaled to the percent unit that
   *     Binance's 24hrTicker.P already uses; the absolute change is derived
   *     from lastPrice - prevPrice24h.
   * The subscribe ack ({op:'subscribe'}) and {op:'pong'} carry no topic and
   * are ignored. */
  BtcTradeFeed.prototype._handleBybit = function (msg) {
    if (!msg) return;
    var topic = msg.topic;
    if (typeof topic !== 'string') return;

    if (topic.indexOf('publicTrade') === 0) {
      var arr = msg.data;
      if (!Array.isArray(arr)) return;
      for (var i = 0; i < arr.length; i++) {
        var tr = arr[i];
        if (!tr) continue;
        var side = tr.S === 'Buy' ? 'buy' : tr.S === 'Sell' ? 'sell' : null;
        if (!side) continue;
        var price = parseFloat(tr.p);
        var qty = parseFloat(tr.v);
        if (!isFinite(price) || !isFinite(qty)) continue;
        this._ingestTrade({ ts: +tr.T || Date.now(), price: price, qty: qty, side: side });
      }
    } else if (topic.indexOf('tickers') === 0) {
      var d = msg.data;
      if (!d) return;
      var last = parseFloat(d.lastPrice);
      if (isFinite(last)) {
        this._price = last;
        /* Bybit spot BTCUSDT can go whole seconds without a print, which would
         * punch holes in a 1-second chart, so every ticker push also refreshes
         * the CURRENT second with the exchange's real last traded price
         * (open kept, close/high/low updated). Order-flow pressure is
         * deliberately NOT fed here: it stays pure aggressor-side trade flow. */
        this._markPrice(last, Date.now());
      }
      var pct = parseFloat(d.price24hPcnt);
      if (isFinite(pct)) this._chg24hPct = pct * 100;
      var prev = parseFloat(d.prevPrice24h);
      if (isFinite(prev) && isFinite(last)) this._chg24hAbs = last - prev;
      var hi = parseFloat(d.highPrice24h);
      if (isFinite(hi)) this._high24h = hi;
      var lo = parseFloat(d.lowPrice24h);
      if (isFinite(lo)) this._low24h = lo;
    }
  };

  BtcTradeFeed.prototype._ingestTrade = function (t) {
    this._acc.push(t);
    this._candles.ingestTrade(t.ts, t.price);
    this._price = t.price;
    this._lastSide = t.side;
    this._lastQty = t.qty;
    this._lastTs = t.ts;
    this._tradeCounter++;
    if (this._chg.trade.length) {
      this._fire(this._chg.trade, { ts: t.ts, price: t.price, qty: t.qty, side: t.side, notional: t.price * t.qty });
    }
  };

  /* Mark a last traded price into the 1s series (see the tickers branch). */
  BtcTradeFeed.prototype._markPrice = function (price, ts) {
    if (!isFinite(price)) return;
    this._candles.ingestTrade(ts || Date.now(), price);
  };

  /* ---------- throttled emit tick (also drives demo tape) ---------- */
  BtcTradeFeed.prototype._tick = function () {
    if (!this._running) return;
    var now = Date.now();

    if (this._demo) {
      var prints = this._demo.next(now);
      for (var i = 0; i < prints.length; i++) this._ingestTrade(prints[i]);
      // synthetic 24h stats so demo consumers see the same payload shape
      if (this._price != null) {
        var base = this._demo.startPriceUsed;
        this._chg24hPct = ((this._price - base) / base) * 100;
        this._chg24hAbs = this._price - base;
        this._high24h = this._high24h == null ? this._price : Math.max(this._high24h, this._price);
        this._low24h = this._low24h == null ? this._price : Math.min(this._low24h, this._price);
      }
    }

    /* Bybit wants an application-level ping every ~20 s (it replies
     * {"op":"pong"}); browsers auto-answer protocol pings but Bybit drops the
     * connection without this. Costs nothing: one 14-byte frame per 20 s. */
    if (this._kind === 'bybit' && this._ws && this._ws.readyState === 1 &&
        now - this._lastPing > 20000) {
      this._lastPing = now;
      try { this._ws.send('{"op":"ping"}'); } catch (e) { /* rotation handles it */ }
    }

    var r = this._acc.compute(now);
    this._rawPressure = r.raw;
    this._pressure = r.pressure;
    this._tps = (this._tradeCounter * 1000) / this.emitIntervalMs;
    this._tradeCounter = 0;

    var snap = this.snap();
    this._fire(this._chg.change, snap);
  };

  /* ---------- public getters ---------- */
  /* 1s candle store for the chart (REST-seeded, socket + trade fed). */
  BtcTradeFeed.prototype.candles = function () {
    return this._candles.snapshot();
  };

  BtcTradeFeed.prototype.snap = function () {
    return {
      ts: Date.now(),
      price: this._price,
      change24hPct: this._chg24hPct,
      change24hAbs: this._chg24hAbs,
      high24h: this._high24h,
      low24h: this._low24h,
      pressure: this._pressure,
      rawPressure: this._rawPressure,
      lastSide: this._lastSide,
      lastQty: this._lastQty,
      lastNotional: this._lastQty != null && this._price != null ? this._lastQty * this._price : null,
      tps: this._tps,
      status: this._status,
      mode: this.effectiveMode(),
      connected: this._status === 'open' || this._status === 'demo',
      endpoint: this._endpoint(),
      provider: this._kind,                       // 'binance' | 'bybit'
      providerLabel: PROVIDER_LABELS[this._kind] || this._kind,
      attempt: this._attempt,
      lastError: this._lastError
    };
  };

  BtcTradeFeed.prototype.state = function () {
    return { status: this._status, mode: this.effectiveMode(), attempt: this._attempt, price: this._price, pressure: this._pressure };
  };

  BtcTradeFeed.prototype.formatPrice = function (v) {
    var p = v === undefined ? this._price : v;
    if (p == null || !isFinite(p)) return '—';
    return this._fmt.format(p);
  };

  return BtcTradeFeed;
});
