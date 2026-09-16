// tex.js - one place for every procedural canvas texture in the scene.
// v4: all textures get mipmaps + anisotropic filtering (fine patterns viewed at
// a shallow angle shimmer without it). Max anisotropy is handed over by scene.js
// once the renderer exists.
// v5: real surface detail for the 3D objects - fur, cloth weave, brushed steel,
// leather, stone and braided hemp, each with a matching bump map so the
// materials catch the moonlight instead of reading as flat paint.
import * as THREE from '../vendor/three.module.js';

let MAX_ANISO = 4;

export function setMaxAnisotropy(n) {
  MAX_ANISO = Math.max(1, Math.min(16, Math.round(n) || 1));
}

export function canvasTexture(c, { repeatX = 1, repeatY = 1, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = MAX_ANISO;
  return t;
}

// ---------- helpers ----------
function surface(size, fill) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = fill;
  g.fillRect(0, 0, size, size);
  return { c, g, size };
}

// deterministic PRNG so a texture always looks the same (no boot-to-boot drift)
function prng(seed) {
  let v = (seed | 0) || 1;
  return () => { v = (v * 16807) % 2147483647; return (v % 100000) / 100000; };
}

// grayscale copy of a color canvas: cheap, convincing bump source
export function bumpFrom(canvas, strength = 1) {
  const c = document.createElement('canvas');
  c.width = canvas.width; c.height = canvas.height;
  const g = c.getContext('2d');
  g.drawImage(canvas, 0, 0);
  const img = g.getImageData(0, 0, c.width, c.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const l = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114);
    const v = Math.max(0, Math.min(255, 128 + (l - 128) * strength));
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.anisotropy = MAX_ANISO;
  return t;
}

