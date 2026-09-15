// tools/liveload.mjs — reproduce the user's actual complaint: "fps drops midfight
// on the live page". The live page differs from the demo tape in two ways that
// both peak DURING a fight: (1) the tape drives the cats hard, and (2) every
// $50k+ trade spawns a DOM callout (.callout has backdrop-filter AND a 2.3 s
// float animation, up to 14 alive at once). So this harness forces a brawl and
// storms callouts, then reports frame-time stats + hitch counts per variant.
//
//   node tools/liveload.mjs [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 14);
const HEADED = !!process.env.HEADED;
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8991);
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

const NOBLUR = (sel) => `${sel}{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}`;

const variants = [
  { name: 'A baseline (current site)' },
  { name: 'K no-blur on callouts', css: NOBLUR('.callout') },
  { name: 'L no-blur callouts+plates+meter', css: NOBLUR('.callout') + NOBLUR('.plate') + NOBLUR('#meter') },
  { name: 'A2 baseline repeat (noise floor)' },
];

const browser = await chromium.launch({
  executablePath: exe, headless: !HEADED,
  args: HEADED ? ['--window-position=0,0', '--window-size=1320,900', '--disable-features=CalculateNativeWinOcclusion'] : [],
});
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
const results = [];
for (const v of variants) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  if (v.css) await page.addInitScript(`window.addEventListener('DOMContentLoaded',()=>{const s=document.createElement('style');s.textContent=${JSON.stringify(v.css)};document.head.appendChild(s);});`);
  await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);
  const r = await page.evaluate((SECONDS) => new Promise((resolve) => {
    const d = window.__duelDebug, P = window.__duelPage;
    const gl = d.renderer.getContext();
    const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
    let lastGpu = 0;
    const pending = [];
    if (ext) {
      const fn = d.renderer.render.bind(d.renderer);
      d.renderer.render = function (...a) {
        const q = gl.createQuery();
        gl.beginQuery(ext.TIME_ELAPSED_EXT, q);
        const r = fn.apply(null, a);
        gl.endQuery(ext.TIME_ELAPSED_EXT);
        pending.push(q);
        for (let i = pending.length - 1; i >= 0; i--) {
          if (gl.getQueryParameter(pending[i], gl.QUERY_RESULT_AVAILABLE) && !gl.getParameter(ext.GPU_DISJOINT_EXT)) {
            lastGpu = gl.getQueryParameter(pending[i], gl.QUERY_RESULT) / 1e6;
            gl.deleteQuery(pending[i]); pending.splice(i, 1);
          }
        }
        return r;
      };
    }
    // force a hard brawl: strong oscillating pressure + a callout storm at 4/s
    let storm = 0;
    const stormT = setInterval(() => {
      const side = Math.random() < 0.5 ? 'buy' : 'sell';
      P.scene.tradeCallout({
        side, notional: Math.random() < 0.35 ? 300000 + Math.random() * 200000 : 55000 + Math.random() * 90000,
        qty: 0.5 + Math.random(), price: 67000 + Math.random() * 200, provider: 'BYBIT', t: Date.now(),
      });
      storm++;
    }, 250);
    const pressT = setInterval(() => {
      P.scene.setPressure(Math.sin(performance.now() / 900) > 0 ? 0.92 : -0.92);
    }, 120);
    const A = d.catA, B = d.catB;
    const frames = [];
    let lastT = performance.now();
    const t0 = lastT;
    function tick() {
      const now = performance.now();
      const an = A.state.name, bn = B.state.name;
      frames.push({
        frameMs: now - lastT, gpu: lastGpu, callouts: document.getElementById('callouts').childElementCount,
        brawl: (an === 'BLADE_LOCK' || an === 'CLASH' || bn === 'BLADE_LOCK' || bn === 'CLASH') ? 1 : 0,
        act: ((an !== 'IDLE' && an !== 'RECOVER') || (bn !== 'IDLE' && bn !== 'RECOVER')) ? 1 : 0,
      });
      lastT = now;
      if (now - t0 < SECONDS * 1000) requestAnimationFrame(tick);
      else { clearInterval(stormT); clearInterval(pressT); resolve({ frames, storm }); }
    }
    requestAnimationFrame(tick);
  }), SECONDS);
  const F = r.frames.slice(3);
  const mean = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
  const pick = (a, p) => { const s = a.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.max(0, Math.round(p * (s.length - 1))))]; };
  const stat = (rows) => {
    if (!rows.length) return null;
    const fm = rows.map((x) => x.frameMs);
    const secs = fm.reduce((a, b) => a + b, 0) / 1000;
    return {
      n: rows.length, fps: +(1000 / mean(fm)).toFixed(1),
      p50: +pick(fm, 0.5).toFixed(1), p95: +pick(fm, 0.95).toFixed(1), p99: +pick(fm, 0.99).toFixed(1), max: +Math.max(...fm).toFixed(1),
      gpu: +mean(rows.map((x) => x.gpu)).toFixed(1),
      hitchesPerSec: +(fm.filter((x) => x > 25).length / secs).toFixed(1),
      worstHitchS: +(fm.filter((x) => x > 50).length / secs).toFixed(1),
      callouts: +mean(rows.map((x) => x.callouts)).toFixed(1),
    };
  };
  const row = { variant: v.name, storm: r.storm, errors: errs.slice(0, 2), all: stat(F), brawl: stat(F.filter((x) => x.brawl)) };
  results.push(row);
  console.log(JSON.stringify(row));
  await ctx.close();
}
await writeFile(path.join(root, 'tools/shots/liveload.json'), JSON.stringify(results, null, 1));
await browser.close(); srv.close();
process.exit(0);
