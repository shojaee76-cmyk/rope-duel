// The Fight Director: signature moves, cooldowns, priority, clash/lock beats,
// pair locomotion with ring-out tease (spec 7.1-7.5 and 1.3/1.4).
//
// v5 ("make the cats fight more, faster and better" pass) - the old director
// only reacted to tape events (|P| > 0.6 spikes, 0.5% 5s reversals, 15m highs),
// which on a real tape happens a handful of times a minute, and its drift moved
// BOTH cats by the same delta, so the 2.8-unit gap never closed and the two
// never actually touched. Measured baseline: 14 attacks/min, 1 clash per 30 s,
// cats idle 81% of the time, mean gap 2.63.
//
// Now:
//   - PAIR LOCOMOTION: the two cats close on each other (and back off) on a
//     cycle of circle -> engage -> break, around a midpoint that drifts with the
//     1-minute trend. The gap is a real, driven quantity.
//   - TEMPO: a beat clock guarantees a move at least every TEMPO seconds (0.45 s
//     in the brawl, 1.1 s while circling), so the fight never stalls.
//   - ENGAGEMENT: attacks that land on a foe who is attacking/parrying become a
//     BLADE LOCK (crossed blades, sparks, shoving) that breaks into a CLASH with
//     a winner and a loser being driven back. Landing on a passive foe is a HIT.
//   - The tape still drives it: pressure spikes, momentum flips and 15m
//     extremes pick who attacks and when.
import * as THREE from '../vendor/three.module.js';
import { DIM } from './palette.js';

const clamp = THREE.MathUtils.clamp;
const V3 = THREE.Vector3;

// move table: len = seconds, cool = per-move cooldown, reach = how far the cat
// travels (scaled down to the live gap so nobody steps through anyone).
// v14 adds real technique: THRUST (the point leads), FEINT (bait the parry),
// PARRY_BEAT (the timing counter), and faster cooldowns on the short moves so
// the combinations stay legal.
// v19 READABILITY PASS (user: "the fighting cats sword movement is too fast and
// not recognizable"). The v14/v18 moves were 0.40-0.62 s long with the swing
// arc packed into ~40% of that, so a cut crossed its whole arc in ~0.15 s: six
// frames at 60 fps, which reads as a blur rather than a sword. A fencer's
// tempo is roughly a 0.9-1.1 s phrase. Every move is now ~1.7x longer AND the
// peak of the swing HOLDS for a beat before the settle, so the blade is legible
// at the one moment it matters (cats.js carries the matching phase split).
// Cooldowns, the beat clock and the side breather scale with them so the fight
// stays a continuous exchange instead of a slower version of the same blur.
// v21 TEMPO (user: "also the movement are too low now. Make it faster").
// The v19 readability pass stretched every move ~1.7x and hung a HOLD at the top
// of each arc, which fixed the blur but overshot: the fight now reads as slow
// motion. Every length is scaled to 1/1.35 of v19 and every cooldown to 1/1.3,
// with the holds trimmed proportionally, so a phrase is back to ~0.5-1.0 s while
// the swing still ends in a legible stop (cats.js keeps the split). The v19 note
// below is kept as the record of why the moves are not as short as v18's either.
const MOVES = {
  RUSH:       { cat: 'A', len: 0.78, cool: 2.6, prio: 1 }, // Charge of the Golden Bull
  LUNGE:      { cat: 'A', len: 0.67, cool: 2.3, prio: 1 },
  THRUST:     { cat: 'A', len: 0.53, cool: 1.85, prio: 1 }, // v14: the stop-thrust
  FEINT:      { cat: 'A', len: 0.63, cool: 2.6, prio: 2 }, // v14: the bait
  SLASH_UP:   { cat: 'A', len: 0.74, cool: 2.8, prio: 1 }, // Matador Moonrise
  TAUNT:      { cat: 'A', len: 0.96, cool: 4.2, prio: 2 }, // Cross of the Conquistador
  PARRY_HOP:  { cat: 'B', len: 0.56, cool: 2.0, prio: 1 }, // Zellij Sidestep
  PARRY_BEAT: { cat: 'B', len: 0.52, cool: 1.7, prio: 1 }, // v14: the beat
  SLASH_SPIN: { cat: 'B', len: 0.81, cool: 2.6, prio: 1 }, // Moorish Windmill
  RIPOSTE:    { cat: 'B', len: 0.78, cool: 2.5, prio: 2 }, // Crescent Riposte
  // v18: the seated guard - a POSTURE, not a strike. Long duration; the
  // director renews it while the tape stays against this cat.
  SIT_GUARD:  { cat: 'A', len: 4.6,  cool: 0,   prio: 0 }
};
// v19: how long the blade HOLDS at the peak of each swing (seconds, inside the
// move). This is the single change that makes a cut readable: without it the
// sword was mid-arc for every frame of the animation. v21 trims the holds with
// the moves so the hold stays ~15-20% of the move instead of eating it.
const HOLD = {
  RUSH: 0.12, LUNGE: 0.13, THRUST: 0.13, FEINT: 0.10, SLASH_UP: 0.16,
  SLASH_SPIN: 0.14, RIPOSTE: 0.15, PARRY_HOP: 0.09, PARRY_BEAT: 0.09, TAUNT: 0.09
};

