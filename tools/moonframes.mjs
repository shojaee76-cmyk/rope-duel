// 6 frames over 6s: the moon should be present (orange) in its slot in most
// frames even when a cat occludes it occasionally
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try { const d = await readFile(path.join(root, p)); res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(d); }
  catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(9001, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const isOrange = (r, g, bl) => r > 195 && g > 110 && g < 190 && bl < 95 && r - bl > 110;
for (const vp of [{ width: 1280, height: 800, tag: 'wide', slot: { l: .02, r: .30, t: .01, b: .35 } }, { width: 390, height: 844, tag: 'phone', slot: { l: 0, r: .26, t: 0, b: .15 } }]) {
  const page = await b.newPage({ viewport: vp });
  await page.goto(`http://localhost:9001/?mode=demo&seed=7`, { waitUntil: 'load' });
  await page.waitForTimeout(4000);
  const counts = [];
  for (let k = 0; k < 6; k++) {
    const shot = await page.screenshot();
    const { PNG } = await import('pngjs');
    const png = PNG.sync.read(shot);
    const { width: W, height: H, data } = png;
    let n = 0;
    for (let y = 0; y < H * 0.55; y += 2) for (let x = 0; x < W; x += 2) {
      const i = (y * W + x) * 4;
      const fx = x / W, fy = y / H;
      if (fx > vp.slot.l && fx < vp.slot.r && fy > vp.slot.t && fy < vp.slot.b && isOrange(data[i], data[i + 1], data[i + 2])) n++;
    }
    counts.push(n);
    await page.waitForTimeout(1000);
  }
  const maxN = Math.max(...counts);
  console.log(`${vp.tag}: moon orange per frame = [${counts.join(', ')}]  max=${maxN} -> ${maxN > 250 ? 'MOON VISIBLE' : 'MOON MISSING'}`);
  await page.close();
}
await b.close(); srv.close(); process.exit(0);
