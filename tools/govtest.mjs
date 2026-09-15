// tools/govtest.mjs — does the adaptive quality governor actually hold the frame
// rate when the GPU is busy? (That is the user's report: "fps drops midfight".)
//
// Method: saturate the GPU with two extra pages rendering the duel, then measure
// the SAME build twice - once with the governor disabled (?gov=off, the old
// behaviour) and once with it on - and report frame time per fight bucket plus
// what the governor decided (ratio, steps, median frame time).
//
//   node tools/govtest.mjs [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 18);
const DPR = Number(process.env.DPR || 1);
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 9011);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
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
const exe = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
].find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const url = (q) => `http://localhost:${PORT}/?mode=demo&seed=7${q}`;

async function measure(query, secs) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: DPR });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(url(query), { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2500);
  const r = await page.evaluate((secs) => new Promise((resolve) => {
    const d = window.__duelDebug;
    const frames = [];
    let lastT = performance.now();
    const t0 = lastT;
    function tick() {
      const now = performance.now();
      const an = d.catA.state.name, bn = d.catB.state.name;
      frames.push({
        frameMs: now - lastT,
        brawl: (an === 'BLADE_LOCK' || an === 'CLASH' || bn === 'BLADE_LOCK' || bn === 'CLASH') ? 1 : 0,
        ratio: d.gov.ratio, step: d.gov.step, med: d.gov.med, changes: d.gov.changes, lock: d.gov.lock,
        buf: d.renderer.domElement.width + 'x' + d.renderer.domElement.height,
      });
      lastT = now;
      if (now - t0 < secs * 1000) requestAnimationFrame(tick);
      else resolve({ frames });
    }
    requestAnimationFrame(tick);
  }), secs);
  const F = r.frames.slice(6);
  const mean = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
  const pick = (a, p) => { const s = a.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.max(0, Math.round(p * (s.length - 1))))]; };
  const stat = (rows) => rows.length ? {
    n: rows.length, fps: +(1000 / mean(rows.map((x) => x.frameMs))).toFixed(1),
    p50: +pick(rows.map((x) => x.frameMs), 0.5).toFixed(1),
    p95: +pick(rows.map((x) => x.frameMs), 0.95).toFixed(1),
    worst: +Math.max(...rows.map((x) => x.frameMs)).toFixed(1),
  } : null;
  const last = F[F.length - 1];
  const out = { query, errors: errs.slice(0, 3), all: stat(F), brawl: stat(F.filter((x) => x.brawl)),
    gov: { ratio: last.ratio, step: last.step, med: +last.med.toFixed(1), changes: last.changes, locked: last.lock, drawingBuffer: last.buf } };
  await ctx.close();
  return out;
}

// 1) saturate the GPU with two extra duel pages (the "another app is on the GPU" case)
const hogs = [];
for (let i = 0; i < 2; i++) {
  const c = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: DPR });
  const p = await c.newPage();
  await p.goto(url('&gov=off'), { waitUntil: 'load', timeout: 30000 });
  hogs.push(c);
}
await new Promise((r) => setTimeout(r, 3000));

const off = await measure('&gov=off', SECONDS);
const on = await measure('', SECONDS + 10);   // the governor needs a few windows to settle
const res = { seconds: SECONDS, dpr: DPR, gpuHogs: hogs.length, governorOff: off, governorOn: on };
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, 'tools/shots/govtest.json'), JSON.stringify(res, null, 1));
console.log(JSON.stringify(res, null, 1));
for (const c of hogs) await c.close();
await browser.close(); srv.close();
process.exit(0);
