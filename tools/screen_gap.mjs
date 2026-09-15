// tools/screen_gap.mjs — the on-screen head separation, in PIXELS.
// A 3D clearance the user cannot see is not a fix. This projects both head
// pivots into screen space every frame, plus each head's own radius in pixels
// (projecting pivot +/- headRadius along world X), and reports the smallest
// on-screen gap between the two head silhouettes, overall and per fight state.
//
//   node tools/screen_gap.mjs [seconds] [WxH]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 24);
const [W, H] = (process.argv[3] || '1280x800').split('x').map(Number);
const HEAD_R = Number(process.env.HEAD_R || 0.33);
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 9007);
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
const page = await browser.newPage({ viewport: { width: W, height: H } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(2000);

const out = await page.evaluate(({ SECONDS, HEAD_R }) => new Promise((resolve) => {
  const d = window.__duelDebug, A = d.catA, B = d.catB;
  const cam = d.camera, el = d.renderer.domElement;
  const rows = [];
  const proj = (v) => {                     // world -> CSS pixels (y down)
    const p = v.clone().project(cam);
    return { x: (p.x * 0.5 + 0.5) * el.clientWidth, y: (-p.y * 0.5 + 0.5) * el.clientHeight };
  };
  const headC = (c) => { const v = c.data.head.position.clone(); c.data.head.localToWorld(v.set(0, 0, 0)); return v; };
  const t0 = performance.now();
  function tick() {
    if (d.contact && d.contact.post && d.contact.post.n >= 0) {
      const ca = headC(A), cb = headC(B);
      const pa = proj(ca), pb = proj(cb);
      // each head's pixel radius: project a point HEAD_R to the side of the pivot
      const ra = Math.hypot(proj(ca.clone().add({ x: HEAD_R, y: 0, z: 0 })).x - proj(ca.clone().add({ x: -HEAD_R, y: 0, z: 0 })).x, 0) / 2;
      const rb = Math.hypot(proj(cb.clone().add({ x: HEAD_R, y: 0, z: 0 })).x - proj(cb.clone().add({ x: -HEAD_R, y: 0, z: 0 })).x, 0) / 2;
      const dist = Math.hypot(pa.x - pb.x, pa.y - pb.y);
      rows.push({
        edgeGapPx: +(dist - ra - rb).toFixed(1), distPx: +dist.toFixed(1),
        raPx: +ra.toFixed(1), rbPx: +rb.toFixed(1),
        hc: +(ca.distanceTo(cb)).toFixed(3),
        A: A.state.name, B: B.state.name,
      });
    }
    if (performance.now() - t0 < SECONDS * 1000) requestAnimationFrame(tick);
    else resolve({ rows, errs: [] });
  }
  requestAnimationFrame(tick);
}), { SECONDS, HEAD_R });

const F = out.rows;
const mn = (a) => Math.min(...a);
const sorted = F.slice().sort((a, b) => a.edgeGapPx - b.edgeGapPx);
const worst = sorted.slice(0, 6);
const brawl = F.filter((r) => r.A === 'BLADE_LOCK' || r.A === 'CLASH' || r.B === 'BLADE_LOCK' || r.B === 'CLASH');
const res = {
  viewport: `${W}x${H}`, frames: F.length, errors: errs.slice(0, 3),
  edgeGapPx: {
    min: F.length ? mn(F.map((r) => r.edgeGapPx)) : null,
    mean: F.length ? +(F.reduce((s, r) => s + r.edgeGapPx, 0) / F.length).toFixed(1) : null,
    pctNegative: F.length ? +(100 * F.filter((r) => r.edgeGapPx < 0).length / F.length).toFixed(1) : null,
    pctUnder10: F.length ? +(100 * F.filter((r) => r.edgeGapPx < 10).length / F.length).toFixed(1) : null,
  },
  brawl: brawl.length ? { n: brawl.length, min: mn(brawl.map((r) => r.edgeGapPx)), mean: +(brawl.reduce((s, r) => s + r.edgeGapPx, 0) / brawl.length).toFixed(1), pctNegative: +(100 * brawl.filter((r) => r.edgeGapPx < 0).length / brawl.length).toFixed(1) } : null,
  worldHeadMin: F.length ? mn(F.map((r) => r.hc)) : null,
  worstFrames: worst,
};
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, 'tools/shots/screen_gap.json'), JSON.stringify({ res, frames: F }, null, 1));
console.log(JSON.stringify(res, null, 1));
await browser.close(); srv.close();
process.exit(0);
