// tools/fightprof.mjs — per-subsystem + per-frame profile of the duel, bucketed
// IDLE / ACTIVE / BRAWL, with GPU time from EXT_disjoint_timer_query_webgl2 and
// a full per-frame dump for correlation analysis.
//
//   node tools/fightprof.mjs [label] [seconds]
// env: HEADED=1 (real window, real GPU vsync), DPR=2 (devicePixelRatio),
//      PORT=..., PIXELRATIO=1|2 (force renderer pixel ratio)
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import { mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const label = process.argv[2] || 'prof';
const SECONDS = Number(process.argv[3] || 26);
const HEADED = !!process.env.HEADED;
const DPR = Number(process.env.DPR || 1);
const PIXELRATIO = process.env.PIXELRATIO ? Number(process.env.PIXELRATIO) : null;
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8961);
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

const cands = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['ProgramFiles(x86)'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({
  executablePath: exe, headless: !HEADED,
  args: HEADED
    ? ['--window-position=0,0', '--window-size=1320,900', '--disable-features=CalculateNativeWinOcclusion']
    : [],
});
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: DPR });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
if (PIXELRATIO) await page.addInitScript(`Object.defineProperty(window,'devicePixelRatio',{get:()=>${PIXELRATIO}});`);
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(2500);

const gl = await page.evaluate(() => {
  const c = document.createElement('canvas');
  const g = c.getContext('webgl2') || c.getContext('webgl');
  const dbg = g && g.getExtension('WEBGL_debug_renderer_info');
  return dbg ? g.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'unknown';
});

const res = await page.evaluate((SECONDS) => new Promise((resolve) => {
  const d = window.__duelDebug;
  const accum = Object.create(null);
  const KEYS = ['ropeStep', 'ropeVisual', 'director', 'catA', 'catB', 'vfx', 'crowd', 'render', 'sceneTotal'];
  for (const k of KEYS) accum[k] = 0;
  function wrap(obj, key, name) {
    const fn = obj[key].bind(obj);
    obj[key] = function (...a) {
      const t0 = performance.now();
      const r = fn.apply(null, a);
      accum[name] += performance.now() - t0;
      return r;
    };
  }
  wrap(d.rope, 'step', 'ropeStep');
  wrap(d.rope, 'updateVisual', 'ropeVisual');
  wrap(d.director, 'update', 'director');
  wrap(d.catA, 'update', 'catA');
  wrap(d.catB, 'update', 'catB');
  wrap(d.vfx, 'update', 'vfx');
  wrap(d.crowd, 'update', 'crowd');

  // ---- GPU timer queries around the render call ----
  const gl = d.renderer.getContext();
  const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
  const pending = [];
  let gpuMs = 0, lastGpu = 0, gpuOK = !!ext;
  if (ext) {
    const fn = d.renderer.render.bind(d.renderer);
    let q = null;
    d.renderer.render = function (...a) {
      if (q) { // previous frame's query still open: drop it, avoid nesting
        const ex = q.q;
        gl.endQuery(ext.TIME_ELAPSED_EXT);
        pending.push({ q: ex, at: performance.now() });
        q = null;
      }
      const qq = gl.createQuery();
      gl.beginQuery(ext.TIME_ELAPSED_EXT, qq);
      const r = fn.apply(null, a);
      gl.endQuery(ext.TIME_ELAPSED_EXT);
      pending.push({ q: qq, at: performance.now() });
      // harvest finished queries
      for (let i = pending.length - 1; i >= 0; i--) {
        const p = pending[i];
        const done = gl.getQueryParameter(p.q, gl.QUERY_RESULT_AVAILABLE);
        const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);
        if (done && !disjoint) {
          lastGpu = gl.getQueryParameter(p.q, gl.QUERY_RESULT) / 1e6;
          gl.deleteQuery(p.q);
          pending.splice(i, 1);
        }
      }
      return r;
    };
  } else {
    wrap(d.renderer, 'render', 'render');
  }

  const A = d.catA, B = d.catB;
  const tmpArr = [];
  const headPts = () => {
    const mk = (cat, x, y, z) => { const v = cat.data.head.position.clone(); cat.data.head.localToWorld(v.set(x, y, z)); return v; };
    const ca = mk(A, 0, 0, 0), cb = mk(B, 0, 0, 0);
    const na = mk(A, 0.30, -0.04, 0), nb = mk(B, 0.30, -0.04, 0);
    return { ca, cb, na, nb };
  };
  const aliveParticles = () => {
    let n = 0;
    for (const k of ['sparksGold', 'sparksSilver', 'embers', 'jade', 'dust', 'fur']) {
      const p = d.vfx[k];
      for (let i = 0; i < p.count; i++) if (p.age[i] < p.life) n++;
    }
    return n;
  };

  const frames = [];
  let lastT = performance.now();
  let lastAcc = { ...accum };
  const t0 = lastT;
  function tick() {
    const now = performance.now();
    const frameMs = now - lastT;
    const parts = {};
    for (const k of KEYS) parts[k] = accum[k] - lastAcc[k];
    parts.gpu = gpuOK ? lastGpu : 0;
    const h = headPts();
    const an = A.state.name, bn = B.state.name;
    frames.push({
      frameMs: +frameMs.toFixed(2),
      js: +(parts.ropeStep + parts.ropeVisual + parts.director + parts.catA + parts.catB + parts.vfx + parts.crowd + parts.render).toFixed(2),
      gpu: +(gpuOK ? parts.gpu : 0).toFixed(2),
      t: +(now - t0).toFixed(0),
      brawl: (an === 'BLADE_LOCK' || an === 'CLASH' || bn === 'BLADE_LOCK' || bn === 'CLASH') ? 1 : 0,
      act: ((an !== 'IDLE' && an !== 'RECOVER') || (bn !== 'IDLE' && bn !== 'RECOVER')) ? 1 : 0,
      parts: aliveParticles(),
      gap: +Math.abs((A.x + A.pose.xOff) - (B.x + B.pose.xOff)).toFixed(3),
      headC: +h.ca.distanceTo(h.cb).toFixed(3),
      nose: +h.na.distanceTo(h.nb).toFixed(3),
      an, bn,
    });
    lastAcc = { ...accum };
    lastT = now;
    if (now - t0 < SECONDS * 1000) requestAnimationFrame(tick);
    else resolve({ frames, secs: (now - t0) / 1000, calls: d.renderer.info.render.calls, tris: d.renderer.info.render.triangles, gpuOK, drawing: [d.renderer.domElement.width, d.renderer.domElement.height] });
  }
  requestAnimationFrame(tick);
}), SECONDS);

