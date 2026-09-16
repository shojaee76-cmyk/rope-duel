// fountain footprint from the NORMAL gameplay camera (no forced camera move)
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
await new Promise((r) => srv.listen(9005, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:9005/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(4500);
const proj = await page.evaluate(() => {
  const d = window.__duelDebug;
  const cam = d.camera;
  const v0 = cam.position.clone(); // definitely a Vector3
  const pts = { base: [0, 0, -3], lip: [0, 0.66, -3], bowl: [0, 1.66, -3], jetTop: [0, 2.6, -3] };
  const out = {};
  for (const [k, [x, y, z]] of Object.entries(pts)) {
    const p = v0.clone().set(x, y, z).project(cam);
    out[k] = { x: +(p.x / 2 + 0.5).toFixed(3), y: +(-p.y / 2 + 0.5).toFixed(3), behind: p.z > 1 };
  }
  return out;
});
console.log('fountain screen footprint (game camera):', JSON.stringify(proj));
await page.screenshot({ path: 'tools/shots/fountain_ingame.png' });
await b.close(); srv.close(); process.exit(0);
