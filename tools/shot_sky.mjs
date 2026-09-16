// tools/shot_sky.mjs — render each sky-chart treatment and save a full frame plus
// a crop of the panel, so the choice between them is made on real pixels.
//
//   node tools/shot_sky.mjs [mode] [maxWaitMs]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const mode = process.argv[2] || 'live';
const WAIT = Number(process.argv[3] || 12000);
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 9023);
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
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });

for (const v of ['slab', 'aurora', 'stars']) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(`http://localhost:${PORT}/?mode=${mode}&sky=${v}`, { waitUntil: 'load', timeout: 30000 });
  // wait for the tape to fill (demo builds 1 candle/s; live seeds 300 at once)
  await page.waitForTimeout(WAIT);
  const st = await page.evaluate(() => window.__duelPage.chart.stats());
  const box = await page.evaluate(() => {
    const d = window.__duelDebug, cam = d.camera, sky = d.skyChart, el = d.renderer.domElement;
    const g = sky.mesh.geometry.parameters;
    const xs = [], ys = [];
    for (const [sx, sy] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
      const p = sky.mesh.position.clone();
      p.x += sx * g.width / 2; p.y += sy * g.height / 2;
      p.project(cam);
      xs.push((p.x * 0.5 + 0.5) * el.clientWidth); ys.push((-p.y * 0.5 + 0.5) * el.clientHeight);
    }
    return { x: Math.max(0, Math.min(...xs) - 26), y: Math.max(0, Math.min(...ys) - 26), width: Math.min(...xs) === 0 ? 0 : Math.max(...xs) - Math.min(...xs) + 52, height: Math.max(...ys) - Math.min(...ys) + 52 };
  });
  await page.screenshot({ path: path.join(root, `tools/shots/sky_${v}_full.png`) });
  await page.screenshot({ path: path.join(root, `tools/shots/sky_${v}_crop.png`), clip: box });
  console.log(JSON.stringify({ variant: v, stats: { ink: st.ink, candles: st.candles, chip: st.chipText, tex: [st.textureW, st.textureH], scale: st.screenScale }, crop: box, errors: errs.slice(0, 2) }));
  await page.close();
}
await browser.close(); srv.close();
process.exit(0);
