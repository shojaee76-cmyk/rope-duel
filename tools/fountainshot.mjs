// baseline screenshots of the current fountain, zoomed framing (camera aimed
// at the fountain) + normal frame, so we can judge the 'low quality' claim
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
await new Promise((r) => srv.listen(9003, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:9003/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(4500);
await page.screenshot({ path: 'tools/shots/fountain_before_normal.png' });
// zoom shot: move camera to frame the fountain at z=-3
await page.evaluate(() => {
  const cam = window.__duelDebug.camera;
  cam.position.set(0, 2.1, 1.2); cam.lookAt(0, 0.5, -3);
});
await page.waitForTimeout(600);
await page.screenshot({ path: 'tools/shots/fountain_before_zoom.png' });
console.log('saved');
await b.close(); srv.close(); process.exit(0);
