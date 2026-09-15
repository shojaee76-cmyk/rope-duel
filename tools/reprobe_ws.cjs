// tools/reprobe_ws.cjs — is the Binance block transient or structural?
globalThis.self = globalThis;
require('../feed.js');
const { DEFAULT_ENDPOINTS } = globalThis.BtcTradeFeed;

async function restCheck() {
  const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=3';
  try {
    const r = await fetch(url);
    const rows = await r.json();
    console.log('REST api.binance.com:', r.status, Array.isArray(rows) ? `rows=${rows.length}` : rows);
  } catch (e) { console.log('REST api.binance.com FAILED:', e.cause ? e.cause.code || e.cause.message : e.message); }
}

function wsProbe(ep, ms) {
  return new Promise((resolve) => {
    const t0 = Date.now();
    let done = false;
    const ws = new WebSocket(ep.url);
    const finish = (ok, detail) => {
      if (done) return; done = true;
      try { ws.close(); } catch {}
      resolve({ label: ep.label, ok, ms: Date.now() - t0, detail });
    };
    ws.onopen = () => finish(true, 'open');
    ws.onerror = () => finish(false, 'error');
    ws.onclose = (ev) => finish(false, `close ${ev.code}`);
    setTimeout(() => finish(false, 'timeout'), ms);
  });
}

(async () => {
  await restCheck();
  for (const ep of DEFAULT_ENDPOINTS) {
    const r = fromJson(ep);
    console.log(`WS ${r.label}: ${r.ok ? 'OPEN' : 'FAIL'} (${r.ms}ms) ${r.detail}`);
  }
  function fromJson(x) { return x; }
})();
