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
import { furTexture, clothTexture, metalTexture, leatherTexture, pleatTexture } from './tex.js';
import { robeTexture, knightClothTexture } from './costume-textures.js';

const V3 = THREE.Vector3;
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;

// ---- v14 technique easing --------------------------------------------------
// A strike reads as technique when every phase of a move ACCELERATES in and
// SETTLES out instead of running at constant speed: the old phases fed their
// linear fractions straight into the pose targets, so a lunge moved like a
// trolley. smooth() shapes strikes, easeOut() shapes releases and skids.
const smooth = (t) => t * t * (3 - 2 * t);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

// v19 tail rake: the chain hangs along -Y in its own frame, so a rotation.z of
// -PI/2 points it straight BACK. Subtracting a little more lifts it ~34 degrees
// above the horizontal; the per-segment curl in _applyPose arcs it from there.
const TAIL_RAKE = -Math.PI / 2 - 0.60;

// v19: the phase split shared by every strike below:
//   windup -> swing -> HOLD -> settle
// `hold` comes down from the director per move (MOVES/HOLD in director.js) and
// is converted to a fraction of the move here. During the hold the pose sits
// exactly at the top of the arc, which is the frame the eye needs to read the
// blade; without it the sword was mid-arc on every frame of the animation.
function swingPhases(state, windEnd, swingEndBase) {
  const HF = clamp((state.data.hold || 0) / (state.dur || 1), 0, 0.34);
  const p2 = swingEndBase - HF * 0.5;
  return { HF, p1: windEnd, p2, p3: p2 + HF };
}

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

// Join small static details by material: curved whiskers and seams cost one
// draw each, rather than one mesh for every stitch or strand.
function joined(geometries) {
  const arrays = { position: [], normal: [], uv: [] };
  for (const source of geometries) {
    const g = source.index ? source.toNonIndexed() : source;
    for (const key of Object.keys(arrays)) arrays[key].push(...g.attributes[key].array);
    if (g !== source) g.dispose();
    source.dispose();
  }
  const result = new THREE.BufferGeometry();
  for (const key of Object.keys(arrays)) result.setAttribute(key,
    new THREE.Float32BufferAttribute(arrays[key], key === 'uv' ? 2 : 3));
  return result;
}
function stroke(points, radius = 0.003, steps = 12) {
  const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new V3(...p))), steps, radius, 5, false);
  return g;
}
// Soft gathered cloth only moves IN from its existing envelope. Waist and hem
// heights are unchanged, including the skirt's local +/-0.27 hitch anchors.
function foldedCylinder(rt, rb, h, segments = 32, rows = 6, folds = 10, depth = 0.01) {
  const g = new THREE.CylinderGeometry(rt, rb, h, segments, rows, true);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const t = clamp(0.5-y/h, 0, 1), angle = Math.atan2(x,z);
    const gather = (0.5+0.5*Math.cos(angle*folds + Math.sin(t*Math.PI)*0.32));
    const inset = depth * gather * (0.28+0.72*Math.sin(t*Math.PI/2));
    const r = Math.hypot(x,z), k = (r-inset)/r;
    p.setXYZ(i,x*k,y,z*k);
  }
  g.computeVertexNormals();
  return g;
}
// v21: the convex almond eye cap is gone with the v20 eye build (the user
// rejected it twice and asked for the original ball eye back). Deleted rather
// than left as dead code - nothing else in the rig used it.

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
    // v21b (user: "Make eyes black balls"): no iris, no slit, no catchlight, no
    // map - one solid black glossy ball per eye. Glossy (roughness .30) so the
    // key light still leaves a highlight and the sphere reads as a BALL rather
    // than a hole punched in the skull; the faint self-emission keeps the
    // silhouette legible when the head turns into its own shadow.
    // ballEyeTexture() (costume-textures.js) is the v21 slit-on-ball map and is
    // kept unused so the slit version is a one-line restore if he wants it back.
    eye: std('#0A0A0D', 'steel', { roughness: 0.42, metalness: 0.0, emissive: '#101015', emissiveIntensity: 0.5 }),
    cheek: std(c.furBelly, 'fur', { roughness: 0.94 }),
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
  // Paired whisker pads and a tucked chin replace the rectangular snout.
  // Nose remains inside x=.30, matching headTipWorld and the contact solver.
  const cheekGeos = [];
  for (const sz of [-1, 1]) {
    const g = new THREE.SphereGeometry(1, 16, 10);
    g.scale(0.082, 0.057, 0.061); g.translate(0.196, -0.046, sz*0.047);
    cheekGeos.push(g);
  }
  const chin = new THREE.SphereGeometry(1, 14, 8);
  chin.scale(0.061,0.035,0.069); chin.translate(0.189,-0.094,0);
  cheekGeos.push(chin);
  const muzzle = mesh(joined(cheekGeos), M.cheek);
  muzzle.name = 'rounded-feline-muzzle'; head.add(muzzle);
  const nose = mesh(new THREE.SphereGeometry(0.025, 12, 8), M.nose, 0.271, -0.023, 0);
  nose.scale.set(0.72,0.65,1);
  // Rounded triangular nose: broad above, pinched at the philtrum.
  const np = nose.geometry.attributes.position;
  for (let i=0; i<np.count; i++) np.setZ(i,np.getZ(i)*(0.65+0.35*(np.getY(i)/0.025+1)/2));
  nose.geometry.computeVertexNormals(); head.add(nose);
  const don = c.furKey === 'A-fur';
  const mouthGeos = [stroke([[0.282,-0.033,0],[0.280,-0.052,0],[0.277,-0.062,0]],0.0027,6)];
  for (const sz of [-1,1]) {
    mouthGeos.push(stroke([[0.277,-0.060,0],[0.273,-0.075,sz*0.024],
      [0.253,-0.073,sz*0.056],[0.233,don && sz===1 ? -0.053 : -0.064,sz*0.079]],0.0026,9));
    // v21 EYES (user: "the eyes are getting fucked. Make them simple ball and
    // back to the original eye. Its ugly now"). The v20 stack - a convex almond
    // socket + a painted-iris almond + a stroke eyelid + a stroke brow - was
    // rejected twice: the vision pass scored it 4/10 ("tacked on, protruding,
    // the eyelid clipping into the head") and the user called it ugly. It is
    // GONE. Each eye is now the ORIGINAL single ball, with the pupil and
    // catchlight painted into the ball's own texture (ballEyeTexture) instead of
    // being extra meshes pressed against its front, so nothing in the eye can
    // protrude, float, clip or z-fight.
    //
    // Two measured corrections on top of the v19b ball:
    //  - the v19b pupil box (x .158 against a .165 ball surface) was buried
    //    INSIDE the eyeball, so those eyes were plain colour orbs with no gaze
    //    at all; the painted slit is on the ball's face by construction.
    //  - the v19b ball was yawed 44 degrees outward and sat far outboard, which
    //    reads as googly side-mounted orbs. The eye is now 0.42 rad out (a
    //    forward gaze with a slight outward angle) and 0.027 proud of the skull
    //    (was 0.037), so it reads as an eye set in the face rather than stuck on.
    // v21b EYES: one plain BLACK ball per eye (user: "Make eyes black balls"),
    // then a size pass down (user: "a little smaller eyes"): radius .047 -> .041,
    // pushed 0.003 further out so the smaller ball still sits ON the skull instead
    // of sinking into it. The eye group keeps the outward yaw so both balls sit on
    // the face and the camera-side one reads at profile; there is no map, no pupil
    // mesh, no lid and no brow, so nothing in the eye can clip, smear or float.
    const eye = new THREE.Group();
    eye.position.set(0.135,0.060,sz*0.122);
    eye.rotation.y = sz > 0 ? 0.42 : Math.PI-0.42;
    eye.rotation.z = sz*(don ? 0.10 : -0.09);
    const ball = mesh(sphere(0.041, 20, 14), M.eye, 0, 0, -0.005);
    ball.name = 'eye-ball';
    eye.add(ball); head.add(eye);
  }
  head.add(mesh(joined(mouthGeos),M.mouth));
  const whiskerGeos = [];
  for (const sz of [-1,1]) for (let i=0; i<3; i++) {
    // Swept-back whiskers end within radius .32; never project into the foe.
    const points = [[0.235,-0.036-i*0.015,sz*0.078],
      [0.228,-0.038-i*0.018,sz*0.139],
      [0.195,-0.021-i*0.025,sz*0.204],
      [0.143,-0.005-i*0.031,sz*(0.257-i*0.009)]];
    const curve = new THREE.CatmullRomCurve3(points.map(p=>new V3(...p)));
    const g = new THREE.TubeGeometry(curve,12,0.0027,4,false);
    const p = g.attributes.position;
    for (let j=0; j<=12; j++) {
      const centre = curve.getPointAt(j/12), taper = 1-j/12*0.86;
      for (let k=0; k<=4; k++) {
        const idx=j*5+k;
        p.setXYZ(idx,centre.x+(p.getX(idx)-centre.x)*taper,
          centre.y+(p.getY(idx)-centre.y)*taper,centre.z+(p.getZ(idx)-centre.z)*taper);
      }
    }
    g.computeVertexNormals(); whiskerGeos.push(g);
  }
  const whiskers = mesh(joined(whiskerGeos),M.whisker);
  whiskers.name = 'swept-tapered-whiskers'; whiskers.castShadow=false; head.add(whiskers);
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
  // v19 (user: "put the tail of the cats behind them not down"): the tail used
  // to be a plain chain hanging along -Y from the rump, i.e. straight DOWN, and
  // the two cats had opposite curl constants (-1.15 / +0.95), so one tail hung
  // behind-down and the other one swung FORWARD (measured: tail tip 0.56 behind
  // / 0.39 below the hips for A, and 0.26 in FRONT of B). It is now a real
  // feline tail: raked BACK and UP out of the rump (TAIL_RAKE = 34 degrees above
  // the horizontal), riding just off the body centreline in +z so it clears the
  // knight's cape sheet and the sultan's robe, with each segment adding a gentle
  // upward curl (see _applyPose) so the tip arcs up like an alert cat's.
  const tail = [];
  const tailBase = new THREE.Group();
  tailBase.position.set(-0.10, 0.06, 0.12);
  tailBase.rotation.z = TAIL_RAKE;
  hips.add(tailBase);
  for (let i = 0; i < 6; i++) {
    // v19: the segments OVERLAP (0.15 of capsule over 0.13 of pivot spacing) and
    // every joint carries a sphere. The old version left 0.02 gaps between
    // capsules, which at tail size read as a segmented, branch-like stick
    // (vision review: "several segmented pieces that do not smoothly connect").
    const seg = limb(i === 0 ? tailBase : tail[i - 1], 0, i === 0 ? 0 : -0.13, 0, 0.15, 0.040 - i * 0.004, M.fur);
    if (i > 0) seg.add(mesh(sphere(0.040 - i * 0.004, 8, 6), M.fur, 0, 0, 0));
    tail.push(seg);
  }
  tail[5].add(mesh(sphere(0.030, 8, 6), M.fur, 0, -0.15, 0));   // rounded tip

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
  const blade = mesh(cyl(0.009, 0.018, 1.15, 6), steel, 0.63, 0, 0);
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
  const blade = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.030, 6, false), steel);
  blade.scale.z = 0.42;
  blade.castShadow = true;
  g.add(blade);
  const damask = mesh(torus(0.14, 0.004, Math.PI * 0.9), std(CAT_B.silverShadow, 'silver'), 0.42, 0.09, 0);
  damask.rotation.z = -0.5;
  g.add(damask);
  g.add(mesh(sphere(0.028, 10, 8),
    std(CAT_B.gemEmerald, 'gold', { emissive: CAT_B.gemEmerald, emissiveIntensity: 0.4 }), -0.115, 0, 0));
  return g;
}