const OFFENSIVE = new Set(['RUSH', 'LUNGE', 'THRUST', 'SLASH_UP', 'SLASH_SPIN', 'RIPOSTE', 'TAUNT']);
const DEFENSIVE = new Set(['PARRY_HOP', 'PARRY_BEAT', 'RIPOSTE', 'RECOVER']);
// v18 ROLE POOLS (user: "if the pressure is sell, make the sell cat attack and
// the buy cat sit down and defend with his sword"): the pressure side attacks,
// the other side defends. Both cats know every MOVE; the pools are what assign
// behaviour, and they are now chosen by PRESSURE SIGN, not by side.
const ATTACK_POOL = ['LUNGE', 'THRUST', 'THRUST', 'SLASH_UP', 'FEINT'];
const GUARD_POOL = ['PARRY_BEAT', 'PARRY_HOP'];
// v19: the pair must be this close for the defender to be PINNED into his seat
// (a cat 3 units away is not being pressed, he is just far away)
const GUARD_GAP = 2.7;


// v14 technique grammar: the reply MATCHES the technique instead of a coin
// flip. v18 ROLE RULE: the reply is now always DEFENSIVE - the pressure side
// attacks, the other side answers with parries and beats. (The old table let
// the defender counter-lunge, which broke the role rule.) Both entries name
// the same move for either side because both cats know every move.
const REACTION = {
  RUSH:       { B: 'PARRY_HOP',  A: 'PARRY_HOP' },  // charge  -> give ground
  LUNGE:      { B: 'PARRY_HOP',  A: 'PARRY_BEAT' }, // lunge   -> hop / beat it wide
  THRUST:     { B: 'PARRY_BEAT', A: 'PARRY_BEAT' }, // point   -> beat it aside
  SLASH_UP:   { B: 'PARRY_BEAT', A: 'PARRY_HOP' },  // big cut -> beat / slide
  FEINT:      { B: 'PARRY_BEAT', A: 'PARRY_HOP' },  // the bait is beaten
  SLASH_SPIN: { A: 'PARRY_BEAT', B: 'PARRY_HOP' },  // windmill -> stop it wide
  RIPOSTE:    { A: 'PARRY_BEAT', B: 'PARRY_HOP' },
  TAUNT:      { A: 'PARRY_BEAT', B: 'PARRY_HOP' }
};

// v14 combos: a move can CHAIN into its follow-up the moment its window opens.
// The follow-up skips the side breather (one action), lands inside the same
// phrase, and never loops (chainDepth). This is what turns isolated swings
// into phrases: lunge -> thrust -> cut, or beat -> riposte.
const COMBO = {
  LUNGE:      { next: 'THRUST',   win: 0.30 },   // blade lands -> the point finishes it
  THRUST:     { next: 'SLASH_UP', win: 0.26 },   // reprise -> the big cut
  FEINT:      { next: 'THRUST',   win: 0.22 },   // the bait pays off
  PARRY_BEAT: { next: 'RIPOSTE',  win: 0.34 },   // the beat earns the riposte
  PARRY_HOP:  { next: 'RIPOSTE',  win: 0.24 }    // the hop opens the counter
};

export class FightDirector {
  constructor({ rope, cats, flag, vfx, arena }) {
    this.rope = rope;
    this.cats = cats; // { A, B }
    this.flag = flag;
    this.vfx = vfx;
    this.arena = arena;

    // data inputs
    this.pressure = 0;
    this.price = 0;
    this.priceHistory = []; // { t, px } for 1-min trend and 15m high/low
    this.high15m = -Infinity;
    this.low15m = Infinity;

    // triggers state
    this.prevP = 0;
    this.cools = {};       // move name -> time ready again
    this.sideCool = { A: 0, B: 0 };
    this.lowPTime = 0;     // sustained |P|<0.06 timer
    this.freezeUntil = 0;
    this.frozen = false;
    this.frozenPose = null;
    this.stumbling = false;
    this.active = {};      // catSide -> move
    this.now = 0;
    this.onClash = null;
    this._events = [];
    this._lastMover = 'B';

    // ---- v5 fight tempo ----
    this.phase = 'circle';         // circle | engage | break
    this.phaseT = 0;
    this.phaseDur = 1.4;
    this.gap = Math.abs(cats.A.x - cats.B.x);
    this.gapTarget = 2.0;
    this.mid = (cats.A.x + cats.B.x) / 2;
    this.circlePhase = 0;
    this.lastMoveAt = 0;
    this.stats = { moves: 0, clashes: 0, locks: 0, hits: 0 };
    this.busyUntil = 0;            // no new move while a lock/clash beat plays
    this.lockCool = 0;             // minimum spacing between blade locks
    this._beats = [];              // timed callbacks (slow-mo safe, no setTimeout)
    this.engage = 0;               // 0..1 how committed the brawl is right now

    // ---- v13 steadiness --------------------------------------------------------
    // Measured before this: attack intervals with a coefficient of variation of
    // 1.16 (an sd larger than the mean), 2-second windows swinging between 0 and 6
    // attacks, and locks arriving in runs of four followed by twenty seconds of
    // nothing. Every one of those came from re-drawing a random number where a beat
    // belonged, plus acting on the raw pressure, which is noisy at 4 Hz.
    this.pS = 0;                   // smoothed pressure used for DECISIONS (tau 1.2s)
    this.lastLockAt = -99;         // when the last blade lock started (lock cadence)
    this._lastUsed = {};           // move name -> when it was last used (rotation)
    this._lastWinner = null;       // locks alternate when the tape is flat
    this._slotAt = undefined;      // next attack slot on the beat clock
    this._lastAnswerAt = -9;       // when the last counter-attack/answer fired
    this.intensity = 0;            // 0..1 smoothed brawl intensity (camera + crowd)
    this.log = [];                 // recent starts: { t, side, move, reason }
    this.reasons = {};             // reason -> count (which source drives the fight)
    // ---- v14 technique -------------------------------------------------------
    // smooth() = 3t^2-2t^3. The pair's gap used to close at constant speed and
    // stop dead when it arrived; an exponential approach with a rate cap stops
    // softly instead. The hunt (lateral weave) used to switch off with the
    // phase, which was a visible sideways snap every engage.
    this.hunt = 0;                 // low-passed lateral weave offset
    // ---- v19 PRICE LANE ------------------------------------------------------
    // (user: "the cats movement to the left and right must be connect to the
    // price of btc"). The pair's position ALONG the rope used to drift with the
    // 1-minute trend at 0.5 units/s behind a hard clamp, which is a private
    // random walk: nothing on screen said why they moved. Now the pair slides on
    // a lane whose position IS the tape: +1 = the duel has drifted to the BUY
    // pole, -1 = to the SELL pole, and the input is the 30 s price change scaled
    // so a 0.35% move is a full deflection (0.7 s low-pass, so the slide reads as
    // a movement and not as a jump). lane() is published for the HUD scale.
    this.lane = 0;                 // smoothed -1..+1 lane position
    this.laneRaw = 0;              // the raw price-derived target
    this.laneWin = 30;             // seconds: the price window the lane reads
    this.laneFull = 0.0035;        // fraction of price = full lane deflection
    this.laneHalf = 3.2;           // world units of travel at full deflection
    this.lanePeak = 0;             // last 5 s peak |lane| (diagnostics)
    this._lanePeakAt = 0;
  }
  _foe(side) { return side === 'A' ? 'B' : 'A'; }

