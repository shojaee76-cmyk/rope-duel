# Live data feed for the duel chart — selection + verified contract

Kanban task `t_6f447e8c` (research/selection). Feeds implementation task `t_189fb722`
(builder: embed a live chart in the rope-duel UI).
All URLs, payloads and numbers below come from live probes run from this machine on
**2026-09-15, 19:05–19:17 UTC** — nothing here is quoted from documentation memory.

---

## 1. Decision

**Use the Binance Spot public market-data WebSocket.** No API key, no signup, no
account, JSON, `wss://`, price + exchange timestamp in every frame.

### Primary — ONE socket carrying everything the chart needs

```
wss://data-stream.binance.vision/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s
```

* `data-stream.binance.vision` is Binance's **market-data-only mirror** — same feed,
  no account/trading surface, and (verified here) reachable over the censored network
  path. It is already the first endpoint in the repo's `feed.js`.
* `@trade` → per-trade prints (price, qty, aggressor side) → cheap "live" ticker motion.
* `@ticker` → 24 h stats: price, **change %**, high/low/volume → ticker + change badge.
* `@kline_1s` → **1-second OHLC candles** → exactly what a line/candle chart appends to.

### Fallbacks (tried in order on failure — all verified working, same payload shapes)

| # | URL | Notes |
|---|-----|-------|
| A | `wss://stream.binance.com:443/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s` | port **443**, firewall/VPN-friendly twin |
| B | `wss://stream.binance.com:9443/stream?streams=btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s` | same payloads |
| C | `wss://ws-feed.exchange.coinbase.com` | non-Binance infra; subscribe `{"type":"subscribe","product_ids":["BTC-USD"],"channels":["ticker"]}` |
| D | `wss://ws.okx.com:8443/ws/v5/public` | non-Binance; subscribe `{"op":"subscribe","args":[{"channel":"trades","instId":"BTC-USDT"}]}` |

### History seed (REST, for pre-filling the chart before the first socket frame)

```
https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=300
```
Verified `200 OK` with **`Access-Control-Allow-Origin: *`** → directly `fetch()`-able from
the page (no proxy). Market-data-only mirror of the same REST API:
`https://data-api.binance.vision/api/v3/klines?...`

---

## 2. Why this source

* **No paid key, no key of any kind.** Public market data, unauthenticated.
* **True push, not polling** — REST polling at 1 Hz would burn request weight for
  strictly worse freshness.
* **Browser-friendly.** WebSockets are not subject to CORS; the REST seed endpoint
  returns `Access-Control-Allow-Origin: *`. Both verified *from a real Chrome page*
  (see §3.3), not just from curl.
* **Continuously maintained, deepest BTC liquidity** — BTCUSDT is Binance's most
  active book, so the 1 s candle is never empty (probe captured a 0.0-volume second
  only at extreme quiet, and the feed still delivered it on time).
* **Zero new dependencies for the app.** `feed.js` (`BtcTradeFeed`) already speaks
  this exact protocol with a 3-endpoint rotation + backoff + demo fallback.

---

## 3. Live verification

### 3.1 Candidate sweep — 6/6 handshakes succeeded, all delivered frames

| Source | Frames in window | Window | Handshake |
|---|---|---|---|
| `data-stream.binance.vision` combined trade+ticker | 1020 | 12 s | 2.82 s |
| `data-stream.binance.vision` `/ws/btcusdt@kline_1s` | 9 | 12 s | 2.07 s |
| `stream.binance.com:9443` combined trade+ticker | 633 | 12 s | 2.88 s |
| `stream.binance.com:443` `/ws/btcusdt@aggTrade` | 25 | 10 s | 3.13 s |
| Coinbase `ticker` channel | 84 | 10 s | 1.74 s |
| OKX `trades` channel | 46 | 10 s | 2.11 s |

Recommended endpoint, longer window (15 s):
`545 × @trade` + `6 × @ticker` + `6 × @kline_1s` = **557 frames**, handshake **1.77 s**.
Ticker and kline arrive at ~1 Hz each (as designed); trades stream continuously.

### 3.2 Freshness (skew-free measurement)

Raw "exchange timestamp vs local clock" numbers are **not** trustworthy here: a
5-sample clock-skew check against `https://api.binance.com/api/v3/time` measured a
**median local-vs-server skew of −327 ms** (with RTT jitter up to ±1.1 s), which alone
can masquerade as latency.

So freshness was measured the skew-free way instead — **arrival time minus the candle's
close boundary** (`kline.t + 1000 ms`), a local-clock-only delta:

| Endpoint | min | p50 | max |
|---|---|---|---|
| `data-stream.binance.vision` `/ws/btcusdt@kline_1s` | **212 ms** | **294 ms** | 2599 ms |
| `stream.binance.com:443` `/ws/btcusdt@kline_1s` | 200 ms | 1195 ms | 3172 ms |

→ a new 1 s candle lands **~0.3 s after the second it represents closes**. Well inside
the "updates at least once per second" acceptance criterion. The `max` outliers are
network jitter on this censored/VPN link, not server latency.

