// The Courtyard of the Two Poles: tiled floor with the duel medallion, dry
// fountain, BTC moon, torches, moonlit parapet (spec 5).
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
import { canvasTexture, stoneTexture, stoneCanvas, bumpFrom } from './tex.js';

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
function azulejoTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  const soft = 'filter' in g;
  const star = (cx, cy, s, fg, bg) => {
    g.fillStyle = bg;
    g.fillRect(cx - s / 2, cy - s / 2, s, s);
    g.fillStyle = fg;
    for (const rot of [0, Math.PI / 4]) {
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
  };
  if (soft) g.filter = 'blur(0.35px)';
  const colorways = [['#1F5FA8', '#F2EFE9'], ['#12755F', '#F2EFE9']];
  star(32, 32, 62, ...colorways[0]);
  star(96, 96, 62, ...colorways[0]);
  star(96, 32, 62, ...colorways[1]);
  star(32, 96, 62, ...colorways[1]);
  if (soft) g.filter = 'none';
  // v5: mortar joints + a little glaze variation so the tiles read as ceramics
  const rnd = (() => { let v = 77; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  g.strokeStyle = 'rgba(60,52,40,0.35)';
  g.lineWidth = 3;
  g.strokeRect(1.5, 1.5, 125, 125);
  for (let i = 0; i < 120; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)';
    g.fillRect(rnd() * 128, rnd() * 128, 3, 3);
  }
  return canvasTexture(c);
}

// ataurique frieze band: abstract leaf-and-bloom scrollwork, tinted (spec 5.2)
function friezeTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.stoneWall;
  g.fillRect(0, 0, 512, 64);
  g.strokeStyle = ARENA.frieze;
  g.lineWidth = 3;
  for (let x = 0; x < 512; x += 64) {
    g.beginPath();
    g.moveTo(x, 32);
    g.bezierCurveTo(x + 12, 10, x + 28, 10, x + 32, 32);
    g.bezierCurveTo(x + 36, 54, x + 52, 54, x + 64, 32);
    for (const [lx, ly, r] of [[x + 20, 20, 7], [x + 44, 46, 7], [x + 32, 32, 9]]) {
      g.moveTo(lx + r, ly);
      g.arc(lx, ly, r, 0, Math.PI * 2);
    }
    g.stroke();
  }
  return canvasTexture(c);
}

// paving: paver courses + grout (no medallion - that is a separate decal now)
function floorTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.floorBase;
  g.fillRect(0, 0, 512, 512);
  // soft grain before the joints
  const rnd = (() => { let v = 913; return () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; }; })();
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.07)' : 'rgba(96,78,56,0.08)';
    g.fillRect(rnd() * 512, rnd() * 512, 2 + rnd() * 3, 2 + rnd() * 3);
  }
  g.strokeStyle = 'rgba(104,86,62,0.66)';
  g.lineWidth = 2.5;
  for (let i = 0; i <= 512; i += 64) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(512, i); g.stroke();
  }
  // alternating paver tone (subtle checker, reads as laid stone not lino)
  for (let r = 0; r < 8; r++) {
    for (let cIdx = 0; cIdx < 8; cIdx++) {
      if ((r + cIdx) % 2) continue;
      g.fillStyle = 'rgba(255,246,226,0.05)';
      g.fillRect(cIdx * 64, r * 64, 64, 64);
    }
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
  arena.userData.coins = () => groups.coins;

  // ---- BTC moon, now free in the open sky ----
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

  // dado band (azulejo)
  const azTex = azulejoTexture();
  azTex.repeat.set(10, 1);
  const azBump = bumpFrom(azTex.image, 1.0);
  azBump.repeat.copy(azTex.repeat);
  const dado = mesh(
    new THREE.BoxGeometry(wallW, dadoH, 0.54),
    new THREE.MeshStandardMaterial({ map: azTex, bumpMap: azBump, bumpScale: 0.05, roughness: 0.5 }),
    0, dadoH / 2, wallZ + 0.01
  );
  arena.add(dado);

  // frieze band above dado
  const frTex = friezeTexture();
  frTex.repeat.set(6, 1);
  const frieze = mesh(
    new THREE.BoxGeometry(wallW, friezeH, 0.55),
    new THREE.MeshStandardMaterial({ map: frTex, roughness: 0.9 }),
    0, dadoH + friezeH / 2, wallZ + 0.01
  );
  arena.add(frieze);

  // coping + engaged piers + merlons: this is what carries the wall now that
  // the arch hoops are gone, so it gets real stone texture too
  const stonePair = stoneTexture({ seed: 62, base: '#ffffff', blocks: 3, alpha: 0.2, repeatX: 2, repeatY: 1 });
  const copingMat = texed(ARENA.stoneShadow, 'cloth', stonePair, { bumpScale: 0.08 });
  const coping = mesh(new THREE.BoxGeometry(wallW, 0.16, 0.62), copingMat, 0, arcSpringY + 0.08, wallZ + 0.02);
  arena.add(coping);
  const pierMat = texed(ARENA.stoneShadow, 'cloth', stonePair, { bumpScale: 0.1 });
  const piersX = [-12.1, -7.4, -3.3, 3.3, 7.4, 12.1];
  for (const px of piersX) {
    arena.add(mesh(new THREE.BoxGeometry(1.0, 3.35, 0.68), pierMat, px, 1.675, wallZ + 0.09));
    arena.add(mesh(new THREE.BoxGeometry(1.2, 0.22, 0.76), texed(ARENA.stoneWall, 'cloth', stonePair), px, 3.46, wallZ + 0.09));
  }
  const merlonMat = texed(ARENA.stoneWall, 'cloth', stonePair, { bumpScale: 0.1 });
  for (const x of [-12, -7.4, -3.3, 3.3, 7.4, 12]) {
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

  // ---- dry octagonal fountain at z = -3 ----
  const fountain = new THREE.Group();
  fountain.position.set(0, 0, -3);
  const basinPair = stoneTexture({ seed: 63, base: '#ffffff', blocks: 2, alpha: 0.18, repeatX: 2, repeatY: 1 });
  const basinMat = texed(ARENA.stoneShadow, 'cloth', basinPair, { bumpScale: 0.1 });
  const basin = mesh(new THREE.CylinderGeometry(1.5, 1.6, 0.35, 8), basinMat, 0, 0.17, 0);
  fountain.add(basin);
  const inner = mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.2, 8), std('#3A3226', 'cloth'), 0, 0.3, 0);
  fountain.add(inner);
  // a few glinting copper coins
  const coinMat = std('#B08D57', 'gold', { metalness: 0.9, roughness: 0.35 });
  const coins = [];
  for (let i = 0; i < 7; i++) {
    const a = Math.random() * Math.PI * 2, r = Math.random() * 1.0;
    const coin = mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 12), coinMat,
      Math.cos(a) * r, 0.42, Math.sin(a) * r);
    coin.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.4;
    fountain.add(coin);
    coins.push(coin);
  }
  arena.add(fountain);
  groups.coins = coins;

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

  // ---- torches ON the pier tops (they used to float in front of the arches) ----
  const torchXs = [-7.4, -3.3, 3.3, 7.4];
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