  // the lane as the HUD needs it: position (-1..1) + the window change in %
  laneState() {
    let p0 = null;
    for (let i = this.priceHistory.length - 1; i >= 0; i--) {
      if (this.now - this.priceHistory[i].t >= this.laneWin) { p0 = this.priceHistory[i].px; break; }
    }
    const pct = (p0 && this.price > 0) ? ((this.price - p0) / p0) * 100 : 0;
    return { lane: +this.lane.toFixed(3), raw: +this.laneRaw.toFixed(3), pct: +pct.toFixed(3) };
  }


  // ---------- public API (called by the data module) ----------
  // smoothed brawl intensity (0..1) that the scene's camera and crowd follow
  brawlIntensity() { return this.intensity; }

  setPressure(P) {
    this.pressure = clamp(P, -1, 1);
    this._events.push({ type: 'pressure', P: this.pressure });
  }

  setPrice(px) {
    const t = this.now;
    this.price = px;
    this.priceHistory.push({ t, px });
    while (this.priceHistory.length && t - this.priceHistory[0].t > 60) this.priceHistory.shift();
    const win = this.priceHistory.filter((h) => t - h.t <= 900);
    if (win.length) {
      let hi = -Infinity, lo = Infinity;
      for (const h of win) { if (h.px > hi) hi = h.px; if (h.px < lo) lo = h.px; }
      if (px > this.high15m) { this.high15m = px; this._events.push({ type: 'newHigh' }); }
      if (px < this.low15m) { this.low15m = px; this._events.push({ type: 'newLow' }); }
      if (hi !== this._lastHi || lo !== this._lastLo) {
        if (px >= hi && this._lastHi !== undefined && hi > this._lastHi) this._events.push({ type: 'newHigh15' });
        if (px <= lo && this._lastLo !== undefined && lo < this._lastLo) this._events.push({ type: 'newLow15' });
        this._lastHi = hi; this._lastLo = lo;
      }
    }
  }

  // 1-minute trend M: sign + magnitude in [-1,1] scaled by 0.5% move
  trendM() {
    const h = this.priceHistory;
    if (h.length < 2) return 0;
    const oldest = h.find((x) => this.now - x.t <= 60);
    if (!oldest || oldest.px === this.price) return 0;
    const chg = (this.price - oldest.px) / oldest.px;
    return clamp(chg / 0.005, -1, 1);
  }

  _after(t, fn) { this._beats.push({ t: this.now + t, fn }); }

