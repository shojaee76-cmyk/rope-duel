// tools/test_candles.cjs — unit test for feed.js CandleStore (task t_189fb722)
// feed.js is UMD for the BROWSER; node (type:module) loads it as ESM where the
// wrapper's `this` is undefined -> provide `self` so it lands on globalThis.
// NOTE: all timestamps in ms; candles are keyed floor(ts/1000)*1000.
globalThis.self = globalThis;
require('../feed.js');
const { CandleStore } = globalThis.BtcTradeFeed;

let fails = 0;
function eq(actual, expected, label) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a !== e) { fails++; console.log(`FAIL ${label}: got ${a}, want ${e}`); }
  else console.log(`ok   ${label}`);
}

/* --- 1. trade prints build candles: same-second updates, new second appends --- */
const s = new CandleStore(300);
s.ingestTrade(100500, 75001.5);        // second 100000
s.ingestTrade(100900, 74998.0);        // same second -> h/l/c update, o stays
s.ingestTrade(101200, 75010.0);        // next second -> new slot
eq(s.t, [100000, 101000], 'trade slots');
eq(s.o, [75001.5, 75010], 'trade opens (first print wins)');
eq(s.h, [75001.5, 75010], 'trade highs');
eq(s.l, [74998, 75010], 'trade lows');
eq(s.c, [74998, 75010], 'trade closes (last print wins)');

/* --- 2. kline ticks upsert by candle time (interim + final) --- */
s.ingestKline(101000, 75009, 75012, 75005, 75007);  // authoritative replace
eq([s.o[1], s.h[1], s.l[1], s.c[1]], [75009, 75012, 75005, 75007], 'kline upsert same slot');
s.ingestKline(102000, 75007, 75030, 75000, 75025);  // new candle appends
eq(s.t, [100000, 101000, 102000], 'kline append');
s.ingestKline(102000, 75007, 75031, 75000, 75024);  // final x:true tick updates again
eq(s.h[2], 75031, 'kline final tick');
s.ingestKline(500, 1, 2, 0.5, 1.5);                 // stale candle ignored
eq(s.t.length, 3, 'stale kline dropped');

/* --- 3. REST seed: older rows dropped (live wins), newer appended --- */
const s2 = new CandleStore(300);
s2.ingestKline(500000, 10, 11, 9, 10.5);           // socket already saw 500000
s2.seedRows([[200000, '10', '10.5', '9.5', '10'], [300000, '10', '11', '10', '10.8'],
             [500000, 'X', 'X', 'X', '99'], [600000, '10.5', '10.9', '10.4', '10.6']]);
eq(s2.t, [500000, 600000], 'seed merge (older + dup skipped, newer appended)');
eq(s2.o[0], 10, 'seed keeps socket value for overlapped slot');
eq(s2.seeded, true, 'seeded flag');
eq(s2.rev, 3, 'rev bumped');

/* --- 4. ring buffer trims to max --- */
const s3 = new CandleStore(10);
for (let i = 0; i < 25; i++) s3.ingestKline(i * 1000, 1, 2, 1, 2);
eq(s3.t.length, 10, 'trim to max');
eq(s3.t[0], 15000, 'oldest dropped');

/* --- 5. full feed message parse: kline opens a candle, trades update it --- */
const f = new BtcTradeFeed({ mode: 'demo' });
f._handleMessage(JSON.stringify({ stream: 'btcusdt@kline_1s', data: {
  e: 'kline', E: 123, s: 'BTCUSDT',
  k: { t: 77000000, T: 77000999, s: 'BTCUSDT', i: '1s', o: '75000.00', h: '75010.10',
       l: '74990.00', c: '75005.55', v: '1.2', x: false } } }));
const snap = f.candles();
eq(snap.t, [77000000], 'feed._handleMessage routes kline');
eq(snap.o, [75000], 'kline open parsed from string');

f._handleMessage(JSON.stringify({ stream: 'btcusdt@trade', data: {
  e: 'trade', E: 124, T: 77000123, s: 'BTCUSDT', t: 1, p: '75006.00', q: '0.01', m: false } }));
f._handleMessage(JSON.stringify({ stream: 'btcusdt@trade', data: {
  e: 'trade', E: 125, T: 77000999, s: 'BTCUSDT', t: 2, p: '75002.00', q: '0.02', m: true } }));
const snap2 = f.candles();
eq(snap2.t, [77000000], 'trade prints land in the same candle slot');
eq(snap2.c, [75002], 'trade close updated (last print wins)');
eq(snap2.h, [75010.1], 'trade does not shrink the kline high');

/* --- 6. garbage input never throws --- */
try {
  s.ingestTrade(NaN, NaN); s.ingestKline(undefined); s.seedRows('nope');
  s.ingestTrade('x', 'y'); s.ingestKline(2000, NaN, NaN, NaN, NaN);
  console.log('ok   garbage input tolerated');
} catch (e) { fails++; console.log('FAIL garbage input threw: ' + e.message); }

console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS');
process.exit(fails ? 1 : 0);
