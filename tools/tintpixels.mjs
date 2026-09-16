import { PNG } from 'pngjs';
import { readFileSync } from 'fs';
const hueCount = (f) => {
  const png = PNG.sync.read(readFileSync(f));
  const { width: W, height: H, data } = png;
  let green = 0, red = 0;
  for (let y = 380; y < 570; y += 2) for (let x = 440; x < 840; x += 2) {
    const i = (y * W + x) * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (g > 110 && g > r + 25 && g > b + 10) green++;
    if (r > 110 && r > g + 30 && r > b + 25) red++;
  }
  return { green, red };
};
const buy = hueCount('tools/shots/fountain_tint_buy.png');
const sell = hueCount('tools/shots/fountain_tint_sell.png');
console.log('BUY  pressure: green px', buy.green, 'red px', buy.red);
console.log('SELL pressure: green px', sell.green, 'red px', sell.red);
console.log('tint swings correctly:', buy.green > sell.green && sell.red > buy.red ? 'PASS' : 'FAIL');
