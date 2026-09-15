// tools/colorflip_bands.mjs — where does each side-hue live horizontally?
// Prints per-x-band pixel counts for the BUY-green and SELL-red cloth families
// (plus gold) so the flip can be located precisely, not just averaged.
// Usage: node tools/colorflip_bands.mjs <png>
import { readFileSync } from 'fs';
import { PNG } from 'pngjs';

const file = process.argv[2];
const png = PNG.sync.read(readFileSync(file));
const { width: W, height: H, data } = png;
const y0 = Math.round(H * 0.15), y1 = Math.round(H * 0.88);
const BANDS = 10;

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
  return [h, max === 0 ? 0 : d / max, max];
};

const names = ['green', 'red', 'gold'];
const bands = {};
for (let b = 0; b < BANDS; b++) bands[b] = { green: 0, red: 0, gold: 0 };
for (let y = y0; y < y1; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const [h, s, v] = rgb2hsv(data[i], data[i + 1], data[i + 2]);
    if (v < 0.07) continue;
    const b = Math.min(BANDS - 1, Math.floor((x / W) * BANDS));
    if (h >= 100 && h <= 190 && s >= 0.25) bands[b].green++;
    else if ((h >= 345 || h <= 8) && s >= 0.5) bands[b].red++;
    else if (h >= 35 && h <= 60 && s >= 0.45 && v >= 0.25) bands[b].gold++;
  }
}
console.log('file:', file);
console.log('band | ' + names.map((n) => n.padStart(6)).join(' | '));
for (let b = 0; b < BANDS; b++) {
  const row = bands[b];
  console.log(
    `${(b * 10).toString().padStart(3)}-${((b + 1) * 10).toString().padStart(3)}% | ` +
    names.map((n) => String(row[n]).padStart(6)).join(' | ')
  );
}
