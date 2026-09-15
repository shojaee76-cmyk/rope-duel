// tools/textures.mjs — dump every material map in the live scene to a PNG so the
// texture generators can be reviewed at full size (the scene view is only ~25px
// tall for the rope, which hides whether the tile itself is good).
import { chromium } from 'playwright-core';
import { existsSync } from 'fs';
import http from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORT = Number(process.env.PORT || 8971);
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
const srv = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  try {
    const d = await readFile(path.join(root, p));
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch { res.writeHead(404); res.end('no'); }
});
await new Promise((r) => srv.listen(PORT, r));
const cands = [
  process.env['ProgramFiles'] + '\\Google\\Chrome\\Application\\chrome.exe',
  process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
];
const exe = cands.find((c) => c && existsSync(c));
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(`http://localhost:${PORT}/?mode=demo`, { waitUntil: 'load', timeout: 30000 });
await page.waitForTimeout(3000);

const out = await page.evaluate(() => {
  const d = window.__duelDebug;
  const scene = d.arena.parent;
  const seen = new Map();   // tex.uuid -> dataURL
  const res = [];
  const push = (label, tex) => {
    if (!tex || !tex.image || !tex.image.toDataURL) return;
    if (!seen.has(tex.uuid)) seen.set(tex.uuid, null);
    res.push({ label, w: tex.image.width, h: tex.image.height, url: tex.image.toDataURL('image/png'), repeat: [tex.repeat.x, tex.repeat.y] });
  };
  push('rope', d.rope.mat.map);
  push('rope-bump', d.rope.mat.bumpMap);
  const cats = { A: d.catA, B: d.catB };
  for (const k of ['A', 'B']) {
    const c = cats[k].data;
    push(`${k}-fur`, c.M.fur.map);
    push(`${k}-fur-bump`, c.M.fur.bumpMap);
    for (const [name, m] of Object.entries(c.M)) {
      if (m && m.map && m.map !== c.M.fur.map) push(`${k}-${name}`, m.map);
    }
  }
  const parts = { 'A-cape': cats.A.data.cape, 'A-helm': null };
  if (cats.A.data.cape) push('A-cape', cats.A.data.cape.material.map);
  // arena pieces
  const seenMat = new Set();
  scene.traverse((o) => {
    if (!o.isMesh || !o.material || !o.material.map) return;
    if (seenMat.has(o.material.uuid)) return;
    seenMat.add(o.material.uuid);
    push('arena' + (seenMat.size) + '-' + (o.geometry.type || 'mesh'), o.material.map);
  });
  return res;
});
await mkdir('tools/shots/tex', { recursive: true });
const meta = [];
for (const t of out) {
  const b64 = t.url.split(',')[1];
  const f = `tools/shots/tex/${t.label.replace(/[^a-zA-Z0-9-]/g, '_')}.png`;
  await writeFile(f, Buffer.from(b64, 'base64'));
  meta.push({ label: t.label, file: f, w: t.w, h: t.h, repeat: t.repeat });
}
console.log(JSON.stringify(meta, null, 1));
await browser.close(); srv.close();
process.exit(0);
