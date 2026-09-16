// freeze cats at the poles, center region = ground only; fountain must be absent
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
await new Promise((r) => srv.listen(9007, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:9007/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(4000);
await page.evaluate(() => { window.__duelDebug.freeze(true, 8, -8); });
await page.waitForTimeout(800);
await page.screenshot({ path: 'tools/shots/v17_frozen.png' });
console.log('frozen shot saved');
await b.close(); srv.close(); process.exit(0);
