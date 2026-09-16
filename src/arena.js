// The Courtyard of the Two Poles: tiled floor with the duel medallion,
// BTC moon, torches, moonlit parapet (spec 5). (Fountain removed in v17.)
//
// v5: the five giant round arch hoops are GONE (user: "the circles on the
// background are laggy and ugly, you can delete it"). They cost ~110 draw calls
// (5 tori + ~90 voussoir blocks + 4 vista planes) and read as cheap striped
// rings. The back wall is now a clean open parapet: piers, coping, merlons,
// azulejo dado and the ataurique frieze, with the BTC moon free in the sky and
// the sierra on the horizon. Every surface got a real texture + bump map, and
// the floor medallion is a single decal under the rope instead of one medallion
// per tile (the old repeat.set(3,2) stamped SIX of them across the courtyard).
import * as THREE from '../vendor/three.module.js';
import { ARENA, MATERIALS, DIM } from './palette.js';
import { canvasTexture, stoneTexture, stoneCanvas, bumpFrom, clothTexture } from './tex.js';

const std = (color, kind = 'cloth', extra = {}) =>
  new THREE.MeshStandardMaterial({ color, ...MATERIALS[kind], ...extra });
const texed = (color, kind, pair, extra = {}) => {
  const m = new THREE.MeshStandardMaterial({ color, ...MATERIALS[kind], ...extra });
  if (pair) {
    m.map = pair.map;
    if (pair.bump) { m.bumpMap = pair.bump; m.bumpScale = extra.bumpScale ?? 0.06; }
  }
  return m;
};
const mesh = (geo, mat, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
};
const torus = (r, t, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, 8, 28, arc);

// azulejo dado: eight-point stars, two alternating colorways (spec 5.2)
// v19: 128 -> 256 px and a real tile layout (central star, quarter stars at the
// corners, a colourway check and a grout line per tile) so the dado reads as
// glazed ceramic at a distance instead of a 4 px colour wash.
function azulejoTexture({ variant = 0 } = {}) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const soft = 'filter' in g;
  const star = (cx, cy, s, fg, bg, rot0 = 0) => {
    g.fillStyle = bg;
    g.fillRect(cx - s / 2, cy - s / 2, s, s);
    g.fillStyle = fg;
    for (const rot of [rot0, rot0 + Math.PI / 4]) {
      g.save();
      g.translate(cx, cy);
      g.rotate(rot);
      g.beginPath();
      for (let i = 0; i < 8; i++) {
        const a1 = (i / 8) * Math.PI * 2;
        const a2 = a1 + Math.PI / 8;
        g.lineTo(Math.cos(a1) * s * 0.46, Math.sin(a1) * s * 0.46);
        g.lineTo(Math.cos(a2) * s * 0.20, Math.sin(a2) * s * 0.20);
      }
      g.closePath();
      g.fill();
      g.restore();
    }
    // a fine white pin-line around the tile face: the ceramic reads as a plate
    g.strokeStyle = 'rgba(255,255,255,0.55)';
    g.lineWidth = 1.6;
    g.strokeRect(cx - s / 2 + 5, cy - s / 2 + 5, s - 10, s - 10);
  };
  if (soft) g.filter = 'blur(0.4px)';
  const base = [['#1F5FA8', '#F2EFE9'], ['#12755F', '#F2EFE9'], ['#B07C22', '#F2EFE9']];
  // v19b: the two wall flanks get DIFFERENT sheets (colourway order + pinwheel
  // phase), so the band does not read as one obviously mirrored repeat
  const colorways = variant
    ? [base[1], base[2], base[0]]
    : [base[0], base[1], base[2]];
  const ph = variant ? Math.PI / 8 : 0;
  star(64, 64, 118, ...colorways[0], Math.PI / 8 + ph);
  star(192, 192, 118, ...colorways[0], Math.PI / 8 + ph);
  star(192, 64, 118, ...colorways[1], Math.PI / 8 + ph);
  star(64, 192, 118, ...colorways[1], Math.PI / 8 + ph);
  if (soft) g.filter = 'none';
  // quarter stars pinwheeled at the four tile corners (the classic zellij unit)
  for (const [cx, cy] of [[0, 0], [256, 0], [0, 256], [256, 256]]) {
    g.save();
    g.translate(cx, cy);
    g.fillStyle = colorways[2][0];
    g.beginPath();
    for (let i = 0; i < 8; i++) {
      const a1 = (i / 8) * Math.PI * 2;
      const a2 = a1 + Math.PI / 8;
      g.lineTo(Math.cos(a1) * 34, Math.sin(a1) * 34);
      g.lineTo(Math.cos(a2) * 15, Math.sin(a2) * 15);
    }
    g.closePath();
    g.fill();
    g.restore();
  }
  // mortar joints + glaze variation per tile
  const rnd = (() => { let v = 77 + variant * 31; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  g.strokeStyle = 'rgba(60,52,40,0.42)';
  g.lineWidth = 4;
  g.strokeRect(2, 2, 252, 252);
  g.lineWidth = 2;
  g.beginPath(); g.moveTo(128, 0); g.lineTo(128, 256); g.moveTo(0, 128); g.lineTo(256, 128); g.stroke();
  for (let i = 0; i < 260; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.13)' : 'rgba(0,0,0,0.10)';
    g.fillRect(rnd() * 256, rnd() * 256, 4, 4);
  }
  // v19: age. A courtyard dado is never showroom-fresh: grime in the joints,
  // a few crazed (crackled) glazes and one chipped tile, which is what breaks
  // the "obvious repeating pattern" read at a distance.
  for (let i = 0; i < 40; i++) {
    const x = rnd() * 256, y = rnd() * 256, r = 6 + rnd() * 22;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(58,48,34,0.16)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 12; i++) {
    g.strokeStyle = 'rgba(40,34,24,0.22)';
    g.lineWidth = 0.8;
    g.beginPath();
    const x = rnd() * 256, y = rnd() * 256;
    g.moveTo(x, y);
    for (let k = 0; k < 3; k++) g.lineTo(x + (rnd() - 0.5) * 60, y + (rnd() - 0.5) * 60);
    g.stroke();
  }
  const chip = [40 + rnd() * 170, 40 + rnd() * 170, 5 + rnd() * 9];
  g.fillStyle = 'rgba(120,104,78,0.7)';
  g.beginPath(); g.ellipse(chip[0], chip[1], chip[2], chip[2] * 0.7, rnd() * 3, 0, Math.PI * 2); g.fill();
  return canvasTexture(c);
}

