// tools/restest.mjs — is the frame rate fill-bound? Measures the SAME page under
// GPU contention at several PINNED render ratios (?res=...), which is the
// evidence the quality governor's premise rests on: if fewer pixels do not buy
// frames, the governor must not degrade resolution at all.
//
//   node tools/restest.mjs [seconds] [dpr]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 12);
const DPR = Number(process.argv[3] || 1);
const RATIOS = (process.env.RATIOS || '1.5,1.0,0.72,0.5').split(',').map(Number);
const HOGS = Number(process.env.HOGS || 2);
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 9013);
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

const hogs = [];
for (let i = 0; i < HOGS; i++) {
  const c = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: DPR });
  const p = await c.newPage();
  await p.goto(url('&gov=off'), { waitUntil: 'load', timeout: 30000 });
  hogs.push(c);
}
await new Promise((r) => setTimeout(r, 2500));

const rows = [];
for (const res of RATIOS) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: DPR });
  const page = await ctx.newPage();
  await page.goto(url(`&res=${res}`), { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(1800);
  const r = await page.evaluate((secs) => new Promise((resolve) => {
    const d = window.__duelDebug;
    const f = [];
    let lastT = performance.now();
    const t0 = lastT;
    function tick() {
      const now = performance.now();
      const an = d.catA.state.name, bn = d.catB.state.name;
      f.push({ ms: now - lastT, brawl: (an === 'BLADE_LOCK' || an === 'CLASH' || bn === 'BLADE_LOCK' || bn === 'CLASH') ? 1 : 0 });
      lastT = now;
      if (now - t0 < secs * 1000) requestAnimationFrame(tick);
      else resolve({ f, buf: d.renderer.domElement.width + 'x' + d.renderer.domElement.height });
    }
    requestAnimationFrame(tick);
  }), SECONDS);
  const F = r.f.slice(5);
  const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  const pick = (a, p) => { const s = a.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.round(p * (s.length - 1)))]; };
  const brawl = F.filter((x) => x.brawl);
  rows.push({
    ratio: res, drawingBuffer: r.buf, frames: F.length,
    fps: +(1000 / mean(F.map((x) => x.ms))).toFixed(1),
    p50: +pick(F.map((x) => x.ms), 0.5).toFixed(1),
    p95: +pick(F.map((x) => x.ms), 0.95).toFixed(1),
    brawlFps: brawl.length ? +(1000 / mean(brawl.map((x) => x.ms))).toFixed(1) : null,
  });
  await ctx.close();
}
const out = { dpr: DPR, hogs: HOGS, seconds: SECONDS, rows };
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, 'tools/shots/restest.json'), JSON.stringify(out, null, 1));
console.log(JSON.stringify(out, null, 1));
for (const c of hogs) await c.close();
await browser.close(); srv.close();
process.exit(0);