// roughness map: strand/fiber ridges catch the moonlight (dark = smooth),
// valleys stay matte. This is what makes a thin tube read as ROPE instead of a
// painted plank, because the highlight moves with the light.
export function roughnessFrom(canvas, lo = 0.45, hi = 0.98) {
  const c = document.createElement('canvas');
  c.width = canvas.width; c.height = canvas.height;
  const g = c.getContext('2d');
  g.drawImage(canvas, 0, 0);
  const img = g.getImageData(0, 0, c.width, c.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const l = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
    const v = Math.round(255 * (hi - (hi - lo) * l));   // bright detail = low roughness
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.anisotropy = MAX_ANISO;
  return t;
}

// ---------- fur ----------
// soft mottling + optional tabby stripes + fine hair grain. Kept LIGHT (the
// material color carries the hue), so the map only adds variation.
// v5b: FEATURES ARE BIG NOW. The first pass drew 1px hair strokes and tight
// blotches on a 256px canvas repeated 2-3x, so on a cat that is ~40px tall on
// screen the whole thing mip-averaged into flat paint. Blotches are 24-70px,
// the grain is 6-22px, and the default repeat is ~1.2 so the pattern survives.
export function furCanvas({ seed = 3, stripes = 0, blotch = 0, grain = 0.10, base = '#ffffff', dark = '#b9b9c4' } = {}) {
  const { c, g, size } = surface(256, base);
  const rnd = prng(seed);
  // broad tonal patches first (what you actually see at distance)
  if (blotch) {
    for (let i = 0; i < blotch; i++) {
      const x = rnd() * size, y = rnd() * size, r = 24 + rnd() * 46;
      const grd = g.createRadialGradient(x, y, r * 0.15, x, y, r);
      grd.addColorStop(0, dark);
      grd.addColorStop(0.7, dark);
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.globalAlpha = 0.45 + rnd() * 0.25;
      g.fillStyle = grd;
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
    g.globalAlpha = 1;
  }
  if (stripes) {
    // Tabby markings are IRREGULAR: thickness, offset and density all wander,
    // and each stripe breaks into segments. (Uniform ellipse chains read as
    // blocky zebra bands - an art-director review caught exactly that.)
    for (let i = 0; i < stripes; i++) {
      const baseY = (i + 0.5) * (size / stripes) + (rnd() - 0.5) * 14;
      const drift = 8 + rnd() * 10;
      let x = -24 - rnd() * 30;
      while (x < size + 24) {
        const gap = rnd() < 0.29 ? 6 + rnd() * 22 : 0;      // broken markings
        x += gap;
        const seg = 16 + rnd() * 40;                        // segment length
        const h = (size / stripes) * (0.22 + rnd() * 0.34);  // variable thickness
        const yy = baseY + Math.sin(x * 0.035 + i * 1.7) * drift;
        g.fillStyle = dark;
        g.globalAlpha = 0.34 + rnd() * 0.3;
        g.beginPath();
        g.ellipse(x + seg / 2, yy, seg / 2 + 6, h / 2, (rnd() - 0.5) * 0.22, 0, Math.PI * 2);
        g.fill();
        x += seg;
      }
    }
    g.globalAlpha = 1;
  }
  // fur grain: SHORT, irregular, multidirectional strokes. (The first version
  // drew long strokes at one angle, and at 40px on a cat that read as bandage
  // wrapping rather than fur.)
  const rnd2 = prng(seed * 7 + 11);
  for (let i = 0; i < 1100; i++) {
    const x = rnd2() * size, y = rnd2() * size, l = 4 + rnd2() * 9;
    const a = rnd2() * Math.PI * 2;
    g.strokeStyle = rnd2() < 0.5 ? 'rgba(255,255,255,0.42)' : 'rgba(96,90,102,0.34)';
    g.lineWidth = 1.1 + rnd2() * 1.6;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
  }
  // soft clumps: fur grows in tufts, so add rounded light/dark lumps
  for (let i = 0; i < 90; i++) {
    const x = rnd2() * size, y = rnd2() * size, r = 5 + rnd2() * 13;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    const light = rnd2() < 0.5;
    grd.addColorStop(0, light ? 'rgba(255,255,255,0.30)' : 'rgba(70,64,76,0.26)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  return c;
}

export function furTexture(opts = {}) {
  const c = furCanvas(opts);
  const map = canvasTexture(c, { repeatX: opts.repeatX || 1.2, repeatY: opts.repeatY || 1.2, srgb: true });
  const bump = bumpFrom(c, 0.8);
  bump.repeat.copy(map.repeat);
  return { map, bump };
}

// ---------- cloth ----------
export function clothCanvas({ seed = 5, base = '#ffffff', thread = 'rgba(64,54,44,0.46)', weave = 10 } = {}) {
  const { c, g, size } = surface(128, base);
  g.strokeStyle = thread;
  g.lineWidth = 2.0;
  for (let i = 0; i < size; i += weave) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, size); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(size, i); g.stroke();
  }
  // diagonal twill shadow (the threads catch light at an angle)
  const rnd = prng(seed);
  for (let i = -size; i < size; i += weave) {
    g.strokeStyle = 'rgba(255,255,255,0.24)';
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i + size, size); g.stroke();
  }
  for (let i = 0; i < 420; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.20)' : 'rgba(40,34,30,0.20)';
    g.fillRect(rnd() * size, rnd() * size, 3, 2);
  }
  return c;
}

export function clothTexture(opts = {}) {
  const c = clothCanvas(opts);
  const map = canvasTexture(c, { repeatX: opts.repeatX || 3, repeatY: opts.repeatY || 3, srgb: true });
  const bump = bumpFrom(c, 0.9);
  bump.repeat.copy(map.repeat);
  return { map, bump };
}

