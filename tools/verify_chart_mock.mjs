// tools/verify_chart_mock.mjs — live-mode verification for the embedded chart
// (t_189fb722) WITHOUT the real network: this sandbox's egress currently
// refuses Binance (451/ECONNREFUSED — parent task verified the same endpoints
// live 45 min earlier), so we intercept at the browser layer:
//   - page.route        -> fulfills the REST klines seed (real fetch path)
//   - page.routeWebSocket -> fabricates a real-shaped Binance combined stream
//     (trade + ticker + kline_1s frames, prices as strings, x:false/x:true)
// Everything below the socket — feed.js parsing, CandleStore, chart draw,
// chip lifecycle, HUD — is the production code.
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
await new Promise((r) => srv.listen(8994, r));

const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });

const results = { checks: [] };
function check(name, ok, detail) {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });

/* ---------- mock Binance stream controller ---------- */
const CTRL = { send: null, running: false, timer: null, price: 76000, seq: 0, second: 0 };
function mkSeed() {
  // 300 ascending 1s candles ending "now"; Binance klines row shape
  const now = Math.floor(Date.now() / 1000) * 1000;
  const rows = [];
  let p = 76000;
  for (let i = 299; i >= 0; i--) {
    const t = now - i * 1000;
    const o = p;
    p += (Math.random() - 0.5) * 14;
    const h = Math.max(o, p) + Math.random() * 4;
    const l = Math.min(o, p) - Math.random() * 4;
    rows.push([t, o.toFixed(2), h.toFixed(2), l.toFixed(2), p.toFixed(2), '0.5', t + 999, '0.5', 1, '0.5', '0.5', '0']);
  }
  CTRL.price = p;
  return rows;
}
function klineFrame(t, o, h, l, c, closed) {
  return JSON.stringify({ stream: 'btcusdt@kline_1s', data: {
    e: 'kline', E: Date.now(), s: 'BTCUSDT',
    k: { t, T: t + 999, s: 'BTCUSDT', i: '1s', o: o.toFixed(2), h: h.toFixed(2),
         l: l.toFixed(2), c: c.toFixed(2), v: '1.1', q: '80000', x: closed } } });
}
function tradeFrame(price, qty) {
  return JSON.stringify({ stream: 'btcusdt@trade', data: {
    e: 'trade', E: Date.now(), T: Date.now(), s: 'BTCUSDT', t: ++CTRL.seq,
    p: price.toFixed(2), q: qty.toFixed(4), m: CTRL.sideFlip = !CTRL.sideFlip } });
}
function tickerFrame(price) {
  return JSON.stringify({ stream: 'btcusdt@ticker', data: {
    e: '24hrTicker', E: Date.now(), s: 'BTCUSDT', c: price.toFixed(2),
    P: '-3.950', p: '-3125.53', h: '79600.00', l: '74967.97' } });
}
function startStream() {
  CTRL.running = true;
  let last = CTRL.price;
  let o = last, h = last, l = last;   // (re)init on every (re)start
  CTRL.second = 0;                    // open a fresh candle on the first tick
  const tick = () => {
    if (!CTRL.running) return;
    const nowSec = Math.floor(Date.now() / 1000) * 1000;
    if (nowSec !== CTRL.second) {                    // close prev, open new
      if (CTRL.second) CTRL.send(klineFrame(CTRL.second, o, h, l, last, true));
      CTRL.second = nowSec; o = last; h = last; l = last;
    }
    const n = 1 + Math.floor(Math.random() * 4);     // 1-4 prints/s
    for (let i = 0; i < n; i++) {
      last += (Math.random() - 0.5) * 10;
      h = Math.max(h, last); l = Math.min(l, last);
      CTRL.send(tradeFrame(last, Math.pow(10, -4 + Math.random() * 2)));
    }
    CTRL.price = last;
    CTRL.send(klineFrame(nowSec, o, h, l, last, false)); // interim tick
    if (Math.random() < 0.1) CTRL.send(tickerFrame(last));
    CTRL.timer = setTimeout(tick, 250);              // frames several times/sec
  };
  tick();
}
function stopStream() { CTRL.running = false; if (CTRL.timer) clearTimeout(CTRL.timer); }

/* ---------- browser-layer interception ---------- */
await page.route('**/api/v3/klines*', (route) => {
  route.fulfill({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': '*' },
    body: JSON.stringify(mkSeed()) });
});
await page.routeWebSocket(/binance\.(vision|com)/, (ws) => {
  CTRL.send = (msg) => { try { ws.send(msg); } catch {} };
  setTimeout(startStream, 400); // let the REST seed land first
});

/* ---------- run ---------- */
await page.goto('http://localhost:8994/?mode=live', { waitUntil: 'load' });
await page.waitForTimeout(6000); // seed + ~5s of live stream

