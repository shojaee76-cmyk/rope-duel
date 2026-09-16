// tools/steadiness.mjs — how steady is the fight, in numbers.
//
// "the fight momentum is flakey" is a claim about VARIANCE, so this samples the
// fight's drivers per frame and reports the coefficients of variation and the
// pump/flicker counts that a viewer actually perceives:
//   - attack cadence: intervals between moves, mean/sd/CV (bursty vs steady)
//   - clash + blade-lock cadence: same
//   - camera push-in (camPush): sd and direction reversals (the "pumping" zoom)
//   - fight heat: sd and reversals (drives the crowd's energy)
//   - HUD flicker: how often the fighter plates' state label and data-act change
//   - meter momentum bar: how often the width jumps
//
//   node tools/steadiness.mjs [label] [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const label = process.argv[2] || 'run';
const SECONDS = Number(process.argv[3] || 30);
// ROOT lets the same probe drive a git worktree (A/B runs), OUT says where the JSON
// lands: playwright-core is only installed in the main tree, so the probe stays here
// and points at the other checkout instead of the other way round.
const root = process.env.ROOT || new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const outDir = process.env.OUT || path.join(root, 'tools/shots');
const PORT = Number(process.env.PORT || 9031);
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
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto(`http://localhost:${PORT}/?mode=${process.env.FEED || 'demo'}&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(3000);

const out = await page.evaluate((SECONDS) => new Promise((resolve) => {
  const d = window.__duelDebug;
  const bail = (e, extra = {}) => resolve(Object.assign({ rows: [], attacks: [], locks: [], clashes: [],
    actChanges: 0, labelChanges: 0, momChanges: 0, secs: 0, log: [], reasons: {}, error: String(e) }, extra));
  const IDLE = new Set(['IDLE', 'RECOVER', 'FREEZE']);
  const rows = [];
  const attacks = [];        // timestamps of new moves
  const locks = [], clashes = [];
  let prevA = d.catA.state.name, prevB = d.catB.state.name, prevAct = '', prevLabel = '', prevMom = '';
  let actChanges = 0, labelChanges = 0, momChanges = 0;
  const t0 = performance.now();
  function tick() {
   try {
    const now = performance.now();
    const an = d.catA.state.name, bn = d.catB.state.name;
    if (!IDLE.has(an) && an !== prevA) attacks.push(now);
    if (!IDLE.has(bn) && bn !== prevB) attacks.push(now);
    if ((an === 'BLADE_LOCK' || bn === 'BLADE_LOCK') && an !== prevA && prevA !== 'BLADE_LOCK') locks.push(now);
    if ((an === 'CLASH' || bn === 'CLASH') && an !== prevA && prevA !== 'CLASH') clashes.push(now);
    // HUD flicker: the plates' reaction attribute + state label, and the meter bar
    const act = (document.getElementById('tag-buy') || {}).dataset ? document.getElementById('tag-buy').dataset.act : '';
    const lbl = (document.getElementById('state-buy') || {}).textContent || '';
    const mom = (document.getElementById('mom-buy') || {}).style ? document.getElementById('mom-buy').style.width : '';
    if (act !== prevAct) { actChanges++; prevAct = act; }
    if (lbl !== prevLabel) { labelChanges++; prevLabel = lbl; }
    if (mom !== prevMom) { momChanges++; prevMom = mom; }
    rows.push({
      t: now - t0,
      camZ: d.camera.position.z, camY: d.camera.position.y,
      heat: d.heat ? d.heat() : 0,
      gap: Math.abs((d.catA.x + d.catA.pose.xOff) - (d.catB.x + d.catB.pose.xOff)),
      an, bn,
    });
    prevA = an; prevB = bn;
    if (now - t0 < SECONDS * 1000) requestAnimationFrame(tick);
    else resolve({ rows, attacks, locks, clashes, actChanges, labelChanges, momChanges, secs: (now - t0) / 1000,
      log: (d.director.log || []).slice(), reasons: Object.assign({}, d.director.reasons || {}) });
   } catch (e) {
     // never hang the harness: report what was sampled so far
     bail(e, { rows, attacks, locks, clashes, actChanges, labelChanges, momChanges, secs: (performance.now() - t0) / 1000 });
   }
  }
  requestAnimationFrame(tick);
}), SECONDS);

const mean = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
const sd = (a) => { if (a.length < 2) return 0; const m = mean(a); return Math.sqrt(mean(a.map((x) => (x - m) ** 2))); };
const cv = (a) => (mean(a) ? sd(a) / Math.abs(mean(a)) : 0);
const intervals = (ts) => { const out = []; for (let i = 1; i < ts.length; i++) out.push((ts[i] - ts[i - 1]) / 1000); return out; };
const reversals = (a) => { let n = 0; for (let i = 2; i < a.length; i++) { const d1 = a[i - 1] - a[i - 2], d2 = a[i] - a[i - 1]; if (d1 * d2 < 0 && Math.abs(d2) > 1e-4) n++; } return n; };
const f2 = (v) => +(+v).toFixed(3);

if (out.error) { console.error('SAMPLER ERROR: ' + out.error); }
const F = out.rows.length ? out.rows : [{ t: 0, camZ: 0, camY: 0, heat: 0, gap: 0, an: 'IDLE', bn: 'IDLE' }];
const camZ = F.map((r) => r.camZ);
const heat = F.map((r) => r.heat);
const gap = F.map((r) => r.gap);
const atkIv = intervals(out.attacks);
const lockIv = intervals(out.locks);
const clashIv = intervals(out.clashes);

/* attribution: which source actually drives the attacks, and which one is bursty */
const byReason = {};
// director timestamps are sim SECONDS (unlike this probe's ms samples)
for (const e of out.log) (byReason[e.reason] = byReason[e.reason] || []).push(e.t);
const attribution = {};
for (const [r, ts] of Object.entries(byReason)) {
  const iv = intervals(ts).map((v) => v * 1000);   // already seconds: undo the ms divide
  attribution[r] = { n: ts.length, intervalMean: f2(mean(iv)), intervalSd: f2(sd(iv)), intervalCV: f2(cv(iv)) };
}
// 2 s timeline of attacks per reason: a burst shows up as one reason spiking
const tl = {};
for (const e of out.log) {
  const bin = Math.floor(e.t / 2);
  (tl[bin] = tl[bin] || {})[e.reason] = ((tl[bin] || {})[e.reason] || 0) + 1;
}
const timeline = Object.keys(tl).sort((a, b) => a - b).map((b) => {
  const total = Object.values(tl[b]).reduce((x, y) => x + y, 0);
  return `${b * 2}s:${total}(${Object.entries(tl[b]).map(([k, v]) => k[0] + v).join('')})`;
}).join(' ');

const res = {
  label, feed: process.env.FEED || 'demo', secs: f2(out.secs), errors: errs.slice(0, 3),
  attribution, timeline,
  attacks: { n: out.attacks.length, perSec: f2(out.attacks.length / out.secs), intervalMean: f2(mean(atkIv)), intervalSd: f2(sd(atkIv)), intervalCV: f2(cv(atkIv)) },
  // burstiness: per-2s attack counts; a steady fight keeps this flat
  bursts: (() => { const bins = []; const n = Math.ceil(out.secs / 2); for (let i = 0; i < n; i++) bins.push(out.attacks.filter((t) => t >= i * 2000 && t < (i + 1) * 2000).length); return { per2s: bins, mean: f2(mean(bins)), sd: f2(sd(bins)), cv: f2(cv(bins)) }; })(),
  locks: { n: out.locks.length, intervalMean: f2(mean(lockIv)), intervalSd: f2(sd(lockIv)), intervalCV: f2(cv(lockIv)) },
  clashes: { n: out.clashes.length, intervalMean: f2(mean(clashIv)), intervalSd: f2(sd(clashIv)), intervalCV: f2(cv(clashIv)) },
  camera: { zMean: f2(mean(camZ)), zSd: f2(sd(camZ)), zRange: f2(Math.max(...camZ) - Math.min(...camZ)), reversalsPerSec: f2(reversals(camZ) / out.secs) },
  heat: { mean: f2(mean(heat)), sd: f2(sd(heat)), reversalsPerSec: f2(reversals(heat) / out.secs), p10: f2([...heat].sort((a, b) => a - b)[Math.floor(heat.length * 0.1)]), p90: f2([...heat].sort((a, b) => a - b)[Math.floor(heat.length * 0.9)]) },
  gap: { mean: f2(mean(gap)), sd: f2(sd(gap)), min: f2(Math.min(...gap)), range: f2(Math.max(...gap) - Math.min(...gap)) },
  hud: { actChangesPerSec: f2(out.actChanges / out.secs), labelChangesPerSec: f2(out.labelChanges / out.secs), momChangesPerSec: f2(out.momChanges / out.secs) },
};
mkdirSync(outDir, { recursive: true });
await writeFile(path.join(outDir, `steadiness_${label}.json`), JSON.stringify(res, null, 1));
console.log(JSON.stringify(res, null, 1));
await browser.close(); srv.close();
process.exit(0);
