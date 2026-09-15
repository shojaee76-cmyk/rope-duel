// tools/test_providers.cjs: unit tests for the multi-provider feed layer.
// Runs offline: WebSocket and fetch are stubbed, so the rotation, the Bybit
// frame parser and the Bybit trade seed are all exercised for real.
//   node tools/test_providers.cjs
const path = require('path');
// feed.js is UMD for the BROWSER; node (type:module) loads it as ESM where the
// wrapper's `this` is undefined -> provide `self` so it lands on globalThis.
// (Same pattern as tools/test_candles.cjs.)
globalThis.self = globalThis;
require(path.join(__dirname, '..', 'feed.js'));
const BtcTradeFeed = globalThis.BtcTradeFeed;

let pass = 0, fail = 0;
function ok(name, cond, extra) {
  if (cond) { pass++; console.log('  PASS ' + name); }
  else { fail++; console.log('  FAIL ' + name + (extra ? '  <- ' + JSON.stringify(extra) : '')); }
}
function eq(name, got, want) {
  // JSON.compare, not ===: several assertions compare arrays/objects
  const a = JSON.stringify(got), b = JSON.stringify(want);
  ok(name + ' = ' + b, a === b, { got, want });
}
function near(name, got, want, tol) {
  ok(name + ' ~ ' + want + ' (got ' + got + ')', typeof got === 'number' && Math.abs(got - want) <= tol, { got, want });
}

/* ---------- fake WebSocket ---------- */
class FakeWS {
  constructor(url) {
    this.url = url;
    this.readyState = 0;
    this.sent = [];
    FakeWS.instances.push(this);
    const plan = FakeWS.plan[url];
    setTimeout(() => {
      if (plan === 'open') {
        this.readyState = 1;
        if (this.onopen) this.onopen();
      } else {
        this.readyState = 3;
        if (this.onerror) this.onerror({});
        if (this.onclose) this.onclose({ code: 1006 });
      }
    }, 5);
  }
  send(s) { this.sent.push(s); }
  close() { this.readyState = 3; if (this.onclose) this.onclose({ code: 1000 }); }
  deliver(obj) { if (this.onmessage) this.onmessage({ data: JSON.stringify(obj) }); }
}
FakeWS.instances = [];
FakeWS.plan = {};
global.WebSocket = FakeWS;

/* ---------- library shape ---------- */
console.log('library');
eq('version', BtcTradeFeed.VERSION, '1.1.0');
eq('endpoint[0] kind (binance first)', BtcTradeFeed.DEFAULT_ENDPOINTS[0].kind, 'binance');
eq('endpoint[1] kind (bybit second)', BtcTradeFeed.DEFAULT_ENDPOINTS[1].kind, 'bybit');
eq('bybit ws url', BtcTradeFeed.BYBIT_WS_URL, 'wss://stream.bybit.com/v5/public/spot');
ok('bybit seed url is a recent-trade call',
  /bybit\.com\/v5\/market\/recent-trade\?.*limit=1000/.test(BtcTradeFeed.BYBIT_SEED_URL));
ok('no seed callback left on start()', typeof BtcTradeFeed.prototype._seedCandles === 'undefined');
ok('provider seed hook exists', typeof BtcTradeFeed.prototype._seedProvider === 'function');

