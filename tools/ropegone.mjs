// tools/ropegone.mjs — frozen-frame A/B: is the rope actually drawn in the FULL
// scene? Hijack rAF so the picture holds still, then render twice (rope on/off).
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';

const root = 'C:/Users/capit/rope-duel';
const PORT = 8995;
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
await page.waitForTimeout(3000);
await page.evaluate(() => { window.requestAnimationFrame = () => 0; });   // freeze
await page.waitForTimeout(300);
const render = () => page.evaluate(() => {
  const d = window.__duelDebug;
  d.renderer.render(d.arena.parent, d.camera);
  return true;
});
await render();
const on = await page.screenshot();
await page.evaluate(() => { window.__duelDebug.rope.mesh.visible = false; });
await render();
const off = await page.screenshot();
const a = PNG.sync.read(Buffer.from(on));
const b = PNG.sync.read(Buffer.from(off));
let n = 0, minY = 1e9, maxY = -1, minX = 1e9, maxX = -1;
const perCol = new Map();
for (let y = 0; y < a.height; y++) {
  for (let x = 0; x < a.width; x++) {
    const i = (y * a.width + x) * 4;
    const d = Math.abs(a.data[i] - b.data[i]) + Math.abs(a.data[i + 1] - b.data[i + 1]) + Math.abs(a.data[i + 2] - b.data[i + 2]);
    if (d > 20) {
      n++;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      perCol.set(x, (perCol.get(x) || 0) + 1);
    }
  }
}
const thick = [...perCol.values()];
const tMean = thick.reduce((s, v) => s + v, 0) / (thick.length || 1);
const tStd = Math.sqrt(thick.reduce((s, v) => s + (v - tMean) ** 2, 0) / (thick.length || 1));
console.log(JSON.stringify({
  ropePixels: n, bbox: [minX, minY, maxX, maxY],
  columns: thick.length, thicknessMean: +tMean.toFixed(2), thicknessStd: +tStd.toFixed(2),
  thicknessMin: Math.min(...thick), thicknessMax: Math.max(...thick),
  profile: [...perCol.entries()].filter(([x]) => x % 80 === 0).map(([x, c]) => `${x}:${c}`).join(' '),
}, null, 1));
await browser.close(); srv.close();
process.exit(0);
