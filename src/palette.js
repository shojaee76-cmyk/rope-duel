// THE ROPE DUEL — canonical palette (design_spec_cats_arena.md section 10).
// Do not invent colors: every hex below comes from the spec.
export const CAT_A = {
  goldPrimary: '#D4A017', goldBright: '#F5C542', goldShadow: '#8C6A1D',
  crimsonMain: '#A31621', crimsonDeep: '#7A0C14', leatherBrown: '#5C3A21',
  furWhite: '#F5F0E6', furGinger: '#C96A2B', furPatchShadow: '#A24E1B',
  nosePink: '#E8A0A0', eyeAmber: '#FFB84D', steelBlade: '#C0C6CC', gemRuby: '#C22240'
};

export const CAT_B = {
  emeraldMain: '#0F5D4E', emeraldBright: '#177F63', emeraldDeep: '#093D33',
  silverMain: '#C9D1D9', silverBright: '#E8EDF2', silverShadow: '#8F98A3',
  clothWhite: '#F2EFE9', furCharcoal: '#2E2E38', furSilverStripe: '#9AA0AA',
  furBelly: '#B9BFC7', eyeJade: '#7FD48A', noseBlack: '#1A1A22', gemEmerald: '#34D399',
  steelBlade: '#C0C6CC'
};

export const ARENA = {
  skyZenith: '#05060F', skyHorizon: '#0D1030', fog: '#1A1626',
  moonBtc: '#F7931A', moonHalo: '#FFB84D', moonSymbol: '#7A4A08',
  stoneWall: '#B98A5A', stoneShadow: '#6E523A', stonePole: '#8E8E80',
  tileBlue: '#1F5FA8', tileWhite: '#F2EFE9', tileEmerald: '#12755F',
  floorBase: '#D9CDB4', floorGrout: '#6E5A42',
  torchFlame: '#FF9D45', torchGlow: '#FFC97A', iron: '#3A3A40',
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
  spanHalf: 10, ropeY: 3.2, ropeRadius: 0.105, ropeSegments: 24,
  // v5 rope feel: the duel rope is a TAUT working rope, not a bungee. Less sag,
  // heavy damping (0.985 -> 0.93: energy dies in ~2 swings instead of ringing
  // for seconds) and a much tighter lateral clamp (0.35 -> 0.12) so paw stamps
  // and blade hits nudge it instead of slapping it into a wobble.
  restSagOne: 0.34, restSagTwo: 0.5, damping: 0.93, swayClamp: 0.12,
  impulseScale: 0.16,      // global multiplier on every injected impulse
  ropeSmooth: 20,          // 1/s low-pass on the rendered rope points
  poleClearance: 1.5, catHeight: 1.3
};
