// tools/ropelab.mjs — MEASURE the rendered rope instead of asking a vision model.
// Hides cats/vfx/crowd, screenshots the rope band, and reports:
//   thickness profile  : rope pixel rows per column (silhouette / twist bulges)
//   texture energy     : luminance std inside the rope with the map ON vs OFF
//   rope pixel count   : sanity (is the rope actually in frame?)
// Usage: node tools/ropelab.mjs [tag]
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';

const tag = process.argv[2] || 'rope';
const root = 'C:/Users/capit/rope-duel';
const PORT = Number(process.env.PORT || 8981);
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
await page.goto(`http://localhost:${PORT}/?mode=demo`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(3000);
// clear the stage: ONLY the rope stays visible, so the pixel mask is exact
await page.evaluate(() => {
  const d = window.__duelDebug;
  d.catA.root.visible = false;
  d.catB.root.visible = false;
  d.flag.group.visible = false;
  d.arena.visible = false;               // removes the courtyard AND its torches
  const scene = d.arena.parent;
  scene.traverse((o) => {
    if (o.isPoints || o.isMesh && o !== d.rope.mesh && !d.rope.mesh.getObjectById) return;
  });
  // hide every scene child except the rope mesh
  for (const child of scene.children) {
    if (child === d.rope.mesh) continue;
    if (child.isLight) continue;
    child.visible = false;
  }
  d.director.frozen = true;          // stop the fight, hold the rope still
  d.rope.step(0.4);                  // let it settle
  d.rope.updateVisual();
});
await page.waitForTimeout(600);
await mkdir('tools/shots', { recursive: true });
const shotA = await page.screenshot();
await writeFile(`tools/shots/${tag}_textured.png`, shotA);
// geometric silhouette check (exact, no pixel guessing): per-ring radius spread
const geo = await page.evaluate(() => {
  const t = window.__duelDebug.rope.tube;
  const { pos, T, R } = t;
  const radial = R + 1;
  const rows = [];
  for (let i = 0; i <= T; i++) {
    let cx = 0, cy = 0, cz = 0;
    for (let j = 0; j <= R; j++) {
      const o = (i * radial + j) * 3;
      cx += pos[o]; cy += pos[o + 1]; cz += pos[o + 2];
    }
    cx /= radial; cy /= radial; cz /= radial;
    let mn = Infinity, mx = 0;
    for (let j = 0; j <= R; j++) {
      const o = (i * radial + j) * 3;
      const d = Math.hypot(pos[o] - cx, pos[o + 1] - cy, pos[o + 2] - cz);
      if (d < mn) mn = d; if (d > mx) mx = d;
    }
    rows.push({ i, mn: +mn.toFixed(4), mx: +mx.toFixed(4) });
  }
  const mxs = rows.map((r) => r.mx);
  const mns = rows.map((r) => r.mn);
  return {
    ringCount: T + 1,
    outerRadiusMin: +Math.min(...mxs).toFixed(4),
    outerRadiusMax: +Math.max(...mxs).toFixed(4),
    innerRadiusMin: +Math.min(...mns).toFixed(4),
    innerRadiusMax: +Math.max(...mns).toFixed(4),
    outerVariationPct: +(100 * (Math.max(...mxs) - Math.min(...mxs)) / Math.max(...mxs)).toFixed(1),
    withinRingSpreadMin: +Math.min(...rows.map((r) => r.mx - r.mn)).toFixed(4),
    withinRingSpreadMax: +Math.max(...rows.map((r) => r.mx - r.mn)).toFixed(4),
    firstRings: rows.slice(0, 10).map((r) => `${r.mn}/${r.mx}`),
  };
});
// zoomed isolated rope: scale the tube up (and pull it back into frame) so a
// vision model can actually see the surface at ~100px thickness
await page.evaluate(() => {
  const d = window.__duelDebug;
  const S = 3.2;
  d.rope.mesh.scale.setScalar(S);
  d.rope.mesh.position.y = d.rope.restY * (1 - S);   // keep it where the camera looks
});
await page.waitForTimeout(300);
await writeFile(`tools/shots/${tag}_zoom.png`, await page.screenshot());
await page.evaluate(() => {
  window.__duelDebug.rope.mesh.scale.setScalar(1);
  window.__duelDebug.rope.mesh.position.set(0, 0, 0);
});
// now strip the texture: flat albedo, no bump, no roughness map
await page.evaluate(() => {
  const m = window.__duelDebug.rope.mat;
  m.map = null; m.bumpMap = null; m.roughnessMap = null;
  m.color.setHex(0xa67b4f); m.roughness = 0.9; m.needsUpdate = true;
});
await page.waitForTimeout(400);
const shotB = await page.screenshot();
await writeFile(`tools/shots/${tag}_flat.png`, shotB);

function analyse(buf) {
  const png = PNG.sync.read(Buffer.from(buf));
  const { width: W, height: H, data } = png;
  const lum = new Float32Array(W * H);
  const isRope = new Uint8Array(W * H);
  let anyLit = 0;
  for (let i = 0; i < W * H; i++) {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2];
    lum[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum[i] > 22) { isRope[i] = 1; anyLit++; }
  }
  // thickness profile per column in the rope band (world rope y ~ 2.9-3.3)
  const y0 = 380, y1 = 560;
  const prof = [];
  const cols = [];
  for (let x = 0; x < W; x += 4) {
    let n = 0, sum = 0, sum2 = 0;
    for (let y = y0; y < y1; y++) {
      if (isRope[y * W + x]) { n++; sum += lum[y * W + x]; sum2 += lum[y * W + x] ** 2; }
    }
    const mean = n ? sum / n : 0;
    const sd = n > 3 ? Math.sqrt(Math.max(0, sum2 / n - mean * mean)) : 0;
    prof.push(n);
    cols.push({ x, n, mean: +mean.toFixed(1), sd: +sd.toFixed(1) });
  }
  const withPixels = cols.filter((c) => c.n >= 4);
  const thick = withPixels.map((c) => c.n);
  const sds = withPixels.map((c) => c.sd);
  const tmean = thick.reduce((a, b) => a + b, 0) / (thick.length || 1);
  const tvars = Math.sqrt(thick.reduce((a, b) => a + (b - tmean) ** 2, 0) / (thick.length || 1));
  return {
    ropePixels: prof.reduce((a, b) => a + b, 0),
    columnsWithRope: withPixels.length,
    thicknessMean: +tmean.toFixed(2),
    thicknessStd: +tvars.toFixed(2),
    thicknessMin: thick.length ? Math.min(...thick) : 0,
    thicknessMax: thick.length ? Math.max(...thick) : 0,
    detailSd: +(sds.reduce((a, b) => a + b, 0) / (sds.length || 1)).toFixed(2),
    sample: withPixels.slice(0, 24).map((c) => `${c.x}:${c.n}`).join(' '),
  };
}
// --- definitive rope visibility test in the FULL scene: diff with the rope
// hidden. Whatever changes IS the rope (no colour guessing).
await page.evaluate(() => {
  const scene = window.__duelDebug.arena.parent;
  for (const child of scene.children) child.visible = true;
  window.__duelDebug.arena.traverse((o) => { o.visible = true; });
  window.__duelDebug.rope.mesh.visible = true;
});
await page.waitForTimeout(250);
const fullA = await page.screenshot();
await page.evaluate(() => { window.__duelDebug.rope.mesh.visible = false; });
await page.waitForTimeout(250);
const fullB = await page.screenshot();
await page.evaluate(() => { window.__duelDebug.rope.mesh.visible = true; });
await writeFile(`tools/shots/${tag}_scene_with.png`, fullA);
await writeFile(`tools/shots/${tag}_scene_without.png`, fullB);

