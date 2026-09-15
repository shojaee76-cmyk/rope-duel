// tools/zoomcheck.mjs — why is the zoomed rope off-screen? Report its world box,
// screen projection and renderer state after scaling.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';

const root = 'C:/Users/capit/rope-duel';
const PORT = 8993;
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
const cands = ['C:/Program Files/Google/Chrome/Application/chrome.exe', process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(`http://localhost:${PORT}/?mode=demo`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(2500);
const info = await page.evaluate(() => {
  const d = window.__duelDebug;
  d.catA.root.visible = false; d.catB.root.visible = false; d.flag.group.visible = false;
  d.arena.visible = false;
  const scene = d.arena.parent;
  for (const child of scene.children) {
    if (child === d.rope.mesh || child.isLight) continue;
    child.visible = false;
  }
  d.director.frozen = true;
  d.rope.step(0.3); d.rope.updateVisual();
  const c = d.rope.mesh;
  const report = (label) => {
    c.geometry.computeBoundingBox();
    const bb = c.geometry.boundingBox;
    const p0 = bb.min.clone().applyMatrix4(c.matrixWorld);
    const p1 = bb.max.clone().applyMatrix4(c.matrixWorld);
    const mid = p0.clone().add(p1).multiplyScalar(0.5);
    const scr = mid.clone().project(d.camera);
    return {
      label,
      local: [+bb.min.y.toFixed(2), +bb.max.y.toFixed(2)],
      world: [+p0.y.toFixed(2), +p1.y.toFixed(2)],
      screen: [Math.round((scr.x * 0.5 + 0.5) * 1280), Math.round((-scr.y * 0.5 + 0.5) * 800)],
      visible: c.visible, scale: c.scale.x, posY: +c.position.y.toFixed(2),
      restY: d.rope.restY,
      fog: !!scene.fog, camPos: [+d.camera.position.x.toFixed(2), +d.camera.position.y.toFixed(2), +d.camera.position.z.toFixed(2)],
    };
  };
  const before = report('unscaled');
  const S = 3.2;
  c.scale.setScalar(S);
  c.position.y = d.rope.restY * (1 - S);
  c.updateMatrixWorld(true);
  const after = report('scaled');
  return { before, after, lights: scene.children.filter((x) => x.isLight).map((x) => x.type) };
});
console.log(JSON.stringify(info, null, 1));
const shot = await page.screenshot();
const png = PNG.sync.read(Buffer.from(shot));
let lit = 0;
for (let i = 0; i < png.width * png.height; i++) {
  const l = 0.299 * png.data[i * 4] + 0.587 * png.data[i * 4 + 1] + 0.114 * png.data[i * 4 + 2];
  if (l > 22) lit++;
}
console.log('lit pixels after scale:', lit);
await browser.close(); srv.close();
process.exit(0);
