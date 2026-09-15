// tools/shot_callout.mjs — capture a frame with a trade callout visible,
// preferring a whale (shockwave) callout, for the v8 UI evidence set.
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const PORT = 8977;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
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
const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message.split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });

// deterministic: push a whale trade through the REAL message path so a
// callout pill + shockwave is guaranteed on screen at capture time
const pushed = await page.evaluate(() => {
  const p = window.__duelPage;
  const price = p.feed.state().price || 78000;
  p.feed._handleMessage(JSON.stringify({ stream: 'btcusdt@trade', data: {
    e: 'trade', E: Date.now(), T: Date.now(), s: 'BTCUSDT', t: 424242,
    p: String(price), q: '2.5', m: false } })); // ~$195k notional -> whale
  return true;
});
await page.waitForTimeout(400); // callout spawns on the trade fan-out
const info = await page.evaluate(() => {
  const els = [...document.querySelectorAll('.callout')].map((e) => e.textContent);
  const pill = document.getElementById('meter-duel-text').textContent;
  const a = document.getElementById('state-buy').textContent;
  const b = document.getElementById('state-sell').textContent;
  return { callouts: els, pill, a, b };
});
const which = info.callouts.length ? 'whale' : null;
if (which) {
  writeFileSync('tools/shots/ui_after_callout.png', await page.screenshot());
}
console.log(JSON.stringify({ which, info, errors }, null, 1));
await browser.close(); srv.close();
process.exit(0);
