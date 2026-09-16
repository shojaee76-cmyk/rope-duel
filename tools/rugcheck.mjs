// tools/rugcheck.mjs - v19: are the wall carpets actually on the wall, in frame,
// and carrying their own hues? (A vision review cannot be trusted to separate a
// rug from the stone; the projection + pixel count can.)
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';

const root = 'C:/Users/capit/rope-duel';
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
await new Promise((r) => srv.listen(8993, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1600, height: 900 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
await page.goto('http://localhost:8993/?mode=demo&seed=11', { waitUntil: 'load' });
await page.waitForTimeout(4000);
await page.evaluate(() => { window.__duelDebug.lockCamera(true, 0, 3.8, 12.8, 0, 3.0, -2); });
await page.waitForTimeout(700);

const rects = await page.evaluate(() => {
  const d = window.__duelDebug, cam = d.camera;
  const out = [];
  const V = new (d.catA.root.position.constructor)();
  d.arena.traverse((o) => {
    if (o.userData && o.userData.rug) {
      const p = o.userData.rug.world;   // {x, y, z}
      const hw = o.userData.rug.w / 2, hh = o.userData.rug.h / 2;
      let l = 1, r = 0, t = 1, b = 0;
      for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
        V.set(p.x + sx * hw, p.y + sy * hh, p.z).project(cam);
        const u = V.x * 0.5 + 0.5, v = -V.y * 0.5 + 0.5;
        l = Math.min(l, u); r = Math.max(r, u); t = Math.min(t, v); b = Math.max(b, v);
      }
      out.push({ x: (l + r) / 2, y: (t + b) / 2, pxW: (r - l), pxH: (b - t) });
    }
  });
  return { rects: out, camZ: cam.position.z };
});
const shot = await page.screenshot();
const png = PNG.sync.read(shot);
const px = (x, y) => { const i = (png.width * y + x) << 2; return [png.data[i], png.data[i + 1], png.data[i + 2]]; };
const checks = [];
function classify(cx, cy, halfW, halfH) {
  let red = 0, blue = 0, gold = 0, stone = 0, n = 0;
  for (let y = Math.max(0, cy - halfH); y < Math.min(png.height, cy + halfH); y += 2) {
    for (let x = Math.max(0, cx - halfW); x < Math.min(png.width, cx + halfW); x += 2) {
      const [r, g, bl] = px(x, y);
      n++;
      if (r > g + 22 && r > bl + 22 && r > 70) red++;
      else if (bl > r + 22 && bl > g + 10 && bl > 60) blue++;
      else if (r > 140 && g > 110 && bl < g - 30) gold++;
      else if (r > 90 && g > 70 && bl > 50 && Math.abs(r - bl) < 60) stone++;
    }
  }
  return { red, blue, gold, stone, n };
}
for (const rc of rects.rects) {
  const cx = Math.round(rc.x * png.width), cy = Math.round(rc.y * png.height);
  const hw = Math.round((rc.pxW * png.width) * 0.5), hh = Math.round((rc.pxH * png.height) * 0.5);
  const c = classify(cx, cy, hw, hh);
  checks.push({ at: [cx, cy], ...c, rugPx: c.red + c.blue });
  console.log(`rug at screen (${cx},${cy}) box ${hw}x${hh}`,
    JSON.stringify(c), `-> rug-coloured ${c.red + c.blue} of ${c.n} sampled`);
  // tight crop for the vision review
  const clip = { x: Math.max(0, cx - hw) - 20, y: Math.max(0, cy - hh) - 20, width: hw * 2 + 40, height: hh * 2 + 40 };
  const buf = await page.screenshot({ clip });
  const { writeFile } = await import('fs/promises');
  await writeFile(`tools/shots/rug_${checks.length}.png`, buf);
}
const ok = checks.length === 2 && checks.every((c) => c.red + c.blue > c.n * 0.15);
console.log(ok ? 'RUGS PRESENT WITH THEIR OWN HUES' : 'RUG PIXELS WEAK/ABSENT');
console.log('rects:', JSON.stringify(rects.rects), 'errors:', JSON.stringify(errs));
await b.close(); srv.close();
process.exit(ok && errs.length === 0 ? 0 : 1);
