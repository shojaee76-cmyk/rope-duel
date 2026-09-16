import { chromium } from 'playwright-core';
import http from 'http';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { PNG } from 'pngjs';
const root = 'C:/Users/capit/rope-duel';
const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.woff2':'font/woff2' };
const srv = http.createServer(async (req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  try{ const d=await readFile(path.join(root,p)); res.writeHead(200,{'Content-Type':MIME[path.extname(p)]||'application/octet-stream'}); res.end(d);}catch{ res.writeHead(404); res.end('no'); } });
await new Promise(r=>srv.listen(8992,r));
const b = await chromium.launch({ executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe', headless:true });
async function run(w,h,tag){
  const page = await b.newPage({ viewport:{width:w,height:h} });
  await page.goto('http://localhost:8992/?mode=demo&seed=11',{waitUntil:'load'});
  await page.waitForTimeout(4000);
  await page.evaluate(()=>{ window.__duelDebug.freeze(true,1.1,-1.1); });
  await page.waitForTimeout(700);
  const st = await page.evaluate(()=> window.__duelPage.chart.stats());
  const A = await page.screenshot();
  await writeFile(`tools/shots/bodychk_${tag}_A.png`, A);
  const hid = await page.evaluate(()=>{
    const d = window.__duelDebug; const out=[];
    d.arena.parent.traverse(o=>{ if(o.isMesh && o.geometry && o.geometry.type==='BoxGeometry' && o.scale.x>5 && o.scale.y>2){ out.push([o.scale.x.toFixed(2),o.scale.y.toFixed(2),o.scale.z.toFixed(3),o.position.z.toFixed(3)]); o.visible=false; } });
    return out;
  });
  await page.waitForTimeout(500);
  const B = await page.screenshot();
  await writeFile(`tools/shots/bodychk_${tag}_B.png`, B);
  const pa=PNG.sync.read(A), pb=PNG.sync.read(B);
  const r=st.screen; const L=Math.round(r.l*pa.width),R=Math.round(r.r*pa.width),T=Math.round(r.t*pa.height),Bo=Math.round(r.b*pa.height);
  let diff=0,tot=0,brightA=0,brightB=0,darkA=0,darkB=0;
  for(let y=T;y<Bo;y+=1) for(let x=L;x<R;x+=1){ const i=(pa.width*y+x)<<2; tot++;
    const da=Math.abs(pa.data[i]-pb.data[i])+Math.abs(pa.data[i+1]-pb.data[i+1])+Math.abs(pa.data[i+2]-pb.data[i+2]);
    if(da>30) diff++;
    const la=0.299*pa.data[i]+0.587*pa.data[i+1]+0.114*pa.data[i+2];
    const lb=0.299*pb.data[i]+0.587*pb.data[i+1]+0.114*pb.data[i+2];
    if(la>150) brightA++; if(lb>150) brightB++; if(la<40) darkA++; if(lb<40) darkB++;
  }
  await page.close();
  return { tag, viewport:[w,h], chartScreen:r, hidBody:hid, rectPx:(R-L)*(Bo-T), changedPct:+(100*diff/tot).toFixed(1), brightA, brightB, darkA, darkB, texture:[st.textureW,st.textureH], screenScale:st.screenScale };
}
const r1 = await run(1280,800,'wide');
console.log(JSON.stringify(r1));
const r2 = await run(578,512,'narrow');
console.log(JSON.stringify(r2));
await b.close(); srv.close(); process.exit(0);