const s1 = await page.evaluate(() => {
  const sky = window.__duelPage.chart.stats();   // the tape is drawn into the sky now
  const candles = window.__duelPage.feed.candles();
  return {
    painted: sky.ink, candleCount: candles.count, seeded: candles.seeded,
    chip: sky.chip,
    chipText: sky.chipText,
    hudPrice: document.getElementById('price').textContent,
    feedStatus: window.__duelPage.feed.state().status,
  };
});
check('[mock-live] feed OPEN', s1.feedStatus === 'open', `status=${s1.feedStatus}`);
check('[mock-live] REST seed ingested (>=250 candles)', s1.candleCount >= 250, `${s1.candleCount}`);
check('[mock-live] chart painted', s1.painted > 50, `${s1.painted} px`);
check('[mock-live] chip LIVE', s1.chip === 'live', `${s1.chip} "${s1.chipText}"`);
check('[mock-live] HUD shows mock price', /^[\d,]+\.\d\d$/.test(s1.hudPrice), s1.hudPrice);
const p1 = s1.hudPrice;
await page.screenshot({ path: path.join(root, 'tools/shots/chart_mock_live.png') });

/* whale dot: one huge print, then a paint */
await page.evaluate(() => {
  // push a whale trade through the real feed message path
  window.__duelPage.feed._handleMessage(JSON.stringify({ stream: 'btcusdt@trade', data: {
    e: 'trade', E: Date.now(), T: Date.now(), s: 'BTCUSDT', t: 999999,
    p: String(window.__duelPage.feed.state().price), q: '1.5', m: false } }));
});
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(root, 'tools/shots/chart_mock_whale.png') });

/* growth while streaming (ring buffer is capped at 300 -> rev must move) */
const s2 = await page.evaluate(() => {
  const c = window.__duelPage.feed.candles();
  return { count: c.count, rev: c.rev };
});
await page.waitForTimeout(3200);
const s3 = await page.evaluate(() => ({
  count: window.__duelPage.feed.candles().count,
  rev: window.__duelPage.feed.candles().rev,
  hud: document.getElementById('price').textContent }));
check('[mock-live] tape advances while streaming (rev)', s3.rev > s2.rev, `rev ${s2.rev} -> ${s3.rev}, count ${s2.count} -> ${s3.count}`);
check('[mock-live] HUD price moves', s3.hud !== p1, `${p1} -> ${s3.hud}`);

/* stale cycle: freeze the stream for ~9.5s -> STALE chip, then resume -> LIVE */
stopStream();
await page.waitForTimeout(9500);
const s4 = await page.evaluate(() => ({
  chip: window.__duelPage.chart.stats().chip,
  chipText: window.__duelPage.chart.stats().chipText,
  feedStatus: window.__duelPage.feed.state().status }));
check('[mock-live] stale indicator when stream freezes (socket still open)',
  s4.chip === 'stale' && s4.feedStatus === 'open', `${s4.chip} "${s4.chipText}" status=${s4.feedStatus}`);
await page.screenshot({ path: path.join(root, 'tools/shots/chart_mock_stale.png') });

startStream();
await page.waitForTimeout(2500);
const s5 = await page.evaluate(() => ({
  chip: window.__duelPage.chart.stats().chip,
  chipText: window.__duelPage.chart.stats().chipText }));
check('[mock-live] chip returns to LIVE when stream resumes', s5.chip === 'live', `${s5.chip} "${s5.chipText}"`);

check('[mock-live] zero page/console errors', errs.length === 0, errs.slice(0, 3).join(' | ') || 'clean');

/* panel fit at narrow widths */
for (const [w, h, tag] of [[390, 744, 'mobile390'], [320, 568, 'mobile320']]) {
  await page.setViewportSize({ width: w, height: h });
  await page.waitForTimeout(700);
  const box = await page.evaluate(() => {
    // the tape panel is 3D now: assert it is still framed and still carries ink
    const d = window.__duelDebug, cam = d.camera, sky = d.skyChart, el = d.renderer.domElement;
    const g = sky.mesh.geometry.parameters, ndc = [];
    for (const [sx, sy] of [[-1, 1], [1, -1]]) {
      const p = sky.mesh.position.clone();
      p.x += sx * g.width / 2; p.y += sy * g.height / 2; p.project(cam);
      ndc.push([+p.x.toFixed(2), +p.y.toFixed(2)]);
    }
    return { x: Math.min(...ndc.map((n) => n[0])), r: Math.max(...ndc.map((n) => n[0])), ink: sky.stats().ink, vw: innerWidth };
  });
  check(`[mock-live] sky panel framed + painted at ${tag}`, box.x >= -1.15 && box.r <= 1.15 && box.ink > 50, JSON.stringify(box));
  await page.screenshot({ path: path.join(root, `tools/shots/chart_mock_${tag}.png`) });
}

stopStream();
writeFileSync(path.join(root, 'tools/chart_mock_verify.json'), JSON.stringify(results, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL MOCK-LIVE CHECKS PASS');
process.exit(failed.length ? 1 : 0);