// ---------- brushed steel / gold ----------
export function metalCanvas({ seed = 9, base = '#ffffff', streak = 0.22, scratches = 260 } = {}) {
  const { c, g, size } = surface(128, base);
  const rnd = prng(seed);
  for (let i = 0; i < scratches; i++) {
    const y = rnd() * size;
    const a = streak * (0.3 + rnd());
    g.strokeStyle = rnd() < 0.5 ? `rgba(255,255,255,${a})` : `rgba(60,66,74,${a})`;
    g.lineWidth = 0.6 + rnd() * 1.3;
    g.beginPath();
    g.moveTo(0, y);
    g.bezierCurveTo(size * 0.3, y + (rnd() - 0.5) * 3, size * 0.7, y + (rnd() - 0.5) * 3, size, y + (rnd() - 0.5) * 2);
    g.stroke();
  }
  // a few deeper score marks
  for (let i = 0; i < 5; i++) {
    g.strokeStyle = 'rgba(40,44,52,0.35)';
    g.lineWidth = 1.4;
    const y = rnd() * size;
    g.beginPath(); g.moveTo(rnd() * size * 0.5, y); g.lineTo(size * (0.6 + rnd() * 0.4), y + (rnd() - 0.5) * 4); g.stroke();
  }
  return c;
}

export function metalTexture(opts = {}) {
  const c = metalCanvas(opts);
  const map = canvasTexture(c, { repeatX: opts.repeatX || 1, repeatY: opts.repeatY || 1, srgb: true });
  const bump = bumpFrom(c, 0.35);
  bump.repeat.copy(map.repeat);
  return { map, bump };
}

// ---------- leather ----------
export function leatherCanvas({ seed = 13, base = '#ffffff' } = {}) {
  const { c, g, size } = surface(128, base);
  const rnd = prng(seed);
  for (let i = 0; i < 900; i++) {
    const x = rnd() * size, y = rnd() * size, r = 1 + rnd() * 3.4;
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.16)' : 'rgba(50,34,22,0.20)';
    g.beginPath(); g.ellipse(x, y, r, r * 0.7, rnd() * 3, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 26; i++) {
    g.strokeStyle = 'rgba(50,34,22,0.18)';
    g.lineWidth = 0.9;
    g.beginPath();
    const x = rnd() * size, y = rnd() * size;
    g.moveTo(x, y);
    g.quadraticCurveTo(x + (rnd() - 0.5) * 40, y + (rnd() - 0.5) * 40, x + (rnd() - 0.5) * 70, y + (rnd() - 0.5) * 70);
    g.stroke();
  }
  return c;
}

export function leatherTexture(opts = {}) {
  const c = leatherCanvas(opts);
  const map = canvasTexture(c, { repeatX: 1, repeatY: 1, srgb: true });
  const bump = bumpFrom(c, 0.8);
  return { map, bump };
}

