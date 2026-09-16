// tools/moonprobe2.mjs - HUD/plates/meter DOM rects + moon/chart overlap check
// across the REAL camera pan range (+/-7.3) at desktop and phone viewports.
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
await new Promise((r) => srv.listen(8995, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });

const out = {};
for (const vp of [{ width: 1280, height: 800, tag: 'wide' }, { width: 390, height: 844, tag: 'narrow' }]) {
  const page = await browser.newPage({ viewport: vp });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(`http://localhost:8995/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);
  out[vp.tag] = await page.evaluate(({ tag }) => {
    const d = window.__duelDebug;
    const cam = d.camera;
    const moon = d.arena.userData.moon;
    const vw = innerWidth, vh = innerHeight;
    const dom = {};
    for (const [k, sel] of Object.entries({ sell: '#tag-sell', buy: '#tag-buy', meter: '#meter-panel', chip: '#status' })) {
      const el = document.querySelector(sel);
      if (!el) { dom[k] = null; continue; }
      const r = el.getBoundingClientRect();
      dom[k] = { l: +(r.left / vw).toFixed(3), r: +(r.right / vw).toFixed(3), t: +(r.top / vh).toFixed(3), b: +(r.bottom / vh).toFixed(3) };
    }
    // moon disc across the full real pan range (director mid clamps to +/-7.3)
    const rows = [];
    const baseX = cam.position.x;
    for (const pan of [-7.3, -5, -3, 0, 3, 5, 7.3]) {
      cam.position.x = baseX + pan;
      cam.lookAt((baseX + pan) * 0.9, 3.15, 0);
      cam.updateMatrixWorld(true);
      const c = moon.position.clone().project(cam);
      const edge = moon.position.clone(); edge.x += 1.855;
      const e = edge.project(cam);
      rows.push({
        pan,
        cx: +(c.x / 2 + 0.5).toFixed(3),
        cyTop: +(0.5 - c.y / 2).toFixed(3),
        r: +Math.abs(e.x - c.x) / 2 / 1, // ndc half-dist -> frame frac half-width = same number
      });
    }
    cam.position.x = baseX; cam.lookAt(baseX * 0.9, 3.15, 0); cam.updateMatrixWorld(true);
    const chart = vw < 700 ? { l: 0.045, r: 0.955, t: 0.175, b: 0.30 } : { l: 0.672, r: 0.985, t: 0.104, b: 0.348 };
    return { vw, vh, dom, rows: rows.map(r => ({ ...r, r: +r.r.toFixed(3) })), chart };
  }, { tag: vp.tag });
  await page.close();
}
console.log(JSON.stringify(out, null, 1));
await browser.close(); srv.close(); process.exit(0);