const F = res.frames;
const pick = (arr, p) => { const s = arr.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.max(0, Math.round(p * (s.length - 1))))]; };
const mean = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
const f2 = (v) => +(+v).toFixed(2);
function bucketStats(rows) {
  if (!rows.length) return null;
  const fm = rows.map((r) => r.frameMs);
  return {
    n: rows.length,
    fps: f2(1000 / mean(fm)),
    frameMean: f2(mean(fm)), frameP50: f2(pick(fm, 0.5)), frameP95: f2(pick(fm, 0.95)), frameMax: f2(Math.max(...fm)),
    jsMean: f2(mean(rows.map((r) => r.js))),
    gpuMean: f2(mean(rows.map((r) => r.gpu))),
    partsMean: f2(mean(rows.map((r) => r.parts))), partsMax: Math.max(...rows.map((r) => r.parts)),
  };
}
const idle = F.filter((r) => !r.brawl && !r.act);
const act = F.filter((r) => r.act && !r.brawl);
const brawl = F.filter((r) => r.brawl);
const slow = F.filter((r) => r.frameMs > pick(F.map((x) => x.frameMs), 0.9));
const out = {
  label, headed: HEADED, dpr: DPR, glRenderer: gl, drawingBuffer: res.drawing, gpuTimer: res.gpuOK,
  secs: f2(res.secs), frames: F.length, calls: res.calls, tris: res.tris, errors: errors.slice(0, 6),
  overall: bucketStats(F),
  buckets: { idle: bucketStats(idle), active: bucketStats(act), brawl: bucketStats(brawl) },
  slowest10pct: bucketStats(slow),
  contact: {
    gapMin: f2(Math.min(...F.map((r) => r.gap))), gapMean: f2(mean(F.map((r) => r.gap))),
    headCenterMin: f2(Math.min(...F.map((r) => r.headC))), headCenterMean: f2(mean(F.map((r) => r.headC))),
    noseMin: f2(Math.min(...F.map((r) => r.nose))), noseMean: f2(mean(F.map((r) => r.nose))),
    pctHeadsTouching: f2(100 * F.filter((r) => r.headC < 0.45).length / F.length),
    pctNosesTouching: f2(100 * F.filter((r) => r.nose < 0.08).length / F.length),
  },
};
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, `tools/shots/${label}_frames.json`), JSON.stringify(F));
await writeFile(path.join(root, `tools/shots/${label}_prof.json`), JSON.stringify(out, null, 1));
console.log(JSON.stringify(out, null, 1));
await browser.close(); srv.close();
process.exit(0);
