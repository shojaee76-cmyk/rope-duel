import { PNG } from 'pngjs';
import { readFileSync } from 'fs';
const png = PNG.sync.read(readFileSync('tools/shots/v17_frozen.png'));
const { width: W, height: H, data } = png;
let marble = 0, blue = 0, n = 0;
for (let y = 470; y < 795; y += 2) for (let x = 430; x < 870; x += 2) {
  const i = (y * W + x) * 4;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  n++;
  if (r > 165 && g > 165 && b > 155) marble++;
  if (b > 120 && b > r + 25 && g > 90 && g < b + 20) blue++;
}
console.log(`frozen center: marble px ${marble}, pool-blue px ${blue}, samples ${n} -> ${marble < 400 && blue < 400 ? 'FOUNTAIN GONE' : 'STILL THERE'}`);
