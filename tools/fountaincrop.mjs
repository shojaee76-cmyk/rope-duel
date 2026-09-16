// crop the fountain region to a big single image so the vision model sees
// ONLY the fountain, not the whole frame (the cats/moon dominate full shots)
import { PNG } from 'pngjs';
import { readFileSync, writeFileSync } from 'fs';
const png = PNG.sync.read(readFileSync('tools/shots/fountain_tint_buy.png'));
const { width: W, data } = png;
const x0 = 430, x1 = 870, y0 = 470, y1 = 795, w = x1 - x0, h = y1 - y0;
const out = new PNG({ width: w, height: h });
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
  const si = ((y0 + y) * W + (x0 + x)) * 4, di = (y * w + x) * 4;
  for (let k = 0; k < 4; k++) out.data[di + k] = data[si + k];
}
writeFileSync('tools/shots/fountain_crop.png', PNG.sync.write(out));
console.log('crop saved', w, 'x', h);
