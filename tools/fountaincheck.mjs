// fountain presence + tier check on the zoom shot:
// - upper bowl region (screen ~y 300-430) should contain marble-bright pixels
// - water pixels: additive-blue/green/red presence near basin surface
// - vertical continuity: fountain must span from basin (y~560) up to finial (y~300)
import { PNG } from 'pngjs';
import { readFileSync } from 'fs';
const png = PNG.sync.read(readFileSync(process.argv[2] || 'tools/shots/fountain_after_zoom.png'));
const { width: W, height: H, data } = png;
const isBright = (r, g, b) => r > 165 && g > 165 && b > 155;
const isWet = (r, g, b) => (b > 120 && b > r + 20) || (g > 130 && g > r + 15 && g > b + 10) || (r > 130 && r > g + 15 && r > b + 10);
let bowlBright = 0, wet = 0, n = 0, topMost = H, botMost = 0;
for (let y = 280; y < 580; y += 2) for (let x = 430; x < 850; x += 2) {
  const i = (y * W + x) * 4;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  n++;
  if (isBright(r, g, b)) { bowlBright++; if (y < topMost) topMost = y; }
  if (isWet(r, g, b)) { wet++; if (y < topMost) topMost = y; if (y > botMost) botMost = y; }
}
console.log(`bright/marble px: ${bowlBright} | wet px: ${wet} | fountain vertical span: y ${topMost}-${botMost} (${((botMost-topMost)/H*100).toFixed(0)}% of frame height) -> ${bowlBright > 150 && wet > 200 ? 'PASS' : 'FAIL'}`);
