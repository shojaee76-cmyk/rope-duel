// tools/wallboardcheck.mjs - v18 pixel evidence for the wall-mounted tape.
// Screenshots the frozen scene and classifies pixels:
//   1. the BOARD rect (chart.stats().screen) carries dark-glass + candle green/
//      red + gold hairline pixels -> the tape really renders on the wall
//   2. the WALL STRIP around the board (left/right of it, below the coping)
//      holds ~zero azulejo blue/green pixels -> the wall centre is BLANK
//   3. the wall strip still holds stone-tan pixels -> the wall itself is there
//   4. corner sanity: top-left sky stays dark (nothing re-appeared there)
import { chromium } from 'playwright-core';
import { existsSync, writeFileSync } from 'fs';
import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';

const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try {
    const d = await readFile(path.join(root, p));
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(8998, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push(String(e)));

await page.goto('http://localhost:8998/?mode=demo&seed=5', { waitUntil: 'load' });
await page.waitForTimeout(3200);
// freeze the fight so the wall is unobstructed and the shot is deterministic
await page.evaluate(() => window.__duelDebug.freeze(true, 1.1, -1.1));
await page.waitForTimeout(900);

const results = { checks: [] };
const check = (name, ok, detail) => {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  - ' + detail : ''}`);
};

const rect = await page.evaluate(() => window.__duelPage.chart.stats().screen);
// v18.1 NO-COLLISION ASSERTION: read the real geometry out of the live scene
// and prove the board hangs fully proud of every wall slice. Board is a box
// (depth 0.18, centre board.z); wall face at wallZ + 0.25; the coping stone
// (wallZ + 0.02, depth 0.62) is the deepest protruding slice -> its front face
// must sit BEHIND the board's back face by at least the shadow gap.
const geo = await page.evaluate(() => {
  const d = window.__duelDebug;
  const cam = d.camera;
  const b = d.arena.userData.tapeBoard;
  // wall face / coping front from the arena's own constants
  const wallFace = -7.2 + 0.25;
  const copingFront = -7.2 + 0.02 + 0.62 / 2;
  return {
    boardFront: b.z + 0.09, boardBack: b.z - 0.09, boardY: b.y, boardW: b.w,
    chartPlaneZ: window.__duelPage.chart.stats().position ? window.__duelPage.chart.stats().position[2] : null,
    wallFace, copingFront,
    gapVsCoping: (b.z - 0.09) - copingFront,
    gapVsWall: (b.z - 0.09) - wallFace,
    camZ: cam.position.z,
  };
});
check('board back is PROUD of the coping front (no slice-through)',
  geo.gapVsCoping >= 0.02, `gap ${geo.gapVsCoping.toFixed(3)} (board back ${geo.boardBack.toFixed(2)} vs coping ${geo.copingFront.toFixed(2)})`);
check('board back is PROUD of the wall face (shadow gap >= 0.05)',
  geo.gapVsWall >= 0.05, `gap ${geo.gapVsWall.toFixed(3)}`);
check('chart plane sits just in front of the board face (no z-fight)',
  Math.abs(geo.chartPlaneZ - geo.boardFront) < 0.02,
  `plane z ${geo.chartPlaneZ?.toFixed(3)} vs board front ${geo.boardFront.toFixed(3)}`);
check('board is inside the blanked centre (trim clear of piers at x 4.1)',
  geo.boardW / 2 + 0.05 <= 4.1, `half+trim ${(geo.boardW / 2 + 0.05).toFixed(2)} vs pier face 4.10`);
const shot = await page.screenshot({ path: path.join(root, 'tools/shots/wallboard.png') });

const png = PNG.sync.read(shot);
const px = (x, y) => {
  const i = (png.width * y + x) << 2;
  return [png.data[i], png.data[i + 1], png.data[i + 2]];
};
const L = Math.max(0, Math.round(rect.l * png.width));
const R = Math.min(png.width - 1, Math.round(rect.r * png.width));
const T = Math.max(0, Math.round(rect.t * png.height));
const B = Math.min(png.height - 1, Math.round(rect.b * png.height));
// the blank-wall band DIRECTLY BELOW the board (still inside the blanked
// centre, above the frieze) - declared before the classification loops use it
const belowT = Math.min(png.height - 2, B + 4), belowB = Math.min(png.height - 1, B + 42);

// ---- classify the board rect ----
let glass = 0, green = 0, red = 0, gold = 0, bright = 0, boardN = 0;
for (let y = T; y <= B; y += 2) {
  for (let x = L; x <= R; x += 2) {
    const [r, g, bl] = px(x, y);
    boardN++;
    if (r < 40 && g < 44 && bl < 66) glass++;                       // dark glass
    if (g > 120 && g > r * 1.6 && g > bl * 1.2) green++;            // BUY candle
    if (r > 150 && r > g * 1.7 && r > bl * 1.5) red++;              // SELL candle
    if (r > 170 && g > 130 && bl < 110) gold++;                     // gold hairline/text
    if (r + g + bl > 560) bright++;                                 // white text/tag
  }
}
check('board rect is large enough to classify', boardN > 4000, `${boardN} sampled px, rect ${JSON.stringify(rect)}`);
// tape-invariant screen check: the screen is BIMODAL (dark glass vs bright
// candles/text - the mix swings with the tape, the SPREAD does not), while the
// wall stone is uniform. Assert the luminance stdev inside the board rect is
// far above the stone band's.
let sum = 0, sumSq = 0;
for (let y = T; y <= B; y += 2) for (let x = L; x <= R; x += 2) { const [r, g, bl] = px(x, y); const v = 0.2126 * r + 0.7152 * g + 0.0722 * bl; sum += v; sumSq += v * v; }
const sdBoard = Math.sqrt(Math.max(0, sumSq / boardN - (sum / boardN) ** 2));
let wsum = 0, wsumSq = 0, wallN2 = 0;
for (let y = belowT; y <= belowB; y += 2) for (let x = L; x <= R; x += 2) { const [r, g, bl] = px(x, y); const v = 0.2126 * r + 0.7152 * g + 0.0722 * bl; wsum += v; wsumSq += v * v; }
const sdWall = Math.sqrt(Math.max(0, wsumSq / (wallN2 || 1) - (wsum / (wallN2 || 1)) ** 2));
check('board reads as a lit tape screen (contrast spread vs flat stone)',
  sdBoard > 55 && sdBoard > sdWall * 2.2,
  `board lum sd ${sdBoard.toFixed(1)} vs wall sd ${sdWall.toFixed(1)}`);
check('board shows BUY-green candle pixels', green > 40, `${green} px`);
check('board shows SELL-red candle pixels', red > 40, `${red} px`);
check('board shows gold instrument pixels', gold > 25, `${gold} px`);
check('board shows bright text/tag pixels', bright > 20, `${bright} px`);

// ---- the blank wall: the band DIRECTLY BELOW the board (still inside the
// blanked centre, above the frieze) must hold zero azulejo pixels, while the
// dado flanks at the far frame edges still show tiles (they were kept on
// purpose - only the CENTRE was blanked)
let azBlue = 0, azGreen = 0, stone = 0, stripN = 0;
const classify = (x0, x1, y0, y1) => {
  for (let y = y0; y <= y1; y += 2) {
    for (let x = x0; x <= x1; x += 2) {
      const [r, g, bl] = px(x, y);
      stripN++;
      if (bl > 90 && bl > r * 1.5 && bl > g * 1.15) azBlue++;   // azulejo blue
      if (g > 90 && g > r * 1.3 && g > bl * 1.1) azGreen++;     // azulejo green
      if (r > 60 && r > bl * 1.25 && g > 40 && g < r * 1.05) stone++; // warm stone
    }
  }
};
classify(L, R, belowT, belowB);
// a couple of stray pixels can be a drifting firefly/particle; tile PATTERN
// would be hundreds. Blank means: no azulejo field.
check('band below the board is BLANK (no azulejo field)', azBlue + azGreen <= 20,
  `${azBlue} blue + ${azGreen} green of ${stripN} px`);
check('band below the board is still wall stone', stone / (stripN || 1) > 0.15, `${((stone / (stripN || 1)) * 100).toFixed(1)}% stone px`);
// flanks are verified GEOMETRICALLY (pixel bands at the frame edge also catch
// the crowd packs): the azulejo boxes must start outside the blank zone
const flankGeo = await page.evaluate(() => {
  const boxes = [];
  window.__duelDebug.arena.traverse((o) => {
    if (o.geometry && o.geometry.parameters && o.geometry.parameters.depth === 0.54) {
      o.updateMatrixWorld(true);
      const bb = { min: o.geometry.boundingBox ? null : null };
      const b = o.geometry.computeBoundingBox();
      const bx = new (Object.getPrototypeOf(o.position).constructor)();
      boxes.push({ x: +o.position.x.toFixed(2), w: +o.geometry.parameters.width.toFixed(2), y: +o.position.y.toFixed(2) });
    }
  });
  return boxes.filter((b) => b.y < 1.0);   // the dado row (centre y 0.6)
});
const inner = flankGeo.map((b) => Math.abs(Math.abs(b.x) - b.w / 2));
check('azulejo dado is split into flanks clear of the blank centre',
  flankGeo.length === 2 && Math.min(...inner) >= 3.85,
  JSON.stringify(flankGeo));

// ---- the board must actually MOVE with the wall: move the camera and project
// SYNCHRONOUSLY in the same evaluate (the render loop lerps camPan back toward
// the pair centre, so a delayed read would measure the lerp, not the pan)
const panRes = await page.evaluate(() => {
  const d = window.__duelDebug;
  const cam = d.camera;
  const before = window.__duelPage.chart.stats().screen;
  cam.position.x = -4;
  cam.lookAt(-3.6, 3.15, 0);
  cam.updateMatrixWorld(true);
  const after = window.__duelPage.chart.stats().screen;
  cam.position.x = 0;
  cam.lookAt(0, 3.15, 0);
  cam.updateMatrixWorld(true);
  return { before, after };
});
check('board pans with the wall (world-fixed, not screen-pinned)',
  Math.abs(panRes.after.l - panRes.before.l) > 0.05,
  `screen l ${panRes.before.l} -> ${panRes.after.l}`);

check('zero page errors', errs.length === 0, errs.slice(0, 2).join(' | '));
writeFileSync(path.join(root, 'tools/wallboard_verify.json'), JSON.stringify({ results, rect, pan: panRes, flankGeo }, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL WALLBOARD CHECKS PASS');
process.exit(failed.length ? 1 : 0);