// ---------- stone (walls, poles, basins) ----------
export function stoneCanvas({ seed = 21, base = '#ffffff', blocks = 4, alpha = 0.22, speckle = 1200, size = 512 } = {}) {
  const { c, g } = surface(size, base);
  const rnd = prng(seed);
  const bh = size / blocks;
  // ashlar courses: every block gets its own tone first (this is what makes
  // masonry read; a uniform fill + hairline joints just looks like paper)
  for (let r = 0; r < blocks; r++) {
    const off = (r % 2) * (size / (blocks * 2));
    for (let k = 0; k < blocks; k++) {
      const x = off + (k * size) / blocks - size / (blocks * 2);
      const t = rnd();
      g.fillStyle = t < 0.35 ? 'rgba(255,255,255,0.10)' : t < 0.7 ? 'rgba(120,96,70,0.10)' : 'rgba(255,246,232,0.06)';
      g.fillRect(x, r * bh, size / blocks, bh);
      // v19: each block gets a soft internal gradient (light from above) so the
      // courses read as rounded stone blocks rather than flat rectangles
      const bg = g.createLinearGradient(0, r * bh, 0, r * bh + bh);
      bg.addColorStop(0, 'rgba(255,250,238,0.10)');
      bg.addColorStop(0.55, 'rgba(255,255,255,0)');
      bg.addColorStop(1, 'rgba(48,36,24,0.10)');
      g.fillStyle = bg;
      g.fillRect(x, r * bh, size / blocks, bh);
      // pit + chisel marks specific to this block
      for (let i = 0; i < 12; i++) {
        const px = x + rnd() * (size / blocks), py = r * bh + rnd() * bh;
        const pr = 2 + rnd() * 7;
        const pg = g.createRadialGradient(px, py, 0, px, py, pr);
        pg.addColorStop(0, 'rgba(56,42,28,0.24)');
        pg.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = pg;
        g.beginPath(); g.arc(px, py, pr, 0, Math.PI * 2); g.fill();
      }
      for (let i = 0; i < 4; i++) {
        g.strokeStyle = 'rgba(90,72,52,0.14)';
        g.lineWidth = 1 + rnd() * 1.5;
        g.beginPath();
        const cx = x + rnd() * (size / blocks), cy = r * bh + rnd() * bh;
        g.moveTo(cx, cy);
        g.lineTo(cx + (rnd() - 0.5) * 34, cy + (rnd() - 0.5) * 12);
        g.stroke();
      }
    }
  }
  // joints: recessed dark line with a light catch on the lower edge
  for (let r = 0; r <= blocks; r++) {
    const y = r * bh;
    g.strokeStyle = `rgba(58,44,32,${alpha + 0.12})`;
    g.lineWidth = 3;
    g.beginPath(); g.moveTo(0, y); g.lineTo(size, y); g.stroke();
    g.strokeStyle = 'rgba(255,248,236,0.16)';
    g.lineWidth = 1.6;
    g.beginPath(); g.moveTo(0, y + 2.4); g.lineTo(size, y + 2.4); g.stroke();
    const off = (r % 2) * (size / (blocks * 2));
    for (let k = 0; k < blocks; k++) {
      const x = off + (k * size) / blocks;
      g.strokeStyle = `rgba(58,44,32,${alpha + 0.12})`;
      g.lineWidth = 3;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + bh); g.stroke();
      g.strokeStyle = 'rgba(255,248,236,0.12)';
      g.lineWidth = 1.4;
      g.beginPath(); g.moveTo(x + 2.2, y); g.lineTo(x + 2.2, y + bh); g.stroke();
    }
  }
  for (let i = 0; i < speckle * 2; i++) {
    const x = rnd() * size, y = rnd() * size, s = 0.6 + rnd() * 2.6;
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.16)' : 'rgba(48,36,26,0.18)';
    g.fillRect(x, y, s, s);
  }
  // weathering streaks + pitting
  for (let i = 0; i < 26; i++) {
    const x = rnd() * size;
    g.strokeStyle = 'rgba(70,54,38,0.12)';
    g.lineWidth = 2 + rnd() * 8;
    g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (rnd() - 0.5) * 30, size); g.stroke();
  }
  for (let i = 0; i < 48; i++) {
    const x = rnd() * size, y = rnd() * size, r = 2 + rnd() * 9;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(60,46,32,0.22)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  // v19 damp: the base of a courtyard wall is always darker and greener
  const damp = g.createLinearGradient(0, size * 0.62, 0, size);
  damp.addColorStop(0, 'rgba(40,52,36,0)');
  damp.addColorStop(1, 'rgba(38,50,34,0.20)');
  g.fillStyle = damp;
  g.fillRect(0, size * 0.62, size, size * 0.38);
  return c;
}

export function stoneTexture(opts = {}) {
  const c = stoneCanvas(opts);
  const map = canvasTexture(c, { repeatX: opts.repeatX || 2, repeatY: opts.repeatY || 2, srgb: true });
  const bump = bumpFrom(c, 1.1);
  bump.repeat.copy(map.repeat);
  return { map, bump };
}

