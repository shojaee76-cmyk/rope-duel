// tools/netprobe.cjs — what's reachable from this sandbox right now?
const tests = [
  ['example.com', 'https://example.com'],
  ['github', 'https://api.github.com/zen'],
  ['coinbase', 'https://api.exchange.coinbase.com/products/BTC-USD/ticker'],
  ['okx', 'https://www.okx.com/api/v5/public/time'],
  ['binance-rest', 'https://api.binance.com/api/v3/ping'],
  ['binance-vision-rest', 'https://data-api.binance.vision/api/v3/ping'],
];
(async () => {
  for (const [n, u] of tests) {
    try {
      const r = await fetch(u, { signal: AbortSignal.timeout(8000) });
      console.log(n.padEnd(20), r.status);
    } catch (e) {
      console.log(n.padEnd(20), 'FAIL', e.cause ? (e.cause.code || e.cause.message) : e.message);
    }
  }
})();
