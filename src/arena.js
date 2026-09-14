// The Courtyard of Two Arches: five-bay arcade, azulejo dado, ataurique frieze,
// tiled floor with the duel medallion, dry fountain, BTC moon, torches (spec 5).
import * as THREE from '../vendor/three.module.js';
import { ARENA, MATERIALS, DIM } from './palette.js';

const std = (color, kind = 'cloth', extra = {}) =>
  new THREE.MeshStandardMaterial({ color, ...MATERIALS[kind], ...extra });
const mesh = (geo, mat, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
};
const torus = (r, t, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, 8, 28, arc);

function canvasTexture(c) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// azulejo dado: eight-point stars, two alternating colorways (spec 5.2)
function azulejoTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
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
  const colorways = [['#1F5FA8', '#F2EFE9'], ['#12755F', '#F2EFE9']];
  star(32, 32, 62, ...colorways[0]);
  star(96, 96, 62, ...colorways[0]);
  star(96, 32, 62, ...colorways[1]);
  star(32, 96, 62, ...colorways[1]);
  return canvasTexture(c);
}

// warm sandstone with sebka-style relief lines (spec 5.2)
function wallTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.stoneWall;
  g.fillRect(0, 0, 256, 256);
  g.strokeStyle = ARENA.stoneShadow;
  g.lineWidth = 2.5;
  // sebka: interlacing diamond grid
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const x = col * 32 + (row % 2 ? 16 : 0);
      const y = row * 32;
      g.beginPath();
      g.moveTo(x, y + 16);
      g.lineTo(x + 16, y);
      g.lineTo(x + 32, y + 16);
      g.lineTo(x + 16, y + 32);
      g.closePath();
      g.stroke();
    }
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
    // S-scroll stem
    g.moveTo(x, 32);
    g.bezierCurveTo(x + 12, 10, x + 28, 10, x + 32, 32);
    g.bezierCurveTo(x + 36, 54, x + 52, 54, x + 64, 32);
    // leaf blooms
    for (const [lx, ly, r] of [[x + 20, 20, 7], [x + 44, 46, 7], [x + 32, 32, 9]]) {
      g.moveTo(lx + r, ly);
      g.arc(lx, ly, r, 0, Math.PI * 2);
    }
    g.stroke();
  }
  return canvasTexture(c);
}

// floor paving with grout + the central duel medallion painted separately
function floorTexture(medallion) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = ARENA.floorBase;
  g.fillRect(0, 0, 512, 512);
  g.strokeStyle = ARENA.floorGrout;
  g.lineWidth = 3;
  for (let i = 0; i <= 512; i += 64) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 512); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(512, i); g.stroke();
  }
  if (medallion) {
    // eight-point star split half gold / half emerald at canvas center
    const cx = 256, cy = 256, R = 120;
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
    star(-Math.PI / 2, '#D4A017');   // right half gold
    star(Math.PI / 2, '#0F5D4E');    // left half emerald
    g.strokeStyle = ARENA.floorGrout;
    g.lineWidth = 5;
    g.beginPath(); g.arc(cx, cy, R + 14, 0, Math.PI * 2); g.stroke();
  }
  return canvasTexture(c);
}

// BTC moon: emissive disc with engraved emblem + halo (spec 5.3)
function moonTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 512, 512);
  // halo
  const grad = g.createRadialGradient(256, 256, 150, 256, 256, 256);
  grad.addColorStop(0, ARENA.moonHalo + 'cc');
  grad.addColorStop(1, ARENA.moonHalo + '00');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);
  // disc
  g.fillStyle = ARENA.moonBtc;
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