### 3.3 Browser-level proof (real Chrome, not curl)

A local page (`browser_probe.cjs`) opened the **recommended URL** from real Chrome —
HeadlessChrome/152, `isSecureContext: true` — over `http://127.0.0.1`:

```
openMs: 1682            consoleErrors: []
seen:   { trade: 827, ticker: 9, kline_1s: 9 }   lastPrice: 75990.19
```

0 console errors, 0 page errors, and all three stream types (trade, ticker, kline) were
decoded in-page. This is the same code path the deployed page (https, GitHub Pages) uses
— `wss://` only, so no mixed-content block.

---

## 4. Example payloads (verbatim captures)

`example_payloads.json` holds the raw frames (it is regenerable with
`payload_capture.py` and always holds the most recent capture; the frames quoted below
were captured at 19:15:58 UTC, the file was refreshed at 19:19:56 UTC — same shapes,
different seconds). Reduced to the fields that matter:

**Trade** — `stream: "btcusdt@trade"` (169 bytes)
```json
{"stream":"btcusdt@trade","data":{"e":"trade","E":1789499758440,"s":"BTCUSDT",
 "t":6684832689,"p":"75998.82000000","q":"0.00835000","T":1789499758439,
 "m":false,"M":true}}
```

**Ticker (24 h)** — `stream: "btcusdt@ticker"` (463 bytes)
```json
{"stream":"btcusdt@ticker","data":{"e":"24hrTicker","E":1789499759014,"s":"BTCUSDT",
 "p":"-3109.19000000","P":"-3.930","w":"76868.57880421","x":"79108.01000000",
 "c":"75998.81000000","o":"79108.00000000","h":"79600.00000000","l":"74967.97000000",
 "v":"21280.39701000","q":"1635793874.54800260","O":1789413359013,
 "C":1789499759013,"n":3397723}}
```

**Kline 1 s (closed candle, `x:true`)** — `stream: "btcusdt@kline_1s"` (359 bytes)
```json
{"stream":"btcusdt@kline_1s","data":{"e":"kline","E":1789499759043,"s":"BTCUSDT",
 "k":{"t":1789499758000,"T":1789499758999,"s":"BTCUSDT","i":"1s",
      "o":"75998.82000000","c":"75998.81000000","h":"75998.82000000","l":"75998.81000000",
      "v":"0.11533000","n":22,"x":true,"q":"8764.94385910"}}}
```

### Field guide (combined-stream frames are wrapped as `{stream, data}`)

| Field | Meaning |
|---|---|
| `data.p` (trade) / `data.c` (ticker) / `data.k.c` (kline) | price — **string, `parseFloat` it** |
| `k.o / h / l / c` | candle open/high/low/close for chart series |
| `k.t` | candle **open** time, ms epoch (exact second boundary) |
| `k.x` | `true` on the closed candle → append it; `false` = interim update of the live candle |
| `E` | event time, ms epoch (ticker/kline/trade) |
| `data.P` (ticker) | **24 h change %** — already signed, e.g. `"-3.930"` |
| `t.m` (trade) | `false` ⇒ **aggressive BUY**, `true` ⇒ aggressive SELL (existing `feed.js` mapping) |
| `t.q` | trade quantity (BTC) |

Non-Binance fallback payloads (also verbatim, `fallback_payloads.json`):
Coinbase `{"type":"ticker","price":"76038.04","best_bid":"76038.04","time":"2026-09-15T19:16:38.774121Z",...}`
(ISO-8601 time, price at top level); OKX `{"arg":{"channel":"trades"}, "data":[{"px":"76108.3","sz":"0.0000102","side":"sell","ts":"1789499816529"}]}`
(string ms ts, `px` price).

---

## 5. Rate limits / cost

**WebSocket (free, IP-based):**
* 300 connections per attempt / 5 minutes per IP (docs) — one socket per page,
  reconnect with exponential backoff + jitter, stays far under it.
* Up to **1024 streams per connection** → all three streams ride one socket.
* **5 incoming messages/second** limit; we send **nothing** after the handshake —
  the subscription is encoded in the URL path.
* Server pings every 20 s; the pong must go back **within a minute** or the socket is
  dropped (browsers answer pings automatically — no code needed).
* A connection is valid for **24 h**, then Binance disconnects it — the client must
  reconnect (the existing backoff path covers this).
* `data-stream.binance.vision` serves **market data only** (no user-data stream) — exactly
  what this chart needs.

**REST (weight-based, per IP):**
* `REQUEST_WEIGHT` **6000 / minute** (live `exchangeInfo`); `RAW_REQUESTS` 300 000 / 5 min.
* `/api/v3/klines` is a flat **weight 2** — confirmed both in the docs and by measuring
  the `x-mbx-used-weight-1m` header across `limit` 1, 100, 300, 500, 1000 (every call
  added exactly 2, including `limit=1000`). So the 300-candle seed costs 2 of 6000.
* HTTP `429` when the request rate limit is broken, `418` for an IP auto-ban after
  continuing through 429s; both carry `Retry-After` in seconds. A one-shot seed call
  cannot get close.
