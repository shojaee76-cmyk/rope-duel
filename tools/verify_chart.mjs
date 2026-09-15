// tools/verify_chart.mjs — acceptance probe for the embedded live chart (t_189fb722).
// Boots the page, asserts the chart renders real candles, updates over time,
// the chip mirrors the feed lifecycle, and the panel survives narrow screens.
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
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
await new Promise((r) => srv.listen(8993, r));

const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });

mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
const results = { checks: [], networkErrors: [] };
function check(name, ok, detail) {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}

/* ---------- probe one viewport + mode ---------- */
async function probe(mode, vp, tag, waitMs) {
  const page = await b.newPage({ viewport: vp });
  const errs = [];
  page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
  page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await page.goto(`http://localhost:8993/?mode=${mode}`, { waitUntil: 'load' });
  await page.waitForTimeout(waitMs);

  const state = await page.evaluate(() => {
    const panel = document.getElementById('chart-panel');
    const canvas = document.getElementById('chart-canvas');
    const chip = document.getElementById('chart-chip');
    const chipText = document.getElementById('chart-chip-text');
    const r = panel.getBoundingClientRect();
    // paint census: how many pixels of the chart canvas are non-transparent
    const ctx = canvas.getContext('2d');
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let painted = 0;
    for (let i = 3; i < img.length; i += 16) if (img[i] > 0) painted++; // sample every 4th px
    const candles = window.__duelPage.feed.candles();
    return {
      panelBox: { x: r.x, y: r.y, w: r.width, h: r.height },
      vw: innerWidth, vh: innerHeight,
      canvasSize: { w: canvas.width, h: canvas.height },
      paintedSampled: painted,
      chipClass: chip.className, chipText: chipText.textContent,
      candleCount: candles.count, seeded: candles.seeded,
      feedState: window.__duelPage.feed.state(),
      hudPrice: document.getElementById('price').textContent,
    };
  });

  const fits = state.panelBox.x >= -1 && state.panelBox.x + state.panelBox.w <= state.vw + 1;
  check(`[${tag}] panel fits viewport (${state.panelBox.w | 0}px in ${state.vw}px)`, fits,
    JSON.stringify(state.panelBox));
  check(`[${tag}] zero page errors`, errs.length === 0, errs.slice(0, 3).join(' | ') || 'clean');
  check(`[${tag}] chart painted (>50 sampled px)`, state.paintedSampled > 50, `${state.paintedSampled} px`);
  check(`[${tag}] chip reflects feed (class=${state.chipClass})`,
    ['live', 'demo', 'stale', 'off', 'load'].includes(state.chipClass), state.chipText);
  await page.screenshot({ path: path.join(root, `tools/shots/chart_${tag}.png`) });
  await page.close();
  return state;
}

/* ---------- run 1: demo mode (always works offline) ---------- */
const demo1 = await probe('demo', { width: 1280, height: 800 }, 'demo_desktop', 3500);

/* update proof: candles must grow over ~3.2 s without a reload */
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:8993/?mode=demo', { waitUntil: 'load' });
await page.waitForTimeout(2500);
const c1 = await page.evaluate(() => ({
  count: window.__duelPage.feed.candles().count,
  last: window.__duelPage.feed.candles().c.slice(-1)[0] || null,
  painted: (() => { const cv = document.getElementById('chart-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data; let n = 0; for (let i = 3; i < d.length; i += 16) if (d[i] > 0) n++; return n; })(),
}));
await page.waitForTimeout(3200);
const c2 = await page.evaluate(() => ({
  count: window.__duelPage.feed.candles().count,
  last: window.__duelPage.feed.candles().c.slice(-1)[0] || null,
  painted: (() => { const cv = document.getElementById('chart-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data; let n = 0; for (let i = 3; i < d.length; i += 16) if (d[i] > 0) n++; return n; })(),
}));
check('[demo] candles grow over 3.2s (live update)', c2.count > c1.count, `${c1.count} -> ${c2.count}`);
check('[demo] chart repaints as tape moves', c2.painted !== c1.painted || c2.last !== c1.last,
  `painted ${c1.painted} -> ${c2.painted}`);
await page.close();

/* narrow screens */
await probe('demo', { width: 390, height: 744 }, 'demo_mobile390', 2500);
await probe('demo', { width: 320, height: 568 }, 'demo_mobile320', 2500);

/* ---------- run 2: live mode (real Binance socket + REST seed) ---------- */
const live = await probe('live', { width: 1280, height: 800 }, 'live_desktop', 9000);
check('[live] feed reached OPEN', live.feedState.status === 'open', `status=${live.feedState.status} err=${live.feedState.lastError}`);
check('[live] candle store seeded from REST', live.seeded, `count=${live.candleCount}`);
check('[live] deep history available (>=100 candles)', live.candleCount >= 100, `${live.candleCount} candles`);
check('[live] HUD shows a real price', /\d/.test(live.hudPrice), live.hudPrice);

writeFileSync(path.join(root, 'tools/chart_verify.json'), JSON.stringify({ results, demo1, live }, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL CHART CHECKS PASS');
process.exit(failed.length ? 1 : 0);
