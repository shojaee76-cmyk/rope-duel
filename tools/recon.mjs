// tools/recon.mjs — rope-motion + background-inventory probe.
// Serves the site, renders, then reports:
//   rope: per-interior-point speed / acceleration / y-range over N frames
//   circles: every Ring/Torus/Circle geometry, projected to screen coords
//   fps + page errors
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
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
await new Promise((r) => srv.listen(Number(process.env.PORT || 8941), r));
const PORT = Number(process.env.PORT || 8941);

const cands = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['ProgramFiles(x86)'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(4000);

const out = await page.evaluate(() => {
  const d = window.__duelDebug;
  const scene = d.arena.parent;
  const THREEV = d.camera.position.constructor;

  // ---- circle inventory (only things big enough to read as a "circle") ----
  const circles = [];
  const catRoots = new Set([d.catA.root, d.catB.root]);
  scene.updateMatrixWorld(true);
  scene.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    let anc = o.parent;
    while (anc && anc !== scene) { if (catRoots.has(anc)) return; anc = anc.parent; }
    const t = o.geometry.type || '';
    if (!/Ring|Torus|Circle/.test(t)) return;
    const p = o.geometry.parameters || {};
    const rWorld = Math.max(p.radius || 0, p.outerRadius || 0);
    const wp = o.getWorldPosition(new THREEV());
    const ndc = wp.clone().project(d.camera);
    const inFrame = Math.abs(ndc.x) < 1.15 && Math.abs(ndc.y) < 1.15;
    if (!inFrame && rWorld < 0.3) return;
    const center = wp.clone().project(d.camera);
    const edge = wp.clone().add(new THREEV(rWorld, 0, 0)).project(d.camera);
    const px = Math.abs(edge.x - center.x) * 0.5 * 1280;
    circles.push({
      type: t, radius: +rWorld.toFixed(2), pxRadius: Math.round(px),
      world: [+wp.x.toFixed(2), +wp.y.toFixed(2), +wp.z.toFixed(2)],
      screen: [Math.round((ndc.x * 0.5 + 0.5) * 1280), Math.round((-ndc.y * 0.5 + 0.5) * 800)],
      inFrame,
      color: o.material && o.material.color ? '#' + o.material.color.getHexString() : null,
      opacity: o.material ? o.material.opacity : null,
    });
  });
  circles.sort((a, b) => b.pxRadius - a.pxRadius);

  // ---- rope motion over 150 frames ----
  const rope = d.rope;
  const N = rope.count;
  const hist = [];
  return new Promise((res) => {
    let n = 0;
    const t0 = performance.now();
    function sample() {
      hist.push(rope.pos.map((p) => [p.x, p.y, p.z]));
      n++;
      if (n < 150) requestAnimationFrame(sample);
      else {
        const dt = (performance.now() - t0) / 1000 / hist.length;
        const stats = [];
        for (let i = 1; i < N - 1; i++) {
          let sp = [], ac = [];
          for (let k = 2; k < hist.length; k++) {
            const a = hist[k - 2][i], b = hist[k - 1][i], c = hist[k][i];
            const v1 = (b[1] - a[1]) / dt, v2 = (c[1] - b[1]) / dt;
            sp.push(Math.abs(v2));
            ac.push(Math.abs(v2 - v1) / dt);
          }
          const ys = hist.map((h) => h[i][1]);
          const q = (arr, p) => { const s = arr.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.floor(p * s.length))]; };
          stats.push({
            i,
            meanSpeed: +(sp.reduce((x, y) => x + y, 0) / sp.length).toFixed(3),
            p95Speed: +q(sp, 0.95).toFixed(3),
            meanAcc: +(ac.reduce((x, y) => x + y, 0) / ac.length).toFixed(3),
            yRange: +(Math.max(...ys) - Math.min(...ys)).toFixed(3),
            xRange: +(Math.max(...hist.map((h) => h[i][0])) - Math.min(...hist.map((h) => h[i][0]))).toFixed(3),
          });
        }
        const agg = (key) => +(stats.reduce((s, x) => s + x[key], 0) / stats.length).toFixed(3);
        // cat y travel
        res({ circles, dt: +(dt * 1000).toFixed(2) + 'ms', interior: { meanSpeed: agg('meanSpeed'), p95Speed: agg('p95Speed'), meanAcc: agg('meanAcc'), yRange: agg('yRange'), xRange: agg('xRange') }, perPoint: stats });
      }
    }
    requestAnimationFrame(sample);
  });
});

const fps = await page.evaluate(() => new Promise((res) => {
  let n = 0; const t0 = performance.now();
  function f() { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(f); else res(Math.round(n / 2)); }
  requestAnimationFrame(f);
}));
await page.screenshot({ path: 'shots_recon.png' });
console.log(JSON.stringify({ errors, fps, ...out }, null, 1));
await browser.close(); srv.close();
process.exit(0);
