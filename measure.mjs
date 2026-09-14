// measure.mjs - exact on-screen size of the duelists + moon, via projection.
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
const root = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const MIME = { '.html': 'text/html', '.js': 'text/javascript' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  try { const d = await readFile(path.join(root, p)); res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(d); }
  catch { res.writeHead(404); res.end(); }
});
await new Promise(r => srv.listen(8935, r));
const cands = [process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe', process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe'];
const exe = cands.find(c => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:8935/', { waitUntil: 'load' });
await page.waitForTimeout(4000);
const out = await page.evaluate(() => {
  const d = window.__duelDebug;
  const T = d.rope.mesh.constructor; // not needed; use three from the scene objects
  const cam = d.camera, r = d.renderer;
  const W = r.domElement.clientWidth, H = r.domElement.clientHeight;
  // project every mesh vertex of a cat to screen and take the bbox
  function screenBox(obj) {
    let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9, n = 0;
    obj.updateWorldMatrix(true, true);
    obj.traverse((o) => {
      if (!o.isMesh || !o.geometry) return;
      const pos = o.geometry.attributes.position;
      if (!pos) return;
      const v = new o.position.constructor(); // THREE.Vector3
      for (let i = 0; i < pos.count; i += 3) {
        v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld).project(cam);
        const x = (v.x * 0.5 + 0.5) * W, y = (-v.y * 0.5 + 0.5) * H;
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
        n++;
      }
    });
    return { w: Math.round(maxX - minX), h: Math.round(maxY - minY), top: Math.round(minY), bottom: Math.round(maxY), n };
  }
  const a = screenBox(d.catA.root), b = screenBox(d.catB.root);
  const moon = screenBox(d.arena.userData.moon);
  return { W, H, catA: a, catB: b, moon };
});
console.log(JSON.stringify(out, null, 1));
await browser.close(); srv.close(); process.exit(0);