  // ---------- main update ----------
  update(dt) {
    this.now += dt;
    this._lastDt = dt;
    const A = this.cats.A, B = this.cats.B;

    // the live tape is noisy and every decision below used to read the raw value,
    // so aggression flickered frame to frame. Decisions read a 1.2 s exponential
    // average now; the raw pressure still drives the HUD meter, untouched.
    this.pS += (this.pressure - this.pS) * Math.min(1, dt / 1.2);

    // one continuous brawl intensity for the camera and the crowd, replacing the
    // binary "is either cat locked" flag the scene used to chase
    const W = { BLADE_LOCK: 1, CLASH: 0.85, HIT: 0.7, LUNGE: 0.62, RUSH: 0.62, THRUST: 0.55,
      RIPOSTE: 0.55, STUMBLE: 0.5, FEINT: 0.3, PARRY_BEAT: 0.35, TAUNT: 0.32,
      RECOVER: 0.24, PARRY_HOP: 0.18, SIT_GUARD: 0.15, IDLE: 0.08, FREEZE: 0.05 };
    const want = Math.max(W[A.state.name] === undefined ? 0.12 : W[A.state.name],
                          W[B.state.name] === undefined ? 0.12 : W[B.state.name]);
    this.intensity += (want - this.intensity) * Math.min(1, dt / 0.7);

    // beats (lock -> clash -> recover chains) run on the sim clock
    if (this._beats.length) {
      const due = [];
      this._beats = this._beats.filter((b) => (b.t <= this.now ? (due.push(b), false) : true));
      for (const b of due) b.fn();
    }

    // notice finished moves
    for (const side of ['A', 'B']) {
      const cat = this.cats[side];
      const mv = this.active[side];
      if (mv && cat.state.name !== mv) {
        delete this.active[side];
        if (mv === 'RUSH' || mv === 'LUNGE') this.rope.injectImpulse(cat.x, 0, -0.4, 0);
      }
    }

    if (this.frozen && Math.abs(this.pressure) >= 0.1) {
      this.frozen = false;
      for (const side of ['A', 'B']) this.cats[side].setState('IDLE');
      this.lastMoveAt = this.now;
    }

    // ---- pair locomotion (this is what actually makes them fight) ----
    if (!this.frozen) this._pacePair(dt);

    /* ---- v19 PRICE LANE: the pair's place on the rope follows the tape ----
     * The old drift was `mid += sign(1-min trend) * 0.5 * dt` behind a clamp:
     * a private random walk with no visible cause. The lane below is the price:
     * the 30 s change down-scaled so 0.35% is full deflection, low-passed at
     * 0.7 s, mapped onto +-laneHalf world units toward the BUY pole (+) or the
     * SELL pole (-). Rising price pushes the duel toward the BUY banner. */
    let p30 = null;
    for (let i = this.priceHistory.length - 1; i >= 0; i--) {
      if (this.now - this.priceHistory[i].t >= this.laneWin) { p30 = this.priceHistory[i].px; break; }
    }
    if (p30 && this.price > 0) {
      this.laneRaw = clamp(((this.price - p30) / p30) / this.laneFull, -1, 1);
    }
    if (!this.frozen && !this.stumbling) {
      this.lane += (this.laneRaw - this.lane) * Math.min(1, dt / 0.7);
      this.circlePhase += dt;
      if (Math.abs(this.lane) >= this.lanePeak) { this.lanePeak = Math.abs(this.lane); this._lanePeakAt = this.now; }
    }
    if (!this.frozen) {
      const laneMid = this.lane * this.laneHalf;
      const lim = DIM.spanHalf - DIM.poleClearance - 1.2;
      this.mid = clamp(laneMid, -lim, lim);
    }

    if (!this.frozen && !this.stumbling) this._checkTriggers();
    /* v19: the SEATED GUARD runs BEFORE the beat clock. In v18 the clock ran
     * first and its fallback branch handed the defender a parry hop every slot
     * he could not attack in, so the seat could almost never be reached: the
     * defender was permanently "between parries". The posture is now chosen
     * first, and the parries are what interrupt it. */
    if (!this.frozen && !this.stumbling) this._maintainGuard();
    if (!this.frozen && !this.stumbling && this.now > this.busyUntil) this._tempoTick();
    this._events.length = 0;
  }

  // ---- v18 THE SEATED GUARD (user: "the buy cat to sit down and defend with
  // his sword") ----
  // When the tape leans against a cat and he is not mid-move, he drops into
  // SIT_GUARD: crouched seat on the rope, sword held up in a closed guard.
  // v19 (user: "the defending cat still does not sit and defend with his
  // sword. i want that"): the posture is now entered EARLIER (|pS| >= 0.07,
  // was 0.10), it is RENEWED just before it lapses so the seat is continuous
  // instead of a 4.6 s posture followed by a stand-up gap, and it is released
  // deliberately (tape flipped, tape went flat, or the pair broke apart) rather
  // than being left to time out. A seated cat is still interrupted by his own
  // parries - his sword stays up, so a beat or a hop lifts him out of the seat
  // and the director re-seats him after it.
  _maintainGuard() {
    const P = this.pS;
    const defSide = P >= 0 ? 'B' : 'A';          // the side the tape leans ON
    const cat = this.cats[defSide];
    const st = cat.state.name;
    const committed = Math.abs(P) >= 0.07;
    const held = st === 'SIT_GUARD';
    if (held) {
      // release conditions: role flip, tape gone flat, or the pair separated
      if (!committed || this.gap > GUARD_GAP) {
        cat.setState('RECOVER', 0.2);
        return;
      }
      // renew before the posture lapses (SIT_GUARD t is reset; the pose target
      // is unchanged, so the seat never visually pops up between renewals)
      if (cat.state.dur > 0 && cat.state.t > cat.state.dur - 0.6) {
        cat.setState('SIT_GUARD', MOVES.SIT_GUARD.len, { dir: this._fw(defSide) });
      }
      return;
    }
    if (!committed) return;
    if (this.gap > GUARD_GAP) return;             // too far apart to be pinned
    if (!this._canMove(defSide, 'SIT_GUARD')) return;
    this._start(defSide, 'SIT_GUARD', { dir: this._fw(defSide) }, 'guard');
  }

