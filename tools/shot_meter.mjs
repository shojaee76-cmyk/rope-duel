// tools/shot_meter.mjs — close-up of the pressure meter + duel-state badge, plus
// the measured geometry of the badge relative to the meter plate/track, so the
// "text on top" placement can be judged from numbers as well as pixels.
//
//   node tools/shot_meter.mjs [label] [--freeze]
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const label = process.argv[2] || 'meter';
const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8995);
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
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(1200);
// pin the fight state so the badge shows a real label, and freeze the scene
await page.evaluate(() => { window.__duelDebug.freeze(true, 1.35, -1.35); });
await page.evaluate(() => new Promise((r) => setTimeout(r, 400)));
await page.evaluate(() => {
  // drive a live-looking meter so the fills + labels are non-zero
  window.__duelPage.handleState({ pressure: 0.62, price: 67420.5, tps: 41, change24hPct: 1.84, change24hAbs: 1220 });
});
const geo = await page.evaluate(() => {
  const q = (s) => document.querySelector(s);
  const r = (el) => { const b = el.getBoundingClientRect(); return { x: +b.x.toFixed(1), y: +b.y.toFixed(1), w: +b.width.toFixed(1), h: +b.height.toFixed(1), top: +b.top.toFixed(1), bottom: +b.bottom.toFixed(1) }; };
  const pill = q('#meter-duel'), track = q('#meter-track'), meter = q('#meter');
  const cs = getComputedStyle(pill);
  return {
    meter: r(meter), track: r(track), pill: r(pill),
    pillParentOverflow: getComputedStyle(pill.parentElement).overflow,
    pillParent: pill.parentElement.id,
    // these two numbers decide whether the badge is clipped or just crowded
    pillTopVsTrackTop: +(pill.getBoundingClientRect().top - track.getBoundingClientRect().top).toFixed(1),
    // how much of the pill's height lies above the track's top edge
    pillVisibleHeight: +Math.min(pill.getBoundingClientRect().bottom, track.getBoundingClientRect().bottom) .toFixed(1),
    font: cs.font, padding: cs.padding, bg: cs.backgroundColor, border: cs.borderColor,
    centerLine: r(q('#meter-center')),
  };
});
const shot = await page.screenshot({ clip: { x: geo.meter.x - 24, y: geo.pill.y - 30, width: geo.meter.w + 48, height: geo.meter.h + 78 } });
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
await writeFile(path.join(root, `tools/shots/${label}.png`), shot);
console.log(JSON.stringify(geo, null, 1));
console.log('shot: tools/shots/' + label + '.png');
await browser.close(); srv.close();
process.exit(0);
