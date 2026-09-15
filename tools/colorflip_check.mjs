// tools/colorflip_check.mjs — pixel-level audit of the buy/sell color flip.
// Classifies a screenshot's pixels into BUY-green and SELL-red cloth families
// and reports each group's mean horizontal position (0=left, 1=right).
// Convention (task t_167a53f3): the GREEN cat (BUY) must sit right of centre,
// the RED cat (SELL) left of centre. Usage: node tools/colorflip_check.mjs <png>
import { readFileSync } from 'fs';
import { PNG } from 'pngjs';

const file = process.argv[2];
if (!file) { console.error('usage: node tools/colorflip_check.mjs <png>'); process.exit(1); }
const png = PNG.sync.read(readFileSync(file));
const { width: W, height: H, data } = png;

// ignore the top HUD/meter band and the bottom tag band: they carry the same
// convention but at the screen edges; the duelists live in the middle band
const y0 = Math.round(H * 0.15), y1 = Math.round(H * 0.88);

const rgb2hsv = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  if (d > 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60; if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  return [h, s, max];
};

const groups = {
  buyGreen:  { n: 0, sx: 0 },   // cloth hue ~140-165 deg (emerald family)
  sellRed:   { n: 0, sx: 0 },   // cloth hue ~345-360/0-8 deg (crimson family)
  gold:      { n: 0, sx: 0 },   // armour gold (should persist on the BUY cat)
};
for (let y = y0; y < y1; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const [h, s, v] = rgb2hsv(data[i], data[i + 1], data[i + 2]);
    if (v < 0.07) continue;
    let g = null;
    if (h >= 100 && h <= 190 && s >= 0.25) g = groups.buyGreen;
    else if ((h >= 345 || h <= 8) && s >= 0.5) g = groups.sellRed;
    else if (h >= 35 && h <= 60 && s >= 0.45 && v >= 0.25) g = groups.gold;
    if (g) { g.n++; g.sx += x; }
  }
}
const mean = (g) => (g.n ? +(g.sx / g.n / W).toFixed(3) : null);
const out = {
  file,
  buyGreen:  { px: groups.buyGreen.n, meanX: mean(groups.buyGreen) },
  sellRed:   { px: groups.sellRed.n,  meanX: mean(groups.sellRed) },
  gold:      { px: groups.gold.n,     meanX: mean(groups.gold) },
};
out.verdict = (out.buyGreen.meanX != null && out.sellRed.meanX != null)
  ? (out.buyGreen.meanX > out.sellRed.meanX ? 'PASS: green (BUY) right of red (SELL)'
                                            : 'FAIL: green (BUY) left of red (SELL)')
  : 'INCONCLUSIVE: too few classified pixels';
console.log(JSON.stringify(out, null, 1));