  // circle -> engage -> break, with the gap as a driven quantity
  _pacePair(dt) {
    const A = this.cats.A, B = this.cats.B;
    this.phaseT += dt;
    if (this.phaseT >= this.phaseDur) {
      this.phaseT = 0;
      // The phase rhythm used to be redrawn from wide random ranges on every
      // transition (circle 0.7-1.6 s, engage 0.9-2.1 s, break 0.35-0.85 s), so the
      // fight had no pulse to follow. It now runs on one bar whose length only
      // breathes with the smoothed tape temperature (1.55-1.9 s), split into fixed
      // shares with +/-8% jitter: close in for 26% of the bar, break 13%, circle 61%.
      // the targets themselves are also closer together than they were (1.45/2.25/
      // 1.95): a wide swing in the pair's distance read as the two of them surging
      // at each other and backing off, which is half of what "flakey" looked like
      const bar = 1.9 - Math.abs(this.pS) * 0.35;
      const jit = 0.92 + Math.random() * 0.16;
      if (this.phase === 'circle') {
        this.phase = 'engage';
        this.phaseDur = bar * 0.26 * jit;
        this.gapTarget = 1.60 + Math.random() * 0.08;
      } else if (this.phase === 'engage') {
        this.phase = 'break';
        this.phaseDur = bar * 0.13 * jit;
        this.gapTarget = 2.24 + Math.random() * 0.10;
      } else {
        this.phase = 'circle';
        this.phaseDur = bar * 0.61 * jit;
        this.gapTarget = 2.06 + Math.random() * 0.10;
      }
    }
    this.engage = this.phase === 'engage' ? 1 : 0;
    const sep = Math.abs(A.x - B.x);
    const target = this.gapTarget;
    // v14: the gap used to close at a CONSTANT rate and then stop dead, which
    // read as a marching step each phase. An exponential approach (a fraction
    // of the remaining distance per step, capped so a surprise phase change
    // cannot teleport anyone) glides in and settles onto the target.
    const closeRate = 3.2, backRate = 2.2;        // 1/s approach rates
    const rate = target < sep ? closeRate : backRate;
    const remain = target - sep;
    const step = Math.sign(remain) *
      Math.min(Math.abs(remain) * Math.min(1, rate * dt), rate * dt);
    // move both cats symmetrically around the midpoint; while circling add a
    // subtle lateral hunt so they look like they are working for an angle.
    // v14: the hunt is low-passed and fades by distance instead of switching
    // off with the phase - no sideways snap when the phase flips.
    const huntWant = this.phase === 'circle' ? Math.sin(this.circlePhase * 1.7) * 0.10 : 0;
    this.hunt += (huntWant - this.hunt) * Math.min(1, dt * 2.4);
    const huntEff = this.hunt * clamp((sep - 1.3) / 0.9, 0, 1);  // fade when close
    let ax = this.mid + step / 2 + huntEff;
    let bx = this.mid - step / 2 - huntEff * 0.6;
    // keep cat A on the +x side (its facing), B on the -x side
    if (ax < bx) { const t = ax; ax = bx; bx = t; }
    const lim = DIM.spanHalf - DIM.poleClearance - 0.4;
    if (Math.abs(ax) > lim) { A.wobble = 0.6; }
    A.x = clamp(ax, -lim, lim);
    B.x = clamp(bx, -lim, lim);
    this.gap = Math.abs(A.x - B.x);
    // separation sanity: the cats' heads are oversized and reach ~0.30 past the
    // head pivot, so the pair must be kept further apart than the bodies alone
    // would need or the skulls intersect (see DIM.minBodyGap/ minHeadGap and the
    // hard contact constraint in scene.js, which enforces the rendered result).
    const minSep = 1.05;
    if (this.gap < minSep) {
      const push = (minSep - this.gap) / 2;
      const dir = A.x > B.x ? 1 : -1;
      A.x += dir * push; B.x -= dir * push;
      this.gap = Math.abs(A.x - B.x);
    }
  }

  // the beat clock: if nothing has happened for TEMPO seconds, somebody attacks
  _tempoTick() {
    // The attack clock has a PHASE, not a queue. Before this it asked "has it been
    // long enough since the last move?" and retried every frame, so attacks blocked
    // by a blade lock piled up and then fired together the moment the lock ended:
    // that is where the 0-and-6-per-two-seconds bursts came from (attribution run:
    // tempo starts with a coefficient of variation of 0.68). Now each slot is
    // scheduled when the previous one comes due, and a slot the fighters cannot use
    // is skipped rather than saved up.
    // v19: the beat stretches with the moves. At ~1.0 s per phrase a 0.56 s clock
    // would start a new move inside the previous one (every call refused, the
    // fight would stall), so the engage slot breathes at ~1.05 s and the circling
    // slot at ~1.55 s. The attack DENSITY therefore settles at a watchable
    // 60-75 moves/min instead of the old blur of 128.
    // v21: the cloc/tempo and the breathers come down with the moves (engage
    // 1.05 -> 0.78, circling 1.55 -> 1.15), so the attack density rises with the
    // shorter phrases instead of leaving dead air between them.
    const tempo = this.phase === 'engage' ? 0.78 : 1.15;
    if (this._slotAt === undefined) this._slotAt = this.now + 0.25;
    if (this.now < this._slotAt) return;
    this._slotAt = this.now + tempo * (0.9 + Math.random() * 0.2);
    // ---- v18/v19 ROLE ASSIGNMENT (user: "if the pressure is sell, make the sell
    // cat attack and the buy cat sit down and defend with his sword") ----
    // pressure > 0 = BUY side attacks, SELL side defends; pressure < 0 = the
    // reverse. Dead tape (|pS| < 0.05) = neither committed: both circle, only
    // light probes (LUNGE/FEINT) are allowed, no heavy slashes.
    const P = this.pS;
    const dead = Math.abs(P) < 0.05;
    const atkSide = P >= 0 ? 'A' : 'B';          // A = BUY, B = SELL
    const defSide = atkSide === 'A' ? 'B' : 'A';
    let pool = dead ? ['LUNGE', 'FEINT'] : ATTACK_POOL;
    // 1. the ATTACKER moves first
    for (const mv of this._ordered(pool)) {
      if (this._canMove(atkSide, mv)) { this._start(atkSide, mv, { dir: this._fw(atkSide) }, 'tempo'); return; }
    }
    /* 2. the DEFENDER. v19: he does NOT get a free parry hop here any more. In
     * v18 this branch handed the defender a PARRY_HOP every time the attacker
     * could not act, which consumed his side-breather and kept him standing
     * out of the seat (measured: the seat only ever appeared in a third of
     * samples, and never in a row). He now either holds the sword guard
     * (the tape is against him) or keeps his feet moving while both are
     * uncommitted on a flat tape. */
    if (!dead) {
      if (this._canMove(defSide, 'SIT_GUARD') && this.gap <= GUARD_GAP) {
        this._start(defSide, 'SIT_GUARD', { dir: this._fw(defSide) }, 'guard');
        return;
      }
    } else {
      for (const mv of ['PARRY_HOP', 'PARRY_BEAT']) {
        if (this._canMove(defSide, mv)) { this._start(defSide, mv, { dir: this._fw(defSide) }, 'tempo'); return; }
      }
    }
  }

