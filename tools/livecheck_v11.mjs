// tools/livecheck_v11.mjs — verify the v11 fixes on the DEPLOYED page, not the
// local build: the meter header row exists and the badge cannot be clipped, the
// head contact constraint holds, and the frame rate does not sag during a brawl.
//
//   node tools/livecheck_v11.mjs [seconds]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';

const SECONDS = Number(process.argv[2] || 22);
const URL_ = process.env.URL || 'https://shojaee76-cmyk.github.io/rope-duel/';
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const exe = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
].find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' && !/websocket|handshake/i.test(m.text())) errors.push('console: ' + m.text()); });
await page.goto(URL_, { waitUntil: 'load', timeout: 45000 });
await page.waitForTimeout(3500);

const dom = await page.evaluate(() => {
  const q = (s) => document.querySelector(s);
  const r = (el) => { const b = el.getBoundingClientRect(); return { top: +b.top.toFixed(1), bottom: +b.bottom.toFixed(1), left: +b.left.toFixed(1), right: +b.right.toFixed(1), w: +b.width.toFixed(1), h: +b.height.toFixed(1) }; };
  const head = q('#meter-head'), pill = q('#meter-duel'), track = q('#meter-track'), meter = q('#meter');
  const pr = r(pill), mr = r(meter), tr = r(track);
  // is any part of the pill outside the meter plate (i.e. could it be clipped)?
  const insidePlate = pr.top >= mr.top - 0.5 && pr.bottom <= mr.bottom + 0.5 && pr.left >= mr.left - 0.5 && pr.right <= mr.right + 0.5;
  const overlapsTrack = pr.bottom > tr.top + 0.5;
  return {
    hasHeaderRow: !!head, headerLabel: head ? head.querySelector('.mh-label').textContent.trim() : null,
    pillParent: pill.parentElement.id, pillText: q('#meter-duel-text').textContent,
    pillFullyInsidePlate: insidePlate, pillOverlapsTrackEdge: overlapsTrack,
    pillRect: pr, meterRect: mr, trackRect: tr,
    gateways: { gov: !!window.__duelDebug.gov, quality: typeof window.__duelDebug.quality === 'function' },
    headRadiusLimit: window.__duelDebug && window.__duelDebug.contact ? 'telemetry-present' : 'absent',
  };
});

const perf = await page.evaluate((secs) => new Promise((resolve) => {
  const d = window.__duelDebug, A = d.catA, B = d.catB;
  const headC = (c) => { const v = c.data.head.position.clone(); c.data.head.localToWorld(v.set(0, 0, 0)); return v; };
  const rows = [];
  let lastT = performance.now();
  const t0 = lastT;
  function tick() {
    const now = performance.now();
    const an = A.state.name, bn = B.state.name;
    rows.push({
      ms: now - lastT,
      gap: Math.abs((A.x + A.pose.xOff) - (B.x + B.pose.xOff)),
      hc: headC(A).distanceTo(headC(B)),
      brawl: (an === 'BLADE_LOCK' || an === 'CLASH' || bn === 'BLADE_LOCK' || bn === 'CLASH') ? 1 : 0,
    });
    lastT = now;
    if (now - t0 < secs * 1000) requestAnimationFrame(tick);
    else resolve({ rows, quality: d.quality ? d.quality() : null, provider: (window.__duelPage && window.__duelPage.feed.state().providerLabel) || null });
  }
  requestAnimationFrame(tick);
}), SECONDS);

const F = perf.rows.slice(3);
const mean = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
const stat = (rows) => rows.length ? { n: rows.length, fps: +(1000 / mean(rows.map((x) => x.ms))).toFixed(1), p95: +rows.map((x) => x.ms).sort((a, b) => a - b)[Math.min(rows.length - 1, Math.round(0.95 * rows.length))].toFixed(1) } : null;
const out = {
  url: URL_, errors: errors.slice(0, 4), dom,
  live: {
    provider: perf.provider,
    fpsIdle: stat(F.filter((x) => !x.brawl)), fpsBrawl: stat(F.filter((x) => x.brawl)), fpsAll: stat(F),
    gapMean: +mean(F.map((x) => x.gap)).toFixed(2), gapMin: +Math.min(...F.map((x) => x.gap)).toFixed(2),
    headCentreMin: +Math.min(...F.map((x) => x.hc)).toFixed(3),
    framesWithHeadsTouching: F.filter((x) => x.hc < 0.66).length,
    governor: perf.quality,
  },
};
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, 'tools/shots/livecheck_v11.json'), JSON.stringify({ out, frames: F.length }, null, 1));
console.log(JSON.stringify(out, null, 1));
await page.screenshot({ path: path.join(root, 'tools/shots/deployed_v11.png') });
await browser.close();
process.exit(0);
