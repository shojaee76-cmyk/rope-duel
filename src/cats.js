// The two duelists, built from primitives per design spec sections 2, 3 and the
// primitive-geometry mapping in section 9. Shared feline biped rig + per-cat
// costume builders + a smoothed pose layer so state transitions stay fluid.
//
// v5 ("the cats move too little / the fight is flat" pass):
//   - every surface now carries a procedural texture (fur grain + tabby stripes,
//     cloth weave, brushed metal, leather) with matching bump maps, so the cats
//     read as materials instead of flat paint
//   - poses are 1.6-2x bigger (longer strides, deeper crouches, full arm
//     extensions, real airtime) and settle ~2x faster (26/s vs 14/s)
//   - new states: HIT (reel back), BLADE_LOCK (crossed blades shoving) and
//     RUSH (charge in with three quick paw stamps)
//   - movement directions are now expressed in WORLD x via this.fw so a cat
//     always advances toward its opponent (the old dir:1/dir:-1 pair sent cat A
//     INTO its own pole)
//
// Pose convention (local space; every cat's local +x is its facing direction):
//   spineLean > 0  = lean toward opponent      (applied as rotation.z = -lean)
//   shS_z / shO_z  = shoulder swing: + = limb swings toward local +x (forward)
//   elS / elO      = elbow bend (negative = natural)
//   thZ / knZ      = hind leg swing / bend in the same plane
//   twist          = extra root yaw; tilt > 0 = comic overbalance toward opponent
//   xOff / yOff / zOff = world-space offsets from the fight choreography
//   lock           = blade-lock shove (0..1)   tremble = impact vibration (0..1)
import * as THREE from '../vendor/three.module.js';
import { CAT_A, CAT_B, MATERIALS, DIM } from './palette.js';
import { furTexture, clothTexture, metalTexture, leatherTexture } from './tex.js';

const V3 = THREE.Vector3;
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;

// ---------- texture cache (one canvas set per look, shared by every mesh) ----------
const TEX = new Map();
function tex(key, make) {
  if (!TEX.has(key)) TEX.set(key, make());
  return TEX.get(key);
}

// ---------- tiny mesh helpers ----------
function std(color, kind = 'fur', extra = {}, pair = null) {
  const m = new THREE.MeshStandardMaterial({ color, ...MATERIALS[kind], ...extra });
  if (pair) {
    m.map = pair.map;
    if (pair.bump) { m.bumpMap = pair.bump; m.bumpScale = extra.bumpScale ?? 0.06; }
  }
  return m;
}
function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}
const sphere = (r, mat, w = 14, h = 10) => new THREE.SphereGeometry(r, w, h);
const capsule = (r, len) => new THREE.CapsuleGeometry(r, len, 4, 10);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cone = (r, h, seg = 10) => new THREE.ConeGeometry(r, h, seg);
const torus = (r, t, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, 8, 20, arc);
const cyl = (rt, rb, h, seg = 10) => new THREE.CylinderGeometry(rt, rb, h, seg);

// pivot with a limb segment hanging along -Y
function limb(parent, x, y, z, len, r, mat) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  const seg = mesh(capsule(r, len), mat, 0, -len / 2, 0);
  pivot.add(seg);
  parent.add(pivot);
  return pivot;
}

// ---------- shared feline rig (local +x = facing direction) ----------
function buildRig(c) {
  const root = new THREE.Group();
  const furPair = tex(`fur-${c.furKey}`, () => furTexture(c.furOpts));
  const bellyPair = c.furBellyKey
    ? tex(`fur-${c.furBellyKey}`, () => furTexture(c.furBellyOpts))
    : furPair;
  const M = {
    fur: std(c.furBase, 'fur', { bumpScale: 0.04 }, furPair),
    belly: std(c.furBelly, 'fur', { bumpScale: 0.03 }, bellyPair),
    inner: std(c.earInner, 'fur', {}, furPair),
    eye: std(c.eye, 'steel', { emissive: c.eye, emissiveIntensity: c.eyeGlow, roughness: 0.35 }),
    pupil: std('#101014', 'fur'),
    nose: std(c.nose, 'fur'),
    whisker: std('#FFFFFF', 'fur', { roughness: 0.45 }),
    mouth: std('#241A14', 'fur')
  };

  const hips = new THREE.Group();
  hips.position.y = 0.52;
  root.add(hips);

  const pelvis = mesh(sphere(0.15), M.fur, 0, 0, 0);
  pelvis.scale.set(1.1, 0.9, 1);
  hips.add(pelvis);

  const spine = new THREE.Group();
  hips.add(spine);
  const chest = mesh(capsule(0.155, 0.28), M.fur, 0.05, 0.3, 0);
  chest.rotation.z = -0.15;
  spine.add(chest);
  const belly = mesh(sphere(0.13), M.belly, 0.02, 0.22, 0);
  belly.scale.set(1.1, 1, 0.8);
  spine.add(belly);

  // head (oversized per spec: ~35% of standing height)
  const head = new THREE.Group();
  head.position.set(0.1, 0.62, 0);
  spine.add(head);
  const skull = mesh(sphere(0.205, 18, 14), M.fur);
  skull.scale.set(1.05, 0.95, 0.95);
  head.add(skull);
  const muzzle = mesh(box(0.2, 0.11, 0.16), M.fur, 0.17, -0.05, 0);
  head.add(muzzle);
  const nose = mesh(sphere(0.028, 8, 6), M.nose, 0.27, -0.03, 0);
  head.add(nose);
  const mouth = mesh(torus(0.05, 0.008, Math.PI * 0.9), M.mouth, 0.24, -0.09, 0);
  mouth.rotation.y = Math.PI / 2;
  mouth.rotation.z = Math.PI + 0.25;
  head.add(mouth);
  for (const sz of [1, -1]) {
    const e = mesh(sphere(0.045, 12, 10), M.eye, 0.12, 0.07, sz * 0.105);
    head.add(e);
    const pup = mesh(box(0.012, 0.05, 0.02), M.pupil, 0.158, 0.07, sz * 0.107);
    head.add(pup);
  }
  const ears = [];
  for (const sz of [1, -1]) {
    const ear = new THREE.Group();
    ear.position.set(-0.02, 0.17, sz * 0.12);
    const outer = mesh(cone(0.055, 0.13), M.fur, 0, 0.05, 0);
    const inner = mesh(cone(0.03, 0.08), M.inner, 0.012, 0.04, 0);
    ear.add(outer, inner);
    head.add(ear);
    ears.push(ear);
  }
  for (const sz of [1, -1]) {
    for (let i = 0; i < 3; i++) {
      const w = mesh(cyl(0.003, 0.003, 0.3, 4), M.whisker, 0.2, -0.04 + i * 0.03, sz * 0.09);
      w.rotation.z = Math.PI / 2 + 0.12;
      w.rotation.x = sz * (0.25 + i * 0.18);
      head.add(w);
    }
  }

  // arms
  const arms = {};
  for (const side of ['L', 'R']) {
    const sz = side === 'L' ? -0.17 : 0.17;
    const shoulder = limb(spine, 0.08, 0.44, sz, 0.2, 0.052, M.fur);
    const elbow = limb(shoulder, 0, -0.22, 0, 0.19, 0.046, M.fur);
    const paw = mesh(sphere(0.055, 10, 8), M.fur, 0, -0.21, 0);
    elbow.add(paw);
    arms[side] = { shoulder, elbow, paw };
  }

  // hind legs
  const legs = {};
  for (const side of ['L', 'R']) {
    const sz = side === 'L' ? -0.09 : 0.09;
    const hip = limb(hips, -0.02, -0.05, sz, 0.2, 0.062, M.fur);
    const knee = limb(hip, 0, -0.22, 0, 0.18, 0.05, M.fur);
    const foot = mesh(box(0.14, 0.05, 0.09), M.fur, 0.03, -0.2, 0);
    knee.add(foot);
    legs[side] = { hip, knee, foot };
  }

  // tail chain
  const tail = [];
  const tailBase = new THREE.Group();
  tailBase.position.set(-0.12, 0.02, 0);
  hips.add(tailBase);
  for (let i = 0; i < 6; i++) {
    const seg = limb(i === 0 ? tailBase : tail[i - 1], 0, i === 0 ? 0 : -0.13, 0, 0.11, 0.038 - i * 0.003, M.fur);
    tail.push(seg);
  }

  return { root, hips, spine, head, ears, arms, legs, tail, M, furPair };
}

