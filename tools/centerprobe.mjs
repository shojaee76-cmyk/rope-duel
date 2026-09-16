// what IS in the center region? sample dominant colors
import { PNG } from 'pngjs';
import { readFileSync } from 'fs';
const png = PNG.sync.read(readFileSync('tools/shots/v17_frozen.png'));
const { width: W, height: H, data } = png;
const buckets = {};
for (let y = 470; y < 795; y += 4) for (let x = 430; x < 870; x += 4) {
  const i = (y * W + x) * 4;
  const key = `${(data[i] >> 5) << 5},${(data[i+1] >> 5) << 5},${(data[i+2] >> 5) << 5}`;
  buckets[key] = (buckets[key] || 0) + 1;
}
const top = Object.entries(buckets).sort((a, b) => b[1] - a[1]).slice(0, 8);
console.log(top.map(([c, n]) => `rgb(${c}) x${n}`).join('\n'));