const pa = PNG.sync.read(Buffer.from(fullA));
const pb = PNG.sync.read(Buffer.from(fullB));
let diff = 0, minY = 1e9, maxY = -1, minX = 1e9, maxX = -1;
const rows = new Map();
for (let y = 0; y < pa.height; y++) {
  for (let x = 0; x < pa.width; x++) {
    const i = (y * pa.width + x) * 4;
    const d = Math.abs(pa.data[i] - pb.data[i]) + Math.abs(pa.data[i + 1] - pb.data[i + 1]) + Math.abs(pa.data[i + 2] - pb.data[i + 2]);
    if (d > 24) {
      diff++;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      rows.set(x, (rows.get(x) || 0) + 1);
    }
  }
}
const thick = [...rows.values()];
const ropeInfo = {
  ropePixelsInScene: diff,
  bbox: diff ? [minX, minY, maxX, maxY] : null,
  spanX: maxX - minX,
  thicknessMean: +(thick.reduce((a, b) => a + b, 0) / (thick.length || 1)).toFixed(1),
  thicknessMin: thick.length ? Math.min(...thick) : 0,
  thicknessMax: thick.length ? Math.max(...thick) : 0,
};

const A = analyse(shotA);
const B = analyse(shotB);
await browser.close(); srv.close();
console.log(JSON.stringify({ tag, scene: ropeInfo, geo, textured: A, flat: B, detailGain: +(A.detailSd - B.detailSd).toFixed(2) }, null, 1));
process.exit(0);
