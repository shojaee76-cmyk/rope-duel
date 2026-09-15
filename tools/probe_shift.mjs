
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
const root = 'C:/Users/capit/rope-duel';
const PORT = 8999;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  try { const d = await readFile(path.join(root, p)); res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(d); }
  catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(PORT, r));
const exe = [process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe', process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe'].find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
await page.goto('http://localhost:' + PORT + '/?mode=demo&seed=7', { waitUntil: 'load' });
await page.waitForTimeout(1500);
const out = await page.evaluate(() => {
  const d = window.__duelDebug, A = d.catA, B = d.catB;
  const tip = (c) => { const v = c.data.head.position.clone(); c.data.head.localToWorld(v.set(0.30, -0.04, 0)); return v; };
  const r = {};
  // 1) does a root.position.x shift propagate to the head tip without a render?
  const t0 = tip(A);
  A.root.position.x += 0.5;
  const t1 = tip(A);                       // stale matrix expected
  A.root.updateMatrixWorld(true);
  const t2 = tip(A);
  r.beforeShift = +t0.x.toFixed(4); r.afterShiftNoUpdate = +t1.x.toFixed(4); r.afterForcedUpdate = +t2.x.toFixed(4);
  A.root.position.x -= 0.5; A.root.updateMatrixWorld(true);
  // 2) matrix auto-update flags
  r.autoUpdate = A.root.matrixAutoUpdate;
  r.worldAutoUpdate = A.root.matrixWorldAutoUpdate;
  r.hasFlag = 'matrixWorldNeedsUpdate' in A.root;
  // 3) what does the loop do to x each frame (is the shift overwritten before render)?
  r.catAx = A.x; r.rootX = A.root.position.x; r.poseXOff = A.pose.xOff;
  // 4) freeze check: does director overwrite cat.x every frame?
  const xa0 = A.x; d.director.frozen = true; d.director.stumbling = false;
  return r;
});
console.log(JSON.stringify(out, null, 1));
await browser.close(); srv.close(); process.exit(0);
