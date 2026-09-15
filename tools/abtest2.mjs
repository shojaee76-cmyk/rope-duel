// tools/abtest2.mjs — second A/B round: WHICH backdrop-filter costs frames.
// Round 1 (tools/abtest.mjs) proved the HUD's backdrop-filter blur is the frame
// budget hog (24.5 -> 37.1 fps) while particles cost nothing. This round splits
// the panels into groups (fight-animated vs static) and measures each, and saves
// a screenshot per variant for the visual comparison.
//
//   node tools/abtest2.mjs [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 16);
const HEADED = !!process.env.HEADED;
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8981);
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
// candidate look: blur gone everywhere, glass compensated with denser plates
const SOLID = `
  :root{--plate:rgba(11,13,27,0.86);--panel:rgba(13,16,32,0.92);}
  #brand .eyebrow,#status,#hud,#meter,.plate,#chart-panel,.callout{
    backdrop-filter:none!important;-webkit-backdrop-filter:none!important;}
  #hud,#status,.plate,#meter,#chart-panel{
    background-image:linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0) 42%);}
`;

const variants = [
  { name: 'A baseline', shot: 'variants/A.png' },
  { name: 'G no-blur plates only', css: NOBLUR('.plate'), shot: 'variants/G.png' },
  { name: 'H no-blur plates+meter+callouts', css: NOBLUR('.plate') + NOBLUR('#meter') + NOBLUR('.callout'), shot: 'variants/H.png' },
  { name: 'I blur only on hero HUD', css: NOBLUR('.plate') + NOBLUR('#meter') + NOBLUR('.callout') + NOBLUR('#status') + NOBLUR('#brand .eyebrow') + NOBLUR('#chart-panel'), shot: 'variants/I.png' },
  { name: 'J solid plates + linear sheen', css: SOLID, shot: 'variants/J.png' },
];

const browser = await chromium.launch({
  executablePath: exe, headless: !HEADED,
  args: HEADED ? ['--window-position=0,0', '--window-size=1320,900', '--disable-features=CalculateNativeWinOcclusion'] : [],
});
mkdirSync(path.join(root, 'tools/shots/variants'), { recursive: true });
const results = [];
for (const v of variants) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  if (v.css) await page.addInitScript(`window.addEventListener('DOMContentLoaded',()=>{const s=document.createElement('style');s.textContent=${JSON.stringify(v.css)};document.head.appendChild(s);});`);
  await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2200);
  const r = await page.evaluate((SECONDS) => new Promise((resolve) => {
    const d = window.__duelDebug;
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
    const A = d.catA, B = d.catB;
    const frames = [];
    let lastT = performance.now();
    const t0 = lastT;
    function tick() {
      const now = performance.now();
      const an = A.state.name, bn = B.state.name;
      frames.push({
        frameMs: now - lastT, gpu: lastGpu,
        brawl: (an === 'BLADE_LOCK' || an === 'CLASH' || bn === 'BLADE_LOCK' || bn === 'CLASH') ? 1 : 0,
        act: ((an !== 'IDLE' && an !== 'RECOVER') || (bn !== 'IDLE' && bn !== 'RECOVER')) ? 1 : 0,
      });
      lastT = now;
      if (now - t0 < SECONDS * 1000) requestAnimationFrame(tick);
      else resolve({ frames });
    }
    requestAnimationFrame(tick);
  }), SECONDS);
  const shot = await page.screenshot();
  await writeFile(path.join(root, 'tools/shots', v.shot), shot);
  const F = r.frames.slice(3);
  const mean = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
  const pick = (a, p) => { const s = a.slice().sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.max(0, Math.round(p * (s.length - 1))))]; };
  const b = (rows) => rows.length ? { n: rows.length, fps: +(1000 / mean(rows.map((x) => x.frameMs))).toFixed(1), p50: +pick(rows.map((x) => x.frameMs), 0.5).toFixed(1), gpu: +mean(rows.map((x) => x.gpu)).toFixed(1) } : null;
  const row = {
    variant: v.name, errors: errs.slice(0, 2),
    all: b(F), idle: b(F.filter((x) => !x.brawl && !x.act)), brawl: b(F.filter((x) => x.brawl)),
  };
  results.push(row);
  console.log(JSON.stringify(row));
  await ctx.close();
}
await writeFile(path.join(root, 'tools/shots/abtest2.json'), JSON.stringify(results, null, 1));
await browser.close(); srv.close();
process.exit(0);
