// scoped pixel check: in the CHART band there must be ~no BTC-orange pixels and
// plenty of bright panel pixels; in the MOON slot (upper-left) there must be
// plenty of orange. Only the sky half of the frame is scanned.
import { PNG } from 'pngjs';
import { readFileSync } from 'fs';
const isOrange = (r, g, b) => r > 195 && g > 110 && g < 190 && b < 95 && r - b > 110;
const isBright = (r, g, b) => r > 185 && g > 185 && b > 175;
for (const [f, chart, moonSlot] of [
  ['moon_centre', { l: .672, r: .985, t: .104, b: .348 }, { l: .02, r: .30, t: .01, b: .35 }],
  ['moon_left',   { l: .672, r: .985, t: .104, b: .348 }, { l: .02, r: .30, t: .01, b: .35 }],
  ['moon_right',  { l: .672, r: .985, t: .104, b: .348 }, { l: .02, r: .30, t: .01, b: .35 }],
  ['moon_phone',  { l: .045, r: .955, t: .175, b: .30 },  { l: .0,  r: .24, t: .0,  b: .14 }],
]) {
  const png = PNG.sync.read(readFileSync(`tools/shots/${f}.png`));
  const { width: W, height: H, data } = png;
  let chartOrange = 0, chartBright = 0, moonOrange = 0;
  for (let y = 0; y < H * 0.55; y += 2) {
    for (let x = 0; x < W; x += 2) {
      const i = (y * W + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const fx = x / W, fy = y / H;
      const inChart = fx > chart.l && fx < chart.r && fy > chart.t && fy < chart.b;
      const inMoon = fx > moonSlot.l && fx < moonSlot.r && fy > moonSlot.t && fy < moonSlot.b;
      if (inChart && isOrange(r, g, b)) chartOrange++;
      if (inChart && isBright(r, g, b)) chartBright++;
      if (inMoon && isOrange(r, g, b)) moonOrange++;
    }
  }
  const ok = chartOrange < 30 && chartBright > 400 && moonOrange > 300;
  console.log(`${f}: chart orange=${chartOrange} bright=${chartBright} | moonSlot orange=${moonOrange} -> ${ok ? 'PASS' : 'FAIL'}`);
}
