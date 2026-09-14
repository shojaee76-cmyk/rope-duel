/*!
 * btc-feed.js v1.0.0 — standalone live BTC/USDT trade feed (Binance WebSocket)
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
 * Endpoints (all verified live, tried in order with rotation on failure):
 *   1. wss://data-stream.binance.vision/...  market-data-only mirror,
 *      least likely to hit regional restrictions -> default
 *   2. wss://stream.binance.com:9443/stream?streams=...  combined stream
 *   3. wss://stream.binance.com:443/ws/...   port-443 firewall-friendly twin
 * Combined `/stream?streams=` payloads are wrapped as
 * {stream:"...", data:{...}} -> unwrapped internally before parsing.
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

  var VERSION = '1.0.0';
  var SYMBOL = 'btcusdt';

  var DEFAULT_ENDPOINTS = [
    { url: 'wss://data-stream.binance.vision/stream?streams=btcusdt@trade/btcusdt@ticker', label: 'binance.vision (combined trade+ticker)' },
    { url: 'wss://stream.binance.com:9443/stream?streams=btcusdt@trade/btcusdt@ticker', label: 'stream.binance.com:9443 (combined)' },
    { url: 'wss://stream.binance.com:443/ws/btcusdt@trade', label: 'stream.binance.com:443 (trade)' }
  ];

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
    this.liveRetryMs = opts.liveRetryMs || 60000;          // auto-heal retry period
    this.demoSeed = opts.demoSeed;
    this.demoStartPrice = opts.demoStartPrice || 78000;
    this.priceDecimals = opts.priceDecimals !== undefined ? opts.priceDecimals : 2;
    this._acc = new PressureAccumulator(opts);
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
  };

  BtcTradeFeed.prototype.stop = function () {
    this._running = false;
    this._closing = true;
    if (this._emitTimer) { clearInterval(this._emitTimer); this._emitTimer = null; }
    if (this._backoffTimer) { clearTimeout(this._backoffTimer); this._backoffTimer = null; }
    if (this._liveRetryTimer) { clearTimeout(this._liveRetryTimer); this._liveRetryTimer = null; }
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
    var url = this._endpoint();
    this._setStatus(this._attempt > 0 ? 'backoff' : 'connecting');
    var ws;
    try { ws = new WebSocket(url); }
    catch (e) { this._lastError = String(e); return this._onSocketDead(false); }
    this._ws = ws;

    ws.onopen = function () {
      if (self._ws !== ws) return;           // stale socket
      var healed = self._demoFallback;       // auto-heal: drop synthetic tape
      self._attempt = 0;
      self._lastError = null;
      self._stopDemo();
      if (self._liveRetryTimer) { clearTimeout(self._liveRetryTimer); self._liveRetryTimer = null; }
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
    }
  };

  BtcTradeFeed.prototype._ingestTrade = function (t) {
    this._acc.push(t);
    this._price = t.price;
    this._lastSide = t.side;
    this._lastQty = t.qty;
    this._lastTs = t.ts;
    this._tradeCounter++;
    if (this._chg.trade.length) {
      this._fire(this._chg.trade, { ts: t.ts, price: t.price, qty: t.qty, side: t.side, notional: t.price * t.qty });
    }
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

    var r = this._acc.compute(now);
    this._rawPressure = r.raw;
    this._pressure = r.pressure;
    this._tps = (this._tradeCounter * 1000) / this.emitIntervalMs;
    this._tradeCounter = 0;

    var snap = this.snap();
    this._fire(this._chg.change, snap);
  };

  /* ---------- public getters ---------- */
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
