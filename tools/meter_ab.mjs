// tools/meter_ab.mjs — three placements for the duel-state badge, rendered side
// by side, with the space between the HUD and the meter measured so the choice
// is made on numbers + pixels rather than taste-in-the-dark.
//
//   node tools/meter_ab.mjs
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'fs';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 9009);
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

// A: current — seated on the track seam with a 3px plate ring
const A = ``;
// B: seated, but with a wider ring and a lift so the notch reads clearly
const B = `
  #meter-duel { top: 2px !important; padding: 6px 14px !important;
    box-shadow: 0 0 0 5px #080A16, 0 7px 20px rgba(0,0,0,0.6) !important;
    border-color: rgba(255,255,255,0.14) !important; }
`;
// C: parked in the gap between the HUD and the meter plate (no seam crossing)
const C = `
  #meter-duel { top: -20px !important; transform: translate(-50%, -50%) !important; }
  #meter { margin-top: 0 !important; }
`;
const variants = [['A_seated_current', A], ['B_seated_notched', B], ['C_above_plate', C]];

const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(`http://localhost:${PORT}/?mode=demo&seed=7`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(1500);
const geo = await page.evaluate(() => {
  const r = (s) => { const b = document.querySelector(s).getBoundingClientRect(); return { top: +b.top.toFixed(1), bottom: +b.bottom.toFixed(1), left: +b.left.toFixed(1), right: +b.right.toFixed(1), h: +b.height.toFixed(1) }; };
  return { hud: r('#hud'), meter: r('#meter'), track: r('#meter-track'), pill: r('#meter-duel'), brand: r('#brand') };
});
const rows = [['variant', 'pillTop', 'pillBottom', 'pillH', 'gapToHudPx', 'pillInsideTrackPct', 'notes']];
mkdirSync(path.join(root, 'tools/shots'), { recursive: true });
for (const [name, css] of variants) {
  await page.evaluate((c) => {
    let s = document.getElementById('__ab');
    if (!s) { s = document.createElement('style'); s.id = '__ab'; document.head.appendChild(s); }
    s.textContent = c;
  }, css);
  await page.evaluate(() => window.__duelPage.handleState({ pressure: 0.62, price: 67420.5, tps: 41, change24hPct: 1.84, change24hAbs: 1220 }));
  await page.waitForTimeout(120);
  const g = await page.evaluate(() => {
    const r = (s) => { const b = document.querySelector(s).getBoundingClientRect(); return { top: +b.top.toFixed(1), bottom: +b.bottom.toFixed(1), h: +b.height.toFixed(1) }; };
    const hud = r('#hud'), tr = r('#meter-track'), p = r('#meter-duel');
    const inside = Math.max(0, Math.min(p.bottom, tr.bottom) - Math.max(p.top, tr.top));
    return { hudBottom: hud.bottom, pillTop: p.top, pillBottom: p.bottom, pillH: p.h, trackTop: tr.top, trackBottom: tr.bottom, pillInsideTrackPct: +(100 * inside / p.h).toFixed(0) };
  });
  rows.push([name, g.pillTop, g.pillBottom, g.pillH, +(g.pillTop - g.hudBottom).toFixed(1), g.pillInsideTrackPct, '']);
  await page.screenshot({ path: path.join(root, `tools/shots/meterAB_${name}.png`), clip: { x: 380, y: 0, width: 520, height: 175 } });
}
await writeFile(path.join(root, 'tools/shots/meterAB.json'), JSON.stringify({ geo, rows }, null, 1));
console.log(JSON.stringify({ geo, rows }, null, 1));
await browser.close(); srv.close();
process.exit(0);