  // least-recently-used order: a shuffle could open with the same move twice
  // running (measured: four locks back to back, then a long drought). Oldest first,
  // plus a small draw so the sequence stays alive instead of perfectly periodic.
  _ordered(pool) {
    const j = {};
    for (const m of pool) j[m] = Math.random() * 0.5;
    return pool.slice().sort((a, b) => {
      const la = (this._lastUsed[a] === undefined ? -20 : this._lastUsed[a]) + j[a];
      const lb = (this._lastUsed[b] === undefined ? -20 : this._lastUsed[b]) + j[b];
      return la - lb;
    });
  }

  _fw(side) { return side === 'A' ? -1 : 1; }   // world-x toward the opponent

  _checkTriggers() {
    const P = this.pressure;
    const events = this._events;

    // ---- priority 4: STUMBLE_PAIR (|5s price change| > 0.18%) ----
    const h5 = this.priceHistory;
    let p5 = null;
    for (let i = h5.length - 1; i >= 0; i--) { if (this.now - h5[i].t >= 5) { p5 = h5[i].px; break; } }
    if (p5 && !this.stumbling && this.now > this.busyUntil) {
      if (Math.abs(this.price - p5) / p5 > 0.0018 && !this._stumbleCool) {
        this._startPair('STUMBLE');
        this._stumbleCool = this.now + 6;
        return;
      }
    }
    if (this._stumbleCool && this.now > this._stumbleCool) this._stumbleCool = 0;

    // ---- FREEZE: |P| < 0.06 sustained 8s (dead tape) ----
    if (Math.abs(P) < 0.06) {
      this.lowPTime += this._lastDt || 0;
      if (this.lowPTime > 8 && !this.frozen) {
        this.frozen = true;
        for (const side of ['A', 'B']) {
          this.cats[side].setState('FREEZE', 0, { until: () => !this.frozen });
        }
        return;
      }
    } else {
      this.lowPTime = 0;
    }

    // ---- momentum flips (priority 2): the tape turns -> the lead cat taunts ----
    const M = this.trendM();
    if (this._prevM !== undefined && M !== 0 && this._prevM !== 0 && Math.sign(M) !== Math.sign(this._prevM)) {
      if (M > 0 && this._canMove('A', 'TAUNT')) { this._start('A', 'TAUNT', { dir: this._fw('A') }, 'momentum'); return; }
      if (M < 0 && this._canMove('B', 'RIPOSTE')) { this._start('B', 'RIPOSTE', { dir: this._fw('B') }, 'momentum'); return; }
    }
    this._prevM = M;

    // ---- pressure spikes (priority 1) ----
    let sawSpike = false;
    for (const ev of events) {
      if (ev.type === 'pressure') {
        if (this.prevP <= 0.35 && ev.P > 0.35 && this._canMove('A', 'RUSH')) {
          this._start('A', 'RUSH', { dir: this._fw('A') }, 'spike'); sawSpike = true; break;
        }
        if (this.prevP >= -0.35 && ev.P < -0.35 && this._canMove('B', 'PARRY_HOP')) {
          this._start('B', 'PARRY_HOP', { dir: this._fw('B') }, 'spike'); sawSpike = true; break;
        }
        this.prevP = ev.P;
      }
    }
    if (!sawSpike) this.prevP = P;
    for (const ev of events) {
      if (ev.type === 'newHigh15' && this._canMove('A', 'SLASH_UP')) { this._start('A', 'SLASH_UP', { dir: this._fw('A') }, 'extreme'); return; }
      if (ev.type === 'newLow15' && this._canMove('B', 'SLASH_SPIN')) { this._start('B', 'SLASH_SPIN', { dir: this._fw('B') }, 'extreme'); return; }
    }
  }

  _canMove(side, move) {
    const now = this.now;
    // v18: a SEATED guard can still be interrupted by his own parries - the
    // sword stays up while seated, so an incoming attack he can answer must
    // lift him out of the posture (the director re-seats him afterwards).
    if (this.active[side] &&
        !(this.active[side] === 'SIT_GUARD' && (move === 'PARRY_HOP' || move === 'PARRY_BEAT'))) return false;
    if ((this.cools[move] || 0) > now) return false;
    if (this.sideCool[side] > now) return false;
    if (now < this.busyUntil) return false;
    const st = this.cats[side].state;
    if (st.name === 'BLADE_LOCK' || st.name === 'CLASH' || st.name === 'STUMBLE' || st.name === 'FREEZE' || st.name === 'HIT') return false;
    if (st.name === 'RECOVER' && st.t < 0.12) return false;
    return true;
  }

