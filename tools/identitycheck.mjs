// tools/identitycheck.mjs - v18 IDENTITY check (user: "at the end, the moslem
// cat must be the buy and (green trace on dress) and the spanish one must be
// the sell (red clouthes)").
// Asserts from the live scene:
//   1. catA (the side the BUY plate follows) IS Sultan Bigotes by name
//   2. catB (the SELL plate side) IS Don Gato by name
//   3. Sultan's materials carry the GREEN trim family (turban band / cuffs /
//      hem / eyes), Don Gato's carry the RED cloth family (cape / plume /
//      doublet / tabard)
//   4. pixel cross-check on a frozen screenshot: the LEFT cat (world -x, Don
//      Gato) shows more red than green cloth; the RIGHT cat (Sultan) shows
//      green trim pixels
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
await new Promise((r) => srv.listen(8999, r));
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'].find((c) => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
const page = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = [];
page.on('pageerror', (e) => errs.push(String(e)));

await page.goto('http://localhost:8999/?mode=demo&seed=3', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.evaluate(() => window.__duelDebug.freeze(true, 1.1, -1.1));
await page.waitForTimeout(800);

const results = { checks: [] };
const check = (name, ok, detail) => {
  results.checks.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  - ' + detail : ''}`);
};

const ids = await page.evaluate(() => {
  const d = window.__duelDebug;
  const collect = (cat) => {
    const cols = [];
    cat.root.traverse((o) => {
      if (o.isMesh && o.material && o.material.color) {
        const c = o.material.color;
        cols.push({ r: +c.r.toFixed(2), g: +c.g.toFixed(2), b: +c.b.toFixed(2) });
      }
    });
    return cols;
  };
  return {
    nameA: d.catA.data.name, nameB: d.catB.data.name,
    colsA: collect(d.catA), colsB: collect(d.catB),
  };
});

check('catA (BUY plate side) is SULTAN BIGOTES', ids.nameA === 'SULTAN BIGOTES', ids.nameA);
check('catB (SELL plate side) is DON GATO', ids.nameB === 'DON GATO', ids.nameB);
// green trim on the Sultan: g clearly dominant over r and b
const greenish = (c) => c.g > 0.35 && c.g > c.r * 1.3 && c.g > c.b * 1.1;
const reddish = (c) => c.r > 0.4 && c.r > c.g * 1.5 && c.r > c.b * 1.3;
const gA = ids.colsA.filter(greenish).length, rA = ids.colsA.filter(reddish).length;
const gB = ids.colsB.filter(greenish).length, rB = ids.colsB.filter(reddish).length;
check('Sultan (catA) carries GREEN trim materials', gA >= 3, `${gA} green-ish of ${ids.colsA.length} mats`);
check('Don Gato (catB) carries RED cloth materials', rB >= 3, `${rB} red-ish of ${ids.colsB.length} mats`);
check('Sultan has NO red cloth family', rA === 0, `${rA} red-ish mats`);
check('Don Gato has NO green cloth family', gB === 0, `${gB} green-ish mats`);

// pixel cross-check on the frozen frame
const shot = await page.screenshot({ path: path.join(root, 'tools/shots/identity.png') });
const png = PNG.sync.read(shot);
const px = (x, y) => { const i = (png.width * y + x) << 2; return [png.data[i], png.data[i + 1], png.data[i + 2]]; };
// cats stand at world x +/-1.1 -> screen either side of centre; sample the body band
const count = (x0, x1, y0, y1) => {
  let red = 0, green = 0;
  for (let y = Math.round(png.height * y0); y <= Math.round(png.height * y1); y += 2) {
    for (let x = Math.round(png.width * x0); x <= Math.round(png.width * x1); x += 2) {
      const [r, g, bl] = px(x, y);
      if (r > 120 && r > g * 1.7 && r > bl * 1.5) red++;
      if (g > 110 && g > r * 1.5 && g > bl * 1.15) green++;
    }
  }
  return { red, green };
};
const left = count(0.34, 0.47, 0.5, 0.82);    // Don Gato (world -x)
const right = count(0.53, 0.66, 0.5, 0.82);   // Sultan (world +x)
check('LEFT cat shows red cloth (Don Gato, SELL)', left.red > 60, JSON.stringify(left));
check('RIGHT cat shows green trim (Sultan, BUY)', right.green > 8, JSON.stringify(right));
check('zero page errors', errs.length === 0, errs.slice(0, 2).join(' | '));

writeFileSync(path.join(root, 'tools/identity_verify.json'), JSON.stringify({ results, ids, left, right }, null, 1));
await b.close(); srv.close();
const failed = results.checks.filter((c) => !c.ok);
console.log(failed.length ? `\n${failed.length} FAILED` : '\nALL IDENTITY CHECKS PASS');
process.exit(failed.length ? 1 : 0);