// ---------- swords ----------
function buildRapier() {
  const g = new THREE.Group();
  const steelPair = tex('steel', () => metalTexture({ seed: 41, base: '#ffffff', streak: 0.24 }));
  const goldPair = tex('gold', () => metalTexture({ seed: 42, base: '#ffffff', streak: 0.16, scratches: 180 }));
  const leatherPair = tex('leather', () => leatherTexture({ seed: 43 }));
  const steel = std(CAT_A.steelBlade, 'steel', {}, steelPair);
  const gold = std(CAT_A.goldPrimary, 'gold', {}, goldPair);
  const grip = mesh(cyl(0.016, 0.018, 0.13, 8), std(CAT_A.leatherBrown, 'cloth', {}, leatherPair), -0.05, 0, 0);
  grip.rotation.z = Math.PI / 2;
  g.add(grip);
  const cup = mesh(torus(0.05, 0.011), gold, 0.02, 0, 0);
  cup.rotation.y = Math.PI / 2;
  g.add(cup);
  g.add(mesh(sphere(0.02, 8, 6), gold, 0.025, 0, 0));
  const blade = mesh(cyl(0.006, 0.013, 1.1, 6), steel, 0.61, 0, 0);
  blade.rotation.z = -Math.PI / 2;
  g.add(blade);
  g.add(mesh(sphere(0.03, 10, 8),
    std(CAT_A.gemRuby, 'gold', { emissive: CAT_A.gemRuby, emissiveIntensity: 0.35 }), -0.125, 0, 0));
  return g;
}

function buildScimitar() {
  const g = new THREE.Group();
  const steelPair = tex('steel', () => metalTexture({ seed: 41, base: '#ffffff', streak: 0.24 }));
  const silverPair = tex('silver', () => metalTexture({ seed: 44, base: '#ffffff', streak: 0.18, scratches: 200 }));
  const clothPair = tex('cloth-emerald', () => clothTexture({ seed: 51, weave: 7 }));
  const steel = std(CAT_B.steelBlade, 'steel', {}, steelPair);
  const silver = std(CAT_B.silverMain, 'silver', {}, silverPair);
  const grip = mesh(cyl(0.016, 0.018, 0.12, 8), std(CAT_B.emeraldDeep, 'cloth', {}, clothPair), -0.05, 0, 0);
  grip.rotation.z = Math.PI / 2;
  g.add(grip);
  const guard = mesh(torus(0.045, 0.01, Math.PI * 1.2), silver, 0.015, 0, 0);
  guard.rotation.y = Math.PI / 2;
  guard.rotation.x = 0.3;
  g.add(guard);
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    pts.push(new V3(0.06 + t * 0.92, Math.sin(t * 1.5) * 0.16, 0));
  }
  const blade = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.024, 6, false), steel);
  blade.scale.z = 0.35;
  blade.castShadow = true;
  g.add(blade);
  const damask = mesh(torus(0.14, 0.004, Math.PI * 0.9), std(CAT_B.silverShadow, 'silver'), 0.42, 0.09, 0);
  damask.rotation.z = -0.5;
  g.add(damask);
  g.add(mesh(sphere(0.028, 10, 8),
    std(CAT_B.gemEmerald, 'gold', { emissive: CAT_B.gemEmerald, emissiveIntensity: 0.4 }), -0.115, 0, 0));
  return g;
}

// waving cape (A): pivot at the top, vertices swayed in update()
function buildCape() {
  const clothPair = tex('cloth-crimson', () => clothTexture({ seed: 52, weave: 6 }));
  const matOut = std(CAT_A.crimsonMain, 'cloth', { side: THREE.DoubleSide }, clothPair);
  const geo = new THREE.PlaneGeometry(0.52, 0.78, 10, 12);
  geo.translate(0, -0.39, 0);
  // baked folds: a flat sheet always reads as plastic, no matter the texture.
  // Displace the surface with layered folds that deepen toward the hem.
  {
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      const depth = Math.max(0, Math.min(1, -y / 0.78));
      const fold = Math.sin(x * 15.0) * 0.016
        + Math.sin(x * 26.0 + y * 8.0) * 0.009
        + Math.sin(y * 17.0 + x * 4.0) * 0.012
        + Math.sin(x * 6.0) * 0.02;
      pos.setZ(i, fold * depth * 1.7);
    }
    geo.computeVertexNormals();
  }
  const cape = new THREE.Mesh(geo, matOut);
  cape.castShadow = true;
  const trim = new THREE.Mesh(new THREE.PlaneGeometry(0.54, 0.06), std(CAT_A.goldBright, 'cloth', { side: THREE.DoubleSide }));
  trim.position.y = -0.76;
  cape.add(trim);
  return cape;
}

