import { chromium } from 'playwright-core';
import { writeFile } from 'fs/promises';
import { PNG } from 'pngjs';
const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await b.newPage({viewport:{width:1280,height:800}});
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('https://shojaee76-cmyk.github.io/rope-duel/',{waitUntil:'load',timeout:45000});
await page.waitForTimeout(7000);
const q0=await page.evaluate(()=>window.__duelDebug.quality());
const r=await page.evaluate(()=>window.__duelPage.chart.stats().screen);
const A=await page.screenshot();
await page.evaluate(()=>window.__duelPage.chart.setVisible(false));
await page.waitForTimeout(400);
const B=await page.screenshot();
await page.evaluate(()=>window.__duelPage.chart.setVisible(true));
const pa=PNG.sync.read(A),pb=PNG.sync.read(B);
const L=Math.round(r.l*pa.width),R=Math.round(r.r*pa.width),T=Math.round(r.t*pa.height),Bo=Math.round(r.b*pa.height);
let diff=0,tot=0,bOn=0,bOff=0;
for(let y=T;y<Bo;y++)for(let x=L;x<R;x++){const i=(pa.width*y+x)<<2;tot++;
 const d=Math.abs(pa.data[i]-pb.data[i])+Math.abs(pa.data[i+1]-pb.data[i+1])+Math.abs(pa.data[i+2]-pb.data[i+2]);
 if(d>30)diff++;
 const la=0.299*pa.data[i]+0.587*pa.data[i+1]+0.114*pa.data[i+2];
 const lb=0.299*pb.data[i]+0.587*pb.data[i+1]+0.114*pb.data[i+2];
 if(la>170)bOn++; if(lb>170)bOff++;}
// wait for a seated cat and shoot
let got=null;
for(let i=0;i<120;i++){
  const s=await page.evaluate(()=>{const d=window.__duelDebug;return d&&d.catA?{a:d.catA.state.name,b:d.catB.state.name,at:+d.catA.state.t.toFixed(2),bt:+d.catB.state.t.toFixed(2),lane:d.lane(),price:document.getElementById('price').textContent}:null;});
  if(s&&((s.a==='SIT_GUARD'&&s.at>0.8)||(s.b==='SIT_GUARD'&&s.bt>0.8))){got=s;await page.screenshot({path:'tools/shots/v19b_deployed.png'});await page.screenshot({path:'tools/shots/v19b_deployed_cats.png',clip:{x:300,y:260,width:780,height:500}});break;}
  await page.waitForTimeout(300);
}
const q1=await page.evaluate(()=>window.__duelDebug.quality());
console.log(JSON.stringify({deployed_glass_AB_changedPct:+(100*diff/tot).toFixed(1),bright_glassOn:bOn,bright_glassOff:bOff,rect:r,quality_at_7s:q0,quality_after:q1,seated:got,errs},null,1));
await b.close(); process.exit(0);
