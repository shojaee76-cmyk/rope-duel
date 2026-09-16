// Character inspection: actual arena pixels plus neutral-lit rig portraits.
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';
const root = path.resolve(import.meta.dirname, '..');
const tag = process.argv[2] || 'costume';
const base = process.env.BASE;
const out = path.join(root, 'tools/shots');
await mkdir(out, {recursive:true});
const server = http.createServer(async(req,res)=>{
  try {
    const p = new URL(req.url,'http://localhost').pathname;
    const file = path.join(root,p==='/'?'index.html':p);
    const data=await readFile(file);
    res.setHeader('Content-Type',({'.js':'text/javascript','.html':'text/html','.woff2':'font/woff2'})[path.extname(file)]||'application/octet-stream');
    res.end(data);
  } catch {res.writeHead(404);res.end();}
});
if(!base) await new Promise(r=>server.listen(0,'127.0.0.1',r));
const url=base || `http://127.0.0.1:${server.address().port}/`;
let browser;
const errors=[];
const report={tag, url, errors, cats:{}};
try {
  browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  const page=await browser.newPage({viewport:{width:1280,height:800}});
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url+'?mode=demo&seed=11',{waitUntil:'load'});
  await page.waitForFunction(()=>!!window.__duelDebug);
  await page.evaluate(()=>{
    const d=window.__duelDebug;
    window.__duelPage.feed.stop(); d.director.frozen=true;
    window.__duelPage.scene.setPressure(0);
    d.catA.x=1.05;d.catB.x=-1.05;
    for(const c of [d.catA,d.catB]) c.setState('FREEZE');
  });
  await page.waitForTimeout(1600);
  await page.evaluate(()=>{window.requestAnimationFrame=()=>0;});
  await page.waitForTimeout(150);
  const render=()=>page.evaluate(()=>{const d=window.__duelDebug;d.renderer.render(d.arena.parent,d.camera);});
  await render();
  const on=await page.screenshot({path:path.join(out,tag+'-arena.png')});
  for(const side of ['A','B']){
    await page.evaluate(s=>{window.__duelDebug['cat'+s].root.visible=false;},side);
    await render();const off=await page.screenshot();
    const a=PNG.sync.read(on),b=PNG.sync.read(off);
    let pixels=0;let x0=1280,y0=800,x1=0,y1=0;
    for(let y=0;y<a.height;y++)for(let x=0;x<a.width;x++){
      const i=(y*a.width+x)*4;
      if(Math.abs(a.data[i]-b.data[i])+Math.abs(a.data[i+1]-b.data[i+1])+Math.abs(a.data[i+2]-b.data[i+2])>30){pixels++;x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
    }
    report.cats[side]={pixels,bbox:[x0,y0,x1,y1]};
    if(pixels<1000)throw Error(side+' character not visibly rendered');
    await page.evaluate(s=>{window.__duelDebug['cat'+s].root.visible=true;},side);
  }
  // Portraits show the actual same geometry, not concept art or replacements.
  await page.evaluate(async()=>{
    const T=await import('./vendor/three.module.js');
    window.__portraitT=T;
    document.querySelectorAll('body > :not(canvas)').forEach(e=>{if(e.tagName!=='SCRIPT')e.style.visibility='hidden';});
    const d=window.__duelDebug;d.renderer.domElement.style.visibility='visible';
  });
  for(const side of ['B','A']){
    report.cats[side].portrait=await page.evaluate(s=>{
      const T=window.__portraitT,d=window.__duelDebug;
      const scene=new T.Scene();scene.background=new T.Color('#24333b');
      scene.add(new T.HemisphereLight('#dceaff','#55483c',2.2));
      const key=new T.DirectionalLight('#fff1dc',3.4);key.position.set(3,5,6);scene.add(key);
      const rim=new T.DirectionalLight('#b7d6f5',2);rim.position.set(-3,3,-3);scene.add(rim);
      const cat=d['cat'+s].root.clone(true);cat.position.set(0,0,0);cat.rotation.set(0,0,0);scene.add(cat);
      const camera=new T.PerspectiveCamera(28,1280/800,.01,100);
      camera.position.set(2.7,1.6,3.6);camera.lookAt(0,.77,0);
      d.renderer.render(scene,camera);
      return {calls:d.renderer.info.render.calls,triangles:d.renderer.info.render.triangles};
    },side);
    await page.screenshot({path:path.join(out,tag+'-'+side+'-portrait.png')});
  }
  if(errors.length)throw Error(errors.join('; '));
  report.passed=true;
}finally{
  await writeFile(path.join(out,tag+'-report.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
  if(browser)await browser.close();
  if(!base)await new Promise(r=>server.close(r));
}