// ---------- CAT A: DON GATO (local +x = facing; root yaw = PI -> faces world -x) ----------
export function buildDonGato() {
  const rig = buildRig({
    // white Andalusian cat, warm cream patches over the coat
    furKey: 'A-fur', furOpts: { seed: 3, blotch: 6, grain: 0.12, dark: '#d9c4ad', repeatX: 1.1, repeatY: 1.1 },
    furBase: CAT_A.furWhite, furBelly: CAT_A.furWhite, earInner: CAT_A.nosePink,
    eye: CAT_A.eyeAmber, eyeGlow: 0.25, nose: CAT_A.nosePink
  });
  const goldPair = tex('gold', () => metalTexture({ seed: 42, base: '#ffffff', streak: 0.16, scratches: 180 }));
  const crimsonPair = tex('cloth-crimson', () => clothTexture({ seed: 52, weave: 6 }));
  const gingerPair = tex('ginger', () => furTexture({ seed: 6, blotch: 3, grain: 0.14, repeatX: 3, repeatY: 3 }));
  const steelPair = tex('steel', () => metalTexture({ seed: 41, base: '#ffffff', streak: 0.24 }));
  const MA = {
    gold: std(CAT_A.goldPrimary, 'gold', {}, goldPair),
    goldBright: std(CAT_A.goldBright, 'goldBright', {}, goldPair),
    crimson: std(CAT_A.crimsonMain, 'cloth', {}, crimsonPair),
    ginger: std(CAT_A.furGinger, 'fur', {}, gingerPair),
    steel: std(CAT_A.steelBlade, 'steel', {}, steelPair),
    cross: std(CAT_A.goldBright, 'goldBright', { emissive: CAT_A.goldBright, emissiveIntensity: 0.0 })
  };

  // ginger patches: signature left-eye patch + body patch + tail tip
  const patch1 = mesh(sphere(0.085, 12, 8), MA.ginger, 0.09, 0.07, -0.12);
  patch1.scale.set(1.1, 0.9, 0.45);
  rig.head.add(patch1);
  const patch2 = mesh(sphere(0.09, 12, 8), MA.ginger, -0.06, 0.1, 0.1);
  patch2.scale.set(1, 0.8, 0.5);
  rig.head.add(patch2);
  const bodyPatch = mesh(sphere(0.12, 12, 8), MA.ginger, -0.02, 0.3, -0.09);
  bodyPatch.scale.set(1.2, 1, 0.5);
  rig.spine.add(bodyPatch);
  rig.tail[5].add(mesh(sphere(0.045, 8, 6), MA.ginger, 0, -0.13, 0));

  // morion helmet: dome + ridge + upturned brim + gold trim + crimson plume
  const helm = new THREE.Group();
  helm.position.set(0.02, 0.13, 0);
  helm.rotation.z = -0.12;
  const dome = mesh(new THREE.SphereGeometry(0.165, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), MA.steel);
  dome.scale.set(1.15, 1, 1.05);
  helm.add(dome);
  const brim = mesh(torus(0.16, 0.02), MA.steel, 0, 0.045, 0);
  brim.rotation.x = Math.PI / 2;
  brim.scale.set(1.2, 1.1, 1);
  helm.add(brim);
  helm.add(mesh(box(0.3, 0.045, 0.03), MA.steel, 0, 0.115, 0));
  const trim = mesh(torus(0.165, 0.008), MA.goldBright, 0, 0.05, 0);
  trim.rotation.x = Math.PI / 2;
  trim.scale.set(1.2, 1.1, 1);
  helm.add(trim);
  helm.add(mesh(cyl(0.02, 0.025, 0.05, 8), MA.gold, 0.05, 0.16, -0.1));
  const plume = new THREE.Group();
  plume.position.set(0.05, 0.2, -0.1);
  for (let i = 0; i < 3; i++) {
    plume.add(mesh(sphere(0.035 - i * 0.007, 8, 6), MA.crimson, 0.02 * i, 0.035 * i, 0.015 * i));
  }
  helm.add(plume);
  rig.head.add(helm);
  // ears poke through beside the dome
  rig.ears[0].position.y = 0.2; rig.ears[0].position.z = -0.17;
  rig.ears[1].position.y = 0.2; rig.ears[1].position.z = 0.17;

  // breastplate dome over the chest (+x), cross pattee, rosette, pauldrons
  const bp = mesh(new THREE.SphereGeometry(0.175, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), MA.gold, 0.05, 0.33, 0);
  bp.rotation.z = -Math.PI / 2;
  bp.scale.set(1, 1, 0.72);
  rig.spine.add(bp);
  rig.spine.add(mesh(box(0.028, 0.14, 0.02), MA.cross, 0.185, 0.34, 0));
  rig.spine.add(mesh(box(0.1, 0.028, 0.02), MA.cross, 0.19, 0.35, 0));
  rig.spine.add(mesh(sphere(0.035, 10, 8), MA.goldBright, 0.13, 0.47, 0));
  for (const sz of [-0.17, 0.17]) {
    const p = mesh(new THREE.SphereGeometry(0.075, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), MA.gold, 0.08, 0.46, sz);
    p.rotation.z = sz > 0 ? -0.5 : 0.5;
    rig.spine.add(p);
    // strap over the shoulder so the pauldron reads as worn armour
    const strap = mesh(torus(0.082, 0.013, Math.PI * 1.15), std(CAT_A.leatherBrown, 'cloth'), 0.05, 0.45, sz);
    strap.rotation.y = Math.PI / 2;
    strap.rotation.z = -0.35;
    rig.spine.add(strap);
  }

  // cape on the back (local -x), hangs to hock level, held by a gold collar
  const cape = buildCape();
  cape.position.set(-0.14, 0.5, 0);
  cape.rotation.y = 0.22;
  rig.spine.add(cape);
  const collar = mesh(torus(0.155, 0.018), MA.gold, 0.02, 0.52, 0);
  collar.rotation.x = Math.PI / 2;
  collar.rotation.z = 0.1;
  collar.scale.set(1.05, 0.9, 1);
  rig.spine.add(collar);
  rig.spine.add(mesh(sphere(0.038, 10, 8), MA.goldBright, 0.16, 0.5, 0));

  // tabard skirt with tail slit + gold fringe belt + bracers/shin guards
  const tab = mesh(new THREE.CylinderGeometry(0.14, 0.19, 0.22, 10, 1, true, 0.5, Math.PI * 1.6), MA.crimson, -0.02, -0.08, 0);
  tab.material.side = THREE.DoubleSide;
  rig.hips.add(tab);
  const fringe = mesh(torus(0.185, 0.012), MA.goldBright, -0.02, -0.19, 0);
  fringe.rotation.x = Math.PI / 2;
  fringe.scale.set(1, 1, 0.92);
  rig.hips.add(fringe);
  const belt = mesh(torus(0.16, 0.02), MA.gold, 0, 0.02, 0);
  belt.rotation.x = Math.PI / 2;
  belt.scale.set(1.15, 1, 1);
  rig.hips.add(belt);
  for (const side of ['L', 'R']) {
    rig.arms[side].elbow.add(mesh(cyl(0.055, 0.05, 0.1, 10), MA.gold, 0, -0.1, 0));
    rig.legs[side].knee.add(mesh(box(0.05, 0.1, 0.06), MA.gold, 0, -0.12, 0.01));
  }
  rig.tail[5].add(mesh(torus(0.042, 0.012), MA.gold, 0, -0.1, 0));

  // rapier in the camera-side arm (L: local -z -> world +z after yaw PI)
  const rapier = buildRapier();
  rapier.position.set(0, -0.21, 0);
  rig.arms.L.elbow.add(rapier);

  return {
    ...rig, name: 'DON GATO', side: 'A', facing: Math.PI,
    sword: rapier, swordArm: 'L', cape, crossMat: MA.cross, plume
  };
}

