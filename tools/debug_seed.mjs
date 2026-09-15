// debug_seed.mjs: why is the Bybit REST seed not landing?
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const PORT = 8996;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try {
    const d = await readFile(path.join(root, p));
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(PORT, r));

const cands = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null];
const browser = await chromium.launch({ executablePath: cands.find((c) => c && existsSync(c)), headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

const logs = [];
page.on('console', (m) => logs.push(m.type() + ' :: ' + m.text()));
page.on('pageerror', (e) => logs.push('pageerror :: ' + e.message));
page.on('requestfailed', (r) => logs.push('requestfailed :: ' + r.url().slice(0, 90) + ' :: ' + (r.failure() ? r.failure().errorText : '')));
page.on('response', (r) => { if (/bybit|binance/.test(r.url())) logs.push('response :: ' + r.status() + ' ' + r.url().slice(0, 90)); });

await page.goto(`http://localhost:${PORT}/?mode=auto`, { waitUntil: 'load' });
await page.waitForFunction(
  () => window.__duelPage && window.__duelPage.feed && window.__duelPage.feed.snap().status === 'open',
  { timeout: 40000 }
).catch(() => logs.push('!! feed never opened'));
await page.waitForTimeout(6000);

const state = await page.evaluate(async () => {
  const f = window.__duelPage.feed;
  const out = {
    kind: f._kind,
    seedStarted: f._seedStarted,
    mode: f.mode,
    endpoints: f.endpoints.map((e) => e.kind + ':' + e.url.slice(0, 40)),
    endpointIdx: f._endpointIdx,
    candles: f.candles().count,
    seeded: f.candles().seeded,
    seedUrl: window.BtcTradeFeed.BYBIT_SEED_URL
  };
  // now try the seed URL by hand from inside the page
  try {
    const res = await fetch(window.BtcTradeFeed.BYBIT_SEED_URL, { cache: 'no-store' });
    out.manualStatus = res.status;
    out.manualAcao = res.headers.get('access-control-allow-origin');
    const j = await res.json();
    out.manualListLen = j && j.result && j.result.list ? j.result.list.length : -1;
    const tr = j.result.list[0];
    out.manualFirstRow = tr ? [tr.time, tr.price] : null;
  } catch (e) {
    out.manualErr = String(e);
  }
  return out;
});

console.log('STATE', JSON.stringify(state, null, 1));
console.log('\nLOGS');
logs.forEach((l) => console.log('  ' + l));
await browser.close();
srv.close();
process.exit(0);
