// ============================================================
// packskins.js — shared pack-skin catalog
//
// Single source of truth for the pack-opening visual themes teams can
// buy with real money on cosmetics.html and equip. pack.html reads the
// equipped skin and applies it via a `data-skin` attribute on <body>,
// which the per-skin CSS in pack.html's <style> block hooks into —
// this file only holds the catalog data (name/price/preview colors),
// not the actual pack-opening CSS itself.
//
// priceUsd here is DISPLAY ONLY. The actual amount charged is decided
// server-side by the create-checkout-session Edge Function's own price
// table, so a tampered client request can never buy a skin for less
// than the real price — if you change a price, update it in BOTH
// places (this file, and SKIN_PRICES in create-checkout-session).
// ============================================================

export const PACK_SKINS = [
  {
    id: 'classic',
    name: 'Classic',
    priceUsd: 0,
    description: 'The original DiamondUT pack. Everyone starts here.',
    swatch: ['#1a0a2e', '#0a1a2e', '#a0e0ff'],
  },
  {
    id: 'inferno',
    name: 'Inferno',
    priceUsd: 2.99,
    description: 'Molten red-orange burn with ember particles.',
    swatch: ['#2e0a0a', '#4a1005', '#ff8c3c'],
  },
  {
    id: 'frostbite',
    name: 'Frostbite',
    priceUsd: 2.99,
    description: 'Icy blue-white shimmer, frozen glass shine.',
    swatch: ['#0a1a2e', '#0a2a3a', '#c0f0ff'],
  },
  {
    id: 'toxic',
    name: 'Toxic',
    priceUsd: 2.99,
    description: 'Radioactive green haze with acid-drip foil.',
    swatch: ['#0a1a0a', '#0a2a10', '#aaff4d'],
  },
  {
    id: 'golden',
    name: 'Golden',
    priceUsd: 4.99,
    description: 'Prestige gold plating — flex on the whole league.',
    swatch: ['#2a1a05', '#3a2408', '#ffd166'],
  },
  {
    id: 'void',
    name: 'Void',
    priceUsd: 4.99,
    description: 'Black-and-violet abyss with a purple glow.',
    swatch: ['#08050f', '#150a2a', '#c080ff'],
  },

  // ── "Gun skin" tier — tactical/military-camo looks, priced like the
  // rare tiers in a shooter's cosmetics shop. Original patterns/names,
  // not copies of any specific game's licensed skins.
  {
    id: 'camo',
    name: 'Woodland Ops',
    priceUsd: 3.99,
    description: 'Tactical woodland camo blotches across matte canvas.',
    swatch: ['#1c2814', '#2b3a1f', '#7a8f4a'],
  },
  {
    id: 'digital',
    name: 'Digital Recon',
    priceUsd: 3.99,
    description: 'Pixel-block digital camo with a cyan HUD glow.',
    swatch: ['#1a1a1a', '#2e2e2e', '#4dd0e1'],
  },
  {
    id: 'chrome',
    name: 'Diamond Chrome',
    priceUsd: 5.99,
    description: 'Mirror-polished chrome plating, diamond-cut and blinding.',
    swatch: ['#0d0d0d', '#bfbfbf', '#00e5ff'],
  },
  {
    id: 'prestige',
    name: 'Obsidian Prestige',
    priceUsd: 7.99,
    description: 'The rarest finish in the case — black steel inlaid with gold.',
    swatch: ['#000000', '#1a1408', '#ffd700'],
  },
]

export function findSkin(id) {
  return PACK_SKINS.find(s => s.id === id) || PACK_SKINS[0]
}
