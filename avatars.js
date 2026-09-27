// ============================================================
// avatars.js — shared cosmetic avatar catalog
//
// Single source of truth for the emoji/color avatar set teams can pick
// on cosmetics.html. Every page that shows a team avatar (dashboard,
// standings, matchup, settings, legendary, cosmetics) imports this
// instead of keeping its own copy, so adding/editing an avatar only
// has to happen in one place.
// ============================================================

export const AVATAR_CATALOG = [
  // ── Beasts ──
  { id:'goat',     emoji:'🐐', color:'#F5C518', label:'GOAT',          category:'Beasts' },
  { id:'lion',     emoji:'🦁', color:'#F5A623', label:'King',          category:'Beasts' },
  { id:'wolf',     emoji:'🐺', color:'#5A6A82', label:'Lone Wolf',     category:'Beasts' },
  { id:'shark',    emoji:'🦈', color:'#3B8BF5', label:'Shark',         category:'Beasts' },
  { id:'eagle',    emoji:'🦅', color:'#C0392B', label:'Eagle Eye',     category:'Beasts' },
  { id:'dragon',   emoji:'🐉', color:'#9B59B6', label:'Dragon',        category:'Beasts' },
  { id:'snake',    emoji:'🐍', color:'#27C96A', label:'Snake',         category:'Beasts' },
  { id:'tiger',    emoji:'🐯', color:'#E67E22', label:'Tiger',         category:'Beasts' },
  { id:'scorpion', emoji:'🦂', color:'#D35400', label:'Scorpion',      category:'Beasts' },
  { id:'gorilla',  emoji:'🦍', color:'#6D4C41', label:'Silverback',    category:'Beasts' },
  { id:'rex',      emoji:'🦖', color:'#16A085', label:'Rex',           category:'Beasts' },
  { id:'rhino',    emoji:'🦏', color:'#7F8C8D', label:'Rhino',         category:'Beasts' },

  // ── Villains ──
  { id:'devil',    emoji:'😈', color:'#C0392B', label:'Devilish',      category:'Villains' },
  { id:'clown',    emoji:'🤡', color:'#FF6B9D', label:'Clown Fiesta',  category:'Villains' },
  { id:'skull',    emoji:'💀', color:'#8899AA', label:'Deadweight',    category:'Villains' },
  { id:'oni',      emoji:'👹', color:'#E74C3C', label:'Oni',           category:'Villains' },
  { id:'zombie',   emoji:'🧟', color:'#7CB342', label:'Braindead',     category:'Villains' },
  { id:'ghost',    emoji:'👻', color:'#B0BEC5', label:"Boo'd Up",      category:'Villains' },
  { id:'pumpkin',  emoji:'🎃', color:'#FF7518', label:'Jack-O',        category:'Villains' },
  { id:'spider',   emoji:'🕷️', color:'#555555', label:'Web Slinger',   category:'Villains' },
  { id:'joker',    emoji:'🃏', color:'#E74C3C', label:'Wild Card',     category:'Villains' },

  // ── Legends ──
  { id:'crown',    emoji:'👑', color:'#F5C518', label:'Royalty',       category:'Legends' },
  { id:'trophy',   emoji:'🏆', color:'#FFD700', label:'Champion',      category:'Legends' },
  { id:'gem',      emoji:'💎', color:'#00D9FF', label:'Diamond Hands', category:'Legends' },
  { id:'star',     emoji:'⭐', color:'#F1C40F', label:'Superstar',     category:'Legends' },
  { id:'medal',    emoji:'🥇', color:'#FFD700', label:'Gold Standard', category:'Legends' },
  { id:'shield',   emoji:'🛡️', color:'#3B8BF5', label:'Guardian',      category:'Legends' },
  { id:'swords',   emoji:'⚔️', color:'#95A5A6', label:'Duelist',       category:'Legends' },

  // ── Mystic ──
  { id:'wizard',   emoji:'🧙', color:'#6C5CE7', label:'Wizard',        category:'Mystic' },
  { id:'fairy',    emoji:'🧚', color:'#FF9FF3', label:'Fairy',         category:'Mystic' },
  { id:'ninja',    emoji:'🥷', color:'#1A1A2E', label:'Silent Assassin', category:'Mystic' },
  { id:'robot',    emoji:'🤖', color:'#34495E', label:'The Machine',   category:'Mystic' },
  { id:'alien',    emoji:'👽', color:'#2ECC71', label:'Out of This World', category:'Mystic' },
  { id:'moon',     emoji:'🌙', color:'#B39DDB', label:'Moonlit',       category:'Mystic' },

  // ── Chaos ──
  { id:'fire',     emoji:'🔥', color:'#E8433B', label:'On Fire',       category:'Chaos' },
  { id:'bolt',     emoji:'⚡', color:'#F5C518', label:'Lightning',     category:'Chaos' },
  { id:'bomb',     emoji:'💣', color:'#2C3E50', label:'Bomb Squad',    category:'Chaos' },
  { id:'tornado',  emoji:'🌪️', color:'#7F8C8D', label:'Chaos Agent',   category:'Chaos' },
  { id:'dynamite', emoji:'🧨', color:'#E74C3C', label:'Dynamite',      category:'Chaos' },

  // ── Trash Talk ──
  { id:'poop',     emoji:'💩', color:'#8B5A2B', label:'This Team',     category:'Trash Talk' },
  { id:'banana',   emoji:'🍌', color:'#FFE066', label:'Peeled',        category:'Trash Talk' },
  { id:'toilet',   emoji:'🚽', color:'#90A4AE', label:'Toilet Bowl',   category:'Trash Talk' },
  { id:'chicken',  emoji:'🐔', color:'#F5C518', label:'Chicken',       category:'Trash Talk' },
  { id:'melting',  emoji:'🫠', color:'#FF8A65', label:'Meltdown',      category:'Trash Talk' },
  { id:'trash',    emoji:'🗑️', color:'#607D8B', label:'Trash Can',     category:'Trash Talk' },
]

export const AVATAR_CATEGORIES = [...new Set(AVATAR_CATALOG.map(a => a.category))]

export function findAvatar(id) {
  return AVATAR_CATALOG.find(a => a.id === id) || null
}

// Renders either the chosen emoji avatar (colored ring + background) or
// falls back to the old plain-initials circle when a team hasn't picked
// one yet. sizePx controls both the circle and emoji/initials scale.
export function renderAvatarHTML(avatarId, fallbackInitials, sizePx = 30) {
  const a = findAvatar(avatarId)
  if (a) {
    return `<span style="display:inline-flex;align-items:center;justify-content:center;width:${sizePx}px;height:${sizePx}px;border-radius:50%;background:${a.color}22;border:1px solid ${a.color}66;font-size:${Math.round(sizePx*0.55)}px;flex-shrink:0;line-height:1;">${a.emoji}</span>`
  }
  return `<span style="display:inline-flex;align-items:center;justify-content:center;width:${sizePx}px;height:${sizePx}px;border-radius:50%;background:var(--surface3);color:var(--muted);font-family:var(--font-mono);font-size:${Math.round(sizePx*0.4)}px;font-weight:700;flex-shrink:0;">${fallbackInitials || '?'}</span>`
}
