const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .b10-card { animation: b10CardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .b10-t1  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) .55s both; transform-box:fill-box; transform-origin:center; }
  .b10-t2  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) .65s both; transform-box:fill-box; transform-origin:center; }
  .b10-t3  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) .75s both; transform-box:fill-box; transform-origin:center; }
  .b10-t4  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) .85s both; transform-box:fill-box; transform-origin:center; }
  .b10-t5  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) .95s both; transform-box:fill-box; transform-origin:center; }
  .b10-t6  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) 1.05s both; transform-box:fill-box; transform-origin:center; }
  .b10-t7  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) 1.15s both; transform-box:fill-box; transform-origin:center; }
  .b10-t8  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) 1.25s both; transform-box:fill-box; transform-origin:center; }
  .b10-t9  { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) 1.35s both; transform-box:fill-box; transform-origin:center; }
  .b10-t10 { animation: b10Tile .4s cubic-bezier(.34,1.56,.64,1) 1.45s both; transform-box:fill-box; transform-origin:center; }
  .b10-b1  { animation: b10Badge .45s cubic-bezier(.34,1.56,.64,1) 1.0s both; transform-box:fill-box; transform-origin:center; }
  .b10-b2  { animation: b10Badge .45s cubic-bezier(.34,1.56,.64,1) 1.17s both; transform-box:fill-box; transform-origin:center; }
  .b10-b3  { animation: b10Badge .45s cubic-bezier(.34,1.56,.64,1) 1.34s both; transform-box:fill-box; transform-origin:center; }
  .b10-m1  { animation: b10Up .4s ease 1.1s  both; }
  .b10-m2  { animation: b10Up .4s ease 1.28s both; }
  .b10-m3  { animation: b10Up .4s ease 1.46s both; }
  .b10-a1  { animation: b10Arrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .b10-a2  { animation: b10Arrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .b10-a3  { animation: b10Arrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  .b10-pulse { animation: b10Pulse 2.5s ease-in-out 1s infinite; transform-box:fill-box; transform-origin:center; }
  @keyframes b10CardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes b10Tile {
    from { opacity:0; transform:scale(.2); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes b10Badge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes b10Up {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes b10Arrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes b10Pulse {
    0%,100% { opacity:.5; transform:scale(1); }
    50%     { opacity:.9; transform:scale(1.05); }
  }
`

export default function Bundle10Illustration() {
  // 10 mini template cards in a 5x2 grid
  const cards = [
    { accent: '#2EDBB4', hue: 'rgba(46,219,180,0.18)' },
    { accent: '#5B8DEF', hue: 'rgba(91,141,239,0.18)' },
    { accent: '#2EDBB4', hue: 'rgba(46,219,180,0.12)' },
    { accent: '#9B6BDF', hue: 'rgba(155,107,223,0.18)' },
    { accent: '#2EDBB4', hue: 'rgba(46,219,180,0.15)' },
    { accent: '#5B8DEF', hue: 'rgba(91,141,239,0.12)' },
    { accent: '#2EDBB4', hue: 'rgba(46,219,180,0.18)' },
    { accent: '#EF7E5B', hue: 'rgba(239,126,91,0.15)' },
    { accent: '#2EDBB4', hue: 'rgba(46,219,180,0.12)' },
    { accent: '#9B6BDF', hue: 'rgba(155,107,223,0.15)' },
  ]

  const cols = 5
  const cardW = 60
  const cardH = 72
  const gapX  = 12
  const gapY  = 10
  const startX = 90
  const startY = 68

  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Bundle 10 templates Canva"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="b10-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="b10-card">
        <rect x="50" y="14" width="380" height="196" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="50" y="14" width="380" height="48" rx="14" fill="url(#b10-hdr)"/>
        <rect x="50" y="38" width="380" height="24" fill="url(#b10-hdr)"/>

        {/* Canva logo-ish */}
        <circle cx="72" cy="35" r="10"
          fill="rgba(46,219,180,0.2)" stroke="rgba(46,219,180,0.5)" strokeWidth="1"/>
        <text x="72" y="39" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="10" fill={T}>C</text>

        <text x="90" y="32"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Bundle 10 Templates
        </text>
        <text x="90" y="46"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Instagram · Charte intégrée · Formats multiples
        </text>

        {/* Separator */}
        <line x1="60" y1="58" x2="420" y2="58" stroke={FT} strokeWidth="1"/>

        {/* 10 Mini template cards */}
        {cards.map((c, idx) => {
          const col = idx % cols
          const row = Math.floor(idx / cols)
          const x = startX + col * (cardW + gapX)
          const y = startY + row * (cardH + gapY)
          const cls = `b10-t${idx+1}`
          return (
            <g key={idx} className={cls}>
              {/* Card shadow */}
              <rect x={x+2} y={y+2} width={cardW} height={cardH} rx="6"
                fill="rgba(0,0,0,0.25)"/>
              {/* Card body */}
              <rect x={x} y={y} width={cardW} height={cardH} rx="6"
                fill="rgba(13,28,66,0.95)" stroke={`${c.accent}44`} strokeWidth="0.8"/>
              {/* Header band */}
              <rect x={x} y={y} width={cardW} height={20} rx="6"
                fill={c.hue}/>
              <rect x={x} y={y+14} width={cardW} height={6}
                fill={c.hue}/>
              {/* Accent line */}
              <rect x={x+4} y={y+4} width={cardW-8} height="3" rx="1.5"
                fill={`${c.accent}66`}/>
              {/* Profile circle mockup */}
              <circle cx={x+10} cy={y+12} r="5"
                fill={`${c.accent}33`} stroke={`${c.accent}77`} strokeWidth="0.6"/>
              {/* Text bars */}
              <rect x={x+4} y={y+24} width={cardW-8} height="5" rx="2.5"
                fill="rgba(245,244,240,0.1)"/>
              <rect x={x+4} y={y+32} width={cardW-14} height="4" rx="2"
                fill="rgba(245,244,240,0.07)"/>
              {/* Image placeholder */}
              <rect x={x+4} y={y+40} width={cardW-8} height="20" rx="3"
                fill={c.hue}/>
              {/* Tiny grid in image */}
              <line x1={x+4} y1={y+50} x2={x+cardW-4} y2={y+50}
                stroke={`${c.accent}22`} strokeWidth="0.5"/>
              {/* Card number */}
              <text x={x+cardW-5} y={y+cardH-4} textAnchor="end"
                fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="7" fill={`${c.accent}88`}>
                {idx+1}
              </text>
            </g>
          )
        })}

        {/* Count badge */}
        <g className="b10-pulse">
          <circle cx="428" cy="110" r="20"
            fill="rgba(46,219,180,0.15)" stroke="rgba(46,219,180,0.5)" strokeWidth="1.5"/>
          <text x="428" y="113" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="14" fill={T}>10</text>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="b10-b1">
        <rect x="52" y="222" width="64" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="84" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Canva ✓
        </text>
      </g>
      <g className="b10-b2">
        <rect x="124" y="222" width="108" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="178" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Charte intégrée
        </text>
      </g>
      <g className="b10-b3">
        <rect x="240" y="222" width="88" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="284" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          3 formats
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="50" y1="215" x2="430" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="b10-m1">
        <g className="b10-a1">
          <polygon points="338,219 333,228 343,228" fill={T}/>
        </g>
        <text x="338" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>10</text>
        <text x="338" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">TEMPLATES</text>
      </g>

      <line x1="370" y1="218" x2="370" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="b10-m2">
        <g className="b10-a2">
          <polygon points="395,219 390,228 400,228" fill={T}/>
        </g>
        <text x="395" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>3</text>
        <text x="395" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">FORMATS</text>
      </g>

      <line x1="420" y1="218" x2="420" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="b10-m3">
        <g className="b10-a3">
          <polygon points="440,219 435,228 445,228" fill={T}/>
        </g>
        <text x="440" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>∞</text>
        <text x="440" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">RÉUTILIS.</text>
      </g>
    </svg>
  )
}