// ataurique frieze band: abstract leaf-and-bloom scrollwork, tinted (spec 5.2)
// v19: 512x64 -> 1024x128 and a proper unit (interlaced scroll + palmette +
// bead-and-reel base course) so the band reads as carved stucco, not a squiggle.
function friezeTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.stoneWall;
  g.fillRect(0, 0, 1024, 128);
  // faint carved-stucco mottle
  const rnd = (() => { let v = 313; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  for (let i = 0; i < 1800; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,250,236,0.10)' : 'rgba(96,74,48,0.10)';
    g.fillRect(rnd() * 1024, rnd() * 128, 3, 2);
  }
  // top + bottom rule
  g.strokeStyle = 'rgba(90,70,44,0.55)';
  g.lineWidth = 5;
  g.beginPath(); g.moveTo(0, 6); g.lineTo(1024, 6); g.moveTo(0, 122); g.lineTo(1024, 122); g.stroke();
  // the scroll: one unit per 128 px, mirrored so the band interlocks
  const unit = 128, half = 64;
  const ink = ARENA.frieze, shade = 'rgba(70,52,30,0.45)';
  for (let u = 0; u < 1024 / unit; u++) {
    const x = u * unit;
    // the big S-scroll of the unit
    const scroll = (dx, flip) => {
      g.save();
      g.translate(x + dx + half, 64);
      if (flip) g.scale(-1, 1);
      g.lineWidth = 7;
      g.strokeStyle = shade;
      g.beginPath();
      g.moveTo(-half + 6, 26);
      g.bezierCurveTo(-26, -34, 20, -34, 2, -4);
      g.bezierCurveTo(-10, 18, 22, 30, half - 6, -22);
      g.stroke();
      g.lineWidth = 4;
      g.strokeStyle = ink;
      g.stroke();
      // leaf lobes along the vine
      for (const [lx, ly, r] of [[-34, 6, 9], [-10, -22, 7], [16, 12, 10], [40, -14, 7]]) {
        g.fillStyle = ink;
        g.beginPath();
        g.ellipse(lx, ly, r * 1.5, r * 0.75, (lx + ly) * 0.02, 0, Math.PI * 2);
        g.fill();
      }
      // bloom at the centre of the unit
      g.fillStyle = ink;
      g.beginPath(); g.arc(0, 4, 7, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(40,28,14,0.5)';
      g.beginPath(); g.arc(0, 4, 3, 0, Math.PI * 2); g.fill();
      g.restore();
    };
    scroll(0, u % 2 === 1);
  }
  // bead-and-reel base course
  for (let x = 0; x < 1024; x += 32) {
    g.fillStyle = 'rgba(60,44,26,0.30)';
    g.beginPath(); g.arc(x + 16, 110, 7, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(255,246,228,0.35)';
    g.beginPath(); g.arc(x + 14, 108, 4, 0, Math.PI * 2); g.fill();
  }
  return canvasTexture(c);
}

// paving: paver courses + grout (no medallion - that is a separate decal now)
// v19: 512 -> 1024 px and the pavers get individual tone, chipped corners and
// wear polish, so the courtyard floor stops reading as flat lino.
function floorTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.floorBase;
  g.fillRect(0, 0, 1024, 1024);
  const rnd = (() => { let v = 913; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  // soft grain before the joints
  for (let i = 0; i < 5200; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.07)' : 'rgba(96,78,56,0.09)';
    g.fillRect(rnd() * 1024, rnd() * 1024, 3 + rnd() * 5, 3 + rnd() * 5);
  }
  const cell = 128;
  // per-paver tone + polish (a laid floor is never one colour)
  for (let r = 0; r < 8; r++) {
    for (let q = 0; q < 8; q++) {
      const t = rnd();
      g.fillStyle = t < 0.3 ? 'rgba(255,248,232,0.10)'
        : t < 0.6 ? 'rgba(120,98,70,0.09)'
          : t < 0.85 ? 'rgba(255,255,255,0.04)' : 'rgba(70,54,36,0.10)';
      g.fillRect(q * cell, r * cell, cell, cell);
      // worn polish patch in the middle of the paver
      const grd = g.createRadialGradient(q * cell + cell * 0.45, r * cell + cell * 0.5, 4,
        q * cell + cell * 0.45, r * cell + cell * 0.5, cell * 0.5);
      grd.addColorStop(0, 'rgba(255,252,240,0.10)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd;
      g.fillRect(q * cell, r * cell, cell, cell);
    }
  }
  // joints: dark mortar line with a lit lip on the lower edge
  for (let i = 0; i <= 1024; i += cell) {
    g.strokeStyle = 'rgba(104,86,62,0.70)';
    g.lineWidth = 4;
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 1024); g.moveTo(0, i); g.lineTo(1024, i); g.stroke();
    g.strokeStyle = 'rgba(255,250,236,0.22)';
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(i + 3, 0); g.lineTo(i + 3, 1024); g.moveTo(0, i + 3); g.lineTo(1024, i + 3); g.stroke();
  }
  // chipped corners + hairline cracks
  for (let i = 0; i < 90; i++) {
    const x = rnd() * 1024, y = rnd() * 1024, r = 4 + rnd() * 14;
    g.fillStyle = 'rgba(120,104,80,0.28)';
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 26; i++) {
    const x = rnd() * 1024, y = rnd() * 1024;
    g.strokeStyle = 'rgba(96,78,56,0.30)';
    g.lineWidth = 1.6;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (rnd() - 0.5) * 90, y + (rnd() - 0.5) * 90);
    g.stroke();
  }
  return canvasTexture(c);
}

// the duel medallion: ONE eight-point star split BUY-green / SELL-red,
// transparent background so it can be laid over the paving as a decal
// (convention flip, task t_167a53f3: the star tip pointing at the BUY pole is
// green, the tip pointing at the SELL pole is red)
function medallionTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  const soft = 'filter' in g;
  const cx = 256, cy = 256, R = 150;
  if (soft) g.filter = 'blur(0.5px)';
  // stone ring
  g.strokeStyle = 'rgba(110,90,66,0.85)';
  g.lineWidth = 14;
  g.beginPath(); g.arc(cx, cy, R + 34, 0, Math.PI * 2); g.stroke();
  g.strokeStyle = 'rgba(240,232,214,0.5)';
  g.lineWidth = 4;
  g.beginPath(); g.arc(cx, cy, R + 42, 0, Math.PI * 2); g.stroke();
  const star = (rot, fill) => {
    g.fillStyle = fill;
    g.beginPath();
    for (let i = 0; i < 8; i++) {
      const a1 = rot + (i / 8) * Math.PI * 2;
      const a2 = a1 + Math.PI / 8;
      g.lineTo(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R);
      g.lineTo(cx + Math.cos(a2) * R * 0.45, cy + Math.sin(a2) * R * 0.45);
    }
    g.closePath();
    g.fill();
  };
  // BUY half (tip toward the right/BUY pole) green, SELL half red
  star(-Math.PI / 2, '#26A69A');
  star(Math.PI / 2, '#EF5350');
  if (soft) g.filter = 'none';
  // gold outlines + centre boss
  g.lineJoin = 'round';
  g.strokeStyle = 'rgba(60,46,30,0.55)';
  g.lineWidth = 3;
  for (const rot of [-Math.PI / 2, Math.PI / 2]) {
    g.beginPath();
    for (let i = 0; i < 8; i++) {
      const a1 = rot + (i / 8) * Math.PI * 2;
      const a2 = a1 + Math.PI / 8;
      g.lineTo(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R);
      g.lineTo(cx + Math.cos(a2) * R * 0.45, cy + Math.sin(a2) * R * 0.45);
    }
    g.closePath();
    g.stroke();
  }
  g.fillStyle = 'rgba(236,228,210,0.9)';
  g.beginPath(); g.arc(cx, cy, 22, 0, Math.PI * 2); g.fill();
  g.strokeStyle = 'rgba(120,96,64,0.8)';
  g.lineWidth = 6;
  g.beginPath(); g.arc(cx, cy, 22, 0, Math.PI * 2); g.stroke();
  return canvasTexture(c);
}

