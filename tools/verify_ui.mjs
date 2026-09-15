// tools/verify_ui.mjs — v8 "Midnight Arena" UI verification (t_addd6df0).
// Drives the PRODUCTION page in demo mode and asserts, via the real DOM:
//   1. boot: debug handles, fonts loaded, entrance animation done, no errors
//   2. micro-interactions: price tick flash classes, meter widths+pct labels,
//      fighter-plate combat reactions from the live fight state
//   3. fit: no horizontal overflow + key elements inside the viewport
//      (desktop 1280 / tablet 768 / mobile 390 / tiny 320)
//   4. reduced-motion: entrance + pulse animations disabled on request
// Frame-budget evidence: avgFrameMs from a 12s sample at the end.
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
const PORT = Number(process.env.PORT || 8996);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png' };
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
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });

const results = { checks: [] };
function check(name, ok, detail) {
  results.checks.push({ name, ok, detail: detail == null ? '' : String(detail) });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail != null ? '  — ' + detail : ''}`);
}

const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
// Binance is unreachable in this sandbox (documented flap): force demo mode so
// the run is deterministic; errcheck.mjs already proves auto-mode degrades clean.
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(5200); // entrance animation (0.34s max-delay + 0.7s) + fight underway

/* ---------- 1. boot ---------- */
const boot = await page.evaluate(async () => {
  await document.fonts.ready;
  const cs = (el) => getComputedStyle(el);
  const vis = (id) => {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { w: +r.width.toFixed(1), h: +r.height.toFixed(1), visible: r.width > 0 && r.height > 0 };
  };
  return {
    dbg: !!window.__duelDebug,
    pageHandle: !!window.__duelPage,
    fonts: {
      unbounded900: document.fonts.check('900 21px Unbounded'),
      grotesk700: document.fonts.check('700 13px "Space Grotesk"'),
    },
    entranceDone: ['hud', 'meter', 'tag-buy', 'tag-sell', 'chart-panel'].map((id) => ({
      id, opacity: cs(document.getElementById(id)).opacity,
      anim: cs(document.getElementById(id)).animationName,
    })),
    els: {
      hud: vis('hud'), meter: vis('meter'), chartPanel: vis('chart-panel'),
      tagBuy: vis('tag-buy'), tagSell: vis('tag-sell'), status: vis('status'),
      brand: vis('brand'), duelPill: vis('meter-duel'),
    },
  };
});
check('[boot] debug handles', boot.dbg && boot.pageHandle);
check('[boot] Unbounded 900 loaded', boot.fonts.unbounded900);
check('[boot] Space Grotesk 700 loaded', boot.fonts.grotesk700);
check('[boot] entrance animation ran (ui-in)', boot.entranceDone.every((e) => e.anim === 'ui-in'), boot.entranceDone.map((e) => `${e.id}:${e.anim}`).join(' '));
check('[boot] entrance finished (opacity 1)', boot.entranceDone.every((e) => e.opacity === '1'), boot.entranceDone.map((e) => `${e.id}:${e.opacity}`).join(' '));
check('[boot] all key elements rendered non-zero', Object.values(boot.els).every((v) => v && v.visible),
  JSON.stringify(boot.els));

/* ---------- 2. micro-interactions ---------- */
// price tick flash: stop the feed first so the demo tape cannot race the
// synthetic handleState drives (public API, same path visibilitychange uses),
// then drive a rising then falling price through the real handler
const flash = await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const p = window.__duelPage;
  p.feed.stop();
  await sleep(350); // let the last throttled emit drain before driving
  const base = p.feed.state().price || 78000;
  const out = {};
  p.handleState({ price: base + 40, pressure: 0.6, tps: 10, change24hPct: 1.2, change24hAbs: 900 });
  out.upClass = document.getElementById('price').className.includes('tick-up');
  p.handleState({ price: base + 10, pressure: 0.6, tps: 10, change24hPct: 1.2, change24hAbs: 900 });
  out.downClass = document.getElementById('price').className.includes('tick-down');
  await sleep(750);
  out.cleared = !document.getElementById('price').className.includes('tick-');
  // meter widths + pct labels from the same pressure drive
  out.buyW = document.getElementById('meter-buy').style.width;
  out.buyPct = document.getElementById('meter-buy-pct').textContent;
  out.sellPct = document.getElementById('meter-sell-pct').textContent;
  out.momBuy = document.getElementById('mom-buy').style.width;
  p.handleState({ price: base + 10, pressure: -0.55, tps: 10, change24hPct: -0.4, change24hAbs: -300 });
  out.sellW = document.getElementById('meter-sell').style.width;
  out.sellPct2 = document.getElementById('meter-sell-pct').textContent;
  return out;
});
check('[micro] price flashes tick-up on rising tape', flash.upClass);
check('[micro] price flashes tick-down on falling tape', flash.downClass);
check('[micro] tick class clears after ~600ms', flash.cleared);
check('[micro] meter buy fill + % label', flash.buyW === '30%' && flash.buyPct === '60%', `w=${flash.buyW} pct=${flash.buyPct}`);
check('[micro] meter sell fill + % label', flash.sellW === '27.5%' && flash.sellPct2 === '55%', `w=${flash.sellW} pct=${flash.sellPct2}`);
check('[micro] plate momentum bar driven', /\d+%/.test(flash.momBuy), flash.momBuy);

// combat reactions: wait for a real ACT-bearing fight state (lunge/lock/
// clash/hit runs happen ~50x per 30s, so this lands quickly)
let combat = null;
for (let i = 0; i < 200 && !combat; i++) {
  combat = await page.evaluate(() => {
    const d = window.__duelDebug;
    const a = d.catA.state.name, b = d.catB.state.name;
    const actA = document.getElementById('tag-buy').dataset.act;
    if (actA === '') return null; // keep waiting for a reaction-bearing state
    return {
      a, b,
      actA,
      txtA: document.getElementById('state-buy').textContent,
      txtB: document.getElementById('state-sell').textContent,
      pill: document.getElementById('meter-duel-text').textContent,
      pillAct: document.getElementById('meter-duel').className.includes('act'),
    };
  });
  if (!combat) await page.waitForTimeout(100);
}
check('[combat] plate state text follows fight', !!combat && combat.txtA.length > 3 && combat.txtB.length > 3,
  combat ? `A=${combat.a}(${combat.txtA}) B=${combat.b}(${combat.txtB})` : 'never left IDLE in 28s');
check('[combat] plate data-act set when fighting', !!combat && combat.actA !== '' , combat ? combat.actA : '-');
check('[combat] duel pill reacts (text + act class)', !!combat && combat.pillAct && combat.pill !== 'EN GARDE',
  combat ? `${combat.pill} act=${combat.pillAct}` : '-');

/* ---------- 3. fit at 4 viewports ---------- */
const viewports = [[1280, 800, 'desktop'], [768, 900, 'tablet'], [390, 744, 'mobile390'], [320, 568, 'mobile320']];
for (const [w, h, tag] of viewports) {
  await page.setViewportSize({ width: w, height: h });
  await page.waitForTimeout(650);
  const fit = await page.evaluate(() => {
    const ids = ['hud', 'meter', 'chart-panel', 'tag-buy', 'tag-sell', 'status'];
    const out = { overflowX: document.documentElement.scrollWidth - innerWidth, boxes: {} };
    for (const id of ids) {
      const r = document.getElementById(id).getBoundingClientRect();
      out.boxes[id] = { l: Math.round(r.left), r: Math.round(r.right), t: Math.round(r.top), b: Math.round(r.bottom) };
      if (r.left < -1 || r.right > innerWidth + 1 || r.width === 0) out.bad = id;
    }
    return out;
  });
  check(`[fit] ${tag} no overflow + panels in viewport`, fit.overflowX <= 0 && !fit.bad,
    `overflow=${fit.overflowX}px ${fit.bad ? 'bad=' + fit.bad : ''} ${JSON.stringify(fit.boxes.chartPanel)}`);
  await page.screenshot({ path: `tools/shots/ui_fit_${tag}.png` });
}

/* ---------- 4. reduced motion ---------- */
const rmPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await rmPage.emulateMedia({ reducedMotion: 'reduce' });
await rmPage.goto(`http://localhost:${PORT}/?mode=demo&seed=11`, { waitUntil: 'load' });
await rmPage.waitForTimeout(1500);
const rm = await rmPage.evaluate(() => {
  const cs = getComputedStyle(document.getElementById('hud'));
  return { anim: cs.animationName, dur: cs.animationDuration };
});
check('[a11y] reduced-motion disables entrance animation', rm.anim === 'none', `${rm.anim} ${rm.dur}`);
await rmPage.close();

/* ---------- 5. frame budget sample ---------- */
await page.setViewportSize({ width: 1280, height: 800 });
await page.waitForTimeout(400);
const perf = await page.evaluate(() => new Promise((resolve) => {
  let frames = 0; const t0 = performance.now();
  function f() { frames++; if (performance.now() - t0 < 12000) requestAnimationFrame(f); else resolve({ frames, avg: (performance.now() - t0) / frames }); }
  requestAnimationFrame(f);
}));
check('[perf] avg frame <= 25ms at 1280x800 (headless)', perf.avg <= 25, `${perf.avg.toFixed(1)}ms (${perf.frames} frames)`);

check('[errors] zero page/console errors', errs.length === 0, errs.slice(0, 3).join(' | '));
writeFileSync(path.join(root, 'tools/ui_verify.json'), JSON.stringify(results, null, 1));
await browser.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL UI CHECKS PASS');
process.exit(failed.length ? 1 : 0);
