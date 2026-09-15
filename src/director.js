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
// travels (scaled down to the live gap so nobody steps through anyone)
const MOVES = {
  RUSH:       { cat: 'A', len: 0.62, cool: 2.6, prio: 1 }, // Charge of the Golden Bull
  LUNGE:      { cat: 'A', len: 0.5,  cool: 2.2, prio: 1 },
  SLASH_UP:   { cat: 'A', len: 0.55, cool: 2.8, prio: 1 }, // Matador Moonrise
  TAUNT:      { cat: 'A', len: 0.8,  cool: 4.5, prio: 2 }, // Cross of the Conquistador
  PARRY_HOP:  { cat: 'B', len: 0.45, cool: 1.9, prio: 1 }, // Zellij Sidestep
  SLASH_SPIN: { cat: 'B', len: 0.6,  cool: 2.4, prio: 1 }, // Moorish Windmill
  RIPOSTE:    { cat: 'B', len: 0.6,  cool: 2.2, prio: 2 }  // Crescent Riposte
};
const OFFENSIVE = new Set(['RUSH', 'LUNGE', 'SLASH_UP', 'SLASH_SPIN', 'RIPOSTE', 'TAUNT']);
const DEFENSIVE = new Set(['PARRY_HOP', 'RIPOSTE', 'RECOVER']);
const A_POOL = ['RUSH', 'SLASH_UP', 'LUNGE', 'LUNGE'];
const B_POOL = ['SLASH_SPIN', 'PARRY_HOP', 'RIPOSTE', 'RIPOSTE'];

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
    this._beats = [];              // timed callbacks (slow-mo safe, no setTimeout)
    this.engage = 0;               // 0..1 how committed the brawl is right now
  }

  // ---------- public API (called by the data module) ----------
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

    // drift toward the winning side (spec 1.3): M = sign of the 1-min trend
    const M = this.trendM();
    if (!this.frozen && !this.stumbling) {
      this.mid = clamp(this.mid + M * 0.5 * dt, -(DIM.spanHalf - DIM.poleClearance - 1.2), DIM.spanHalf - DIM.poleClearance - 1.2);
      this.circlePhase += dt;
    }

    if (!this.frozen && !this.stumbling) this._checkTriggers();
    // tempo clock: never let the duel go quiet
    if (!this.frozen && !this.stumbling && this.now > this.busyUntil) this._tempoTick();
    this._events.length = 0;
  }

  // circle -> engage -> break, with the gap as a driven quantity
  _pacePair(dt) {
    const A = this.cats.A, B = this.cats.B;
    this.phaseT += dt;
    if (this.phaseT >= this.phaseDur) {
      this.phaseT = 0;
      const P = Math.abs(this.pressure);
      // busier tape = longer brawls, shorter circling
      if (this.phase === 'circle') {
        this.phase = 'engage';
        this.phaseDur = 0.9 + Math.random() * 1.2 + P * 0.8;
        this.gapTarget = 1.05 + Math.random() * 0.35;
      } else if (this.phase === 'engage') {
        this.phase = 'break';
        this.phaseDur = 0.35 + Math.random() * 0.5;
        this.gapTarget = 2.0 + Math.random() * 0.7;
      } else {
        this.phase = 'circle';
        this.phaseDur = 0.7 + Math.random() * 0.9;
        this.gapTarget = 1.75 + Math.random() * 0.55;
      }
    }
    this.engage = this.phase === 'engage' ? 1 : 0;
    const sep = Math.abs(A.x - B.x);
    const target = this.gapTarget;
    const rate = (target < sep ? 2.3 : 1.6);      // close fast, back off slower
    const step = Math.sign(target - sep) * Math.min(Math.abs(target - sep), rate * dt);
    // move both cats symmetrically around the midpoint; while circling add a
    // subtle lateral hunt so they look like they are working for an angle
    const hunt = this.phase === 'circle' ? Math.sin(this.circlePhase * 1.7) * 0.10 : 0;
    let ax = this.mid + step / 2 + hunt;
    let bx = this.mid - step / 2 - hunt * 0.6;
    // keep cat A on the +x side (its facing), B on the -x side
    if (ax < bx) { const t = ax; ax = bx; bx = t; }
    const lim = DIM.spanHalf - DIM.poleClearance - 0.4;
    if (Math.abs(ax) > lim) { A.wobble = 0.6; }
    A.x = clamp(ax, -lim, lim);
    B.x = clamp(bx, -lim, lim);
    this.gap = Math.abs(A.x - B.x);
    // separation sanity: never let the bodies intersect (the cat's head reaches
    // ~0.3 past its centre, so 0.9 keeps a real air gap between the skulls)
    const minSep = 0.95;
    if (this.gap < minSep) {
      const push = (minSep - this.gap) / 2;
      const dir = A.x > B.x ? 1 : -1;
      A.x += dir * push; B.x -= dir * push;
      this.gap = Math.abs(A.x - B.x);
    }
  }

  // the beat clock: if nothing has happened for TEMPO seconds, somebody attacks
  _tempoTick() {
    const tempo = this.phase === 'engage' ? 0.42 : 1.05;
    if (this.now - this.lastMoveAt < tempo) return;
    const P = this.pressure;
    // the side with pressure initiative presses harder
    const wantA = P >= 0 ? Math.random() < (0.5 + Math.min(0.35, Math.abs(P) * 0.5)) : Math.random() < 0.35;
    const first = wantA ? 'A' : 'B';
    const second = wantA ? 'B' : 'A';
    const closeRange = this.gap < 1.5;
    for (const side of [first, second]) {
      const pool = side === 'A' ? A_POOL : B_POOL;
      // in close range prefer the quick strikes, at range prefer charges
      const pick = closeRange
        ? pool.filter((m) => m !== 'TAUNT')
        : pool;
      for (const mv of this._shuffled(pick)) {
        if (this._canMove(side, mv)) { this._start(side, mv, { dir: this._fw(side) }); return; }
      }
    }
    // both busy: try the defensive/repositioning option
    for (const side of ['A', 'B']) {
      for (const mv of side === 'A' ? ['TAUNT'] : ['PARRY_HOP']) {
        if (this._canMove(side, mv)) { this._start(side, mv, { dir: this._fw(side) }); return; }
      }
    }
  }

  _shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
      if (M > 0 && this._canMove('A', 'TAUNT')) { this._start('A', 'TAUNT', { dir: this._fw('A') }); return; }
      if (M < 0 && this._canMove('B', 'RIPOSTE')) { this._start('B', 'RIPOSTE', { dir: this._fw('B') }); return; }
    }
    this._prevM = M;

    // ---- pressure spikes (priority 1) ----
    let sawSpike = false;
    for (const ev of events) {
      if (ev.type === 'pressure') {
        if (this.prevP <= 0.35 && ev.P > 0.35 && this._canMove('A', 'RUSH')) {
          this._start('A', 'RUSH', { dir: this._fw('A') }); sawSpike = true; break;
        }
        if (this.prevP >= -0.35 && ev.P < -0.35 && this._canMove('B', 'PARRY_HOP')) {
          this._start('B', 'PARRY_HOP', { dir: this._fw('B') }); sawSpike = true; break;
        }
        this.prevP = ev.P;
      }
    }
    if (!sawSpike) this.prevP = P;
    for (const ev of events) {
      if (ev.type === 'newHigh15' && this._canMove('A', 'SLASH_UP')) { this._start('A', 'SLASH_UP', { dir: this._fw('A') }); return; }
      if (ev.type === 'newLow15' && this._canMove('B', 'SLASH_SPIN')) { this._start('B', 'SLASH_SPIN', { dir: this._fw('B') }); return; }
    }
  }

  _canMove(side, move) {
    const now = this.now;
    if (this.active[side]) return false;
    if ((this.cools[move] || 0) > now) return false;
    if (this.sideCool[side] > now) return false;
    if (now < this.busyUntil) return false;
    const st = this.cats[side].state;
    if (st.name === 'BLADE_LOCK' || st.name === 'CLASH' || st.name === 'STUMBLE' || st.name === 'FREEZE' || st.name === 'HIT') return false;
    if (st.name === 'RECOVER' && st.t < 0.12) return false;
    return true;
  }

  _start(side, move, data = {}) {
    const spec = MOVES[move];
    const cat = this.cats[side];
    // travel distance is bounded by the live gap: they close in, never overlap
    if (move === 'RUSH' || move === 'LUNGE') {
      data.reach = clamp(this.gap - 0.95, 0.15, 1.0);
    }
    this.cools[move] = this.now + spec.cool;
    this.sideCool[side] = this.now + 0.55;   // short: the other cat answers fast
    this.active[side] = move;
    this.lastMoveAt = this.now;
    this._lastMover = side;
    this.stats.moves++;
    cat.setState(move, spec.len, data);
    // the opponent reacts: parry or counter, which is what makes clashes happen
    const foe = side === 'A' ? 'B' : 'A';
    if (OFFENSIVE.has(move) && !this.active[foe] && Math.random() < 0.72) {
      const def = foe === 'B' ? 'PARRY_HOP' : 'LUNGE';
      if (this._canMove(foe, def)) {
        this._start(foe, def, { dir: this._fw(foe) });
      }
    }
  }

  _startPair(move) {
    // Fountain Fumble: both cats tumble toward center, flag spins, coin pops
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
        const coins = this.arena.userData.coins ? this.arena.userData.coins() : [];
        if (coins && coins[0]) {
          const c = coins[Math.floor(Math.random() * coins.length)];
          this.vfx.coinPop({ x: c.position.x, y: c.position.y + 0.4, z: c.position.z });
        }
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
    const defMove = foe.state.name;
    const canParry = DEFENSIVE.has(defMove) || OFFENSIVE.has(defMove);
    const near = this.gap < 1.75;
    if (!near) return false;
    if (!canParry && Math.random() > 0.25) return false;
    // winner = current pressure favours that side
    const winner = this.pressure > 0.02 ? 'A' : this.pressure < -0.02 ? 'B' : (Math.random() < 0.5 ? 'A' : 'B');
    this._beginLock(winner);
    return true;
  }

  // crossed blades -> shove -> break: the signature duelling beat
  _beginLock(winner) {
    const loser = winner === 'A' ? 'B' : 'A';
    const lockDur = 0.38 + Math.random() * 0.22;
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
      // follow-up: the winner gets an immediate extra attack (momentum)
      this._after(0.05, () => {
        const mv = winner === 'A' ? 'RUSH' : 'SLASH_SPIN';
        if (this._canMove(winner, mv)) this._start(winner, mv, { dir: this._fw(winner) });
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