// ---------- CAT B: SULTAN BIGOTES (faces world +x) ----------
export function buildSultanBigotes() {
  const rig = buildRig({
    // silver tabby: the material carries the LIGHT silver and the map darkens
    // the field between the stripes, so the coat keeps the charcoal body with
    // real silver bands instead of one flat dark slab
    furKey: 'B-fur',
    furOpts: { seed: 9, stripes: 7, grain: 0.16, blotch: 2, dark: '#6c6c78', repeatX: 1.4, repeatY: 1.4 },
    furBase: CAT_B.furSilverStripe, furBelly: CAT_B.furBelly, earInner: CAT_B.noseBlack,
    eye: CAT_B.eyeJade, eyeGlow: 0.3, nose: CAT_B.noseBlack
  });
  const silverPair = tex('silver', () => metalTexture({ seed: 44, base: '#ffffff', streak: 0.18, scratches: 200 }));
  const emeraldPair = tex('cloth-emerald', () => clothTexture({ seed: 51, weave: 7 }));
  const whitePair = tex('cloth-white', () => clothTexture({ seed: 53, weave: 9, thread: 'rgba(120,120,132,0.24)' }));
  const stripePair = tex('B-stripe', () => furTexture({ seed: 12, stripes: 5, grain: 0.12 }));
  const MB = {
    emerald: std(CAT_B.emeraldMain, 'cloth', {}, emeraldPair),
    emeraldBright: std(CAT_B.emeraldBright, 'cloth', {}, emeraldPair),
    silver: std(CAT_B.silverMain, 'silver', {}, silverPair),
    silverBright: std(CAT_B.silverBright, 'silverBright', {}, silverPair),
    white: std(CAT_B.clothWhite, 'cloth', {}, whitePair),
    stripe: std(CAT_B.furSilverStripe, 'fur', {}, stripePair)
  };

  // silver tabby stripes + tail rings
  for (let i = 0; i < 3; i++) {
    const s = mesh(torus(0.15 - i * 0.005, 0.012), MB.stripe, -0.06 + i * 0.09, 0.3 - i * 0.02, 0);
    s.rotation.x = Math.PI / 2;
    s.rotation.y = 0.3;
    s.scale.set(1, 1, 0.55);
    rig.spine.add(s);
  }
  for (let i = 1; i < 6; i += 2) {
    rig.tail[i].add(mesh(torus(0.04, 0.01), MB.stripe, 0, -0.065, 0));
  }

  // turban: two-layer white wrap + emerald band + silver crescent pin
  const turban = new THREE.Group();
  turban.position.set(0, 0.16, 0);
  turban.rotation.z = 0.08;
  const wrap = mesh(sphere(0.185, 16, 10), MB.white, 0, 0.02, 0);
  wrap.scale.set(1.08, 0.72, 1.02);
  turban.add(wrap);
  turban.add(mesh(sphere(0.1, 12, 8), MB.white, -0.06, 0.13, 0));
  const wrap2 = mesh(torus(0.13, 0.05), MB.white, 0, 0.05, 0);
  wrap2.rotation.x = Math.PI / 2;
  wrap2.scale.set(1.1, 1.05, 0.9);
  turban.add(wrap2);
  const band = mesh(torus(0.155, 0.02), MB.emerald, 0, 0.03, 0);
  band.rotation.x = Math.PI / 2;
  band.scale.set(1.12, 1.06, 1);
  turban.add(band);
  const crescent = mesh(torus(0.045, 0.012, Math.PI * 1.35), MB.silverBright, 0.14, 0.06, 0);
  crescent.rotation.y = Math.PI / 2;
  crescent.rotation.z = 2.2;
  turban.add(crescent);
  rig.head.add(turban);
  // ears poke through the wrap; one ear rotated sideways (cunning look)
  rig.ears[0].position.y = 0.24; rig.ears[0].position.z = -0.16;
  rig.ears[1].position.y = 0.24; rig.ears[1].position.z = 0.16;

  // kaftan vest: open emerald cylinder, gap at the front (+x), silver trim
  const kaftan = mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.42, 12, 1, true, 0.55, Math.PI * 1.9), MB.emerald, 0.01, 0.34, 0);
  kaftan.material.side = THREE.DoubleSide;
  rig.spine.add(kaftan);
  for (const yy of [0.42, 0.28]) {
    const trim = mesh(torus(0.17, 0.008), MB.silver, 0.01, yy, 0);
    trim.rotation.x = Math.PI / 2;
    trim.scale.set(1, 1, 0.85);
    rig.spine.add(trim);
  }
  const belt = mesh(torus(0.16, 0.018), MB.silver, 0, 0.03, 0);
  belt.rotation.x = Math.PI / 2;
  belt.scale.set(1.15, 1, 1);
  rig.hips.add(belt);
  rig.hips.add(mesh(sphere(0.03, 10, 8),
    std('#EAF2FF', 'goldBright', { emissive: '#BFD4FF', emissiveIntensity: 0.35 }), 0.15, 0.03, 0));

  // sash + ribbon ends
  const sash = mesh(torus(0.165, 0.024), MB.white, 0, -0.01, 0);
  sash.rotation.x = Math.PI / 2;
  sash.rotation.z = 0.5;
  sash.scale.set(1.12, 1, 1);
  rig.hips.add(sash);
  const ribbons = [];
  for (const sz of [-0.06, 0.05]) {
    const rib = mesh(new THREE.PlaneGeometry(0.09, 0.34, 2, 4), std(CAT_B.clothWhite, 'cloth', { side: THREE.DoubleSide }, whitePair), -0.14, -0.16, sz);
    rig.hips.add(rib);
    ribbons.push(rib);
  }

  // breeches + cuffs + babouche slippers with curled tips
  for (const side of ['L', 'R']) {
    const breech = mesh(sphere(0.085, 10, 8), MB.emerald, 0, -0.06, 0);
    breech.scale.set(0.9, 1.2, 0.9);
    rig.legs[side].hip.add(breech);
    rig.legs[side].knee.add(mesh(torus(0.045, 0.012), MB.silver, 0, -0.16, 0));
    rig.legs[side].knee.add(mesh(box(0.15, 0.05, 0.095), MB.emeraldBright, 0.03, -0.2, 0));
    const curl = mesh(torus(0.03, 0.014, Math.PI * 1.4), MB.emeraldBright, 0.11, -0.18, 0);
    curl.rotation.y = Math.PI / 2;
    rig.legs[side].knee.add(curl);
  }

  // silver vambrace on the sword forearm
  rig.arms.R.elbow.add(mesh(cyl(0.055, 0.05, 0.11, 10), MB.silver, 0, -0.1, 0));

  // scimitar in the camera-side arm (R: local +z = world +z, facing 0)
  const scim = buildScimitar();
  scim.position.set(0, -0.21, 0);
  rig.arms.R.elbow.add(scim);

  return {
    ...rig, name: 'SULTAN BIGOTES', side: 'B', facing: 0,
    sword: scim, swordArm: 'R', ribbons, turban
  };
}