// vista seen THROUGH the arch openings (v3): distant whitewashed village with
// glowing windows on a moonlit horizon, masked to the EXACT arch shape so no
// panel corners float against the open sky. Plane width = 2*rIn, height =
// rIn + under (the `under` strip sits behind the parapet, never visible).
function vistaTexture(seed, rIn) {
  const under = 0.42;
  const W = 384;
  const H = Math.max(72, Math.round(W * (rIn + under) / (2 * rIn)));
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  let v = seed;
  const rnd = () => { v = (v * 16807) % 2147483647; return (v % 1000) / 1000; };
  const springRow = (rIn / (rIn + under)) * H;   // world y=0 (arch springline)
  // sky above the horizon (warmer than the main sky: the opening glows)
  const grad = g.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#0E1430');
  grad.addColorStop(0.62, '#1B1740');
  grad.addColorStop(0.88, '#40273C');
  grad.addColorStop(1, '#7A4526');
  g.fillStyle = grad;
  g.fillRect(0, 0, W, H);
  // stars
  for (let i = 0; i < 60; i++) {
    const x = rnd() * W, y = rnd() * springRow * 0.9;
    g.fillStyle = `rgba(220,226,255,${0.4 + rnd() * 0.6})`;
    const s = rnd() < 0.15 ? 2.5 : 1.5;
    g.fillRect(x, y, s, s);
  }
  // sierra ridge sitting on the horizon
  g.fillStyle = '#251E3C';
  g.beginPath();
  g.moveTo(0, springRow);
  let y = springRow - 14;
  for (let x = 0; x <= W; x += 22) {
    y += (rnd() - 0.5) * 13;
    y = Math.max(springRow - 30, Math.min(springRow - 4, y));
    g.lineTo(x, y);
  }
  g.lineTo(W, springRow);
  g.closePath();
  g.fill();
  // village: big whitewashed cubes, glowing windows (must read at ~100 px)
  for (let x = 6; x < W - 20;) {
    const w = 26 + rnd() * 30, h = 18 + rnd() * 26, top = springRow - h;
    g.fillStyle = '#2E2743';
    g.fillRect(x, top, w, h + 6);
    g.fillStyle = '#1E1832';
    g.fillRect(x - 2, top - 3, w + 4, 4);
    const n = 1 + Math.floor(rnd() * 2);
    for (let k = 0; k < n; k++) {
      const wx = x + 5 + rnd() * (w - 14), wy = top + 6 + rnd() * Math.max(4, h - 14);
      g.fillStyle = 'rgba(255,178,88,0.45)';
      g.fillRect(wx - 5, wy - 5, 14, 14);
      g.fillStyle = rnd() < 0.7 ? 'rgba(255,206,132,1)' : 'rgba(255,238,190,0.9)';
      g.fillRect(wx, wy, 5, 7);
    }
    x += w + 6 + rnd() * 12;
  }
  // cypress silhouettes
  for (const cx of [18 + rnd() * 20, W - 40 + rnd() * 18]) {
    g.fillStyle = '#111324';
    g.beginPath();
    g.moveTo(cx, springRow + 6);
    g.quadraticCurveTo(cx - 8, springRow - 26, cx, springRow - 46 - rnd() * 10);
    g.quadraticCurveTo(cx + 8, springRow - 26, cx, springRow + 6);
    g.fill();
  }
  // warm haze hugging the horizon
  const hz = g.createLinearGradient(0, springRow - 26, 0, springRow + 20);
  hz.addColorStop(0, 'rgba(150,88,45,0)');
  hz.addColorStop(1, 'rgba(170,100,50,0.45)');
  g.fillStyle = hz;
  g.fillRect(0, springRow - 26, W, 46);
  // ---- mask to the arch opening: half-disc above the springline + rect below
  g.globalCompositeOperation = 'destination-in';
  g.beginPath();
  g.moveTo(0, H);
  g.lineTo(0, springRow);
  g.arc(W / 2, springRow, W / 2, Math.PI, 0, false);
  g.lineTo(W, H);
  g.closePath();
  g.fill();
  g.globalCompositeOperation = 'source-over';
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

  // NOTE (v2): sky dome, stars and moon-halo live in src/skydome.js now;
  // the BTC moon mesh stays here, framed by the center arch (money shot).
  // ---- BTC moon framed by the giant center horseshoe arch ----
  const moon = new THREE.Mesh(
    new THREE.PlaneGeometry(4.6, 4.6),
    new THREE.MeshBasicMaterial({ map: moonTexture(), transparent: true, fog: false, depthWrite: false })
  );
  moon.position.set(0, 6.35, -7.45);
  moon.renderOrder = -1;
  arena.add(moon);
  groups.moon = moon;
  arena.userData.moon = moon;

  // ---- back wall with five-bay arcade at z = -7 ----
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTexture(), roughness: 0.95 });
  wallMat.map.repeat.set(4, 1.5);
  const wallH = 8, wallW = 26, wallZ = -7.2;
  // solid wall below the arches
  const dadoH = 1.2, friezeH = 0.4, arcSpringY = 3.4;
  const lowerWall = mesh(new THREE.BoxGeometry(wallW, arcSpringY, 0.5), wallMat, 0, arcSpringY / 2, wallZ);
  arena.add(lowerWall);
  // dado band (azulejo)
  const azTex = azulejoTexture();
  azTex.repeat.set(10, 1);
  const dado = mesh(
    new THREE.BoxGeometry(wallW, dadoH, 0.54),
    new THREE.MeshStandardMaterial({ map: azTex, roughness: 0.55 }),
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
  // ---- v3: OPEN ARCADE against the night sky ----
  // The old solid upper wall (y 5.4..8) + tall crenellations blocked almost
  // the whole sky. The wall is now a low parapet at the arch springline, so
  // the five arches stand against the stars and the BTC moon hangs free.
  const copingMat = std(ARENA.stoneShadow, 'cloth');
  const coping = mesh(new THREE.BoxGeometry(wallW, 0.16, 0.62), copingMat, 0, arcSpringY + 0.08, wallZ + 0.02);
  arena.add(coping);
  // engaged piers on the wall face at every point where two arch legs land:
  // this is what makes the low parapet read as a real arcade instead of
  // hoops floating in the sky (v3)
  const pierMat = std(ARENA.stoneShadow, 'cloth');
  for (const px of [-12.1, -7.4, -3.3, 3.3, 7.4, 12.1]) {
    arena.add(mesh(new THREE.BoxGeometry(1.0, 3.35, 0.68), pierMat, px, 1.675, wallZ + 0.09));
    // impost/capital block where the thin arch fans out (also the merlon base)
    arena.add(mesh(new THREE.BoxGeometry(1.2, 0.22, 0.76), std(ARENA.stoneWall, 'cloth'), px, 3.46, wallZ + 0.09));
  }
  // merlons: square (Christian) alternating with stepped (Moorish), placed
  // only on the pier tops BETWEEN the arches so they never clash with a ring
  const merlonMat = std(ARENA.stoneWall, 'cloth');
  for (const x of [-12, -7.4, -3.3, 3.3, 7.4, 12]) {
    const stepped = Math.abs(x) > 9 || Math.abs(x) < 5;
    const m = mesh(new THREE.BoxGeometry(0.9, 0.42, 0.5), merlonMat, x, arcSpringY + 0.37, wallZ);
    arena.add(m);
    if (stepped) {
      arena.add(mesh(new THREE.BoxGeometry(0.5, 0.2, 0.5), merlonMat, x, arcSpringY + 0.67, wallZ));
    }
  }

  // ---- the five arches: ROUND, HORSESHOE, giant center HORSESHOE, HORSESHOE, ROUND ----
  // Dark cut-out plane behind each arch so it reads as a passage, not a floating wreath.
  const voidMat = new THREE.MeshBasicMaterial({ color: 0x08060c });
  const white = std(ARENA.tileWhite, 'cloth');
  const green = std(ARENA.tileEmerald, 'cloth');
  const sand = std(ARENA.stoneWall, 'cloth');
  const bays = [
    { x: -9.6, r: 1.55, type: 'round' },
    { x: -5.4, r: 1.4, type: 'horseshoe' },
    { x: 0, r: 2.6, type: 'horseshoe' },
    { x: 5.4, r: 1.4, type: 'horseshoe' },
    { x: 9.6, r: 1.55, type: 'round' }
  ];
  for (const bay of bays) {
    const arch = new THREE.Group();
    arch.position.set(bay.x, arcSpringY, wallZ + 0.4);
    const sweep = bay.type === 'horseshoe' ? Math.PI * 1.25 : Math.PI;
    const startAng = bay.type === 'horseshoe'
      ? Math.PI + (sweep - Math.PI) / 2 - Math.PI
      : Math.PI;
    // vista inside the arch opening (v3): masked to the arch shape, sized to
    // the ring's inner radius (center bay keeps the BTC moon instead)
    if (bay.r < 2) {
      const rIn = bay.r - 0.16;
      const under = 0.42;
      const vista = mesh(
        new THREE.PlaneGeometry(2 * rIn, rIn + under),
        new THREE.MeshBasicMaterial({
          map: vistaTexture(1000 + Math.round(bay.x * 37), rIn),
          fog: false, transparent: true, depthWrite: false,
        }),
        0, (rIn - under) / 2 - 0.12, -0.25
      );
      arch.add(vista);
    }
    // torus arc for the arch ring
    const ring = new THREE.Mesh(torus(bay.r, 0.16, sweep), sand);
    ring.position.y = bay.type === 'horseshoe' ? -0.12 : 0;
    arch.add(ring);
    // alternating voussoirs: boxes along the arc, sized to OVERLAP so the ring
    // reads as continuous masonry (v3: no bead-gaps between blocks)
    const arcLen = bay.r * sweep;
    const n = Math.max(13, Math.round(arcLen / 0.24));
    const seg = arcLen / (n - 1);
    for (let i = 0; i < n; i++) {
      const ang = startAng + (i / (n - 1)) * sweep;
      const vx = Math.cos(ang) * bay.r;
      const vy = Math.sin(ang) * bay.r + ring.position.y;
      const v = mesh(new THREE.BoxGeometry(seg * 1.18, 0.34, 0.42), i % 2 ? white : green, vx, vy, 0);
      v.rotation.z = ang + Math.PI / 2;
      arch.add(v);
    }
    // keystone rosette on round arches
    if (bay.type === 'round') {
      const ros = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 10), std(ARENA.stoneShadow, 'cloth'), 0, bay.r, 0);
      ros.rotation.x = Math.PI / 2;
      arch.add(ros);
    }
    arena.add(arch);
  }

  // ---- floor: big tile plane, medallion under rope center ----
  const floorTex = floorTexture(true);
  floorTex.repeat.set(3, 2);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(26, 15),
    new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.9 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, 0.5);
  floor.receiveShadow = true;
  arena.add(floor);
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
  const basinMat = std(ARENA.stoneShadow, 'cloth');
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
  const poleMat = std(ARENA.stonePole, 'cloth');
  const pennants = {};
  for (const side of ['L', 'R']) {
    const x = side === 'L' ? -DIM.spanHalf : DIM.spanHalf;
    const pole = new THREE.Group();
    pole.position.set(x, 0, 0);
    const shaft = mesh(new THREE.CylinderGeometry(0.28, 0.36, DIM.ropeY, 10), poleMat, 0, DIM.ropeY / 2, 0);
    const cap = mesh(new THREE.BoxGeometry(0.8, 0.22, 0.8), poleMat, 0, DIM.ropeY + 0.11, 0);
    pole.add(shaft, cap);
    // pennant on a short mast
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

  // ---- torches between bays: iron sconces + flickering point lights ----
  const torchXs = [-7.5, -2.7, 2.7, 7.5];
  for (const tx of torchXs) {
    const sconce = mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.5, 6), std(ARENA.iron, 'cloth'), tx, 2.6, wallZ + 1.0);
    sconce.rotation.x = 0.5;
    arena.add(sconce);
    const bowl = mesh(new THREE.CylinderGeometry(0.12, 0.06, 0.14, 8), std(ARENA.iron, 'cloth'), tx, 2.82, wallZ + 0.85);
    arena.add(bowl);
    const flame = mesh(new THREE.ConeGeometry(0.09, 0.3, 8),
      new THREE.MeshBasicMaterial({ color: ARENA.torchFlame, fog: false }),
      tx, 3.0, wallZ + 0.85);
    arena.add(flame);
    const light = new THREE.PointLight(ARENA.torchGlow, 14, 9, 1.8);
    light.position.set(tx, 3.1, wallZ + 1.3);
    arena.add(light);
    groups.torches.push({ flame, light, seed: Math.random() * 10 });
  }

  return arena;
}

// per-frame flicker (spec 5.4: noise-driven intensity)
export function updateArena(arena, t) {
  for (const tc of arena.userData.torches || []) {
    const n = Math.sin(t * 9 + tc.seed) * 0.5 + Math.sin(t * 23 + tc.seed * 2) * 0.3 + Math.sin(t * 5 + tc.seed) * 0.2;
    tc.light.intensity = 12 + n * 5;
    tc.flame.scale.y = 1 + n * 0.25;
    tc.flame.scale.x = 1 - n * 0.12;
  }
}