// ---------- braided hemp rope ----------
// v5c: rebuilt for the ACTUAL on-screen size. The rope is ~30-40 px tall in
// frame, and v (around the tube) is the crushed axis: any feature thinner than
// ~1/10 of the circumference mip-averages into a flat gradient, which is
// exactly why the earlier 45-degree strand pattern still read as a plank.
// So: features now run ALONG the rope (u has ~10x more pixels), the grooves are
// 18px wide (2-3px on screen), and the twist is carried by the tube's radial
// bulges plus periodic crossover marks instead of a steep diagonal.
export function hempCanvas({ seed = 31, size = 256, twistPeriod = 96 } = {}) {
  const { c, g } = surface(size, '#8a6140');
  const rnd = prng(seed);
  const bands = 3;
  const bh = size / bands;
  const slant = 22;   // gentle twist drift over the tile width
  const copy = (draw) => { for (const oy of [-size, 0, size]) { g.save(); g.translate(0, oy); draw(); g.restore(); } };
  // 3 strand faces running along the rope, alternating tone
  const tones = ['rgba(182,136,84,1)', 'rgba(220,172,116,1)', 'rgba(154,110,64,1)'];
  for (let k = 0; k < bands; k++) {
    copy(() => {
      g.fillStyle = tones[k];
      g.beginPath();
      g.moveTo(0, k * bh);
      g.lineTo(size, k * bh + slant);
      g.lineTo(size, (k + 1) * bh + slant);
      g.lineTo(0, (k + 1) * bh);
      g.closePath();
      g.fill();
    });
  }
  // grooves between the strands: wide soft core + a light catch beside it
  for (let k = 1; k <= bands; k++) {
    const y0 = k * bh;
    copy(() => {
      g.strokeStyle = 'rgba(40,22,8,0.44)';
      g.lineWidth = 28;
      g.beginPath(); g.moveTo(0, y0); g.lineTo(size, y0 + slant); g.stroke();
      g.strokeStyle = 'rgba(20,10,4,0.66)';
      g.lineWidth = 13;
      g.beginPath(); g.moveTo(0, y0); g.lineTo(size, y0 + slant); g.stroke();
      g.strokeStyle = 'rgba(255,242,214,0.46)';
      g.lineWidth = 8;
      g.beginPath(); g.moveTo(0, y0 - 12); g.lineTo(size, y0 + slant - 12); g.stroke();
    });
  }
  // fiber hairs running along the rope (u direction = lots of screen pixels)
  for (let i = 0; i < 900; i++) {
    const x = rnd() * size, y = rnd() * size;
    const l = 10 + rnd() * 34;
    const dyv = (rnd() - 0.5) * 5 + slant * (l / size);
    g.strokeStyle = rnd() < 0.5 ? 'rgba(244,222,184,0.40)' : 'rgba(52,32,14,0.36)';
    g.lineWidth = 0.9 + rnd() * 1.8;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y + dyv); g.stroke();
  }
  // twist cue: every twistPeriod a soft crossover shadow rolls across a strand
  for (let x = -size; x < size * 2; x += twistPeriod) {
    copy(() => {
      g.strokeStyle = 'rgba(40,24,10,0.30)';
      g.lineWidth = 16;
      g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 34, size); g.stroke();
      g.strokeStyle = 'rgba(255,238,206,0.22)';
      g.lineWidth = 9;
      g.beginPath(); g.moveTo(x + 16, 0); g.lineTo(x + 50, size); g.stroke();
    });
  }
  // dirt in the valleys
  for (let i = 0; i < 20; i++) {
    g.fillStyle = 'rgba(46,30,14,0.16)';
    g.beginPath(); g.ellipse(rnd() * size, rnd() * size, 12 + rnd() * 24, 6 + rnd() * 10, rnd() * 3, 0, Math.PI * 2); g.fill();
  }
  // mild cylindrical wrap (v=0 is the top of the tube): real lighting does most
  // of the roundness now, this just keeps the underside from reading flat
  const shade = g.createLinearGradient(0, 0, 0, size);
  shade.addColorStop(0, 'rgba(255,246,224,0.16)');
  shade.addColorStop(0.35, 'rgba(255,255,255,0)');
  shade.addColorStop(0.5, 'rgba(0,0,0,0.12)');
  shade.addColorStop(0.75, 'rgba(255,255,255,0)');
  shade.addColorStop(1, 'rgba(255,246,224,0.14)');
  g.fillStyle = shade;
  g.fillRect(0, 0, size, size);
  return c;
}