/* ---------- Bybit frame parsing ---------- */
console.log('\nbybit frame parsing');
{
  const feed = new BtcTradeFeed({ mode: 'live' });
  feed._kind = 'bybit';
  const seen = [];
  feed.onTrade((t) => seen.push(t));

  // a real publicTrade frame (shape captured live from stream.bybit.com)
  feed._handleMessage(JSON.stringify({
    topic: 'publicTrade.BTCUSDT',
    type: 'snapshot',
    ts: 1789507606304,
    data: [
      { i: '1', T: 1789507606304, p: '75749.7', v: '0.00071', S: 'Sell', s: 'BTCUSDT' },
      { i: '2', T: 1789507606310, p: '75750.1', v: '0.5',     S: 'Buy',  s: 'BTCUSDT' }
    ]
  }));
  eq('aggressor Sell -> sell', seen[0] && seen[0].side, 'sell');
  eq('aggressor Buy -> buy', seen[1] && seen[1].side, 'buy');
  near('price parsed from string', seen[1] && seen[1].price, 75750.1, 1e-6);
  near('qty parsed from string', seen[1] && seen[1].qty, 0.5, 1e-9);
  near('notional', seen[1] && +(seen[1].notional.toFixed(2)), 37875.05, 0.01);
  near('trades advance price', feed.state().price, 75750.1, 1e-6);

  // candles fold out of the prints
  const c = feed.candles();
  eq('two trades in one second -> one 1s candle', c.count, 1);
  near('candle open = first print', c.o[0], 75749.7, 1e-6);
  near('candle close = last print', c.c[0], 75750.1, 1e-6);

  // pressure sign must be + when the taker buys
  feed._handleMessage(JSON.stringify({
    topic: 'publicTrade.BTCUSDT',
    data: [{ T: Date.now(), p: '75760', v: '2', S: 'Buy', s: 'BTCUSDT' }]
  }));
  const r = feed._acc.compute(Date.now());
  ok('buy aggressor -> positive raw pressure (got ' + Math.round(r.raw) + ')', r.raw > 0);
}
{
  const feed = new BtcTradeFeed({ mode: 'live' });
  feed._kind = 'bybit';
  feed._handleMessage(JSON.stringify({ op: 'subscribe', success: true, ret_msg: 'subscribe' }));
  feed._handleMessage(JSON.stringify({ op: 'pong', success: true }));
  eq('ack/pong frames are inert (no price)', feed.state().price, null);
  ok('ack/pong produce no error', feed.snap().lastError === null);

  feed._handleMessage(JSON.stringify({
    topic: 'tickers.BTCUSDT',
    data: {
      symbol: 'BTCUSDT', lastPrice: '75765.5', highPrice24h: '78962',
      lowPrice24h: '74961.2', prevPrice24h: '78962', volume24h: '9071.8',
      price24hPcnt: '-0.0405'
    }
  }));
  const s = feed.snap();
  near('lastPrice', s.price, 75765.5, 1e-6);
  near('price24hPcnt fraction -> percent', s.change24hPct, -4.05, 1e-9);
  near('abs change = last - prev', s.change24hAbs, 75765.5 - 78962, 1e-6);
  near('high24h', s.high24h, 78962, 1e-6);
  near('low24h', s.low24h, 74961.2, 1e-6);
  eq('provider exposed on snap', s.provider, 'bybit');
  eq('provider label', s.providerLabel, 'Bybit');
}
{
  // garbage must never throw and never move state
  const feed = new BtcTradeFeed({ mode: 'live' });
  feed._kind = 'bybit';
  let threw = null;
  for (const junk of ['', '{', 'null', '[]', '{"topic":"publicTrade.BTCUSDT"}',
    '{"topic":"publicTrade.BTCUSDT","data":[]}',
    '{"topic":"publicTrade.BTCUSDT","data":[{}]}',
    '{"topic":"publicTrade.BTCUSDT","data":[{"S":"Nope","p":"x","v":"y"}]}',
    '{"topic":"tickers.BTCUSDT","data":{}}']) {
    try { feed._handleMessage(junk); } catch (e) { threw = junk + ' -> ' + e.message; }
  }
  ok('malformed bybit frames are ignored without throwing', threw === null, threw);
  eq('malformed frames leave price null', feed.state().price, null);
}
{
  // a binance feed must NOT be parsed by the bybit branch
  const feed = new BtcTradeFeed({ mode: 'live' });
  feed._kind = 'binance';
  const seen = [];
  feed.onTrade((t) => seen.push(t));
  feed._handleMessage(JSON.stringify({ e: 'trade', E: 1, T: 1789507606304, p: '100', q: '1', m: false, s: 'BTCUSDT' }));
  eq('binance path still works', seen.length, 1);
  eq('binance m:false -> buy', seen[0].side, 'buy');
}