// ---------- animation layer ----------
const IDLE_POSE = () => ({
  lean: 0, twist: 0, tilt: 0, crouch: 0, yOff: 0, xOff: 0, zOff: 0,
  spineLean: 0.06, spineTwist: 0,
  headPitch: 0, headYaw: 0, headRoll: 0,
  shS_z: -0.45, shS_x: 0.1, elS: -0.85,
  shO_z: -0.25, shO_x: 0.12, elO: -0.5,
  thL: 0.06, knL: -0.2, thR: 0.06, knR: -0.2, footL: 0, footR: 0,
  tailCurl: 0, tailAmp: 0.1, capeRaise: 0, lock: 0, tremble: 0
});

const NUM_KEYS = Object.keys(IDLE_POSE());

export class DuelCat {
  constructor(kind) {
    this.data = kind === 'A' ? buildDonGato() : buildSultanBigotes();
    const d = this.data;
    this.root = d.root;
    this.root.rotation.y = d.facing;
    this.pose = IDLE_POSE();
    this.target = IDLE_POSE();
    this.state = { name: 'IDLE', t: 0, dur: 0, data: {} };
    this.time = Math.random() * 10;
    this.x = 0;
    this.windmill = 0;
    this.earSwivel = 0;
    this.frozenPose = null;
    // world-x direction this cat advances in (A sits at +x and faces -x)
    this.fw = d.side === 'A' ? -1 : 1;
    // sword arm mapping: A -> L, B -> R
    this.sword = d.arms[d.swordArm];
    this.off = d.arms[d.swordArm === 'L' ? 'R' : 'L'];
  }

  setState(name, dur = 0, data = {}) {
    this.state = { name, t: 0, dur, data };
    if (name === 'FREEZE') this.frozenPose = { ...this.target };
  }

  get moveFrac() {
    return this.state.dur > 0 ? clamp(this.state.t / this.state.dur, 0, 1) : 1;
  }

  update(dt, ctx) {
    const st = this.state;
    this.time += dt;
    st.t += dt;

    Object.assign(this.target, IDLE_POSE());
    this.target.tailCurl = this.data.side === 'A' ? -1.15 : 0.95;

    switch (st.name) {
      case 'RUSH': this._rush(ctx); break;
      case 'LUNGE': this._lunge(ctx); break;
      case 'SLASH_UP': this._slashUp(ctx); break;
      case 'TAUNT': this._taunt(ctx); break;
      case 'PARRY_HOP': this._parryHop(ctx); break;
      case 'SLASH_SPIN': this._slashSpin(ctx); break;
      case 'RIPOSTE': this._riposte(ctx); break;
      case 'FREEZE': this._freeze(ctx); break;
      case 'STUMBLE': this._stumble(ctx); break;
      case 'HIT': this._hit(ctx); break;
      case 'BLADE_LOCK': this._bladeLock(ctx); break;
      case 'CLASH': this._clash(ctx); break;
      case 'RECOVER': this._recover(); break;
      default: this._idle(ctx);
    }

    // timed states auto-transition to the comic windmill RECOVER (spec 7.2)
    if (st.dur > 0 && st.t >= st.dur && st.name !== 'RECOVER' && st.name !== 'FREEZE' && st.name !== 'BLADE_LOCK') {
      this.setState('RECOVER', 0.24);
    }

    // smooth toward target pose: v5 settles ~2x faster so short moves read
    const p = this.pose, tg = this.target;
    const k = 1 - Math.exp(-26 * dt);
    for (const key of NUM_KEYS) p[key] = lerp(p[key], tg[key], k);

    this._applyPose(dt, ctx);
  }

  _applyPose(dt, ctx) {
    const d = this.data, p = this.pose;
    const rope = ctx.rope;

    const wx = this.x + p.xOff;
    const ropeY = rope.yAt(wx);
    this.root.position.set(wx, ropeY + 0.02 - p.crouch + p.yOff, p.zOff + p.lock * 0.05);
    this.root.rotation.y = d.facing + p.twist;
    // tilt: + = toward opponent. A (yaw PI) needs +z rotation; B needs -z.
    this.root.rotation.z = p.tilt * (d.side === 'A' ? 1 : -1);

    // pressure wobble: cats lean with order flow (integration card t_e2039773)
    const wob = clamp((ctx.pressureWobble || 0), -0.22, 0.22);
    const wSign = d.side === 'A' ? 1 : -1;
    const wA = d.side === 'A' ? wob : -wob;
    this.root.rotation.z += wA * wSign * (1 - Math.abs(wA) * 2);

    d.hips.rotation.z = -p.lean - p.lock * 0.12;
    d.spine.rotation.z = -p.spineLean - p.lock * 0.2;
    d.spine.rotation.y = p.spineTwist;
    d.head.rotation.z = -p.headPitch;
    d.head.rotation.y = p.headYaw;
    d.head.rotation.x = p.headRoll;

    // blade-lock shove tremor: a fast small vibration that reads as straining
    const tr = p.tremble * (Math.sin(this.time * 34) * 0.026 + Math.sin(this.time * 51) * 0.014);

    // sword arm / off arm mapping
    this.sword.shoulder.rotation.z = p.shS_z + tr * 1.5;
    this.sword.shoulder.rotation.x = p.shS_x;
    this.sword.elbow.rotation.z = p.elS + tr;
    this.off.shoulder.rotation.z = p.shO_z - tr * 1.2;
    this.off.shoulder.rotation.x = p.shO_x;
    this.off.elbow.rotation.z = p.elO - tr;
    this.sword.paw.rotation.z = tr * 2;

    d.legs.L.hip.rotation.z = p.thL;
    d.legs.L.knee.rotation.z = p.knL;
    d.legs.R.hip.rotation.z = p.thR;
    d.legs.R.knee.rotation.z = p.knR;
    d.legs.L.foot.rotation.z = p.footL;
    d.legs.R.foot.rotation.z = p.footR;

    // tail: curl + counterweight sway (faster when fighting hard)
    const sway = Math.sin(this.time * 2.6) * p.tailAmp;
    d.tail.forEach((seg, i) => {
      const f = i / (d.tail.length - 1);
      seg.rotation.z = p.tailCurl / d.tail.length + sway * (0.4 + f);
      seg.rotation.x = Math.sin(this.time * 1.6 + i) * 0.045 - p.lean * 0.4;
    });

    // ears: micro twitch + flag dart
    this.earSwivel = lerp(this.earSwivel, ctx.flagDart ? 1 : 0, 1 - Math.exp(-6 * dt));
    d.ears.forEach((ear, i) => {
      const s = i === 0 ? 1 : -1;
      ear.rotation.y = s * (0.15 * Math.sin(this.time * 0.7 + i * 2) + this.earSwivel * 0.5 * (d.side === 'B' ? 1 : -1));
    });

    // costume dynamics
    if (d.cape) this._cape();
    if (d.ribbons) {
      d.ribbons.forEach((r, i) => {
        r.rotation.x = (i ? 0.15 : -0.15) + Math.sin(this.time * 3.6 + i * 1.3) * 0.34;
      });
    }
    if (d.plume) d.plume.rotation.x = Math.sin(this.time * 3.4) * 0.2;

    // ---- feet stay ON the rope ----
    // A crouch lowers the hips, and the old code lowered the whole root with
    // it, so the paws sank into the hemp (caught by the vision pass). Measure
    // the actual foot height and lift the root back so the paws rest on the
    // rope surface; while airborne (yOff) the correction is only a nudge.
    if (!this._footTmp) this._footTmp = new V3();
    this.root.updateMatrixWorld(true);
    const surf = ropeY + DIM.ropeRadius * 0.5;
    let low = Infinity;
    for (const side of ['L', 'R']) {
      d.legs[side].foot.getWorldPosition(this._footTmp);
      if (this._footTmp.y < low) low = this._footTmp.y;
    }
    if (isFinite(low)) {
      let corr = surf - low;
      corr = Math.abs(p.yOff) > 0.03
        ? clamp(corr * 0.25, -0.03, 0.06)
        : clamp(corr, -0.07, 0.18);
      this.root.position.y += corr;
    }
  }

