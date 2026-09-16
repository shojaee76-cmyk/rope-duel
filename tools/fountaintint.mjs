// pressure-tint E2E: force director.pressure to +1 then -1, screenshot each,
// measure dominant water hue in the basin region (BUY green vs SELL red shift)
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
await new Promise((r) => srv.listen(9004, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:9004/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(4000);
await page.evaluate(() => { const cam = window.__duelDebug.camera; cam.position.set(0, 2.1, 1.2); cam.lookAt(0, 0.5, -3); });
// the demo driver overwrites pressure each frame, so drive it via the same
// setPressure path the demo uses, after disarming the demo oscillator
await page.evaluate(() => { window.__duelDebug.freeze(0); window.__duelDebug.demo = { on: false }; });
const force = (P) => page.evaluate((p) => { window.__duelDebug.director.setPressure(p); }, P);
const shoot = async (name) => { await page.waitForTimeout(1500); await page.screenshot({ path: `tools/shots/fountain_${name}.png` }); };
await force(1);
await shoot('tint_buy');
await force(-1);
await shoot('tint_sell');
console.log('tint shots saved');
await b.close(); srv.close(); process.exit(0);
