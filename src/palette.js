// THE ROPE DUEL — canonical palette.
// FINANCIAL CONVENTION (user directive, task t_167a53f3): BUY = GREEN, SELL = RED.
// The token names keep their original semantic slots so every consumer keeps
// working — only the hex values that carry the side identity changed:
//   Cat A = DON GATO  = BUY  side (right pole)  = GREEN cloth family on gold armour
//   Cat B = SULTAN    = SELL side (left pole)   = CRIMSON cloth family on silver
// Gold/silver/steel are armour neutrals; green/red are the team hues.
export const CAT_A = {
  goldPrimary: '#D4A017', goldBright: '#F5C542', goldShadow: '#8C6A1D',
  // cloth family (cape, plume, tabard, doublet): was crimson, now BUY green
  greenMain: '#1B7A4B', greenDeep: '#0E4A2C', leatherBrown: '#5C3A21',
  furWhite: '#F5F0E6', furGinger: '#C96A2B', furPatchShadow: '#A24E1B',
  nosePink: '#E8A0A0', eyeAmber: '#FFB84D', steelBlade: '#C0C6CC',
  // pommel gem: was ruby, now emerald (was Cat B's gem before the flip)
  gemEmerald: '#34D399',
  // legacy aliases so any un-migrated reference still resolves to the SAME hue
  crimsonMain: '#1B7A4B', crimsonDeep: '#0E4A2C', gemRuby: '#34D399'
};

export const CAT_B = {
  // cloth family (robe trim, turban band, cuffs, placket): was emerald, now SELL red
  redMain: '#A31621', redBright: '#C0392B', redDeep: '#7A0C14',
  silverMain: '#C9D1D9', silverBright: '#E8EDF2', silverShadow: '#8F98A3',
  clothWhite: '#F2EFE9', furCharcoal: '#2E2E38', furSilverStripe: '#9AA0AA',
  furBelly: '#B9BFC7', eyeJade: '#FF8A80', noseBlack: '#1A1A22',
  // pommel gem: was emerald, now ruby (was Cat A's gem before the flip)
  gemRuby: '#C22240',
  steelBlade: '#C0C6CC',
  // legacy aliases so any un-migrated reference still resolves to the SAME hue
  emeraldMain: '#A31621', emeraldBright: '#C0392B', emeraldDeep: '#7A0C14', gemEmerald: '#C22240'
};

// Side-level convenience tokens: the canonical BUY/SELL hues for lights, VFX,
// pennants and anything that colours a SIDE rather than a material.
export const SIDE = {
  BUY: '#26A69A',       // buy green (same hue family as the up-tick flag/HUD)
  BUY_BRIGHT: '#35D07F',
  BUY_DEEP: '#0E4A2C',
  SELL: '#EF5350',      // sell red (same hue family as the down-tick flag/HUD)
  SELL_BRIGHT: '#FF8A80',
  SELL_DEEP: '#7A0C14'
};

export const ARENA = {
  skyZenith: '#05060F', skyHorizon: '#0D1030', fog: '#1A1626',
  moonBtc: '#F7931A', moonHalo: '#FFB84D', moonSymbol: '#7A4A08',
  stoneWall: '#B98A5A', stoneShadow: '#6E523A', stonePole: '#8E8E80',
  tileBlue: '#1F5FA8', tileWhite: '#F2EFE9', tileEmerald: '#12755F',
  floorBase: '#D9CDB4', floorGrout: '#6E5A42',
  torchFlame: '#FF9D45', torchGlow: '#FFC97A', iron: '#3A3A40',
  // price-flag fills: kept as the up/down hues (already the convention we want)
  flagUp: '#26A69A', flagDown: '#EF5350',
  ropeHemp: '#A67B4F', ropeFiber: '#8A6238',
  frieze: '#C9B389'
};

export const MATERIALS = {
  gold: { metalness: 0.85, roughness: 0.35 },
  goldBright: { metalness: 0.85, roughness: 0.28 },
  steel: { metalness: 0.9, roughness: 0.25 },
  silver: { metalness: 0.85, roughness: 0.3 },
  cloth: { metalness: 0.0, roughness: 0.9 },
  fur: { metalness: 0.0, roughness: 0.95 }
};

export const DIM = {
  spanHalf: 10, ropeY: 3.2, ropeRadius: 0.065, ropeSegments: 24,
  // v5 rope feel: the duel rope is a TAUT working rope, not a bungee. Less sag,
  // heavy damping (0.985 -> 0.93: energy dies in ~2 swings instead of ringing
  // for seconds) and a much tighter lateral clamp (0.35 -> 0.12) so paw stamps
  // and blade hits nudge it instead of slapping it into a wobble.
  restSagOne: 0.34, restSagTwo: 0.5, damping: 0.93, swayClamp: 0.12,
  impulseScale: 0.16,      // global multiplier on every injected impulse
  ropeSmooth: 20,          // 1/s low-pass on the rendered rope points
  poleClearance: 1.5, catHeight: 1.3,
  // v10 contact limits (RENDERED space, world units). The cats' heads are
  // oversized by design and reach ~0.30 past the head pivot, so the body floor
  // has to be far wider than the torso itself or the skulls intersect:
  // measured at minBodyGap 0.68 the head centres sat 0.02 apart and the nose
  // tips 0.01 apart on 59% of brawl frames.
  minBodyGap: 0.78,        // torso-to-torso floor
  /* Head clearance = 2 x 0.40 world units. Everything on a head (skull r 0.23,
   * muzzle box and nose 0.30 out from the pivot, helmet brim) lies inside 0.33
   * of the pivot, so 0.66 is the true no-interpenetration distance. It is set
   * WIDER on purpose: at 0.66 the muzzle tips cleared each other by 6 px on
   * screen, which still read as "the heads are colliding" in review. At 0.80 the
   * two muzzles keep ~30 px of daylight between them in the closest beat, and the
   * skulls ~56 px, at 1280x800 (measured with tools/screen_gap.mjs). */
  minHeadCentre: 0.80
};
