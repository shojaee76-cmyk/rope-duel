
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
const root = 'C:/Users/capit/rope-duel'; const PORT = 9033;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  try { res.writeHead(200, {'Content-Type': MIME[path.extname(p)]||'application/octet-stream'}); res.end(await readFile(path.join(root,p))); } catch { res.writeHead(404); res.end('no'); } });
await new Promise((r) => srv.listen(PORT, r));
const exe = [process.env['ProgramFiles']+'\\Google\\Chrome\\Application\\chrome.exe', process.env['LOCALAPPDATA']+'\\Google\\Chrome\\Application\\chrome.exe'].find((c)=>c&&existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
for (const [w,h,tag] of [[1280,800,'desktop'],[390,744,'mobile390'],[320,568,'mobile320']]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto('http://localhost:'+PORT+'/?mode=demo&seed=7', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const bad = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
      const clip = Math.max(0, r.bottom - innerHeight) + Math.max(0, r.right - innerWidth) + Math.max(0, -r.left) + Math.max(0, -r.top);
      if (clip > 2) out.push({ id: el.id || el.className, txt: (el.textContent||'').slice(0,34), box: [Math.round(r.left),Math.round(r.top),Math.round(r.right),Math.round(r.bottom)], clip: Math.round(clip) });
    }
    return out;
  });
  console.log(tag, JSON.stringify(bad.slice(0, 6)));
  await page.close();
}
await browser.close(); srv.close(); process.exit(0);
