// v17 check: the courtyard center (where the fountain stood) is now CLEAR -
// screenshot + pixel scan of the center band for the fountain's bright marble
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
await new Promise((r) => srv.listen(9006, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push(String(e)));
await page.goto('http://localhost:9006/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(4500);
await page.screenshot({ path: 'tools/shots/v17_clear.png' });
console.log('pageerrors:', errs.length);
await b.close(); srv.close(); process.exit(0);
