// texture-busyness + color-variance metrics inside the fountain basin region
// (zoom shot, basin center ~ (640,470), basin spans roughly x 430-850, y 380-560)
import { PNG } from 'pngjs';
import { readFileSync } from 'fs';
const png = PNG.sync.read(readFileSync('tools/shots/fountain_before_zoom.png'));
const { width: W, height: H, data } = png;
let sat = 0, n = 0, lumMin = 999, lumMax = 0, distinct = new Set();
for (let y = 390; y < 560; y += 2) for (let x = 440; x < 840; x += 2) {
  const i = (y * W + x) * 4;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  sat += mx === 0 ? 0 : (mx - mn) / mx;
  const lum = (r + g + b) / 3;
  if (lum < lumMin) lumMin = lum; if (lum > lumMax) lumMax = lum;
  distinct.add(((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4));
  n++;
}
console.log('basin region: meanSat', (sat / n).toFixed(3), 'lumRange', lumMin.toFixed(0) + '-' + lumMax.toFixed(0), 'distinctColors(4bit)', distinct.size, 'samples', n);
