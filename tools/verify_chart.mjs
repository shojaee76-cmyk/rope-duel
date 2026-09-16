// tools/verify_chart.mjs — acceptance probe for the LIVE TAPE ON THE WALL.
// The chart used to be a DOM panel (t_189fb722), then a sky panel (v12); since
// v18 it is drawn onto a plane mounted on the arena's back wall (src/
// skychart.js), inside the walnut tape board. This asserts the things that can
// actually break: the texture carries ink, the tape grows and repaints, the
// chip mirrors the feed lifecycle, the board is inside the camera frustum, and
// it sits ON the wall (z near the wall plane, y in the wall band) so it reads
// as part of the architecture.
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

const root = 'C:/Users/capit/rope-duel';
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
await new Promise((r) => srv.listen(8993, r));

const cands = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env['LOCALAPPDATA'] ? process.env['LOCALAPPDATA'].replace(/\\/g, '/') + '/Google/Chrome/Application/chrome.exe' : null,
];
const exe = cands.find((c) => c && existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });

mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
const results = { checks: [] };
function check(name, ok, detail) {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  - ' + detail : ''}`);
}

const readSky = () => {
  const d = window.__duelDebug;
  const sky = d.skyChart;
  const cam = d.camera;
  const st = sky.stats();
  // project the panel's four corners: is it in frame, and where is its bottom?
  const g = sky.mesh.geometry.parameters;
  const corners = [];
  for (const [sx, sy] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
    const v = sky.mesh.position.clone();
    v.x += sx * g.width / 2; v.y += sy * g.height / 2;
    const p = v.project(cam);
    corners.push({ x: +(p.x * 0.5 + 0.5).toFixed(3), y: +(-p.y * 0.5 + 0.5).toFixed(3), ndc: [+p.x.toFixed(2), +p.y.toFixed(2)] });
  }
  const hudHead = (() => {                 // the top of each cat's HAT, in screen fractions
    const out = [];
    for (const cat of [d.catA, d.catB]) {
      const v = cat.data.head.position.clone();
      cat.data.head.localToWorld(v.set(0, 0.25, 0));   // helmet/ear tip, not the pivot
      const p = v.project(cam);
      out.push({ x: +(p.x * 0.5 + 0.5).toFixed(3), y: +(-p.y * 0.5 + 0.5).toFixed(3) });
    }
    return out;
  })();
  return {
    stats: st, hudHead,
    inFrame: (() => { const s = st.screen; return s.l >= -0.35 && s.r <= 1.35 && s.t >= -0.35 && s.b <= 1.35; })(),
    screen: st.screen,
    z: st.position[2], y: st.position[1], variant: st.variant,
    candles: window.__duelPage.feed.candles(),
    feedState: window.__duelPage.feed.state(),
    hudPrice: document.getElementById('price').textContent,
  };
};

async function probe(mode, vp, tag, waitMs) {
  const page = await b.newPage({ viewport: vp });
  const errs = [];
  page.on('pageerror', (e) => errs.push('pageerror: ' + (e.stack || e.message).split('\n')[0]));
  page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await page.goto(`http://localhost:8993/?mode=${mode}`, { waitUntil: 'load' });
  await page.waitForTimeout(waitMs);
  const state = await page.evaluate(readSky);
  check(`[${tag}] sky chart exists (${state.variant} treatment)`, !!state.stats, JSON.stringify(state.stats.plane));
  check(`[${tag}] board texture carries ink (>50 sampled px)`, state.stats.ink > 50, `${state.stats.ink} px, ${state.stats.draws} draws`);
  check(`[${tag}] chip reflects the feed`,
    ['live', 'demo', 'stale', 'off', 'load'].includes(state.stats.chip),
    `${state.stats.chip} "${state.stats.chipText}"`);
  check(`[${tag}] board is inside the camera frame`, state.inFrame,
    `screen ${JSON.stringify(state.screen)}`);
  check(`[${tag}] board is ON the wall (z=${state.z}, y=${state.y})`,
    state.z <= -6.3 && state.z >= -7.6 && state.y >= 1.4 && state.y <= 4.6,
    `z=${state.z} y=${state.y}`);
  check(`[${tag}] zero page errors`, errs.length === 0, errs.slice(0, 3).join(' | ') || 'clean');
  await page.screenshot({ path: path.join(root, `tools/shots/chart_${tag}.png`) });
  await page.close();
  return state;
}

/* run 1: demo mode (always works offline) */
const demo1 = await probe('demo', { width: 1280, height: 800 }, 'sky_demo_desktop', 3500);

/* update proof: the tape must grow and the sky must repaint without a reload */
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:8993/?mode=demo', { waitUntil: 'load' });
await page.waitForTimeout(2500);
const c1 = await page.evaluate(() => ({ count: window.__duelPage.feed.candles().count, last: window.__duelPage.feed.candles().c.slice(-1)[0] || null, ...window.__duelPage.chart.stats() }));
await page.waitForTimeout(3200);
const c2 = await page.evaluate(() => ({ count: window.__duelPage.feed.candles().count, last: window.__duelPage.feed.candles().c.slice(-1)[0] || null, ...window.__duelPage.chart.stats() }));
check('[demo] candles grow over 3.2s (live update)', c2.count > c1.count, `${c1.count} -> ${c2.count}`);
check('[demo] sky repaints as the tape moves', c2.draws > c1.draws, `draws ${c1.draws} -> ${c2.draws}, last ${c1.last} -> ${c2.last}`);
await page.close();

/* narrow screens: the panel is 3D so it cannot overflow, but it must stay framed */
await probe('demo', { width: 390, height: 744 }, 'sky_demo_mobile390', 2500);
await probe('demo', { width: 320, height: 568 }, 'sky_demo_mobile320', 2500);

/* run 2: live mode (real socket + REST seed). The wait is generous: on a slow
 * TLS day the first WS handshake alone can take 5-6 s (measured), and a timed
 * out attempt rotates through backoff before the next endpoint answers. */
const live = await probe('live', { width: 1280, height: 800 }, 'sky_live_desktop', 25000);
check('[live] feed reached OPEN', live.feedState.status === 'open', `status=${live.feedState.status} err=${live.feedState.lastError}`);
check('[live] candle store seeded from REST', live.candles.seeded, `count=${live.candles.count}`);
check('[live] deep history available (>=100 candles)', live.candles.count >= 100, `${live.candles.count} candles`);
check('[live] chip names the live venue', /LIVE/.test(live.stats.chipText), live.stats.chipText);
check('[live] HUD shows a real price', /\d/.test(live.hudPrice), live.hudPrice);

writeFileSync(path.join(root, 'tools/chart_verify.json'), JSON.stringify({ results, demo1 }, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL SKY-CHART CHECKS PASS');
process.exit(failed.length ? 1 : 0);