// v19: a knotted wall carpet. The wall either side of the tape board used to be
// a bare plane of stone (the board was the only thing to look at up there); two
// hanging rugs on rods give it depth and place. Same eight-point geometry as the
// azulejo and the floor medallion, so the room reads as one design.
function rugTexture({ seed = 101, field = '#7E1F26', border = '#163A2E', ink = '#E8C87A' } = {}) {
  const c = document.createElement('canvas');
  c.width = 320; c.height = 420;
  const g = c.getContext('2d');
  const rnd = (() => { let v = seed; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  // knotted ground: tight pile stripes, the tell of a woven carpet
  g.fillStyle = border;
  g.fillRect(0, 0, 320, 420);
  for (let y = 0; y < 420; y += 3) {
    g.fillStyle = `rgba(255,255,255,${0.03 + rnd() * 0.05})`;
    g.fillRect(0, y, 320, 1);
  }
  const fieldBox = [26, 26, 268, 368];
  g.fillStyle = field;
  g.fillRect(...fieldBox);
  // the field ground also gets pile stripes + an abrash (dye-lot) band
  for (let y = fieldBox[1]; y < fieldBox[1] + fieldBox[3]; y += 3) {
    g.fillStyle = `rgba(0,0,0,${0.03 + rnd() * 0.05})`;
    g.fillRect(fieldBox[0], y, fieldBox[2], 1);
  }
  const ab = g.createLinearGradient(0, fieldBox[1], 0, fieldBox[1] + fieldBox[3]);
  ab.addColorStop(0, 'rgba(255,220,170,0.10)');
  ab.addColorStop(0.45, 'rgba(255,255,255,0)');
  ab.addColorStop(1, 'rgba(20,10,10,0.14)');
  g.fillStyle = ab;
  g.fillRect(fieldBox[0], fieldBox[1], fieldBox[2], fieldBox[3]);
  const star = (cx, cy, R, spokes, col) => {
    g.fillStyle = col;
    g.beginPath();
    for (let i = 0; i < spokes * 2; i++) {
      const a = (i / (spokes * 2)) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 ? R * 0.46 : R;
      g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    }
    g.closePath();
    g.fill();
  };
  // border motifs: a hooked vine running around the field
  g.strokeStyle = ink;
  g.lineWidth = 4;
  g.beginPath();
  g.rect(fieldBox[0] + 9, fieldBox[1] + 9, fieldBox[2] - 18, fieldBox[3] - 18);
  g.stroke();
  for (let i = 0; i < 30; i++) {
    const t = i / 30;
    for (const [x, y, dir] of [[46 + t * 228, 40, 1], [46 + t * 228, 380, -1], [40, 46 + t * 328, 1], [280, 46 + t * 328, -1]]) {
      g.save(); g.translate(x, y);
      g.rotate(dir * Math.PI / 2);
      g.strokeStyle = ink; g.lineWidth = 3;
      g.beginPath(); g.moveTo(-6, 0); g.lineTo(0, -8); g.lineTo(6, 0); g.stroke();
      g.restore();
    }
  }
  // main medallion + corner spandrels
  star(160, 210, 62, 8, ink);
  star(160, 210, 40, 8, field);
  star(160, 210, 20, 6, ink);
  for (const [cx, cy] of [[52, 62], [268, 62], [52, 358], [268, 358]]) star(cx, cy, 26, 6, ink);
  // wear: the pile thins where feet would brush it
  for (let i = 0; i < 380; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,246,224,0.05)' : 'rgba(0,0,0,0.05)';
    g.fillRect(rnd() * 320, rnd() * 420, 2, 6);
  }
  /* v19: DRAPE SHADING. A flat print of a carpet reads as a sticker however good
   * the pattern is (a vision review called them exactly that). Real hangings
   * catch light in vertical folds, so the folds are baked here as soft value
   * bands, matched to the geometric ripple hangRug() puts in the plane: the
   * highlight sits on the crown of each ripple and the shadow in each valley. */
  const folds = [0.09, 0.35, 0.61, 0.87];
  for (const f of folds) {
    const cx0 = f * 320;
    const w = 26 + rnd() * 12;
    const grd = g.createLinearGradient(cx0 - w, 0, cx0 + w, 0);
    grd.addColorStop(0, 'rgba(0,0,0,0.20)');
    grd.addColorStop(0.42, 'rgba(255,246,224,0.16)');
    grd.addColorStop(0.68, 'rgba(255,246,224,0.05)');
    grd.addColorStop(1, 'rgba(0,0,0,0.16)');
    g.fillStyle = grd;
    g.fillRect(cx0 - w, 0, w * 2, 420);
  }
  // the rod pocket casts a shadow across the top, the hem pools at the bottom
  const top = g.createLinearGradient(0, 0, 0, 46);
  top.addColorStop(0, 'rgba(0,0,0,0.42)');
  top.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = top;
  g.fillRect(0, 0, 320, 46);
  const hem = g.createLinearGradient(0, 372, 0, 420);
  hem.addColorStop(0, 'rgba(0,0,0,0)');
  hem.addColorStop(1, 'rgba(0,0,0,0.26)');
  g.fillStyle = hem;
  g.fillRect(0, 372, 320, 48);
  return canvasTexture(c);
}


// BTC moon: emissive disc with engraved emblem + halo (spec 5.3)
function moonTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 512, 512);
  const grad = g.createRadialGradient(256, 256, 150, 256, 256, 256);
  grad.addColorStop(0, ARENA.moonHalo + 'cc');
  grad.addColorStop(1, ARENA.moonHalo + '00');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);
  // moon craters: barely-there grey mottling so the disc is not a flat sticker
  const rnd = (() => { let v = 553; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  g.fillStyle = ARENA.moonBtc;
  g.beginPath(); g.arc(256, 256, 190, 0, Math.PI * 2); g.fill();
  for (let i = 0; i < 40; i++) {
    const a = rnd() * Math.PI * 2, r = rnd() * 175;
    const x = 256 + Math.cos(a) * r, y = 256 + Math.sin(a) * r;
    const rr = 6 + rnd() * 26;
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,214,150,0.16)' : 'rgba(150,80,10,0.14)';
    g.beginPath(); g.arc(x, y, rr, 0, Math.PI * 2); g.fill();
  }
  // terminator shading: the moon is lit from the upper left, not uniformly
  const sh = g.createRadialGradient(190, 180, 40, 256, 256, 230);
  sh.addColorStop(0, 'rgba(255,240,214,0.30)');
  sh.addColorStop(0.55, 'rgba(255,255,255,0)');
  sh.addColorStop(1, 'rgba(70,30,0,0.34)');
  g.fillStyle = sh;
  g.beginPath(); g.arc(256, 256, 190, 0, Math.PI * 2); g.fill();
  // engraved Bitcoin B with two strokes
  g.strokeStyle = ARENA.moonSymbol;
  g.lineWidth = 22;
  g.lineCap = 'round';
  g.font = 'bold 260px "Arial Black", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = ARENA.moonSymbol;
  g.fillText('B', 256, 270);
  g.lineWidth = 14;
  for (const dx of [196, 316]) {
    g.beginPath();
    g.moveTo(dx, 130); g.lineTo(dx, 382);
    g.stroke();
  }
  return canvasTexture(c);
}

