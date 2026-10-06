import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
const exe = ['C:/Program Files/Google/Chrome/Application/chrome.exe', String(process.env.LOCALAPPDATA) + '/Google/Chrome/Application/chrome.exe'].find(c => existsSync(c));
const b = await chromium.launch({ executablePath: exe, headless: true });
for (const [w,h,tag] of [[1280,800,'1280'],[390,844,'390']]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('https://shojaee76-cmyk.github.io/rope-duel/?cb=' + Date.now(), { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(9000);
  await p.screenshot({ path: 'C:/Users/capit/rope-duel/tools/shots/ref-3d-' + tag + '.png' });
  await p.close();
}
console.log('shots ok', exe);
await b.close();
