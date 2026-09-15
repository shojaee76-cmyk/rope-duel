// tools/probe.mjs — fight + rope + perf telemetry (run before/after a change).
// Serves the repo, renders ?mode=demo&seed=7 in a fixed viewport, then measures:
//   rope   : interior point mean speed / accel / y-travel (shakiness)
//   fight  : move-category counts, clashes, attacks, pair gap stats, time idle
//   perf   : draw calls, triangles, fps, page errors
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const label = process.argv[2] || 'run';
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8951);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
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
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(3000);

const res = await page.evaluate(() => new Promise((resolve) => {
  const d = window.__duelDebug;
  const scene = d.arena.parent;
  const rope = d.rope;
  const N = rope.count;
  const hist = [];
  const vis = [];
  const catStates = [];
  let clashes = 0;
  const prevClash = d.director.onClash;
  d.director.onClash = (...a) => { clashes++; if (prevClash) prevClash(...a); };
  const moveCount = {};
  const samples = { gap: [], pressure: [], A: [], B: [] };
  let frames = 0, idleFrames = 0;
  const IDLE = new Set(['IDLE', 'RECOVER', 'FREEZE']);
  const t0 = performance.now();
  function frame() {
    hist.push(rope.pos.map((p) => [p.x, p.y, p.z]));
    vis.push((rope.spos || rope.pos).map((p) => [p.x, p.y, p.z]));
    for (const s of ['A', 'B']) {
      const c = d['cat' + s];
      samples[s].push([c.x + c.pose.xOff, c.root.position.y, c.state.name]);
      moveCount[c.state.name] = (moveCount[c.state.name] || 0) + 1;
    }
    samples.gap.push(Math.abs((d.catA.x + d.catA.pose.xOff) - (d.catB.x + d.catB.pose.xOff)));
    samples.pressure.push(d.director.pressure);
    if (IDLE.has(d.catA.state.name)) idleFrames++;
    frames++;
    if (performance.now() - t0 < 30000) requestAnimationFrame(frame);
    else {
      const dt = (performance.now() - t0) / 1000 / hist.length;
      const q = (arr, p) => { const s = arr.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.max(0, Math.floor(p * s.length)))]; };
      const sp = [], ac = [];
      for (let i = 1; i < N - 1; i++) {
        const ys = [];
        for (let k = 2; k < hist.length; k++) {
          const a = hist[k - 2][i], b = hist[k - 1][i], c = hist[k][i];
          const v1 = (b[1] - a[1]) / dt, v2 = (c[1] - b[1]) / dt;
          sp.push(Math.abs(v2)); ac.push(Math.abs(v2 - v1) / dt);
          ys.push(c[1]);
        }
        // (aggregate below)
      }
      const meanOf = (a) => a.reduce((x, y) => x + y, 0) / a.length;
      const stats = (src) => {
        const s2 = [], a2 = [], y2 = [];
        for (let i = 1; i < N - 1; i++) {
          const ps = [], pa = [], py = [];
          for (let k = 2; k < src.length; k++) {
            const a = src[k - 2][i], b = src[k - 1][i], c = src[k][i];
            const v1 = (b[1] - a[1]) / dt, v2 = (c[1] - b[1]) / dt;
            ps.push(Math.abs(v2)); pa.push(Math.abs(v2 - v1) / dt); py.push(c[1]);
          }
          s2.push(meanOf(ps)); a2.push(meanOf(pa));
          y2.push(Math.max(...py) - Math.min(...py));
        }
        return {
          meanSpeed: +meanOf(s2).toFixed(3),
          meanAcc: +meanOf(a2).toFixed(2),
          meanYtravel: +meanOf(y2).toFixed(3),
          maxYtravel: +Math.max(...y2).toFixed(3),
        };
      };
      const rendered = stats(vis);
      // rendered pair separation: samples.gap already stores the gap INCLUDING
      // the per-frame body offsets (xOff), i.e. what the eye sees
      const rGap = samples.gap;
      // per-point aggregation: recompute per point for fairness with old probe
      const perPointSpeed = [], perPointAcc = [], perPointRange = [];
      for (let i = 1; i < N - 1; i++) {
        const s2 = [], a2 = [], y2 = [];
        for (let k = 2; k < hist.length; k++) {
          const a = hist[k - 2][i], b = hist[k - 1][i], c = hist[k][i];
          const v1 = (b[1] - a[1]) / dt, v2 = (c[1] - b[1]) / dt;
          s2.push(Math.abs(v2)); a2.push(Math.abs(v2 - v1) / dt); y2.push(c[1]);
        }
        perPointSpeed.push(meanOf(s2)); perPointAcc.push(meanOf(a2));
        perPointRange.push(Math.max(...y2) - Math.min(...y2));
      }
      // move transitions (a "move" = a run of frames in a non-idle state)
      const runs = {};
      for (const s of ['A', 'B']) {
        let prev = null;
        for (const [, , name] of samples[s]) {
          if (name !== prev && !IDLE.has(name)) runs[name] = (runs[name] || 0) + 1;
          prev = name;
        }
      }
      resolve({
        seconds: +(performance.now() - t0) / 1000,
        frames,
        avgFrameMs: +((performance.now() - t0) / frames).toFixed(1),
        renderFrames: d.renderer.info.render.frame,
        rope: {
          meanSpeed: +meanOf(perPointSpeed).toFixed(3),
          meanAcc: +meanOf(perPointAcc).toFixed(2),
          maxYtravel: +Math.max(...perPointRange).toFixed(3),
          meanYtravel: +meanOf(perPointRange).toFixed(3),
        },
        ropeRendered: rendered,
        fight: {
          clashes,
          moveRuns: runs,
          attacksPerMin: +((Object.entries(runs).reduce((s, [k, v]) => s + v, 0)) / ((performance.now() - t0) / 60000)).toFixed(1),
          gapMin: +Math.min(...rGap).toFixed(2),
          gapMean: +meanOf(rGap).toFixed(2),
          gapClosesUnder1_6: +(100 * rGap.filter((g) => g < 1.6).length / rGap.length).toFixed(1),
          idlePctA: +(100 * idleFrames / frames).toFixed(1),
          pressureAbsMean: +meanOf(samples.pressure.map(Math.abs)).toFixed(3),
        },
        perf: { calls: d.renderer.info.render.calls, tris: d.renderer.info.render.triangles, mem: d.renderer.info.memory },
      });
    }
  }
  requestAnimationFrame(frame);
}));

const fps = await page.evaluate(() => new Promise((res) => {
  let n = 0; const t0 = performance.now();
  function f() { n++; if (performance.now() - t0 < 3000) requestAnimationFrame(f); else res(Math.round(n / 3)); }
  requestAnimationFrame(f);
}));
const shot = await page.screenshot();
await writeFile(`tools/shots/${label}.png`, shot).catch(async () => {
  await writeFile(`tools/${label}.png`, shot);
});
console.log(JSON.stringify({ label, errors, fps, ...res }, null, 1));
await browser.close(); srv.close();
process.exit(0);