  _start(side, move, data = {}, reason = 'tempo', opts = {}) {
    const spec = MOVES[move];
    // v14 guard: beat callbacks can race the state they raced to schedule (a
    // lock or a stumble landed in between). If the move name is unknown or the
    // fighter can no longer act, refuse instead of crashing on spec.cool.
    if (!spec || !this.cats[side] || !this._canMove(side, move)) {
      if (!spec) {  // unknown move name: record it, never crash
        (this._badMoves = this._badMoves || []).push({ t: +this.now.toFixed(2), side, move: String(move) });
      }
      return false;
    }
    // v18: the role rule - only the pressure side may START an offensive move.
    // (Defensive moves and the SIT_GUARD posture are open to everyone.) Two
    // sanctioned exceptions: the attacker's own COMBO chains (chain:true is
    // only ever created by _start for the moving side, and the gate below
    // still requires that side to hold the attack role), and the post-lock
    // winner follow-up, which passes reason='winner'.
    if (OFFENSIVE.has(move)) {
      const atkSide = this.pS >= 0 ? 'A' : 'B';
      if (side !== atkSide && reason !== 'winner') return false;
    }
    this.log.push({ t: +this.now.toFixed(2), side, move, reason });
    if (this.log.length > 400) this.log.shift();
    this.reasons[reason] = (this.reasons[reason] || 0) + 1;
    const cat = this.cats[side];
    // travel distance is bounded by the live gap: they close in, never overlap
    if (move === 'RUSH' || move === 'LUNGE') {
      data.reach = clamp(this.gap - 1.15, 0.12, 1.0);
    }
    this._lastUsed[move] = this.now;
    this.cools[move] = this.now + spec.cool;
    // v14: a chained combo move skips its side's breather (it is one action),
    // but the per-move cooldown still applies so a chain cannot machine-gun.
    // v19: the breather stretches with the longer moves (0.55 -> 0.75) so a
    // fighter cannot start a second phrase on top of the first.
    if (!opts.chain) this.sideCool[side] = this.now + 0.55;
    this.active[side] = move;
    this.lastMoveAt = this.now;
    this._lastMover = side;
    this.stats.moves++;
    // v19: hand the peak HOLD to the pose layer - the blade stays at the top of
    // its arc for a beat, which is what makes the swing readable
    cat.setState(move, spec.len, { hold: HOLD[move] || 0, ...data });

    // v14: the combo chain. If this move has a follow-up, check for it just
    // after the move ends (mid-RECOVER, still one phrase): a lunge flows into
    // the thrust, a beat into the riposte. Depth caps the phrase at three
    // moves; a lock, a clash or a cooldown kills it, which is exactly how a
    // real exchange dies.
    const cb = COMBO[move];
    if (cb) {
      const depth = data.chainDepth || 0;
      if (depth < 2) {
        this._after(spec.len + cb.win * 0.55, () => {
          const chance = depth === 0 ? 0.55 : 0.25;
          if (Math.random() > chance) return;
          if (!this._canMove(side, cb.next)) return;
          this.stats.combos = (this.stats.combos || 0) + 1;
          this._start(side, cb.next, { dir: this._fw(side), chainDepth: depth + 1 }, 'combo', { chain: true });
        });
      }
    }
    // the opponent reacts: parry or counter, which is what makes clashes happen.
    // v14: the answer is now MOVE-AWARE instead of a coin flip - a feint baits
    // the parry, a charge is sidestepped, a thrust is beaten. That is what
    // "technical" means here: the reply matches the technique, every time.
    const foe = side === 'A' ? 'B' : 'A';
    if (OFFENSIVE.has(move) && !this.active[foe] && this.now - this._lastAnswerAt > 0.42 && Math.random() < 0.45) {
      // a feint exists to be answered: raise the reply odds so the bait pays
      const chance = move === 'FEINT' ? 0.75 : 0.45;
      if (Math.random() >= chance) return;
      // REACTION[move] is { side: moveName } - index by the REPLYING side
      const table = REACTION[move];
      const def = (table && table[foe]) || (foe === 'B' ? 'PARRY_HOP' : 'LUNGE');
      if (this._canMove(foe, def)) {
        this._start(foe, def, { dir: this._fw(foe) }, 'reaction');
        this._lastAnswerAt = this.now;
      }
    }
  }

  _startPair(move) {
    // Pair stumble: both cats tumble toward center, flag spins
    const dur = move === 'STUMBLE' ? 1.6 : 1.2;
    this.stumbling = true;
    this.active.A = move; this.active.B = move;
    const aDist = clamp(Math.abs(this.cats.A.x) - 2, 0.4, 1.0);
    const bDist = clamp(Math.abs(this.cats.B.x) - 2, 0.4, 1.0);
    this.cats.A.setState(move, dur, { dir: -this._fw('A'), dist: aDist });
    this.cats.B.setState(move, dur, { dir: -this._fw('B'), dist: bDist });
    const mid = (this.cats.A.x + this.cats.B.x) / 2;
    const y = this.rope.yAt(mid);
    this._after(dur * 0.5, () => {
      if (this.vfx) {
        this.vfx.dustBurst({ x: mid, y: Math.max(y - 0.4, 0.4), z: 0.2 });
        this.vfx.furTuft({ x: mid + 0.3, y: y + 0.2, z: 0.1 });
      }
      if (this.flag) this.flag.spin = 1.5;
    });
    this._after(dur + 0.1, () => { this.stumbling = false; this.lastMoveAt = this.now; });
  }

