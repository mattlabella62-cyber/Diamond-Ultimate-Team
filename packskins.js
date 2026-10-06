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
    description: 'Molten red burn with ember stripes.',
    swatch: ['#4a0a0a', '#2b0505', '#ff3b3b'],
  },
  {
    id: 'frostbite',
    name: 'Frostbite',
    priceUsd: 2.99,
    description: 'Arctic teal shimmer, crystalline ice facets.',
    swatch: ['#0a3a30', '#0a2e28', '#7affe0'],
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
    description: 'Pale champagne-gold shimmer with a sparkle finish.',
    swatch: ['#3a3208', '#2a2505', '#e8ff6e'],
  },
  {
    id: 'void',
    name: 'Void',
    priceUsd: 4.99,
    description: 'Black-and-magenta abyss with a cosmic pink glow.',
    swatch: ['#2a0a1a', '#0f050a', '#ff66c4'],
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
    description: 'Pixel-block digital camo with a teal-green HUD glow.',
    swatch: ['#1a2e2e', '#1a1a1a', '#4dffc8'],
  },
  {
    id: 'chrome',
    name: 'Diamond Chrome',
    priceUsd: 5.99,
    description: 'Mirror-polished chrome plating, diamond-cut and blinding.',
    swatch: ['#3a3a3a', '#0d0d0d', '#f5f5f5'],
  },
  {
    id: 'prestige',
    name: 'Obsidian Prestige',
    priceUsd: 7.99,
    description: 'The rarest finish in the case — black steel inlaid with rubies.',
    swatch: ['#1a0a10', '#000000', '#ff4d6d'],
  },

  // ── Original "glowing circuit grid" skin — our own take on a neon
  // digital-grid look, not a copy of any film or game's specific
  // designs, characters, or trade dress.
  {
    id: 'gridrunner',
    name: 'Grid Runner',
    priceUsd: 6.99,
    description: 'A glowing cyan circuit grid etched across black steel.',
    swatch: ['#04141f', '#000000', '#29e0ff'],
  },
]

export function findSkin(id) {
  return PACK_SKINS.find(s => s.id === id) || PACK_SKINS[0]
}
