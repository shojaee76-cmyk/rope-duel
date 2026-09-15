// tools/headdiag.mjs — why does the head constraint still leave a residual?
// Records, per frame: the RENDERED muzzle-tip distance, the constraint's own
// telemetry delta (checks/fixes/worst), and the full pose of both cats on the
// worst frames, so the residual can be attributed instead of guessed.
//
//   node tools/headdiag.mjs [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 20);
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8997);
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
const exe = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['ProgramFiles(x86)'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
].find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(2000);

const out = await page.evaluate((SECONDS) => new Promise((resolve) => {
  const d = window.__duelDebug, A = d.catA, B = d.catB;
  const head = (cat, x, y, z) => { const v = cat.data.head.position.clone(); cat.data.head.localToWorld(v.set(x, y, z)); return v; };
  const frames = [];
  let lastFixes = d.contact.fixes, lastChecks = d.contact.checks;
  const t0 = performance.now();
  function tick() {
    const na = head(A, 0.30, -0.04, 0), nb = head(B, 0.30, -0.04, 0);
    const ca = head(A, 0, 0, 0), cb = head(B, 0, 0, 0);
    const nose = na.distanceTo(nb);
    frames.push({
      nose: +nose.toFixed(4),
      noseX: +Math.abs(na.x - nb.x).toFixed(3), noseY: +Math.abs(na.y - nb.y).toFixed(3), noseZ: +Math.abs(na.z - nb.z).toFixed(3),
      headC: +ca.distanceTo(cb).toFixed(3),
      gap: +Math.abs((A.x + A.pose.xOff) - (B.x + B.pose.xOff)).toFixed(3),
      checks: d.contact.checks - lastChecks, fixes: d.contact.fixes - lastFixes,
      worst: +d.contact.worst.toFixed(3),
      an: A.state.name, bn: B.state.name,
      Ax: +A.x.toFixed(3), Bx: +B.x.toFixed(3), AxOff: +A.pose.xOff.toFixed(3), BxOff: +B.pose.xOff.toFixed(3),
      Atilt: +A.pose.tilt.toFixed(2), Btilt: +B.pose.tilt.toFixed(2),
      Alean: +A.pose.lean.toFixed(2), Blean: +B.pose.lean.toFixed(2),
      AyOff: +A.pose.yOff.toFixed(3), ByOff: +B.pose.yOff.toFixed(3),
      ArootX: +A.root.position.x.toFixed(3), BrootX: +B.root.position.x.toFixed(3),
      ArootY: +A.root.position.y.toFixed(3), BrootY: +B.root.position.y.toFixed(3),
    });
    lastFixes = d.contact.fixes; lastChecks = d.contact.checks;
    if (performance.now() - t0 < SECONDS * 1000) requestAnimationFrame(tick);
    else resolve({ frames, contact: { ...d.contact } });
  }
  requestAnimationFrame(tick);
}), SECONDS);

const F = out.frames.slice(3);
const worst = F.slice().sort((a, b) => a.nose - b.nose).slice(0, 8);
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const summary = {
  frames: F.length,
  errors: errs.slice(0, 3),
  constraint: out.contact,
  nose: { min: Math.min(...F.map((r) => r.nose)), mean: +mean(F.map((r) => r.nose)).toFixed(3) },
  framesUnder16: F.filter((r) => r.nose < 0.16).length,
  framesUnderNeedingFixButZeroFixes: F.filter((r) => r.nose < 0.16 && r.fixes === 0).length,
  headCMin: Math.min(...F.map((r) => r.headC)),
  worstFrames: worst,
};
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, 'tools/shots/headdiag.json'), JSON.stringify({ summary, frames: F }, null, 1));
console.log(JSON.stringify(summary, null, 1));
await browser.close(); srv.close();
process.exit(0);
