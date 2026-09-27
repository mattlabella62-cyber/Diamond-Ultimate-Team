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
  { id:'goat',    emoji:'🐐', color:'#F5C518', label:'GOAT' },
  { id:'clown',   emoji:'🤡', color:'#FF6B9D', label:'Clown Fiesta' },
  { id:'skull',   emoji:'💀', color:'#8899AA', label:'Deadweight' },
  { id:'fire',    emoji:'🔥', color:'#E8433B', label:'On Fire' },
  { id:'snake',   emoji:'🐍', color:'#27C96A', label:'Snake' },
  { id:'shark',   emoji:'🦈', color:'#3B8BF5', label:'Shark' },
  { id:'wolf',    emoji:'🐺', color:'#5A6A82', label:'Lone Wolf' },
  { id:'lion',    emoji:'🦁', color:'#F5A623', label:'King' },
  { id:'eagle',   emoji:'🦅', color:'#C0392B', label:'Eagle Eye' },
  { id:'dragon',  emoji:'🐉', color:'#9B59B6', label:'Dragon' },
  { id:'alien',   emoji:'👽', color:'#2ECC71', label:'Alien' },
  { id:'robot',   emoji:'🤖', color:'#34495E', label:'The Machine' },
  { id:'ninja',   emoji:'🥷', color:'#1A1A2E', label:'Silent Assassin' },
  { id:'wizard',  emoji:'🧙', color:'#6C5CE7', label:'Wizard' },
  { id:'zombie',  emoji:'🧟', color:'#7CB342', label:'Braindead' },
  { id:'ghost',   emoji:'👻', color:'#B0BEC5', label:"Boo'd Up" },
  { id:'devil',   emoji:'😈', color:'#C0392B', label:'Devilish' },
  { id:'angel',   emoji:'😇', color:'#F1C40F', label:'Too Good' },
  { id:'trophy',  emoji:'🏆', color:'#FFD700', label:'Champion' },
  { id:'banana',  emoji:'🍌', color:'#FFE066', label:'Peeled' },
  { id:'poop',    emoji:'💩', color:'#8B5A2B', label:'This Team' },
  { id:'crown',   emoji:'👑', color:'#F5C518', label:'Royalty' },
  { id:'bomb',    emoji:'💣', color:'#2C3E50', label:'Bomb Squad' },
  { id:'gem',     emoji:'💎', color:'#00D9FF', label:'Diamond Hands' },
]

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
