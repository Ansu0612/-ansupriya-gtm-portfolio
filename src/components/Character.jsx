// Pixel-art bust: long black hair, round glasses, calm confident expression.
// Encoded as a grid so the same sprite is reused everywhere (hero, about, journey, etc.)
// . empty  H hair  F face  G glasses frame  L lens  E eye  B shirt  C collar accent
const GRID = [
  '....HHHHHH....',
  '...HHHHHHHH...',
  '..HHHHHHHHHH..',
  '.HHHHHHHHHHHH.',
  '.HHFFFFFFFFHH.',
  'HHFFFFFFFFFFHH',
  'HFFGGGGGGGGFFH',
  'HFFGELLLLEGFFH',
  'HFFGGGGGGGGFFH',
  '.HFFFFFFFFFFH.',
  '..HFFFFFFFFH..',
  '...HFFFFFFH...',
  '....FFFFFF....',
  '...BBBBBBBB...',
  '..BBBBCCBBBB..',
  '.BBBBBBBBBBBB.',
  'BBBBBBBBBBBBBB',
  'BBBBBBBBBBBBBB',
]

const PALETTE = {
  H: '#171423',
  F: '#f2c9a4',
  G: '#f4f1e8',
  L: '#1c2b3a',
  E: '#171423',
  B: '#20233a',
  C: '#ff3d81',
}

const COLS = GRID[0].length
const ROWS = GRID.length

export default function Character({ className = '', glow = 'pink', size = 220 }) {
  const glowColor = { pink: '#ff3d81', blue: '#3ddcff', purple: '#8b5cf6', green: '#4ade80' }[glow] || '#ff3d81'

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${COLS} ${ROWS}`}
      role="img"
      aria-label="Pixel-art avatar of Ansu Priya"
      shapeRendering="crispEdges"
    >
      <defs>
        <filter id="charGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor={glowColor} floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#charGlow)">
        {GRID.map((row, y) =>
          [...row].map((cell, x) => {
            if (cell === '.') return null
            return (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={PALETTE[cell]} />
            )
          })
        )}
      </g>
    </svg>
  )
}