  // ---------- states ----------
  // combat stance: circling footwork, weight shifting, guard up
  _idle(ctx) {
    const tg = this.target, t = this.time;
    const cir = ctx.circlePhase || 0;
    const side = this.data.side === 'A' ? 1 : -1;
    const step = Math.sin(cir * 2.2 + (side > 0 ? 0 : 1.6));
    tg.spineLean = 0.08 + Math.sin(t * 2.2) * 0.03;
    tg.headYaw = -side * 0.22 + Math.sin(t * 0.6) * 0.12;
    tg.headPitch = 0.04;
    tg.shS_z = -0.5 + Math.sin(t * 2.6) * 0.09;
    tg.shO_z = -0.3 + Math.sin(t * 2.1 + 1) * 0.1;
    tg.elS = -0.7; tg.elO = -0.6;
    tg.crouch = 0.03 + Math.max(0, Math.sin(t * 1.1 + side)) * 0.03;
    // footwork: the hind legs step sideways while the cats circle each other
    tg.xOff = step * 0.16;
    tg.thL = 0.06 + Math.max(0, step) * 0.5;
    tg.thR = 0.06 + Math.max(0, -step) * 0.5;
    tg.knL = -0.24 - Math.max(0, step) * 0.5;
    tg.knR = -0.24 - Math.max(0, -step) * 0.5;
    tg.twist = -side * 0.06;
    tg.tailAmp = 0.16;
  }

  _recover() {
    const f = this.moveFrac;
    const spin = f * Math.PI * 2.6;
    this.target.shS_x = 0.5 + Math.sin(spin) * 1.3;
    this.target.shO_x = 0.5 - Math.sin(spin) * 1.3;
    this.target.shS_z = -0.3 - Math.cos(spin) * 0.5;
    this.target.shO_z = -0.3 + Math.cos(spin) * 0.5;
    this.target.spineLean = 0.1 - Math.sin(f * Math.PI) * 0.26;
    this.target.tilt = Math.sin(f * Math.PI * 2) * 0.14;
  }

  // charge in: three loud paw stamps (rope gets nudged), then blade first
  _rush(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const reach = s.data.reach || 0.6;
    if (f < 0.34) {
      const sf = f / 0.34;
      const pulse = Math.abs(Math.sin(sf * Math.PI * 3));
      tg.crouch = 0.06 + pulse * 0.1;
      tg.knL = -0.2 - pulse * 0.5;
      tg.knR = -0.2 - (1 - pulse) * 0.3;
      tg.thL = 0.06 + pulse * 0.55;
      tg.spineLean = 0.3;
      tg.twist = this.fw * 0.12;
      if (sf > 0.08 && !s.data.st1) { s.data.st1 = 1; ctx.onStamp && ctx.onStamp(this); }
      if (sf > 0.42 && !s.data.st2) { s.data.st2 = 1; ctx.onStamp && ctx.onStamp(this); }
      if (sf > 0.75 && !s.data.st3) { s.data.st3 = 1; ctx.onStamp && ctx.onStamp(this); }
    } else if (f < 0.7) {
      const lf = (f - 0.34) / 0.36;
      tg.xOff = this.fw * lf * reach;
      tg.spineLean = 0.3 + lf * 0.5;
      tg.twist = this.fw * 0.18;
      tg.shO_z = -0.2 - lf * 0.7;
      tg.shS_z = 1.5 * lf; tg.shS_x = 1.0 * lf; tg.elS = -0.05;
      tg.headYaw = this.fw * 0.22;
      tg.yOff = Math.sin(lf * Math.PI) * 0.06;
      if (lf > 0.35 && !s.data.sp) { s.data.sp = 1; ctx.onLungeHit && ctx.onLungeHit(this); }
    } else {
      const sf = (f - 0.7) / 0.3;
      tg.xOff = this.fw * (reach - sf * 0.1);
      tg.spineLean = 0.8 - sf * 0.5;
      tg.tilt = Math.sin(sf * Math.PI) * 0.14;
      tg.crouch = 0.05;
      tg.shS_z = 1.35 - sf * 0.2;
    }
  }

  _lunge(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const reach = s.data.reach || 0.7;
    if (f < 0.3) { // coil back, blade drawn
      const cf = f / 0.3;
      tg.crouch = 0.1 * cf;
      tg.spineLean = -0.12 * cf;
      tg.shS_z = -0.5 - cf * 0.5; tg.elS = -1.0;
      tg.knL = -0.2 - cf * 0.35;
      tg.twist = -this.fw * 0.16 * cf;
    } else if (f < 0.62) { // explode forward, blade first
      const lf = (f - 0.3) / 0.32;
      tg.xOff = this.fw * lf * reach;
      tg.spineLean = 0.25 + lf * 0.55;
      tg.twist = this.fw * 0.2;
      tg.shO_z = -0.2 - lf * 0.75;
      tg.shS_z = 1.6 * lf; tg.shS_x = 1.05 * lf; tg.elS = -0.02;
      tg.headYaw = this.fw * 0.24; tg.headPitch = 0.1 * lf;
      tg.yOff = Math.sin(lf * Math.PI) * 0.05;
      tg.thL = 0.06 + lf * 0.5;
      if (lf > 0.4 && !s.data.sp) { s.data.sp = 1; ctx.onLungeHit && ctx.onLungeHit(this); }
    } else { // skid
      const sf = (f - 0.62) / 0.38;
      tg.xOff = this.fw * (reach - sf * 0.12);
      tg.spineLean = 0.8 - sf * 0.5;
      tg.tilt = Math.sin(sf * Math.PI) * 0.16;
      tg.crouch = 0.05;
      tg.shS_z = 1.4 - sf * 0.15;
    }
  }