// waving cape (A): REMOVED in v18.2. The flat sheet's top edge was buried in
// the ruff cone and the tail (held up and wrapped behind in v19) whipped
// straight through it every fight cycle; keeping it clip-free without cloth
// collision was not attainable, and the user sanctioned deletion ("If you
// cant fix it, delete it"). The knight keeps his Spanish read via the morion,
// golilla ruff, red slashed doublet + tabard, tassets and rapier.

// ---------- CAT B: DON GATO (SELL side, LEFT pole; faces world +x) ----------
// CONVENTION (task t_167a53f3): SELL = RED. v18 IDENTITY (user directive): the
// SPANISH knight is the SELL side. Don Gato keeps his gold armour neutrals;
// every cloth piece (cape, plume, tabard, slashed doublet) pulls the SELL red
// family via CAT_A.crimsonMain/crimsonDeep aliases in palette.js (names kept so
// the material slots stay stable; the HUES are red).
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
  const brim = mesh(torus(0.185, 0.024), MA.steel, 0, 0.04, 0);
  brim.rotation.x = Math.PI / 2;
  brim.scale.set(1.18, 1.05, 1);
  // The front and rear brim turn up, characteristic of a morion.
  const brimPos = brim.geometry.attributes.position;
  for (let i=0;i<brimPos.count;i++) {
    const x = brimPos.getX(i);
    brimPos.setZ(i,brimPos.getZ(i)-0.025*Math.pow(Math.abs(x)/0.209,3));
  }
  brim.geometry.computeVertexNormals();
  helm.add(brim);
  // Swept morion comb: a curved, tapered crest instead of stacked blocks.
  const crest = new THREE.Shape();
  crest.moveTo(-0.18,0.075);
  crest.bezierCurveTo(-0.12,0.14,-0.105,0.224,-0.025,0.223);
  crest.bezierCurveTo(0.055,0.228,0.11,0.155,0.18,0.075);
  crest.quadraticCurveTo(0,0.14,-0.18,0.075);
  const crestGeo = new THREE.ExtrudeGeometry(crest,{depth:0.022,bevelEnabled:true,
    bevelThickness:0.004,bevelSize:0.004,bevelSegments:2,steps:1,curveSegments:12});
  crestGeo.scale(1,0.85,1);
  crestGeo.translate(0,0,-0.011);
  helm.add(mesh(crestGeo,MA.steel));
  const crestEdge = stroke([[-0.178,0.079,0],[-0.10,0.183,0],[-0.025,0.225,0],
    [0.065,0.190,0],[0.178,0.08,0]],0.004,18);
  crestEdge.scale(1,0.85,1);
  helm.add(mesh(crestEdge,MA.goldBright));
  const trim = mesh(torus(0.165, 0.008), MA.goldBright, 0, 0.05, 0);
  trim.rotation.x = Math.PI / 2;
  trim.scale.set(1.2, 1.1, 1);
  helm.add(trim);
  helm.add(mesh(cyl(0.02, 0.025, 0.05, 8), MA.gold, 0.05, 0.16, -0.1));
  const plume = new THREE.Group();
  plume.position.set(0.05, 0.125, -0.1);
  const feathers = [];
  for (let i = 0; i < 3; i++) {
    const g = new THREE.PlaneGeometry(0.062-i*0.009,0.17-i*0.02,4,10);
    const p = g.attributes.position;
    for (let j=0;j<p.count;j++) {
      const t = clamp(p.getY(j)/(0.17-i*0.02)+0.5,0,1);
      const width = Math.pow(Math.max(0,Math.sin(Math.PI*t)),0.7);
      p.setXYZ(j,-0.13*t+p.getX(j)*width,0.045*Math.sin(t*Math.PI*0.75),
        i*0.012+p.getX(j)*width*0.25+0.008*Math.sin(t*12));
    }
    g.computeVertexNormals(); feathers.push(g);
  }
  const featherMat = MA.crimson.clone(); featherMat.side = THREE.DoubleSide;
  plume.add(mesh(joined(feathers),featherMat));
  plume.add(mesh(stroke([[0,0,0],[-0.055,0.035,0],[-0.13,0.032,0]],0.0025,10),MA.gold));
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
  // Rolled edge and repousse centre ridge share one mesh on the existing shell.
  const armourEdges = [];
  const edge = [];
  for (let i=0;i<=30;i++) {
    const a = i/30*Math.PI*2;
    edge.push([-0.014,0.33+Math.cos(a)*0.162,Math.sin(a)*0.117]);
  }
  armourEdges.push(stroke(edge,0.005,30));
  armourEdges.push(stroke([[0.142,0.47,0],[0.202,0.415,0],[0.226,0.33,0],
    [0.202,0.245,0],[0.142,0.19,0]],0.004,14));
  rig.spine.add(mesh(joined(armourEdges),MA.goldBright));
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

  // ---- Spanish knight kit ----
  // starched golilla ruff (the pleated court collar that reads "Spanish"
  // instantly), a gorget under it, puffed SLASHED sleeve caps, tall leather
  // boots with folded cuffs, tassets over the thighs and a baldric.
  const leatherPair = tex('leather', () => leatherTexture({ seed: 43 }));
  const pleat = tex('pleat', () => pleatTexture({ pleats: 30 }));
  const slashPair = tex('embroidered-doublet', () => knightClothTexture('doublet'));
  const ruffMat = std('#FBF7EE', 'cloth', { side: THREE.DoubleSide, bumpScale: 0.05 }, pleat);
  const ruff = mesh(new THREE.CylinderGeometry(0.16, 0.305, 0.1, 30, 1, true), ruffMat, 0.02, 0.47, 0);
  ruff.rotation.z = -0.06;
  rig.spine.add(ruff);
  const ruff2 = mesh(new THREE.CylinderGeometry(0.135, 0.21, 0.06, 26, 1, true), ruffMat, 0.02, 0.545, 0);
  ruff2.rotation.z = -0.06;
  rig.spine.add(ruff2);
  const gorget = mesh(torus(0.142, 0.032), MA.gold, 0.02, 0.415, 0);
  gorget.rotation.x = Math.PI / 2;
  gorget.scale.set(1, 1, 0.9);
  rig.spine.add(gorget);
  const slashMat = std('#FFFFFF', 'cloth', { bumpScale: 0.009 }, slashPair);
  for (const side of ['L', 'R']) {
    const cap = mesh(sphere(0.1, 12, 10), slashMat, 0, -0.015, 0);
    cap.scale.set(1, 0.76, 1.06);
    rig.arms[side].shoulder.add(cap);
    const band = mesh(torus(0.064, 0.012), MA.gold, 0, -0.2, 0);
    band.rotation.x = Math.PI / 2;
    rig.arms[side].shoulder.add(band);
  }
  // tassets + baldric across the cuirass
  for (const sz of [-0.12, 0.12]) {
    const tas = mesh(box(0.13, 0.15, 0.035), MA.gold, 0.055, -0.15, sz);
    tas.rotation.z = 0.12;
    tas.rotation.x = sz > 0 ? 0.12 : -0.12;
    rig.hips.add(tas);
  }
  const baldric = mesh(box(0.052, 0.52, 0.028), std(CAT_A.leatherBrown, 'cloth', {}, leatherPair), 0.162, 0.27, 0.01);
  baldric.rotation.z = 0.62;
  rig.spine.add(baldric);
  rig.spine.add(mesh(sphere(0.027, 10, 8), MA.goldBright, 0.19, 0.43, 0.01));

  // v18.2: cape deleted (clipped the body; user sanctioned removal). The gold
  // collar stays as the back-strap of the armour.
  const collar = mesh(torus(0.155, 0.018), MA.gold, 0.02, 0.52, 0);
  collar.rotation.x = Math.PI / 2;
  collar.rotation.z = 0.1;
  collar.scale.set(1.05, 0.9, 1);
  rig.spine.add(collar);
  rig.spine.add(mesh(sphere(0.038, 10, 8), MA.goldBright, 0.16, 0.5, 0));

  // tabard skirt with tail slit + gold fringe belt + bracers/shin guards
  const tab = mesh(new THREE.CylinderGeometry(0.14, 0.19, 0.22, 20, 3, true, 0.5, Math.PI * 1.6), slashMat, -0.02, -0.08, 0);
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
    // thigh-high leather boots with a folded cuff (the knight's footwear)
    const bootMat = std(CAT_A.leatherBrown, 'cloth', { side: THREE.DoubleSide }, leatherPair);
    const boot = mesh(new THREE.CylinderGeometry(0.066, 0.073, 0.28, 12, 1, true), bootMat, 0.004, -0.14, 0);
    rig.legs[side].knee.add(boot);
    const cuff = mesh(torus(0.079, 0.026), std(CAT_A.leatherBrown, 'cloth', {}, leatherPair), 0.004, -0.005, 0);
    cuff.rotation.x = Math.PI / 2;
    cuff.scale.set(1, 1, 0.88);
    rig.legs[side].knee.add(cuff);
    rig.legs[side].knee.add(mesh(sphere(0.017, 8, 6), MA.goldBright, 0.072, -0.02, 0));
    rig.legs[side].knee.add(mesh(box(0.06, 0.03, 0.075), bootMat, -0.03, -0.245, 0));
  }
  rig.tail[5].add(mesh(torus(0.042, 0.012), MA.gold, 0, -0.1, 0));

  // rapier in the camera-side arm (R: local +z = world +z, facing 0)
  const rapier = buildRapier();
  rapier.position.set(0, -0.21, 0);
  rig.arms.R.elbow.add(rapier);

  return {
    ...rig, name: 'DON GATO', side: 'B', facing: 0,
    sword: rapier, swordArm: 'R', crossMat: MA.cross, plume
  };
}

