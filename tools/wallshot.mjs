// tools/wallshot.mjs - v19: full frame + a crop of the wall flank (rugs + dado
// + frieze) so the background art pass can be reviewed by a vision model.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const tag = process.argv[2] || 'v19wall';
const root = 'C:/Users/capit/rope-duel';
const PORT = 8983;
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
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1600, height: 900 } });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load' });
await page.waitForTimeout(4000);
// pull the camera back for a wide stage view so the whole wall is in frame
await page.evaluate(() => {
  window.__duelDebug.lockCamera(true, 0, 3.8, 12.8, 0, 3.0, -2);
});
mkdir('tools/shots', { recursive: true });
await page.waitForTimeout(700);
await writeFile(`tools/shots/${tag}_full.png`, await page.screenshot());
// wall flank crop (left rug + dado + frieze), then right flank
await writeFile(`tools/shots/${tag}_flankL.png`, await page.screenshot({ clip: { x: 120, y: 150, width: 620, height: 500 } }));
await writeFile(`tools/shots/${tag}_flankR.png`, await page.screenshot({ clip: { x: 860, y: 150, width: 620, height: 500 } }));
console.log(JSON.stringify({ tag, ok: true }));
await b.close(); srv.close();
process.exit(0);
