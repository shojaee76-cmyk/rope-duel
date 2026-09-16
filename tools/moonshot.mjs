// screenshot at pan extremes + centre: the moon must sit clear of the chart
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
await new Promise((r) => srv.listen(8999, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:8999/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(4500);
for (const [tag, pan] of [['centre', 0], ['left', -5], ['right', 5]]) {
  await page.evaluate((pan) => {
    const d = window.__duelDebug;
    const cam = d.camera;
    cam.position.x = pan; cam.lookAt(pan * 0.9, 3.15, 0);
  }, pan);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `tools/shots/moon_${tag}.png` });
}
// phone
const p2 = await b.newPage({ viewport: { width: 390, height: 844 } });
await p2.goto('http://localhost:8999/?mode=demo&seed=7', { waitUntil: 'load' });
await p2.waitForTimeout(4500);
await p2.screenshot({ path: 'tools/shots/moon_phone.png' });
console.log('shots saved');
await b.close(); srv.close(); process.exit(0);
