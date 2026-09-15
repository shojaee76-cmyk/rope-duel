// tools/deploycheck.mjs — verify the DEPLOYED GitHub Pages build serves the
// chart bundle: sha256 equal to local, page boots, chart panel paints.
// Retries the fetch for up to ~5 min (Pages rebuild lag), then runs the
// headless pass. Live-tape assertions are intentionally omitted: the sandbox's
// Binance egress flaps (451/ECONNREFUSED), so demo fallback (SIM TAPE) is an
// equally valid outcome for the deployed page.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import { createHash } from 'crypto';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const LIVE = 'https://shojaee76-cmyk.github.io/rope-duel/bundle.js';
const localSha = createHash('sha256').update(await readFile(path.join(root, 'bundle.js'))).digest('hex');
console.log('local bundle sha256:', localSha);

let liveSha = null;
for (let i = 0; i < 15; i++) {
  try {
    const r = await fetch(LIVE + '?bust=' + Date.now(), { signal: AbortSignal.timeout(15000) });
    if (r.ok) {
      liveSha = createHash('sha256').update(Buffer.from(await r.arrayBuffer())).digest('hex');
      if (liveSha === localSha) break;
      console.log(`attempt ${i + 1}: live bundle differs (${liveSha.slice(0, 8)}…) — Pages still rebuilding`);
    } else console.log(`attempt ${i + 1}: HTTP ${r.status}`);
  } catch (e) { console.log(`attempt ${i + 1}: ${e.cause ? e.cause.code || e.cause.message : e.message}`); }
  await new Promise((r) => setTimeout(r, 20000));
}
if (liveSha !== localSha) { console.log('FAIL: live bundle never matched local'); process.exit(1); }
console.log('PASS  live bundle sha256 == local (deploy propagated)');

/* headless pass on the deployed page */
const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto('https://shojaee76-cmyk.github.io/rope-duel/?seed=7', { waitUntil: 'load', timeout: 45000 });
await page.waitForTimeout(8000);

const s = await page.evaluate(() => {
  const cv = document.getElementById('chart-canvas');
  const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
  let painted = 0;
  for (let i = 3; i < d.length; i += 16) if (d[i] > 0) painted++;
  const st = window.__duelPage.feed.state();
  return {
    painted,
    chip: document.getElementById('chart-chip').className,
    chipText: document.getElementById('chart-chip-text').textContent,
    feedMode: st.mode, feedStatus: st.status,
    hudPrice: document.getElementById('price').textContent,
    hasChart: !!window.__duelPage.chart,
  };
});
let fails = 0;
const ck = (name, ok, detail) => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); if (!ok) fails++; };
ck('[deploy] chart module wired', s.hasChart, 'window.__duelPage.chart');
ck('[deploy] chart panel painted', s.painted > 50, `${s.painted} px`);
ck('[deploy] chip consistent with feed mode', (s.feedMode === 'live' && s.chip === 'live') || (s.feedMode === 'demo' && (s.chip === 'demo' || s.chip === 'load')), `${s.chip} "${s.chipText}" mode=${s.feedMode}`);
ck('[deploy] HUD price present', /\d/.test(s.hudPrice), s.hudPrice);
ck('[deploy] zero page errors (WebSocket 451 from this sandbox is environmental)', errs.filter((e) => !/451|ERR_CONNECTION_REFUSED/.test(e)).length === 0, errs.slice(0, 3).join(' | ') || 'clean');
await page.screenshot({ path: path.join(root, 'tools/shots/deployed_live.png') });
await b.close();
console.log(fails ? `\n${fails} FAILED` : '\nDEPLOY VERIFIED');
process.exit(fails ? 1 : 0);