* `HTTP 403` can also come from the WAF, not only from rate limiting.

---

## 6. Minimal subscribe snippet (browser, zero dependencies)

```js
// One socket, three streams. Combined payloads arrive wrapped: {stream, data}.
const URL = 'wss://data-stream.binance.vision/stream?streams=' +
            'btcusdt@trade/btcusdt@ticker/btcusdt@kline_1s';

const ws = new WebSocket(URL);          // wss:// only -> page must be https or localhost
const candles = [];                     // 1 s OHLC series for the chart

ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  const stream = m.stream;              // 'btcusdt@trade' | 'btcusdt@ticker' | 'btcusdt@kline_1s'
  const d = m.data;                     // unwrapped payload (single-stream URLs send `d` directly)

  if (stream.endsWith('@trade')) {
    tickerText(parseFloat(d.p));        // live price: string -> number, ALWAYS
  } else if (stream.endsWith('@ticker')) {
    changeBadge(`${parseFloat(d.P) >= 0 ? '+' : ''}${parseFloat(d.P).toFixed(2)}% 24h`);
  } else if (stream.endsWith('@kline_1s')) {
    const k = d.k;
    if (k.x) {                          // CLOSED candle -> append, never redraw pending
      candles.push({ t: k.t, o: +k.o, h: +k.h, l: +k.l, c: +k.c });
      if (candles.length > 300) candles.shift();
    }
  }
};

// History seed so the chart is not empty on first paint (CORS: ACAO * verified).
fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=300')
  .then(r => r.json())
  .then(rows => rows.forEach(r => candles.push({ t: r[0], o: +r[1], h: +r[2], l: +r[3], c: +r[4] })));

// Reconnect with backoff (a dropped socket is an expected state, not an error).
let attempt = 0;
ws.onclose = () => setTimeout(() => location.reload(), Math.min(30000, 500 * 2 ** attempt++));
```

---

## 7. Integration notes for `t_189fb722` (do not build a second socket)

1. **Reuse, don't rewrite.** `C:\Users\capit\rope-duel\feed.js` (`BtcTradeFeed`) already
   implements this transport: the endpoint list, `m===false → BUY` side mapping,
   string→float parsing, 250 ms throttled `onChange`, per-trade `onTrade`, status
   events, and a demo-tape fallback. Binance allows 1024 streams per connection, so
   **add `btcusdt@kline_1s` to the existing endpoint URLs** instead of opening a second
   socket (two sockets doubles the handshake budget and doubles the failure surface).
2. **Chart series** = seed from the REST klines above, then append each `x:true` candle;
   drive the ticker/number from `@ticker.c`/`@trade.p` between candles, throttled to
   ~4 Hz max for paint (the tape delivers ~35 trades/s — do NOT re-render per trade).
3. **Timestamps** are ms epoch; `k.t` is the exact second boundary, so
   `new Date(k.t)` is the candle's open time.
4. **Stale-data indicator**: reuse the feed's `demo` mode + `onStatus` lifecycle —
   show the badge when the socket is down/reconnecting, hide it on the first live
   frame. (Feed already falls back to a synthetic tape so the page never goes blank.)
5. **Prices are strings.** `parseFloat` everywhere; formatting the repo already has
   (`feed.formatPrice`) stays valid.
6. **`wss://` only** — the deployed site is https (GitHub Pages), so this is required
   anyway; a `ws://` fallback would be blocked as mixed content.
7. **Known non-goal:** Binance **futures** streams (`wss://fstream.binance.com`,
   liquidation `@forceOrder`) do **not** handshake from this network path — spot only.
   Don't design around liquidations.

---

## 8. Evidence files (all in this workspace, and attached to the card)

| File | What it is |
|---|---|
| `ws_probe.py` / `ws_probe_results.json` | 6-candidate sweep, raw first frames + counts |
| `ws_probe2.py` / `ws_probe2_results.json` | finalists: per-stream counts, per-frame lag |
| `freshness.py` / `freshness_results.json` | skew-free arrival-delay measurement + closed candles |
| `payload_capture.py` / `example_payloads.json` | verbatim trade/ticker/kline frames |
| `fallback_capture.py` / `fallback_payloads.json` | verbatim Coinbase + OKX frames |
| `browser_probe.cjs` / `browser_probe_results.json` | real-Chrome page proof, 0 console errors |
| `skew.py` / `skew_results.json` | local-vs-exchange clock skew (−327 ms median) |
| `klines.json`, `exinfo.json`, `btime.json`, `cb.json`, `cg.json` | raw REST responses (klines, rate limits, server time, Coinbase, CoinGecko) |
| `wsdocs.md`, `restapi.md` | authoritative upstream docs (raw markdown from the `binance/binance-spot-api-docs` repo: WS limits, kline weight) — the developers.binance.com page itself returns 403 to this network |

CoinGecko free REST (`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
was also verified reachable (`{"bitcoin":{"usd":76062}}`) but is **not** recommended: it is
poll-only, ~10–30 s granularity on the free tier, and gives no timestamped tick stream.
