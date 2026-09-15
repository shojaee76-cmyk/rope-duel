// tools/triple_probe.mjs — WHERE in the frame does the head state change?
// Measures the muzzle-tip distance at three points of the SAME frame:
//   1. end of the scene's contact constraint  (scene's own value: __duelDebug.contact.post)
//   2. immediately after renderer.render       (wrapped here)
//   3. in a rAF tick after the scene loop      (what the grader normally sees)
// If (1) is large while (3) is small, something moves the cats AFTER the
// constraint; if (2) agrees with (1), the grader's read is a different frame.
//
//   node tools/triple_probe.mjs [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 18);
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 9005);
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
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
].find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(2000);

const out = await page.evaluate((SECONDS) => new Promise((resolve) => {
  const d = window.__duelDebug, A = d.catA, B = d.catB;
  const tip = (c) => { const v = c.data.head.position.clone(); c.data.head.localToWorld(v.set(0.30, -0.04, 0)); return v; };
  const cen = (c) => { const v = c.data.head.position.clone(); c.data.head.localToWorld(v.set(0, 0, 0)); return v; };
  const rows = [];
  // (2) immediately after render
  const origRender = d.renderer.render.bind(d.renderer);
  d.renderer.render = function (...a) {
    const r = origRender(...a);
    const t = tip(A).distanceTo(tip(B));
    const ca = cen(A), cb = cen(B), ta = tip(A), tb = tip(B);
    rows.push({ at: 'postRender', o: +t.toFixed(4), hc: +ca.distanceTo(cb).toFixed(4), n: d.contact.post ? d.contact.post.n : -1,
      cdx: +Math.abs(ca.x - cb.x).toFixed(3), cdy: +Math.abs(ca.y - cb.y).toFixed(3), cdz: +Math.abs(ca.z - cb.z).toFixed(3),
      tdx: +Math.abs(ta.x - tb.x).toFixed(3), tdy: +Math.abs(ta.y - tb.y).toFixed(3), tdz: +Math.abs(ta.z - tb.z).toFixed(3),
      A: A.state.name, B: B.state.name, gap: +Math.abs((A.x + A.pose.xOff) - (B.x + B.pose.xOff)).toFixed(3) });
    return r;
  };
  const t0 = performance.now();
  function tick() {
    const t = tip(A).distanceTo(tip(B));
    // (3) rAF read, always recorded so it can be paired with (1)/(2) by frame number
    rows.push({ at: 'raf', o: +t.toFixed(4), hc: +cen(A).distanceTo(cen(B)).toFixed(4), n: d.contact.post ? d.contact.post.n : -1, sceneO: d.contact.post ? d.contact.post.o : -1, sceneHc: d.contact.post ? d.contact.post.hc : -1, sceneAx: d.contact.post ? d.contact.post.Ax : -1, rafAx: +A.root.position.x.toFixed(4) });
    if (performance.now() - t0 < SECONDS * 1000) requestAnimationFrame(tick);
    else resolve({ rows: rows.slice(-400), post: d.contact.post, worstOut: d.contact.worstOut, worst: d.contact.worst });
  }
  requestAnimationFrame(tick);
}), SECONDS);

mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, 'tools/shots/triple.json'), JSON.stringify(out, null, 1));
const crossed = out.rows.filter((r) => r.o < 0.12);
const bad = out.rows.filter((r) => r.o < 0.12);
const mism = out.rows.filter((r) => r.sceneO > 0.15 && r.o < 0.12);
console.log(JSON.stringify({
  errors: errs.slice(0, 3), sampled: out.rows.length, bad: bad.length, mismatch: mism.length,
  worstOut: out.worstOut, worst: out.worst, lastPost: out.post,
  badSamples: bad.slice(0, 10), mismatchSamples: mism.slice(0, 6),
  skullViolations: out.rows.filter((r) => r.hc < 0.455).slice(0, 10),
  skullMin: Math.min(...out.rows.map((r) => r.hc)),
  crossedStats: { n: crossed.length, meanTdy: crossed.length ? +(crossed.reduce((s, r) => s + r.tdy, 0) / crossed.length).toFixed(3) : 0,
    meanTdz: crossed.length ? +(crossed.reduce((s, r) => s + r.tdz, 0) / crossed.length).toFixed(3) : 0,
    states: Object.entries(crossed.reduce((m, r) => { const k = r.A + '/' + r.B; m[k] = (m[k] || 0) + 1; return m; }, {})).sort((a, b) => b[1] - a[1]).slice(0, 6) },
}, null, 1));
await browser.close(); srv.close();
process.exit(0);
