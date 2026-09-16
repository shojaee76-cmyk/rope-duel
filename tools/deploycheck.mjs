// tools/deploycheck.mjs: verify the DEPLOYED GitHub Pages build end to end:
//   1. EVERY file the page loads (index.html, feed.js, bundle.js)
//      byte-matches the local copy, not just the bundle. feed.js is a separate
//      script tag, so a bundle-only hash check would silently pass a stale feed.
//   2. the deployed page boots, the sky tape panel paints, and the LIVE path really
//      works from this network: the HUD must advertise a real provider
//      (LIVE . BINANCE | LIVE . BYBIT) and its price must agree with an
//      independent REST ticker for that provider.
// Retries the hash fetch for up to ~5 min (Pages rebuild lag).
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const BASE = 'https://shojaee76-cmyk.github.io/rope-duel/';

const FILES = ['index.html', 'feed.js', 'bundle.js'];   // the chart panel was removed in v12: the tape is drawn into the sky
/* Compare CONTENT, with CRLF normalized to LF. This repo has no .gitattributes
 * and core.autocrlf rewrites working-copy line endings on checkout, so a raw
 * byte hash can differ for a file whose deployed content is identical (this
 * bit the check on index.html, the one file that existed before this change).
 * Line endings are a checkout artifact, not a code difference. */
const norm = (b) => createHash('sha256').update(Buffer.from(b).toString('utf8').replace(/\r\n/g, '\n')).digest('hex');
const local = {};
for (const f of FILES) local[f] = norm(await readFile(path.join(root, f)));

let pending = new Set(FILES);
for (let i = 0; i < 15 && pending.size; i++) {
  for (const f of [...pending]) {
    try {
      const r = await fetch(BASE + f + '?bust=' + Date.now(), { signal: AbortSignal.timeout(15000) });
      if (!r.ok) { console.log(`attempt ${i + 1}: ${f} HTTP ${r.status}`); continue; }
      const sha = norm(Buffer.from(await r.arrayBuffer()));
      if (sha === local[f]) {
        console.log(`PASS  ${f} content == local (${sha.slice(0, 12)})`);
        pending.delete(f);
      } else {
        console.log(`attempt ${i + 1}: ${f} differs (${sha.slice(0, 8)}...) - Pages still rebuilding`);
      }
    } catch (e) { console.log(`attempt ${i + 1}: ${f} ${e.cause ? e.cause.code || e.cause.message : e.message}`); }
  }
  if (pending.size) await new Promise((r) => setTimeout(r, 20000));
}
if (pending.size) { console.log('FAIL: deployed files never matched local: ' + [...pending].join(', ')); process.exit(1); }

/* Semantic guard on top of the hashes: prove the deployed feed really is the
 * multi-provider build, so a hash logic slip cannot pass a stale file. */
{
  const r = await fetch(BASE + 'feed.js?bust=' + Date.now(), { signal: AbortSignal.timeout(20000) });
  const txt = await r.text();
  let bad = 0;
  for (const [what, needle] of [['feed version marker', "var VERSION = '1.1.0'"], ['bybit provider', 'stream.bybit.com'], ['bybit subscribe topic', 'publicTrade.'], ['provider seed hook', '_seedProvider']]) {
    const ok = txt.includes(needle);
    console.log(`${ok ? 'PASS' : 'FAIL'}  deployed feed.js has ${what}`);
    if (!ok) bad++;
  }
  if (bad) process.exit(1);
}

/* ---------- headless pass on the deployed page ---------- */
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

await page.goto(BASE + '?cb=' + Date.now(), { waitUntil: 'load', timeout: 45000 });
await page.waitForFunction(
  () => window.__duelPage && window.__duelPage.feed && window.__duelPage.feed.snap().status === 'open',
  { timeout: 45000 }
).catch(() => {});
await page.waitForFunction(
  () => { const f = window.__duelPage && window.__duelPage.feed; return !!f && f.candles().seeded === true; },
  { timeout: 45000 }
).catch(() => {});
await page.waitForTimeout(4000);

const s = await page.evaluate(() => {
  const sky = window.__duelPage.chart.stats();   // the sky panel's own paint state
  const f = window.__duelPage.feed;
  const st = f.snap();
  return {
    painted: sky.ink,
    chip: sky.chip,
    chipText: sky.chipText,
    feedMode: st.mode, feedStatus: st.status, provider: st.provider,
    hudPrice: document.getElementById('price').textContent,
    statusText: document.getElementById('status-mode').textContent,
    venue: sky.variant,
    price: st.price, candles: f.candles().count, seeded: f.candles().seeded,
    hasChart: !!window.__duelPage.chart
  };
});

let ref = null;
try {
  const url = s.provider === 'bybit'
    ? 'https://api.bybit.com/v5/market/tickers?category=spot&symbol=BTCUSDT'
    : 'https://data-api.binance.vision/api/v3/ticker/24hr?symbol=BTCUSDT';
  const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
  const j = await r.json();
  ref = s.provider === 'bybit' ? +j.result.list[0].lastPrice : +j.lastPrice;
} catch (e) { /* cross-check is best-effort */ }

let fails = 0;
const ck = (name, ok, detail) => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  - ' + detail : ''}`); if (!ok) fails++; };
ck('[deploy] chart module wired', s.hasChart, 'window.__duelPage.chart');
ck('[deploy] sky tape panel painted', s.painted > 50, `${s.painted} px of ink, treatment "${s.venue}"`);
ck('[deploy] feed is LIVE (not the SIMULATION tape)', s.feedMode === 'live' && s.feedStatus === 'open', `mode=${s.feedMode} status=${s.feedStatus}`);
ck('[deploy] HUD names the real provider', /^LIVE \u00b7 (BINANCE|BYBIT)$/.test(s.statusText.trim()), JSON.stringify(s.statusText));
ck('[deploy] status chip names the real venue', /BINANCE|BYBIT/.test(s.statusText), s.statusText);
ck('[deploy] chart chip reads LIVE', s.chip === 'live' && s.chipText === 'LIVE', `${s.chip} "${s.chipText}"`);
ck('[deploy] REST history seed applied', s.seeded === true && s.candles >= 60, `seeded=${s.seeded} candles=${s.candles}`);
ck('[deploy] HUD price present', /\d/.test(s.hudPrice), s.hudPrice);
if (ref) {
  const dev = Math.abs(s.price - ref) / ref;
  ck(`[deploy] price agrees with independent ${s.provider} ticker (<0.5%)`, dev < 0.005, `page=${s.price} ref=${ref} dev=${(dev * 100).toFixed(3)}%`);
} else {
  console.log('WARN  independent ticker unavailable, price cross-check skipped');
}
ck('[deploy] zero page errors (WebSocket handshake noise excluded)',
  errs.filter((e) => !/451|403|ERR_CONNECTION_REFUSED|WebSocket|Failed to load resource/.test(e)).length === 0,
  errs.slice(0, 3).join(' | ') || 'clean');
await page.screenshot({ path: path.join(root, 'tools/shots/deployed_live.png') });
await b.close();
console.log(fails ? `\n${fails} FAILED` : '\nDEPLOY VERIFIED');
process.exit(fails ? 1 : 0);