  // ---------- clash / hit resolution ----------
  // Called when an attack lands (scene.js onLungeHit / onSlash).
  tryClash(attacker) {
    const side = attacker;                    // attacker's SIDE ('A' | 'B')
    const foeSide = side === 'A' ? 'B' : 'A';
    const foe = this.cats[foeSide];
    if (this.now < this.busyUntil) return false;
    // A lock is a highlight, not the default outcome: on the live tape the old
    // always-lock rule kept the cats welded together for ~43% of all frames.
    if (this.now < this.lockCool) return false;
    const defMove = foe.state.name;
    // v18: a seated guard still counts as a guard - the sword is up, so a
    // locked exchange is legal against the posture
    const canParry = DEFENSIVE.has(defMove) || defMove === 'SIT_GUARD' || OFFENSIVE.has(defMove);
    const near = this.gap < 1.75;
    if (!near) return false;
    // The odds are the original ones (they produced a lock every ~6 s, and my first
    // attempt at "steadier" halved the highlights - measured, so it went back), but
    // they now have a cadence guard: a fresh lock cuts the chance and an overdue one
    // raises it, so the draws cannot pile up into runs or vanish into a drought.
    const sinceLock = this.now - this.lastLockAt;
    // v21 BLADE BLOCK (user: "in defend, make the sword block the other sword"):
    // a seated guard is a BLOCK, not a coin flip - his blade is raised across the
    // line, so an attack that arrives while he is seated crosses blades far more
    // often than the default cadence allows. scene.js carries the matching
    // BLADE GUARD constraint, which keeps the defending blade pointing into the
    // foe's blade (measured segment-to-segment) for the whole posture.
    const base = defMove === 'SIT_GUARD' ? 0.85 : canParry ? 0.6 : 0.18;
    const guard = sinceLock < 4 ? 0.35 : sinceLock > 9 ? 1.25 : 1;
    if (Math.random() > Math.min(0.92, base * guard)) return false;
    // winner = current pressure favours that side; on a flat tape the locks simply
    // alternate instead of being drawn at random
    const winner = this.pS > 0.02 ? 'A'
      : this.pS < -0.02 ? 'B'
        : (this._lastWinner === 'A' ? 'B' : 'A');
    this._beginLock(winner);
    return true;
  }

  // crossed blades -> shove -> break: the signature duelling beat
  _beginLock(winner) {
    const loser = winner === 'A' ? 'B' : 'A';
    // v19: a blade lock is the most legible beat in the fight, so it gets a
    // little more time on screen (0.5-0.62 s of crossed blades) and a longer
    // breather after it before anyone may start the next phrase
    const lockDur = 0.42 + Math.random() * 0.10;
    this.lastLockAt = this.now;
    this._lastWinner = winner;
    this.busyUntil = this.now + lockDur + 0.55;

    this.active.A = 'BLADE_LOCK'; this.active.B = 'BLADE_LOCK';
    this.cats.A.setState('BLADE_LOCK', lockDur, { winner: winner === 'A' });
    this.cats.B.setState('BLADE_LOCK', lockDur, { winner: winner === 'B' });
    this.stats.locks++;
    this.lastMoveAt = this.now;

    this._after(lockDur, () => {
      // the lock breaks: the loser is driven back, the winner presses in
      const dir = winner === 'A' ? -1 : 1;    // world-x the loser is pushed
      this.cats[loser].setState('CLASH', 0.5, { dir, loser: true });
      this.cats[winner].setState('CLASH', 0.5, { dir, loser: false });
      this.active.A = 'CLASH'; this.active.B = 'CLASH';
      this.stats.clashes++;
      this.sideCool.A = this.sideCool.B = this.now + 0.4;
      if (this.onClash) this.onClash({ winner, loser });
    });
    this._after(lockDur + 0.5, () => {
      this.cats.A.setState('RECOVER', 0.2);
      this.cats.B.setState('RECOVER', 0.2);
      delete this.active.A; delete this.active.B;
      this.lastMoveAt = this.now;
      this.lockCool = this.now + 3.0;
      // always break apart after a lock: charge -> clash -> disengage -> circle
      this.phase = 'break';
      this.phaseT = 0;
      this.phaseDur = 0.5 + Math.random() * 0.5;
      this.gapTarget = 2.1 + Math.random() * 0.7;
      // follow-up: the winner gets an immediate extra attack (momentum).
      // v18: the follow-up comes from the ATTACK pool regardless of side - the
      // winner of the exchange pressed the advantage, the loser does not get
      // a free counter, the REACTION table (always defensive now) still owns
      // the answer.
      this._after(0.05, () => {
        const pool = ['LUNGE', 'THRUST', 'SLASH_UP', 'SLASH_SPIN', 'RIPOSTE'];
        const mv = pool[Math.floor(Math.random() * pool.length)];
        if (this._canMove(winner, mv)) this._start(winner, mv, { dir: this._fw(winner) }, 'winner');
      });
    });
  }

  // an attack landed on a passive foe: quick reel + knockback
  resolveHit(attacker, dir) {
    const side = attacker;
    const foeSide = side === 'A' ? 'B' : 'A';
    const foe = this.cats[foeSide];
    if (this.now < this.busyUntil) return;
    if (foe.state.name === 'STUMBLE' || foe.state.name === 'BLADE_LOCK' || foe.state.name === 'CLASH') return;
    const mag = 0.7 + Math.abs(this.pressure) * 0.8;
    foe.setState('HIT', 0.3, { dir, mag });
    this.active[foeSide] = 'HIT';
    this.stats.hits++;
    this.busyUntil = this.now + 0.12;
  }

  pairCentre() { return (this.cats.A.x + this.cats.B.x) / 2; }
}