// ---------- CAT A: SULTAN BIGOTES (BUY side, RIGHT pole; local +x = facing; root yaw = PI -> faces world -x) ----------
// CONVENTION (task t_167a53f3): BUY = GREEN. v18 IDENTITY (user directive): the
// MOSLEM cat is the BUY side. Sultan keeps his silver/white neutrals (turban,
// dishdashah body, belt); every trim piece (turban band, placket, cuffs, hem,
// scimitar grip) pulls the BUY green family via the CAT_B.emerald* aliases in
// palette.js; his eyes go green, his gem an emerald.
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

  // Turban: overlapping bias-cut white wraps, BUY green band, crescent pin.
  const turban = new THREE.Group();
  turban.position.set(0, 0.16, 0);
  turban.rotation.z = 0.08;
  const wrap = mesh(sphere(0.185, 16, 10), MB.white, 0, 0.02, 0);
  wrap.scale.set(1.08, 0.72, 1.02);
  turban.add(wrap);
  // Three broad overlapping cloth courses follow an oblique wrap, merged into
  // one draw. Flattened torus sections read as folded fabric, not doughnuts.
  const wrapGeos = [];
  for (let i=0;i<3;i++) {
    const g = new THREE.TorusGeometry(0.156-i*0.020,0.028,8,36);
    g.rotateX(Math.PI/2); g.scale(1.08,0.55,1);
    g.rotateZ(i%2 ? -0.16 : 0.15); g.rotateX(0.08);
    g.translate(-i*0.008,0.012+i*0.036,0);
    wrapGeos.push(g);
  }
  const crown = new THREE.SphereGeometry(0.104,16,10);
  crown.scale(1.1,0.47,1); crown.translate(-0.026,0.112,0);
  wrapGeos.push(crown);
  turban.add(mesh(joined(wrapGeos),MB.white));
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

  // ---- DISHDASHAH: the long loose robe the Moslem cat wears ----
  // Body over the torso (attached to the spine so it leans with the chest),
  // flared skirt on the hips with an animated hem, starched pleated collar,
  // front placket with buttons, wide sleeves, BUY green embroidered edges.
  const linen = tex('embroidered-robe', () => robeTexture('skirt'));
  const bodyPair = tex('embroidered-placket', () => robeTexture('body'));
  const sleevePair = tex('embroidered-cuffs', () => robeTexture('sleeve'));
  const pleat = tex('pleat', () => pleatTexture({ pleats: 30 }));
  const dishMat = std('#FFFFFF', 'cloth', { side: THREE.DoubleSide, bumpScale: 0.007 }, linen);
  const bodyMat = std('#FFFFFF', 'cloth', { side: THREE.DoubleSide, bumpScale: 0.007 }, bodyPair);
  const sleeveMat = std('#FFFFFF', 'cloth', { side: THREE.DoubleSide, bumpScale: 0.007 }, sleevePair);
  const trimMat = std(CAT_B.emeraldBright, 'cloth', {}, emeraldPair);
  const body = mesh(foldedCylinder(0.188, 0.212, 0.44, 36, 6, 12, 0.008), bodyMat, 0.005, 0.22, 0);
  rig.spine.add(body);
  const collar = mesh(new THREE.CylinderGeometry(0.134, 0.156, 0.1, 20, 1, true), std(CAT_B.clothWhite, 'cloth', { side: THREE.DoubleSide }, pleat), 0.01, 0.455, 0);
  rig.spine.add(collar);
  const collarBand = mesh(torus(0.157, 0.013), trimMat, 0.01, 0.505, 0);
  collarBand.rotation.x = Math.PI / 2;
  rig.spine.add(collarBand);
  // Placket embroidery is mapped onto the cylinder at its true +X face;
  // the old block was buried inside the robe. Three low-profile pearl buttons.
  for (const yy of [0.13, 0.24, 0.35]) {
    rig.spine.add(mesh(sphere(0.014, 8, 6), MB.silver, 0.211, yy, 0));
  }
  const skirt = mesh(foldedCylinder(0.212, 0.315, 0.54, 36, 8, 12, 0.016), dishMat, 0.005, -0.165, 0);
  skirt.name = 'embroidered-folded-dishdashah';
  rig.hips.add(skirt);
  const hem = mesh(torus(0.302, 0.009), trimMat, 0.005, -0.425, 0);
  hem.rotation.x = Math.PI / 2;
  rig.hips.add(hem);
  // belt worn OVER the robe + the crescent moon pin
  const belt = mesh(torus(0.224, 0.022), MB.silver, 0.005, 0.015, 0);
  belt.rotation.x = Math.PI / 2;
  belt.scale.set(1, 1, 0.92);
  rig.hips.add(belt);
  rig.hips.add(mesh(sphere(0.032, 10, 8),
    std('#EAF2FF', 'goldBright', { emissive: '#BFD4FF', emissiveIntensity: 0.35 }), 0.228, 0.02, 0));
  // Wide sleeves (upper arm + forearm) with BUY green embroidered cuffs.
  for (const side of ['L', 'R']) {
    const sleeve = mesh(foldedCylinder(0.082, 0.098, 0.3, 24, 5, 8, 0.006), sleeveMat, 0, -0.14, 0);
    rig.arms[side].shoulder.add(sleeve);
    const cuff = mesh(torus(0.092, 0.014), trimMat, 0, -0.285, 0);
    cuff.rotation.x = Math.PI / 2;
    rig.arms[side].shoulder.add(cuff);
    const fore = mesh(foldedCylinder(0.068, 0.074, 0.17, 24, 4, 8, 0.004), sleeveMat, 0, -0.09, 0);
    rig.arms[side].elbow.add(fore);
  }
  const ribbons = [];
  // silver vambrace on the sword forearm (L is the camera-side arm for the
  // BUY/right-pole side: local -z -> world +z after the yaw-PI flip)
  rig.arms.L.elbow.add(mesh(cyl(0.055, 0.05, 0.11, 10), MB.silver, 0, -0.1, 0));

  // scimitar in the camera-side arm (L: local -z -> world +z after yaw PI)
  const scim = buildScimitar();
  scim.position.set(0, -0.21, 0);
  rig.arms.L.elbow.add(scim);

  return {
    ...rig, name: 'SULTAN BIGOTES', side: 'A', facing: Math.PI,
    sword: scim, swordArm: 'L', ribbons, turban, dish: { skirt, hem }
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

// One shared rest pose per frame instead of a fresh object per cat per frame:
// the old IDLE_POSE() call allocated twice per frame (pure GC churn in a brawl).
const IDLE_TEMPLATE = IDLE_POSE();

const NUM_KEYS = Object.keys(IDLE_TEMPLATE);

// v14: per-move RECOVER lengths (the comic windmill every move ends with).
// One flat 0.16 s made every move stop the same way; a wrist feint and a full
// charging lunge visibly do not cost the same effort.
// v19: scaled with the longer moves so the release stays proportional.
const RECOVER_T = {
  RUSH: 0.32, LUNGE: 0.25, SLASH_UP: 0.23, THRUST: 0.20, SLASH_SPIN: 0.26,
  RIPOSTE: 0.26, FEINT: 0.13, PARRY_HOP: 0.13, PARRY_BEAT: 0.10, TAUNT: 0.19, HIT: 0.16,
  SIT_GUARD: 0.30   // standing up from the seat is a settle, not a windmill
};

export class DuelCat {
  constructor(kind) {
    // v18 IDENTITY (user directive): the MOSLEM cat (Sultan) is side A = BUY,
    // the SPANISH knight (Don Gato) is side B = SELL.
    this.data = kind === 'A' ? buildSultanBigotes() : buildDonGato();
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

    Object.assign(this.target, IDLE_TEMPLATE);
    // v19: one shared tail rake for both cats (the old per-side values pointed
    // one tail behind-down and the other one forward); 1.0 = the alert curve
    this.target.tailCurl = 1.0;

    switch (st.name) {
      case 'RUSH': this._rush(ctx); break;
      case 'LUNGE': this._lunge(ctx); break;
      case 'SLASH_UP': this._slashUp(ctx); break;
      case 'THRUST': this._thrust(ctx); break;
      case 'FEINT': this._feint(ctx); break;
      case 'TAUNT': this._taunt(ctx); break;
      case 'PARRY_HOP': this._parryHop(ctx); break;
      case 'PARRY_BEAT': this._parryBeat(ctx); break;
      case 'SIT_GUARD': this._sitGuard(ctx); break;
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

    // timed states auto-transition to the comic windmill RECOVER (spec 7.2).
    // v14: the windmill length scales with the move - a feint or a parry hop
    // only needs a flick of the wrists, a full charge earns the big windmill.
    if (st.dur > 0 && st.t >= st.dur && st.name !== 'RECOVER' && st.name !== 'FREEZE' && st.name !== 'BLADE_LOCK') {
      this.setState('RECOVER', RECOVER_T[st.name] || 0.16);
    }

    // smooth toward target pose: v5 settles ~2x faster so short moves read.
    // v19: 26 -> 20 with the longer moves, so a limb carries a little weight
    // instead of snapping to each new target (the readability pass needs the
    // arm to travel THROUGH space, not teleport between keyframes).
    const p = this.pose, tg = this.target;
    // v21: 26 instead of 20 - the moves are 1.35x shorter again, so the limbs have
    // to track faster or the pose lags behind the state and smears the swing.
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

    // tail: v19 - held BEHIND and UP (see TAIL_RAKE in buildRig), arcing up with
    // a per-segment curl, whipping sideways with the fight. tailCurl is now a
    // shared 0..1.6 "how raised" factor: 1 = alert, 1.5 = the wrapped guard.
    const sway = Math.sin(this.time * 2.2) * p.tailAmp;
    const curl = p.tailCurl;
    d.tail.forEach((seg, i) => {
      const f = i / (d.tail.length - 1);
      // upward arc: the bend deepens toward the tip, so the tail sweeps up in a
      // curve instead of leaving the rump as a rigid stick
      seg.rotation.z = -(0.055 + f * 0.05) * curl;
      // lateral whip (rotation.x leaves the tail's own plane): a live tail
      seg.rotation.x = sway * (0.4 + f) + Math.sin(this.time * 1.6 + i) * 0.03 - p.lean * 0.25;
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
    if (d.dish) this._dish(d);
    /* v19 robe hitch: the dishdashah skirt hangs to 0.435 below the hips, i.e.
     * PAST the rope once the cat is seated, so the whole sit disappeared inside
     * a bell of cloth (vision review: "his entire lower body is a solid
     * bell-like structure... looks like he's fused with a stand"). A seated man
     * hitches his robe; the hem lifts to just above the rope and the folded
     * legs read again. Eased in and out so standing up is not a pop. */
    if (d.dish) {
      const wantHitch = this.state.name === 'SIT_GUARD' ? 1 : 0;
      this._hitch = lerp(this._hitch === undefined ? 0 : this._hitch, wantHitch, 1 - Math.exp(-6 * dt));
      const h = this._hitch;
      d.dish.skirt.scale.y = 1 - 0.42 * h;
      d.dish.skirt.position.y = -0.165 + 0.105 * h;
      if (d.dish.hem) d.dish.hem.position.y = -0.425 + 0.185 * h;
    }

    // ---- feet stay ON the rope ----
    // A crouch lowers the hips, and the old code lowered the whole root with
    // it, so the paws sank into the hemp (caught by the vision pass). Measure
    // the actual foot height and lift the root back so the paws rest on the
    // rope surface; while airborne (yOff) the correction is only a nudge.
    // v19: SIT_GUARD is solved so this correction lands at ~0 - see _sitGuard.
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
    // v19: the windmill every move ends with used to span 2.6 PI in 0.16-0.30 s
    // (up to 50 rad/s of wrist), which was the single fastest thing on screen.
    // 1.6 PI is still an unmistakable flourish and it is now legible.
    const spin = f * Math.PI * 1.6;
    this.target.shS_x = 0.5 + Math.sin(spin) * 1.1;
    this.target.shO_x = 0.5 - Math.sin(spin) * 1.1;
    this.target.shS_z = -0.3 - Math.cos(spin) * 0.45;
    this.target.shO_z = -0.3 + Math.cos(spin) * 0.45;
    this.target.spineLean = 0.1 - Math.sin(f * Math.PI) * 0.22;
    this.target.tilt = Math.sin(f * Math.PI * 2) * 0.12;
  }

  // charge in: three loud paw stamps (rope gets nudged), then blade first.
  // v14: the charge accelerates (smooth), the skid settles (easeOut).
  // v19: windup -> swing -> HOLD -> settle (see swingPhases).
  _rush(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const reach = s.data.reach || 0.6;
    const { p1, p2, p3 } = swingPhases(s, 0.34, 0.70);
    const drive = (lf) => {
      tg.xOff = this.fw * lf * reach;
      tg.spineLean = 0.3 + lf * 0.5;
      tg.twist = this.fw * 0.18;
      tg.shO_z = -0.2 - lf * 0.7;
      tg.shS_z = 1.5 * lf; tg.shS_x = 1.0 * lf; tg.elS = -0.05;
      tg.headYaw = this.fw * 0.22;
      tg.yOff = Math.sin(lf * Math.PI) * 0.06;
    };
    if (f < p1) {
      const sf = smooth(f / p1);
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
    } else if (f < p2) {
      const lf = smooth((f - p1) / (p2 - p1));
      drive(lf);
      if (lf > 0.55 && !s.data.sp) { s.data.sp = 1; ctx.onLungeHit && ctx.onLungeHit(this); }
    } else if (f < p3) {
      drive(1);                                   // HOLD: the charge at full stretch
    } else {
      const sf = easeOut((f - p3) / (1 - p3));
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
    const { p1, p2, p3 } = swingPhases(s, 0.28, 0.62);
    const extend = (lf) => {
      tg.xOff = this.fw * lf * reach;
      tg.spineLean = 0.25 + lf * 0.55;
      tg.twist = this.fw * 0.2;
      tg.shO_z = -0.2 - lf * 0.75;
      tg.shS_z = 1.6 * lf; tg.shS_x = 1.05 * lf; tg.elS = -0.02;
      tg.headYaw = this.fw * 0.24; tg.headPitch = 0.1 * lf;
      tg.yOff = Math.sin(lf * Math.PI) * 0.05;
      tg.thL = 0.06 + lf * 0.5;
    };
    if (f < p1) { // coil back, blade drawn - the coil loads slowly (anticipation)
      const cf = smooth(f / p1);
      tg.crouch = 0.1 * cf;
      tg.spineLean = -0.12 * cf;
      tg.shS_z = -0.5 - cf * 0.5; tg.elS = -1.0;
      tg.knL = -0.2 - cf * 0.35;
      tg.twist = -this.fw * 0.16 * cf;
    } else if (f < p2) { // explode forward, blade first - fast out of the coil
      const lf = smooth((f - p1) / (p2 - p1));
      extend(lf);
      if (lf > 0.6 && !s.data.sp) { s.data.sp = 1; ctx.onLungeHit && ctx.onLungeHit(this); }
    } else if (f < p3) { // HOLD: the lunge held at full extension, blade out
      extend(1);
    } else { // skid - friction, not a wall
      const sf = easeOut((f - p3) / (1 - p3));
      tg.xOff = this.fw * (reach - sf * 0.12);
      tg.spineLean = 0.8 - sf * 0.5;
      tg.tilt = Math.sin(sf * Math.PI) * 0.16;
      tg.crouch = 0.05;
      tg.shS_z = 1.4 - sf * 0.15;
    }
  }

  _slashUp(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const { p1, p2, p3 } = swingPhases(s, 0.30, 0.72);
    const cut = (sf) => {
      tg.shS_z = -0.75 + sf * 2.5;
      tg.shS_x = -0.5 + sf * 1.2;
      tg.elS = -0.8 + sf * 0.65;
      tg.spineLean = 0.2 - sf * 0.34;
      tg.twist = (-0.5 + sf * 0.9) * this.fw * -1;
      tg.yOff = Math.sin(sf * Math.PI) * 0.14;
      tg.thL = 0.06 + sf * 0.4;
      tg.capeRaise = 0.35 + sf * 0.3;
    };
    if (f < p1) { // cape twirl toward the moon - windup gathers (smooth)
      const cf = smooth(f / p1);
      tg.twist = -0.5 * cf * this.fw * -1;
      tg.shO_z = -0.2 - cf * 1.5; tg.shO_x = 0.45;
      tg.headPitch = -0.35 * cf;
      tg.capeRaise = cf * 0.55;
      tg.crouch = 0.05 * cf;
    } else if (f < p2) { // rising diagonal slash - crack through, settle late
      const sf = smooth((f - p1) / (p2 - p1));
      cut(sf);
      if (sf > 0.6 && !s.data.sl) { s.data.sl = 1; ctx.onSlash && ctx.onSlash(this, 'up'); }
    } else if (f < p3) { // HOLD: the top of the arc - the blade hangs there
      cut(1);
      tg.headPitch = -0.42;
    } else { // follow-through pose - decelerates into the pose
      const ff = easeOut((f - p3) / (1 - p3));
      tg.shS_z = 1.55; tg.elS = -0.18;
      tg.headPitch = -0.42;
      tg.capeRaise = 0.65 + ff * 0.1;
      tg.tilt = -0.1;
    }
  }

  // v14 NEW (Don Gato): the fencing stop-thrust. A short blade-first poke with
  // almost no travel, fast out, fast back: reads as precise point control next
  // to the big sweeping cuts, and chains after a lunge.
  // v19: the point now HOLDS at full extension - the classic stop-thrust beat.
  _thrust(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const { p1, p2, p3 } = swingPhases(s, 0.30, 0.56);
    const poke = (pf) => {
      tg.shS_z = -0.6 + pf * 2.25; tg.shS_x = 0.55 * pf;
      tg.elS = -1.15 + pf * 1.13;
      tg.spineLean = -0.08 + pf * 0.5;
      tg.xOff = this.fw * pf * 0.22;
      tg.headYaw = -this.fw * (0.08 - pf * 0.08);
    };
    if (f < p1) { // guard lifts, weight coils - short, crisp
      const cf = smooth(f / p1);
      tg.crouch = 0.06 * cf;
      tg.spineLean = -0.08 * cf;
      tg.shS_z = -0.4 - cf * 0.2; tg.elS = -1.15;
      tg.headYaw = -this.fw * 0.08;
    } else if (f < p2) { // the point darts out, arm fully extended
      const pf = smooth((f - p1) / (p2 - p1));
      poke(pf);
      if (pf > 0.6 && !s.data.th) { s.data.th = 1; ctx.onThrust && ctx.onThrust(this); }
    } else if (f < p3) { // HOLD: the point parked on the foe
      poke(1);
    } else { // reprise guard - the arm folds straight back
      const rf = easeOut((f - p3) / (1 - p3));
      tg.shS_z = 1.65 - rf * 1.0; tg.elS = -0.02 - rf * 0.6;
      tg.spineLean = 0.42 - rf * 0.3;
      tg.xOff = this.fw * (0.22 - rf * 0.16);
    }
  }

  // v14 NEW (Don Gato): the feint. A convincing half-lunge that aborts early
  // and flows into a guard: it baits the foe's parry (the director chains it)
  // and reads as ring craft rather than another swing.
  _feint(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const { p1, p2, p3 } = swingPhases(s, 0.40, 0.62);
    const bait = (lf) => {
      tg.crouch = 0.05 * lf;
      tg.spineLean = 0.3 * lf;
      tg.shS_z = 0.9 * lf; tg.elS = -0.5 + lf * 0.15;
      tg.xOff = this.fw * lf * 0.18;
      tg.headYaw = this.fw * 0.14 * lf;
    };
    if (f < p1) { // sell the lunge - same shape, ~60% of the travel
      bait(smooth(f / p1));
    } else if (f < p2) { // the half-lunge reaches its lie
      bait(smooth((f - p1) / (p2 - p1)));
    } else if (f < p3) { // HOLD: the blade hangs out there, inviting the answer
      bait(1);
      if (!s.data.fn) { s.data.fn = 1; ctx.onFeint && ctx.onFeint(this); }
    } else { // abort: the body settles back, blade stays high and live
      const ab = easeOut((f - p3) / (1 - p3));
      tg.crouch = 0.05 - ab * 0.02;
      tg.spineLean = 0.3 - ab * 0.18;
      tg.shS_z = 0.9 - ab * 0.35;
      tg.elS = -0.35;
      tg.xOff = this.fw * (0.18 - ab * 0.14);
      tg.headYaw = this.fw * (0.14 - ab * 0.1);
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
    const { p1, p2, p3 } = swingPhases(s, 0.45, 0.72);
    const sweep = (pf) => {
      tg.crouch = 0.11;
      tg.spineLean = 0.4;
      tg.shS_z = 0.45 - pf * 0.5; tg.shS_x = -0.6; tg.elS = -1.15;
      tg.twist = this.fw * (0.28 - pf * 0.35);
      tg.headPitch = 0.12;
      tg.xOff = this.fw * 0.2 * pf;
    };
    if (f < p1) { // two hard sidesteps - steps land on a smooth hop arc
      const sf = f / p1;
      const step = Math.sin(sf * Math.PI * 2);
      tg.xOff = -this.fw * step * 0.4;      // lateral: sideways along the rope
      tg.crouch = 0.04 + Math.abs(step) * 0.07;
      tg.twist = -this.fw * step * 0.22;
      tg.thL = 0.06 + Math.max(0, step) * 0.6;
      tg.thR = 0.06 + Math.max(0, -step) * 0.6;
      tg.yOff = Math.abs(step) * 0.08;
      if (sf > 0.4 && !s.data.sd) { s.data.sd = 1; ctx.onStamp && ctx.onStamp(this); }
    } else if (f < p2) { // low blade sweep across - accelerates through
      sweep(smooth((f - p1) / (p2 - p1)));
    } else if (f < p3) { // HOLD: the swept blade parked wide of the body
      sweep(1);
    } else { // settle at the guard
      const pf = easeOut((f - p3) / (1 - p3));
      tg.crouch = 0.11;
      tg.spineLean = 0.4;
      tg.shS_z = -0.05 - pf * 0.4; tg.shS_x = -0.6 + pf * 0.3; tg.elS = -1.15 + pf * 0.35;
      tg.twist = this.fw * (-0.07 + pf * 0.05);
      tg.xOff = this.fw * 0.2 * (1 - pf * 0.5);
    }
  }

  // v14 NEW (Sultan): the parry beat. A crisp timing beat of the flat against
  // the incoming blade - short, loud, almost stationary: the technician's
  // answer to a feint, which then chains into the riposte.
  _parryBeat(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const { p1, p2, p3 } = swingPhases(s, 0.34, 0.58);
    const beat = (bf) => {
      tg.shS_z = -0.5 + bf * 1.35;
      tg.elS = -0.9 + bf * 0.75;
      tg.shS_x = -0.2 + bf * 0.35;
      tg.crouch = 0.03;
      tg.headYaw = this.fw * 0.06;
    };
    if (f < p1) { // the beat: blade flicks across, body stays home
      const bf = smooth(f / p1);
      beat(bf);
      if (bf > 0.7 && !s.data.bt) { s.data.bt = 1; ctx.onBeat && ctx.onBeat(this); }
    } else if (f < p2) {
      const bf = smooth((f - p1) / (p2 - p1));
      beat(bf);
      if (bf > 0.9 && !s.data.bt2) { s.data.bt2 = 1; ctx.onBeat && ctx.onBeat(this); }
    } else if (f < p3) { // HOLD: the flat pressed hard against the foe's blade
      beat(1);
    } else { // recover the line: blade draws back to guard
      const rf = easeOut((f - p3) / (1 - p3));
      tg.shS_z = 0.85 - rf * 1.3;
      tg.elS = -0.15 - rf * 0.5;
      tg.shS_x = 0.15;
      tg.crouch = 0.03 + rf * 0.02;
    }
  }

  // v18: the seated sword guard (user: "sit down and defend with his sword").
  // A POSTURE, not a strike: the cat drops onto the rope, sword arm raised in a
  // closed high guard, off arm braced, tail up out of the way.
  // v19: he now really SITS - the seat (the underside of the pelvis) is placed
  // on the rope and the legs hang over the front of it, one either side, the way
  // you sit on a rope. The old version only crouched 0.30, which the foot-plant
  // correction then cancelled out (it lifts the root to keep the paws on the rope,
  // measured clamp +0.18), so the pose never actually reached the rope: that is
  // why the user still saw a standing cat. SIT_GUARD now skips the foot
  // correction (see _applyPose) and the crouch below is solved for the pelvis.
  _sitGuard(ctx) {
    const tg = this.target, t = this.time;
    const breathe = Math.sin(t * 1.9) * 0.022;
    const guardUp = Math.sin(t * 2.4) * 0.05;
    const sway = Math.sin(t * 1.3) * 0.02;
    tg.crouch = 0.28 + breathe;                    // seat solved so corr ~= 0
    tg.spineLean = 0.10 + breathe * 0.5;           // upright under the guard
    tg.tilt = sway;                                // a little live weight shift
    tg.headPitch = 0.12;                           // eyes on the foe, chin down
    tg.headYaw = -this.fw * 0.14;
    /* v18.2: the blade points FORWARD at the foe (user: "he is gonna put his
     * sword in front of him. Not behind. Thats not make sense"). The v19b
     * pose (shS_z -0.25, elS -2.55: elbow down + forearm folded tight) aimed
     * the blade BACKWARD (-0.94 in spine space). Measured fix: arm forward,
     * elbow open -> the forearm+blade ride up-forward, paw at chest height, TIP
     * in the air corridor between the cats beside the foe's head.
     * v21 (user: "in defend, make the sword block the other sword"): the guard
     * rides a little higher and further forward so the blade sits ON the
     * incoming line rather than beside it - the BLADE GUARD constraint in
     * scene.js then closes the last few centimetres onto the foe's blade. */
    tg.shS_z = 0.88 + guardUp * 0.3;               // arm swung FORWARD
    tg.shS_x = 0.50;                               // blade plane out of the body
    tg.elS = -1.25 + guardUp;                      // forearm up-forward ~50 deg
    tg.shO_z = -0.70;                              // off arm braced forward
    tg.shO_x = 0.60;
    tg.elO = -1.10;
    // THE SEAT is the leg fold, not a root drop: with the planted-paw pass in
    // _applyPose the root height is DERIVED from where the paws land, so folding
    // the haunch is what actually lowers the body (measured: th 1.25 / kn -2.60
    // puts the paws on the rope and the hips 0.26 above it, against 0.50 standing)
    tg.thL = 1.25; tg.thR = 1.25;                  // thighs forward and down
    tg.knL = -2.60; tg.knR = -2.60;                // shanks folded back under
    tg.footL = 0.30; tg.footR = 0.30;
    tg.capeRaise = 0.45;                           // clear the cape off the seat
    tg.tailCurl = 1.55;                            // wrapped up out of the way
    tg.tailAmp = 0.03;
    tg.earSwivel = 0;
    // a guarded cat still TRACKS the flag with his ears
    if (ctx.flagDart) tg.headYaw += -this.fw * 0.1;
  }

  _slashSpin(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const { p1, p2, p3 } = swingPhases(s, 0.42, 0.80);
    if (f < p1) { // scimitar windmill overhead - starts slow, whips up
      const wf = smooth(f / p1);
      // v19: ONE full revolution, ending congruent with where the cuts begin.
      // The old 2-turn windmill ended 10 rad away from the next phase's angle,
      // so the pose lerp unwound all of it in ~0.2 s: a second, opposite blur.
      tg.shS_z = -0.7 + wf * (2.15 + Math.PI * 2);
      tg.elS = -0.2;
      tg.spineLean = -0.12;
      tg.headPitch = -0.24;
      tg.twist = wf * 0.5 * this.fw;
      tg.yOff = Math.sin(wf * Math.PI) * 0.1;
      if (wf > 0.3 && !s.data.w1) { s.data.w1 = 1; ctx.onWhoosh && ctx.onWhoosh(this); }
    } else if (f < p2) { // two downward cuts - each one eases in and settles
      const cf = (f - p1) / (p2 - p1);
      const chop = Math.abs(Math.sin(cf * Math.PI * 2));
      tg.shS_z = 1.45 - chop * 1.85;
      tg.elS = -0.35;
      tg.spineLean = 0.15 + chop * 0.28;
      tg.crouch = 0.05 + chop * 0.09;
      tg.xOff = this.fw * 0.3 * easeOut(cf);
      if (cf > 0.2 && !s.data.c1) { s.data.c1 = 1; ctx.onSlash && ctx.onSlash(this, 'down'); }
      if (cf > 0.7 && !s.data.c2) { s.data.c2 = 1; ctx.onSlash && ctx.onSlash(this, 'down'); }
    } else if (f < p3) { // HOLD: the blade driven down and parked at the bottom
      tg.shS_z = -0.4; tg.elS = -0.35;
      tg.spineLean = 0.43;
      tg.crouch = 0.14;
      tg.headPitch = 0.18;
      tg.xOff = this.fw * 0.3;
      if (!s.data.c3) { s.data.c3 = 1; ctx.onSlash && ctx.onSlash(this, 'down'); }
    } else { // draw the blade back up to the guard
      const rf = easeOut((f - p3) / (1 - p3));
      tg.shS_z = -0.4 + rf * 0.1;
      tg.elS = -0.35 - rf * 0.4;
      tg.spineLean = 0.43 - rf * 0.3;
      tg.crouch = 0.14 - rf * 0.1;
      tg.xOff = this.fw * 0.3 * (1 - rf * 0.5);
    }
  }

  _riposte(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const { p1, p2, p3 } = swingPhases(s, 0.44, 0.74);
    const crescent = (cf) => {
      tg.shS_z = -1.5 + cf * 2.7;
      tg.shS_x = -1.0 + cf * 0.7;
      tg.elS = -0.25;
      tg.twist = this.fw * (0.35 - cf * 0.6);
      tg.xOff = this.fw * 0.35 * cf;
    };
    if (f < 0.18) { // duck under the thrust - the drop quickens into the dip
      const df = smooth(f / 0.18);
      tg.crouch = 0.24 * df;
      tg.spineLean = 0.55 * df;
      tg.headPitch = 0.24;
      tg.knL = -0.2 - df * 0.5; tg.knR = -0.2 - df * 0.5;
    } else if (f < 0.36) { // whirl behind the foe - spins up fast, lands soft
      const wf = (f - 0.18) / 0.18;
      tg.twist = Math.sin(smooth(wf) * Math.PI) * 1.9 * this.fw;
      tg.crouch = 0.14;
      tg.shS_z = -1.3;
      tg.xOff = -this.fw * Math.sin(wf * Math.PI) * 0.3;
    } else if (f < p2) { // crescent slash arc - drawn through with intent
      const cf = smooth((f - 0.36) / (p2 - 0.36));
      crescent(cf);
      if (cf > 0.55 && !s.data.cr) { s.data.cr = 1; ctx.onSlash && ctx.onSlash(this, 'crescent'); }
    } else if (f < p3) { // HOLD: the crescent parked across the foe's line
      crescent(1);
    } else { // counter-thrust - settles into the extension
      const pf = easeOut((f - p3) / (1 - p3));
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

  // short reel: head snaps back, off arm flails, feet skid - the quick hit read.
  // v14: an impact is an impulse - fastest at f=0 (easeOut), then it decays.
  _hit(ctx) {
    const f = this.moveFrac, tg = this.target, s = this.state;
    const dir = s.data.dir || -this.fw; // world-x the body is thrown toward
    const mag = s.data.mag || 1;
    if (f < 0.4) {
      const hf = easeOut(f / 0.4);
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
      // v14: the shove lands hard then friction takes over (easeOut), not a
      // constant-speed slide across the rope
      const sf = easeOut(Math.min(f / 0.62, 1));
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

  // dishdashah hem sway: the robe swings from the waist, most at the hem
  _dish(d) {
    const geo = d.dish.skirt.geometry;
    const pos = geo.attributes.position;
    if (!d.dish.base) {
      d.dish.base = Float32Array.from(pos.array);
      pos.setUsage(THREE.DynamicDrawUsage);   // rewritten every frame
    }
    const base = d.dish.base;
    const t = this.time;
    for (let i = 0; i < pos.count; i++) {
      const bx = base[i * 3], by = base[i * 3 + 1], bz = base[i * 3 + 2];
      const depth = clamp((0.11 - by) / 0.54, 0, 1);
      const w = (Math.sin(t * 2.4 + depth * 2.6) * 0.022 + Math.sin(t * 3.9) * 0.008
        - this.pose.lean * 0.05) * depth * depth;
      const k = 1 + w * 2.6;
      pos.setX(i, bx * k);
      pos.setZ(i, bz * k + w * 0.4);
    }
    pos.needsUpdate = true;
  }

  // cape vertex sway + flourish (rebuilt from base each frame: never compound)
  _cape() {
    const cape = this.data.cape;
    const pos = cape.geometry.attributes.position;
    if (!this._capeBase) {
      this._capeBase = Float32Array.from(pos.array);
      pos.setUsage(THREE.DynamicDrawUsage);   // rewritten every frame
    }
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

  /* Forward-most point of the head: the muzzle tip (the nose sphere sits at
   * local x 0.27, radius 0.028, head pivot at spine-local x 0.10). This is the
   * point that actually collides when two oversized heads meet, so the contact
   * constraint in scene.js measures THIS rather than the body centres. */
  headTipWorld(out = new V3()) {
    return this.data.head.localToWorld(out.set(0.30, -0.04, 0));
  }

  headCentreWorld(out = new V3()) {
    return this.data.head.localToWorld(out.set(0, 0, 0));
  }
}