export function hempTexture({ repeatX = 4, repeatY = 1, seed = 31, twists = 2 } = {}) {
  const c = hempCanvas({ seed, twists, twistPeriod: 256 / twists });
  const map = canvasTexture(c, { repeatX, repeatY, srgb: true });
  const bump = bumpFrom(c, 2.2);
  bump.repeat.copy(map.repeat);
  const rough = roughnessFrom(c, 0.45, 0.95);
  rough.repeat.copy(map.repeat);
  return { map, bump, rough };
}

// ---------- starched linen pleats (Spanish golilla ruff, dishdashah collar) ----------
// The pleats run around the collar, so in UV they are vertical stripes on the
// cylinder's side: light ridge, dark valley, plus a little linen tooth.
export function pleatCanvas({ seed = 71, size = 128, pleats = 26, base = '#fbf7ee', dark = 'rgba(150,140,124,0.42)' } = {}) {
  const { c, g } = surface(size, base);
  const rnd = prng(seed);
  const w = size / pleats;
  for (let i = 0; i < pleats; i++) {
    const x = i * w;
    const grd = g.createLinearGradient(x, 0, x + w, 0);
    grd.addColorStop(0, dark);
    grd.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    grd.addColorStop(0.7, 'rgba(255,255,255,0.1)');
    grd.addColorStop(1, dark);
    g.fillStyle = grd;
    g.fillRect(x, 0, w, size);
  }
  for (let i = 0; i < 500; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.16)' : 'rgba(120,112,98,0.12)';
    g.fillRect(rnd() * size, rnd() * size, 2, 1 + rnd() * 2);
  }
  return c;
}

export function pleatTexture({ repeatX = 1, repeatY = 1, ...o } = {}) {
  const c = pleatCanvas(o);
  const map = canvasTexture(c, { repeatX, repeatY, srgb: true });
  const bump = bumpFrom(c, 1.1);
  bump.repeat.copy(map.repeat);
  return { map, bump };
}

// ---------- slashed doublet (the puffed, slit sleeves of a 16th c. doublet) ----------
export function slashedCanvas({ seed = 73, size = 128, base = '#ffffff', slash = 'rgba(28,14,10,0.66)', n = 7 } = {}) {
  const { c, g } = surface(size, base);
  const rnd = prng(seed);
  for (let i = 0; i < n; i++) {
    const y = (i + 0.5) * (size / n);
    const h = (size / n) * (0.3 + rnd() * 0.25);
    g.fillStyle = slash;
    g.beginPath();
    g.ellipse(size / 2, y, size * 0.34, h / 2, 0, 0, Math.PI * 2);
    g.fill();
    // the liner showing through the slit
    g.fillStyle = 'rgba(255,240,214,0.5)';
    g.beginPath();
    g.ellipse(size / 2, y + h * 0.28, size * 0.26, h * 0.16, 0, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < 320; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.14)' : 'rgba(50,30,20,0.14)';
    g.fillRect(rnd() * size, rnd() * size, 2 + rnd() * 2, 1 + rnd() * 2);
  }
  return c;
}

export function slashTexture({ repeatX = 2, repeatY = 2, ...o } = {}) {
  const c = slashedCanvas(o);
  const map = canvasTexture(c, { repeatX, repeatY, srgb: true });
  const bump = bumpFrom(c, 1.0);
  bump.repeat.copy(map.repeat);
  return { map, bump };
}