  _slashUp(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    if (f < 0.3) { // cape twirl toward the moon
      const cf = f / 0.3;
      tg.twist = -0.5 * cf * this.fw * -1;
      tg.shO_z = -0.2 - cf * 1.5; tg.shO_x = 0.45;
      tg.headPitch = -0.35 * cf;
      tg.capeRaise = cf * 0.55;
      tg.crouch = 0.05 * cf;
    } else if (f < 0.72) { // rising diagonal slash
      const sf = (f - 0.3) / 0.42;
      tg.shS_z = -0.75 + sf * 2.5;
      tg.shS_x = -0.5 + sf * 1.2;
      tg.elS = -0.8 + sf * 0.65;
      tg.spineLean = 0.2 - sf * 0.34;
      tg.twist = (-0.5 + sf * 0.9) * this.fw * -1;
      tg.yOff = Math.sin(sf * Math.PI) * 0.14;
      tg.thL = 0.06 + sf * 0.4;
      if (sf > 0.4 && !s.data.sl) { s.data.sl = 1; ctx.onSlash && ctx.onSlash(this, 'up'); }
    } else { // follow-through pose
      tg.shS_z = 1.55; tg.elS = -0.18;
      tg.headPitch = -0.42;
      tg.capeRaise = 0.65;
      tg.tilt = -0.1;
    }
  }

  _taunt(ctx) {
    const f = this.moveFrac, tg = this.target;
    if (f < 0.22) { // plant blade tip on the rope
      const pf = f / 0.22;
      tg.spineLean = 0.35 * pf;
      tg.shS_z = -0.45 + pf * 0.3; tg.elS = -0.85 - pf * 0.45;
      tg.headPitch = 0.3 * pf;
      tg.crouch = 0.08 * pf;
    } else { // lean on the pommel, cross glints
      tg.spineLean = 0.35;
      tg.shS_z = -0.15; tg.elS = -1.3;
      tg.headPitch = -0.18 + Math.sin(this.time * 3.4) * 0.06;
      tg.knL = -0.45; tg.knR = -0.45;
      tg.twist = this.fw * 0.1;
      if (this.data.crossMat) {
        this.data.crossMat.emissiveIntensity = Math.max(0, Math.sin((f - 0.22) * Math.PI / 0.78)) * 1.8;
      }
      if (f > 0.3 && !this.state.data.fl) { this.state.data.fl = 1; ctx.onTaunt && ctx.onTaunt(this); }
    }
  }

  _parryHop(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    if (f < 0.45) { // two hard sidesteps
      const sf = f / 0.45;
      const step = Math.sin(sf * Math.PI * 2);
      tg.xOff = -this.fw * step * 0.4;      // lateral: sideways along the rope
      tg.crouch = 0.04 + Math.abs(step) * 0.07;
      tg.twist = -this.fw * step * 0.22;
      tg.thL = 0.06 + Math.max(0, step) * 0.6;
      tg.thR = 0.06 + Math.max(0, -step) * 0.6;
      tg.yOff = Math.abs(step) * 0.08;
      if (sf > 0.4 && !s.data.sd) { s.data.sd = 1; ctx.onStamp && ctx.onStamp(this); }
    } else { // low blade sweep across
      const pf = (f - 0.45) / 0.55;
      tg.crouch = 0.11;
      tg.spineLean = 0.4;
      tg.shS_z = 0.45 - pf * 0.5; tg.shS_x = -0.6; tg.elS = -1.15;
      tg.twist = this.fw * (0.28 - pf * 0.35);
      tg.headPitch = 0.12;
      tg.xOff = this.fw * 0.2 * pf;
    }
  }

  _slashSpin(ctx) {
    const f = this.moveFrac, tg = this.target;
    if (f < 0.45) { // scimitar windmill x2 overhead
      const wf = f / 0.45;
      tg.shS_z = -0.7 + wf * Math.PI * 4;
      tg.elS = -0.2;
      tg.spineLean = -0.12;
      tg.headPitch = -0.24;
      tg.twist = wf * 0.5 * this.fw;
      tg.yOff = Math.sin(wf * Math.PI) * 0.1;
      if (wf > 0.3 && !this.state.data.w1) { this.state.data.w1 = 1; ctx.onWhoosh && ctx.onWhoosh(this); }
    } else { // triple downward cuts
      const cf = (f - 0.45) / 0.55;
      const chop = Math.abs(Math.sin(cf * Math.PI * 3));
      tg.shS_z = 1.45 - chop * 1.85;
      tg.elS = -0.35;
      tg.spineLean = 0.15 + chop * 0.28;
      tg.crouch = 0.05 + chop * 0.09;
      tg.xOff = this.fw * 0.3 * cf;
      if (cf > 0.25 && !this.state.data.c1) { this.state.data.c1 = 1; ctx.onSlash && ctx.onSlash(this, 'down'); }
      if (cf > 0.72 && !this.state.data.c2) { this.state.data.c2 = 1; ctx.onSlash && ctx.onSlash(this, 'down'); }
    }
  }

  _riposte(ctx) {
    const f = this.moveFrac, tg = this.target;
    if (f < 0.22) { // duck under the thrust
      const df = f / 0.22;
      tg.crouch = 0.24 * df;
      tg.spineLean = 0.55 * df;
      tg.headPitch = 0.24;
      tg.knL = -0.2 - df * 0.5; tg.knR = -0.2 - df * 0.5;
    } else if (f < 0.46) { // whirl behind the foe
      const wf = (f - 0.22) / 0.24;
      tg.twist = Math.sin(wf * Math.PI) * 1.9 * this.fw;
      tg.crouch = 0.14;
      tg.shS_z = -1.3;
      tg.xOff = -this.fw * Math.sin(wf * Math.PI) * 0.3;
    } else if (f < 0.74) { // crescent slash arc
      const cf = (f - 0.46) / 0.28;
      tg.shS_z = -1.5 + cf * 2.7;
      tg.shS_x = -1.0 + cf * 0.7;
      tg.elS = -0.25;
      tg.twist = this.fw * (0.35 - cf * 0.6);
      tg.xOff = this.fw * 0.35 * cf;
      if (cf > 0.4 && !this.state.data.cr) { this.state.data.cr = 1; ctx.onSlash && ctx.onSlash(this, 'crescent'); }
    } else { // counter-thrust
      const pf = (f - 0.74) / 0.26;
      tg.spineLean = 0.4;
      tg.shS_z = 1.6; tg.elS = -0.08;
      tg.xOff = this.fw * (0.35 + pf * 0.45);
      tg.headYaw = this.fw * 0.2;
    }
  }