/* ---------- rotation: dead binance -> live bybit ---------- */
(async () => {
  console.log('\nendpoint rotation');
  FakeWS.instances = [];
  FakeWS.plan = {};
  FakeWS.plan[BtcTradeFeed.DEFAULT_ENDPOINTS[0].url] = 'fail';   // binance blocked
  FakeWS.plan[BtcTradeFeed.DEFAULT_ENDPOINTS[1].url] = 'open';   // bybit answers

  const feed = new BtcTradeFeed({ mode: 'auto' });
  const statuses = [];
  feed.onStatus((s) => statuses.push(s.status + (s.detail ? ':' + s.detail : '')));
  feed.start();
  await new Promise((r) => setTimeout(r, 2500));

  const urls = FakeWS.instances.map((w) => w.url);
  ok('attempted binance.vision first', urls[0] === BtcTradeFeed.DEFAULT_ENDPOINTS[0].url, urls);
  ok('rotated to bybit second', urls[1] === BtcTradeFeed.BYBIT_WS_URL, urls);
  const bybitWS = FakeWS.instances.find((w) => w.url === BtcTradeFeed.BYBIT_WS_URL);
  ok('bybit got a subscribe frame', !!(bybitWS && bybitWS.sent.length), bybitWS && bybitWS.sent);
  if (bybitWS && bybitWS.sent.length) {
    const sub = JSON.parse(bybitWS.sent[0]);
    eq('subscribe op', sub.op, 'subscribe');
    eq('subscribes to trades', sub.args[0], 'publicTrade.BTCUSDT');
    eq('subscribes to ticker', sub.args[1], 'tickers.BTCUSDT');
  }
  eq('feed reports live (not demo)', feed.effectiveMode(), 'live');
  eq('snapshot provider is bybit', feed.snap().provider, 'bybit');
  eq('status ended open', feed.state().status, 'open');
  ok('never fell back to demo', !statuses.some((s) => s.indexOf('demo') === 0), statuses);

  // keepalive: the tick must send {"op":"ping"} after 20 s of quiet
  bybitWS.deliver({ topic: 'publicTrade.BTCUSDT', data: [{ T: Date.now(), p: '75700', v: '0.01', S: 'Buy' }] });
  feed._lastPing = Date.now() - 21000;
  await new Promise((r) => setTimeout(r, 400));
  ok('keepalive ping sent', bybitWS.sent.some((s) => s === '{"op":"ping"}'), bybitWS.sent);

  feed.stop();

  /* ---------- bybit REST seed ---------- */
  console.log('\nbybit trade seed');
  const realFetch = global.fetch;
  global.fetch = async (url) => {
    ok('seed hits the recent-trade URL', /recent-trade/.test(String(url)), url);
    return {
      ok: true,
      json: async () => ({
        retCode: 0,
        result: {
          category: 'spot',
          list: [   // newest first, exactly like the live API
            { execId: '3', price: '75760', size: '0.1', side: 'Buy', time: '1789507611000' },
            { execId: '2', price: '75750', size: '0.2', side: 'Sell', time: '1789507605000' },
            { execId: '1', price: '75740', size: '0.1', side: 'Buy', time: '1789507599000' }
          ]
        }
      })
    };
  };
  const f2 = new BtcTradeFeed({ mode: 'live' });
  f2._kind = 'bybit';
  f2._seedProvider('bybit');
  await new Promise((r) => setTimeout(r, 50));
  const cs = f2.candles();
  eq('seed produced one 1s candle per trade second', cs.count, 3);
  ok('seed candles ascending (oldest first)', cs.t[0] === 1789507599000 && cs.t[2] === 1789507611000, cs.t);
  near('seed close kept', cs.c[0], 75740, 1e-6);
  ok('seed marked', cs.seeded === true);
  global.fetch = realFetch;

  /* ---------- seedHistory: post-open backfill ---------- */
  console.log('\nseedHistory (post-open backfill)');
  const { CandleStore } = BtcTradeFeed;
  {
    const st = new CandleStore(10);
    // the socket already delivered two live seconds before the REST seed lands
    st.ingestTrade(5000, 100);
    st.ingestTrade(6000, 101);
    st.seedHistory([
      [1000, '1', '1', '1', '1'], [2000, '2', '2', '2', '2'],
      [3000, '3', '3', '3', '3'], [4000, '4', '4', '4', '4'],
      [5000, 'X', 'X', 'X', '999'],            // overlaps a live second
      [7000, '7', '7', '7', '7']               // newer than the live tail
    ]);
    eq('history older than the first live slot is PREPENDED', st.t.slice(0, 4), [1000, 2000, 3000, 4000]);
    eq('overlapping second keeps the LIVE candle', st.c[4], 100);
    eq('row newer than the live tail is appended', st.c[6], 7);
    eq('resulting series is strictly ascending', st.t, [1000, 2000, 3000, 4000, 5000, 6000, 7000]);
    eq('seeded flag set', st.seeded, true);
  }
  {
    // plain pre-connect seed into an empty store behaves exactly as before
    const st = new CandleStore(300);
    st.seedHistory([[1000, '1', '2', '0.5', '1.5'], [2000, '1.5', '3', '1', '2.5']]);
    eq('empty-store seed appends in order', st.t, [1000, 2000]);
    eq('empty-store seed keeps OHLC', [st.o[1], st.h[1], st.l[1], st.c[1]], [1.5, 3, 1, 2.5]);
  }
  {
    // prepend must respect the ring-buffer cap
    const st = new CandleStore(5);
    st.ingestTrade(100000, 50);
    st.seedHistory([[1000, '1', '1', '1', '1'], [2000, '2', '2', '2', '2'], [3000, '3', '3', '3', '3'],
                    [4000, '4', '4', '4', '4'], [5000, '5', '5', '5', '5'], [6000, '6', '6', '6', '6']]);
    eq('prepend trims to max', st.t.length, 5);
    eq('prepend keeps the newest slots', st.t, [3000, 4000, 5000, 6000, 100000]);
  }
  {
    const st = new CandleStore(10);
    st.seedHistory(null); st.seedHistory('nope'); st.seedHistory([]);
    st.seedHistory([[NaN, 1, 1, 1, 1], ['x', '1', '1', '1', '1'], [1000, 1, 1, 1]]);
    eq('garbage seed rows are skipped', st.t.length, 0);
  }

  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})();