// hemp rope flag pennant texture
function pennantTexture(text, color) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 160;
  const g = c.getContext('2d');
  g.fillStyle = color;
  g.beginPath();
  g.moveTo(8, 8); g.lineTo(248, 8); g.lineTo(180, 80); g.lineTo(248, 152);
  g.lineTo(8, 152); g.closePath(); g.fill();
  g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 6; g.stroke();
  g.fillStyle = '#FFFFFF';
  g.font = 'bold 64px "Arial Black", sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 116, 84);
  return canvasTexture(c);
}

export function buildArena(scene) {
  const arena = new THREE.Group();
  scene.add(arena);
  const groups = { torches: [] };
  arena.userData.torches = groups.torches;

  // ---- BTC moon (the loop in scene.js owns its screen slot each frame: the
  // world-fixed position here only feeds the very first frame) ----
  const moon = new THREE.Mesh(
    new THREE.PlaneGeometry(5.0, 5.0),
    new THREE.MeshBasicMaterial({ map: moonTexture(), transparent: true, fog: false, depthWrite: false })
  );
  moon.position.set(0, 6.6, -7.45);
  moon.renderOrder = -1;
  arena.add(moon);
  groups.moon = moon;
  arena.userData.moon = moon;

  // ---- back wall: open parapet at the arch springline (z = -7.2) ----
  const wallPair = stoneTexture({ seed: 61, base: '#ffffff', blocks: 5, alpha: 0.16, repeatX: 4, repeatY: 2 });
  const wallH = 8, wallW = 26, wallZ = -7.2;
  const dadoH = 1.2, friezeH = 0.4, arcSpringY = 3.4;
  const wallMat = texed(ARENA.stoneWall, 'cloth', wallPair, { roughness: 0.95, bumpScale: 0.12 });
  const lowerWall = mesh(new THREE.BoxGeometry(wallW, arcSpringY, 0.5), wallMat, 0, arcSpringY / 2, wallZ);
  arena.add(lowerWall);

  // dado band (azulejo) - v18: split into two FLANK segments so the centre of
  // the wall is a blank mounting zone for the live tape board (user: "Make
  // wall blank so chart is visible")
  const azTex = azulejoTexture({ variant: 0 });
  const azTexB = azulejoTexture({ variant: 1 });
  const azBump = bumpFrom(azTex.image, 1.0);
  const azBumpB = bumpFrom(azTexB.image, 1.0);
  const DADO_GAP = 3.9;                       // blank centre half-width
  const segW = wallW / 2 - DADO_GAP;          // each flank segment width
  const dadoSeg = (cx, w, tex, bump) => {
    const t = tex.clone(); t.needsUpdate = true;
    t.repeat.set(w / 2.6, 1);                 // 2.6 world units per tile sheet (was 26/10)
    const b = bump.clone(); b.needsUpdate = true; b.repeat.copy(t.repeat);
    return mesh(
      new THREE.BoxGeometry(w, dadoH, 0.54),
      new THREE.MeshStandardMaterial({ map: t, bumpMap: b, bumpScale: 0.05, roughness: 0.5 }),
      cx, dadoH / 2, wallZ + 0.01
    );
  };
  arena.add(dadoSeg(-(DADO_GAP + segW / 2), segW, azTex, azBump));
  arena.add(dadoSeg(+(DADO_GAP + segW / 2), segW, azTexB, azBumpB));

  // frieze band above dado - same centre gap as the dado
  const frTex = friezeTexture();
  const friezeSeg = (cx, w) => {
    const t = frTex.clone(); t.needsUpdate = true;
    t.repeat.set(w / (wallW / 6), 1);         // 6 sheets across the old full width
    return mesh(
      new THREE.BoxGeometry(w, friezeH, 0.55),
      new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }),
      cx, dadoH + friezeH / 2, wallZ + 0.01
    );
  };
  arena.add(friezeSeg(-(DADO_GAP + segW / 2), segW));
  arena.add(friezeSeg(+(DADO_GAP + segW / 2), segW));

  // ---- v18 THE TAPE BOARD: the live candle chart is mounted on the wall ----
  // (user: "take the chart out of sky and put it on the wall"). A walnut
  // display board hung on the blank centre of the wall; skychart.js draws the
  // tape onto a plane floating just in front of it (scene.js owns the offset).
  // Kept clear of the pier torches (flame tips reach y 4.02 at x +-4.6; the
  // board top sits above them) and sized so the camera's centre ray, which
  // lands at wall height ~2.66, hits the candles band.
  // v18.1: the board hangs OFF the wall face on two cleats (user: "the chart
  // is collide with the wall. Pull it a little closer" - the v18 board's back
  // was sunk 0.04 INTO the stone and the coping front (-6.87) cut through the
  // board's back half). Now the whole assembly is proud of every wall slice:
  // wall face -6.95 / coping front -6.87 -> 0.24 shadow gap -> board back
  // -6.71 (centre -6.62, front -6.53); the chart plane rides the board face
  // via userData.tapeBoard.z. Width 8.0 keeps the trim clear of the pier
  // inner faces (x 4.05 < 4.1) so nothing intersects the piers either.
  const BOARD_W = 8.0, BOARD_H = 3.17, BOARD_STANDOFF = 0.24;
  // v19 the tape MOUNT stack: air gap -> bezel depth -> glass, all measureable
  // so tools/wallboardcheck.mjs can assert the screen is proud of the board and
  // never coplanar with it.
  const SCREEN_GAP = 0.13, SCREEN_DEPTH = 0.10;
  const wallFaceZ = wallZ + 0.25;
  const boardZ = wallFaceZ + BOARD_STANDOFF + 0.09;   // board centre depth
  const walnutPair = clothTexture({ seed: 91, weave: 14, thread: 'rgba(30,18,8,0.5)' });
  walnutPair.map.wrapS = walnutPair.map.wrapT = THREE.RepeatWrapping;
  walnutPair.map.repeat.set(3, 1.2);
  const boardMat = new THREE.MeshStandardMaterial({
    color: '#5B3A21', map: walnutPair.map, bumpMap: walnutPair.bump,
    bumpScale: 0.04, roughness: 0.62, metalness: 0.05
  });
  const boardY = dadoH + friezeH + BOARD_H / 2 + 0.06;   // 3.11
  const board = mesh(new THREE.BoxGeometry(BOARD_W, BOARD_H, 0.18), boardMat, 0, boardY, boardZ);
  arena.add(board);
  // frame trim: a DEEP shadowbox edge (0.26 > board 0.18) so the screen sits
  // recessed inside the frame and the frame reads as proud carpentry
  const trimMat2 = new THREE.MeshStandardMaterial({ color: '#3E2712', roughness: 0.55 });
  arena.add(mesh(new THREE.BoxGeometry(BOARD_W + 0.14, 0.1, 0.26), trimMat2, 0, boardY + BOARD_H / 2 + 0.04, boardZ + 0.04));
  arena.add(mesh(new THREE.BoxGeometry(BOARD_W + 0.14, 0.1, 0.26), trimMat2, 0, boardY - BOARD_H / 2 - 0.04, boardZ + 0.04));
  arena.add(mesh(new THREE.BoxGeometry(0.1, BOARD_H + 0.14, 0.26), trimMat2, -(BOARD_W / 2 + 0.04), boardY, boardZ + 0.04));
  arena.add(mesh(new THREE.BoxGeometry(0.1, BOARD_H + 0.14, 0.26), trimMat2, +(BOARD_W / 2 + 0.04), boardY, boardZ + 0.04));
  // two cleats UNDER the board carry it on the wall: they span the whole
  // shadow gap (0.02 buried in the stone, 0.03 into the board back)
  arena.add(mesh(new THREE.BoxGeometry(0.09, 0.32, 0.29), trimMat2, -BOARD_W / 2 + 0.5, boardY - BOARD_H / 2 - 0.14, wallFaceZ + 0.125));
  arena.add(mesh(new THREE.BoxGeometry(0.09, 0.32, 0.29), trimMat2, +BOARD_W / 2 - 0.5, boardY - BOARD_H / 2 - 0.14, wallFaceZ + 0.125));
  /* v19 wall rugs: two knotted carpets hung on rods either side of the board.
   * The flanking stone was completely blank (the v18 board kept the centre
   * clear, so the only feature up there was the board itself); the rugs give the
   * wall depth, scale and a second thing to look at, and their weave matches the
   * azulejo / medallion geometry. They sit proud of the wall face but BEHIND the
   * coping's front plane is not possible (the coping protrudes 0.08 past the
   * face), so they hang 0.11 proud of the face - in front of the coping, which
   * is how a rug hung on the inner face of a parapet actually behaves. */
  const rugZ = wallFaceZ + 0.11;
  const hangRug = (x, tex) => {
    // v19: the ripple in the plane is matched to the baked fold bands in the
    // texture (~5 crests across), and the sheet tapers slightly so the weight of
    // the hem pulls the bottom wider - the two together are what stop a hanging
    // carpet from reading as a printed rectangle.
    const geo = new THREE.PlaneGeometry(1.58, 1.62, 12, 14);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i), py = pos.getY(i);
      const depth = Math.max(0, Math.min(1, (0.81 - py) / 1.62));
      const ripple = Math.sin(px * 7.66 + 0.25) * (0.026 + depth * 0.048);
      pos.setZ(i, ripple + Math.sin(py * 3.4 + px * 0.6) * 0.016);
      pos.setX(i, px * (1 + depth * 0.035));
    }
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      map: tex, bumpMap: bumpFrom(tex.image, 0.9), bumpScale: 0.07, roughness: 0.92, side: THREE.DoubleSide
    }));
    m.position.set(x, 2.52, rugZ);
    m.userData.rug = { w: 1.58, h: 1.62, world: { x, y: 2.52, z: rugZ } };   // for tools/rugcheck.mjs
    arena.add(m);
    // rod + finials above, tassels below
    const wood = new THREE.MeshStandardMaterial({ color: '#4A2E17', roughness: 0.7 });
    const rod = mesh(new THREE.CylinderGeometry(0.048, 0.048, 1.94, 10), wood, x, 3.40, rugZ + 0.05);
    rod.rotation.z = Math.PI / 2;
    arena.add(rod);
    for (const fx of [-0.97, 0.97]) arena.add(mesh(new THREE.SphereGeometry(0.075, 10, 8), wood, x + fx, 3.40, rugZ + 0.05));
    const tasMat = new THREE.MeshStandardMaterial({ color: '#C9B389', roughness: 0.95 });
    for (let i = 0; i < 8; i++) {
      const tx = x - 0.69 + i * 0.197;
      const tas = mesh(new THREE.ConeGeometry(0.030, 0.19, 6), tasMat, tx, 1.62, rugZ + 0.02);
      tas.rotation.x = Math.PI;
      arena.add(tas);
    }
  };
  const rugTexA = rugTexture({ seed: 101, field: '#7E1F26', border: '#163A2E', ink: '#E8C87A' });
  const rugTexB = rugTexture({ seed: 207, field: '#1B2A5E', border: '#6B1A1E', ink: '#D9BE86' });
  hangRug(-6.0, rugTexA);
  hangRug(6.0, rugTexB);

  // cast shadow, DIRECTIONAL (light from above): a soft dark band on the
  // stone just BELOW the board, none above it - the physical signature of
  // something mounted proud of a wall (a centered halo reads as recessed)
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128; shadowCanvas.height = 64;
  {
    const g = shadowCanvas.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, 64);
    grd.addColorStop(0, 'rgba(0,0,0,0.62)');
    grd.addColorStop(0.45, 'rgba(0,0,0,0.30)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 128, 64);
  }
  const shadowTex = canvasTexture(shadowCanvas);
  const wallShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(BOARD_W * 1.06, 0.62),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.75 })
  );
  wallShadow.position.set(0.12, boardY - BOARD_H / 2 - 0.30, wallFaceZ + 0.012);
  wallShadow.renderOrder = -1;
  arena.add(wallShadow);
  /* v19 THE TAPE MOUNT (user: "the chart is still embeded infused to the board
   * behind it and they collide to each other"). Measured cause: the chart plane
   * was placed at `board.z + 0.09`, which is EXACTLY the board's front face
   * (the box is 0.18 deep, so its front is centre + 0.09) - the screen and the
   * walnut were coplanar and z-fought. What is mounted on a display board is
   * not painted on it: the screen now stands PROUD of the board face on four
   * brass stand-offs, with a real cast shadow on the board behind it and a
   * separate bezel around the glass (skychart.js builds the frame; the numbers
   * below are exported so the checker can assert the whole stack). */
  arena.userData.tapeBoard = {
    y: boardY, w: BOARD_W, h: BOARD_H, z: boardZ,
    face: boardZ + 0.09,        // the walnut face the screen hangs off
    gap: SCREEN_GAP,            // air between the board face and the screen back
    screenZ: boardZ + 0.09 + SCREEN_GAP + SCREEN_DEPTH * 0.5
  };
  // brass stand-offs: four short pins spanning the gap (board face -> screen back)
  const brassMat = new THREE.MeshStandardMaterial({ color: '#C8A24A', metalness: 0.9, roughness: 0.32 });
  for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const pin = mesh(new THREE.CylinderGeometry(0.030, 0.038, SCREEN_GAP + 0.05, 8), brassMat,
      sx * (BOARD_W * 0.88 / 2 - 0.22), boardY + sy * (BOARD_H * 0.88 / 2 - 0.22), boardZ + 0.09 + SCREEN_GAP / 2);
    pin.rotation.x = Math.PI / 2;
    arena.add(pin);
    const collar = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 10), brassMat,
      sx * (BOARD_W * 0.88 / 2 - 0.22), boardY + sy * (BOARD_H * 0.88 / 2 - 0.22), boardZ + 0.09 + 0.012);
    collar.rotation.x = Math.PI / 2;
    arena.add(collar);
  }
  // the screen's cast shadow on the board: a soft dark band under its lower
  // edge (light from above), the signature of something standing proud
  const boardShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(BOARD_W * 0.90, 0.42),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.62 })
  );
  boardShadow.position.set(0, boardY - BOARD_H * 0.44 - 0.16, boardZ + 0.095);
  boardShadow.renderOrder = 1;
  arena.add(boardShadow);

  // coping + engaged piers + merlons: this is what carries the wall now that
  // the arch hoops are gone, so it gets real stone texture too
  const stonePair = stoneTexture({ seed: 62, base: '#ffffff', blocks: 3, alpha: 0.2, repeatX: 2, repeatY: 1 });
  const copingMat = texed(ARENA.stoneShadow, 'cloth', stonePair, { bumpScale: 0.08 });
  const coping = mesh(new THREE.BoxGeometry(wallW, 0.16, 0.62), copingMat, 0, arcSpringY + 0.08, wallZ + 0.02);
  arena.add(coping);
  const pierMat = texed(ARENA.stoneShadow, 'cloth', stonePair, { bumpScale: 0.1 });
  // v18: the INNER piers move out to +-4.6 so the board zone (half-width 3.75)
  // stays clear of stone in front of it; torches follow their perches
  const piersX = [-12.1, -7.4, -4.6, 4.6, 7.4, 12.1];
  for (const px of piersX) {
    arena.add(mesh(new THREE.BoxGeometry(1.0, 3.35, 0.68), pierMat, px, 1.675, wallZ + 0.09));
    arena.add(mesh(new THREE.BoxGeometry(1.2, 0.22, 0.76), texed(ARENA.stoneWall, 'cloth', stonePair), px, 3.46, wallZ + 0.09));
  }
  const merlonMat = texed(ARENA.stoneWall, 'cloth', stonePair, { bumpScale: 0.1 });
  for (const x of [-12, -7.4, -4.6, 4.6, 7.4, 12]) {
    const stepped = Math.abs(x) > 9 || Math.abs(x) < 5;
    arena.add(mesh(new THREE.BoxGeometry(0.9, 0.42, 0.5), merlonMat, x, arcSpringY + 0.37, wallZ));
    if (stepped) {
      arena.add(mesh(new THREE.BoxGeometry(0.5, 0.2, 0.5), merlonMat, x, arcSpringY + 0.67, wallZ));
    }
  }

  // ---- floor: paved courtyard, medallion laid as a single decal ----
  const floorTex = floorTexture();
  floorTex.repeat.set(3, 2);
  const floorBump = bumpFrom(floorTex.image, 0.8);
  floorBump.repeat.copy(floorTex.repeat);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(26, 15),
    new THREE.MeshStandardMaterial({ map: floorTex, bumpMap: floorBump, bumpScale: 0.06, roughness: 0.9 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, 0.5);
  floor.receiveShadow = true;
  arena.add(floor);

  const medallion = new THREE.Mesh(
    new THREE.PlaneGeometry(7.6, 7.6),
    new THREE.MeshBasicMaterial({
      map: medallionTexture(), transparent: true, depthWrite: false, opacity: 0.92
    })
  );
  medallion.rotation.x = -Math.PI / 2;
  medallion.position.set(0, 0.012, 0.4);
  medallion.renderOrder = 1;
  arena.add(medallion);

  // side ground beyond courtyard
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 60),
    new THREE.MeshStandardMaterial({ color: 0x14101c, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.02, 0);
  arena.add(ground);

  // (the fountain that stood here was removed in v17 - open courtyard now)

  // ---- stone poles at x = +/-10 with cap stones ----
  const polePair = stoneTexture({ seed: 64, base: '#ffffff', blocks: 3, alpha: 0.14, repeatX: 1, repeatY: 3 });
  const poleMat = texed(ARENA.stonePole, 'cloth', polePair, { bumpScale: 0.07 });
  const pennants = {};
  for (const side of ['L', 'R']) {
    const x = side === 'L' ? -DIM.spanHalf : DIM.spanHalf;
    const pole = new THREE.Group();
    pole.position.set(x, 0, 0);
    const shaft = mesh(new THREE.CylinderGeometry(0.28, 0.36, DIM.ropeY, 10), poleMat, 0, DIM.ropeY / 2, 0);
    const cap = mesh(new THREE.BoxGeometry(0.8, 0.22, 0.8), poleMat, 0, DIM.ropeY + 0.11, 0);
    pole.add(shaft, cap);
    const mast = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 6), std(ARENA.iron, 'cloth'), 0, DIM.ropeY + 0.7, 0);
    pole.add(mast);
    const isBuy = side === 'R';
    const penTex = pennantTexture(isBuy ? 'BUY' : 'SELL', isBuy ? ARENA.flagUp : ARENA.flagDown);
    const pen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 0.62),
      new THREE.MeshBasicMaterial({ map: penTex, side: THREE.DoubleSide })
    );
    pen.position.set(0.62, DIM.ropeY + 1.05, 0);
    pole.add(pen);
    pennants[side] = pen;
    arena.add(pole);
  }
  groups.pennants = pennants;

  // ---- torches ON the pier tops (they used to float in front of the arches;
  // v18: the inner pair follows its pier out to +-4.6, clear of the board) ----
  const torchXs = [-7.4, -4.6, 4.6, 7.4];
  for (const tx of torchXs) {
    const bracket = mesh(new THREE.BoxGeometry(0.1, 0.1, 0.5), std(ARENA.iron, 'cloth'), tx, 3.62, wallZ + 0.42);
    arena.add(bracket);
    const bowl = mesh(new THREE.CylinderGeometry(0.14, 0.07, 0.18, 8), std(ARENA.iron, 'cloth'), tx, 3.78, wallZ + 0.66);
    arena.add(bowl);
    const flame = mesh(new THREE.ConeGeometry(0.11, 0.36, 8),
      new THREE.MeshBasicMaterial({ color: ARENA.torchFlame, fog: false }),
      tx, 4.02, wallZ + 0.66);
    arena.add(flame);
    const light = new THREE.PointLight(ARENA.torchGlow, 15, 11, 1.8);
    light.position.set(tx, 4.05, wallZ + 0.95);
    arena.add(light);
    groups.torches.push({ flame, light, seed: Math.random() * 10 });
  }

  return arena;
}

// per-frame flicker (spec 5.4: noise-driven intensity)
// v4: SLOW + SHALLOW (the old 1-4 Hz +-40% pulse made the whole background
// read as "shaking"). v5: same rule, the torches just sit higher now.
export function updateArena(arena, t) {
  for (const tc of arena.userData.torches || []) {
    const n = Math.sin(t * 1.7 + tc.seed) * 0.5
            + Math.sin(t * 3.1 + tc.seed * 2) * 0.3
            + Math.sin(t * 0.9 + tc.seed) * 0.2;
    tc.light.intensity = 14 + n * 1.6;
    tc.flame.scale.y = 1 + n * 0.18;
    tc.flame.scale.x = 1 - n * 0.09;
  }
}