  _freeze(ctx) {
    Object.assign(this.target, this.frozenPose || IDLE_POSE());
    // even a standoff breathes: ears track the flag, tail flicks, weight shifts
    this.target.tailAmp = 0.1;
    this.target.crouch = (this.frozenPose ? this.frozenPose.crouch : 0) + Math.max(0, Math.sin(this.time * 0.8)) * 0.02;
    this.target.headYaw = Math.sin(this.time * 0.45) * 0.2;
    ctx.flagDart = true;
  }

  // short reel: head snaps back, off arm flails, feet skid - the quick hit read
  _hit(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const dir = s.data.dir || -this.fw; // world-x the body is thrown toward
    const mag = s.data.mag || 1;
    if (f < 0.4) {
      const hf = f / 0.4;
      tg.spineLean = -0.4 * hf * mag;
      tg.headPitch = 0.5 * hf * mag;
      tg.headYaw = -dir * 0.3 * hf;
      tg.xOff = dir * hf * 0.24 * mag;
      tg.shO_x = 1.0 * hf; tg.shS_x = 0.6 * hf;
      tg.crouch = 0.1 * hf;
      tg.tremble = hf * 0.6;
      if (hf > 0.5 && !s.data.imp) { s.data.imp = 1; ctx.onHitImpact && ctx.onHitImpact(this); }
    } else {
      const rf = (f - 0.4) / 0.6;
      tg.spineLean = -0.4 * mag * (1 - rf);
      tg.headPitch = 0.5 * mag * (1 - rf);
      tg.xOff = dir * 0.24 * mag * (1 - rf);
      tg.crouch = 0.1 * (1 - rf);
      tg.shO_z = -0.2 - rf * 0.5;
      tg.tremble = 0.6 * (1 - rf);
      tg.twist = dir * 0.2 * (1 - rf);
    }
  }

  _stumble(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const d = s.data.dir || -this.fw; // world-space tumble direction
    const dist = s.data.dist || 0.7;
    if (f < 0.18) { // wobble
      const wf = f / 0.18;
      tg.tilt = Math.sin(this.time * 20) * 0.26 * wf;
      tg.spineLean = 0.24 + Math.sin(this.time * 16) * 0.3 * wf;
      tg.crouch = 0.06;
      tg.tremble = wf * 0.8;
    } else if (f < 0.56) { // comic tumble
      const tf = (f - 0.18) / 0.38;
      tg.xOff = d * tf * dist;
      tg.tilt = 1.25 * tf;
      tg.crouch = 0.1 + tf * 0.3;
      tg.yOff = Math.sin(tf * Math.PI) * 0.42;
      tg.shS_x = 1.35; tg.shO_x = 1.35; tg.shS_z = -1.3; tg.shO_z = -1.3;
      tg.twist = d * tf * 0.5;
      if (tf > 0.5 && !s.data.tu) { s.data.tu = 1; ctx.onTumble && ctx.onTumble(this); }
    } else if (f < 0.8) { // heap on the rope
      tg.xOff = d * dist;
      tg.tilt = 1.25 + Math.sin(this.time * 22) * 0.1;
      tg.crouch = 0.4;
      tg.shS_x = 1.5; tg.shO_x = 1.5;
      tg.twist = d * 0.5;
    } else { // scramble back
      const sf = (f - 0.8) / 0.2;
      tg.xOff = d * (1 - sf) * dist;
      tg.tilt = 1.25 * (1 - sf);
      tg.crouch = 0.4 - sf * 0.34;
      tg.twist = d * 0.5 * (1 - sf);
    }
  }

  // crossed blades, both shoving: the signature "locked" beat of a swordfight
  _bladeLock(ctx) {
    const f = this.moveFrac, tg = this.target;
    const push = Math.sin(this.time * 7.5) * 0.5 + 0.5;   // straining surge
    const l = 0.6 + push * 0.4;
    tg.lock = l;
    tg.spineLean = 0.5 + l * 0.25;
    tg.shS_z = 0.55 + l * 0.2;
    tg.shS_x = 1.15;
    tg.elS = -0.35;
    tg.shO_z = 0.15; tg.shO_x = 0.9; tg.elO = -0.5;
    tg.crouch = 0.1 + l * 0.06;
    tg.tremble = 1;
    tg.headPitch = 0.16;
    tg.headYaw = -this.fw * 0.1;
    tg.xOff = this.fw * (0.05 + l * 0.06);
    tg.tailAmp = 0.05;
    if (f > 0.1 && !this.state.data.sparkT) {
      this.state.data.sparkT = 1;
      ctx.onLockSparks && ctx.onLockSparks(this);
    }
  }

  _clash(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const l = 0.5 + 0.5 * Math.sin(this.time * 9);
    tg.spineLean = 0.45;
    tg.shS_z = 1.45; tg.shS_x = 1.0; tg.elS = -0.1;
    tg.shO_z = -0.05; tg.shO_x = 0.75;
    tg.crouch = 0.09;
    tg.lock = 0.5;
    tg.tremble = 0.9;
    if (s.data.loser) {
      const sf = Math.min(f / 0.62, 1);
      tg.xOff = s.data.dir * sf * 0.75;   // driven back
      tg.tilt = -sf * 0.24;
      tg.spineLean = 0.45 - sf * 0.3;
      tg.tremble = 0.9 * (1 - sf * 0.7);
      if (sf > 0.55 && !s.data.rk) { s.data.rk = 1; ctx.onKnockback && ctx.onKnockback(this, s.data.dir); }
    } else {
      tg.xOff = s.data.dir * Math.min(f / 0.62, 1) * 0.3; // winner presses forward
      tg.spineLean = 0.45 + Math.min(f / 0.62, 1) * 0.2;
      tg.crouch = 0.09 + l * 0.03;
    }
  }

  // cape vertex sway + flourish (rebuilt from base each frame: never compound)
  _cape() {
    const cape = this.data.cape;
    const pos = cape.geometry.attributes.position;
    if (!this._capeBase) this._capeBase = Float32Array.from(pos.array);
    const base = this._capeBase;
    const t = this.time;
    const raise = this.pose.capeRaise || 0;
    for (let i = 0; i < pos.count; i++) {
      const bx = base[i * 3], by = base[i * 3 + 1];
      const depth = clamp(-by / 0.78, 0, 1);
      const wave = Math.sin(t * 4.2 + depth * 5) * 0.11 * depth;
      pos.setX(i, bx * (1 + raise * depth * 1.8) + wave * 0.4);
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    cape.rotation.x = -0.18 - raise * 1.0;
  }

  bladeTipWorld(out = new V3()) {
    return this.data.sword.localToWorld(out.set(1.0, 0, 0));
  }

  bladeMidWorld(out = new V3()) {
    return this.data.sword.localToWorld(out.set(0.55, 0, 0));
  }
}
