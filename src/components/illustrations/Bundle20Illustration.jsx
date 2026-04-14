const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .b20-card { animation: b20CardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .b20-fan1 { animation: b20Fan1 .55s cubic-bezier(.34,1.56,.64,1) .3s both;
              transform-box:fill-box; transform-origin:50% 100%; }
  .b20-fan2 { animation: b20Fan2 .55s cubic-bezier(.34,1.56,.64,1) .5s both;
              transform-box:fill-box; transform-origin:50% 100%; }
  .b20-fan3 { animation: b20Fan3 .55s cubic-bezier(.34,1.56,.64,1) .7s both;
              transform-box:fill-box; transform-origin:50% 100%; }
  .b20-grid { animation: b20Fade .5s ease .9s both; }
  .b20-b1 { animation: b20Badge .45s cubic-bezier(.34,1.56,.64,1) 1.0s both;
             transform-box:fill-box; transform-origin:center; }
  .b20-b2 { animation: b20Badge .45s cubic-bezier(.34,1.56,.64,1) 1.17s both;
             transform-box:fill-box; transform-origin:center; }
  .b20-b3 { animation: b20Badge .45s cubic-bezier(.34,1.56,.64,1) 1.34s both;
             transform-box:fill-box; transform-origin:center; }
  .b20-m1 { animation: b20Up .4s ease 1.1s  both; }
  .b20-m2 { animation: b20Up .4s ease 1.28s both; }
  .b20-m3 { animation: b20Up .4s ease 1.46s both; }
  .b20-a1 { animation: b20Arrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .b20-a2 { animation: b20Arrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .b20-a3 { animation: b20Arrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  .b20-count { animation: b20CountIn .6s cubic-bezier(.34,1.56,.64,1) 1.5s both;
               transform-box:fill-box; transform-origin:center; }
  .b20-shine { animation: b20Shine 3s ease-in-out 2s infinite; transform-box:fill-box; transform-origin:center; }
  @keyframes b20CardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes b20Fan1 {
    from { opacity:0; transform:rotate(-22deg) scale(.8); }
    to   { opacity:1; transform:rotate(-12deg) scale(1); }
  }
  @keyframes b20Fan2 {
    from { opacity:0; transform:rotate(-6deg) scale(.8); }
    to   { opacity:1; transform:rotate(0deg) scale(1); }
  }
  @keyframes b20Fan3 {
    from { opacity:0; transform:rotate(22deg) scale(.8); }
    to   { opacity:1; transform:rotate(12deg) scale(1); }
  }
  @keyframes b20Fade {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes b20Badge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes b20Up {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes b20Arrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes b20CountIn {
    from { opacity:0; transform:scale(0); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes b20Shine {
    0%,100% { opacity:.6; }
    50%     { opacity:1; }
  }
`

export default function Bundle20Illustration() {
  // Mini grid cards — 4 columns × 5 rows
  const cols = 4
  const rows = 5
  const miniW = 36
  const miniH = 40
  const mgX = 8
  const mgY = 6
  const gx = 278
  const gy = 52

  const miniColors = [
    '#2EDBB4','#5B8DEF','#2EDBB4','#9B6BDF',
    '#EF7E5B','#2EDBB4','#5B8DEF','#2EDBB4',
    '#9B6BDF','#2EDBB4','#EF7E5B','#5B8DEF',
    '#2EDBB4','#9B6BDF','#2EDBB4','#EF7E5B',
    '#5B8DEF','#2EDBB4','#9B6BDF','#2EDBB4',
  ]

  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Bundle 20 templates Canva"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="b20-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="b20-card">
        <rect x="30" y="14" width="420" height="196" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="30" y="14" width="420" height="48" rx="14" fill="url(#b20-hdr)"/>
        <rect x="30" y="38" width="420" height="24" fill="url(#b20-hdr)"/>

        {/* Title */}
        <circle cx="52" cy="35" r="10"
          fill="rgba(46,219,180,0.2)" stroke="rgba(46,219,180,0.5)" strokeWidth="1"/>
        <text x="52" y="39" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="10" fill={T}>C</text>
        <text x="70" y="32"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Bundle 20 Templates
        </text>
        <text x="70" y="46"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Canva Pro · Saisonnier · Charte complète
        </text>

        {/* Separator */}
        <line x1="40" y1="58" x2="440" y2="58" stroke={FT} strokeWidth="1"/>

        {/* ── Fan stack of 3 cards ── */}
        {/* Layer 3 (back, rotated right) */}
        <g className="b20-fan3">
          <rect x="112" y="70" width="140" height="106" rx="10"
            fill="rgba(155,107,223,0.12)" stroke="rgba(155,107,223,0.3)" strokeWidth="1"/>
          <rect x="112" y="70" width="140" height="28" rx="10"
            fill="rgba(155,107,223,0.2)"/>
          <rect x="112" y="86" width="140" height="12" fill="rgba(155,107,223,0.2)"/>
          <rect x="120" y="108" width="60" height="6" rx="3" fill="rgba(245,244,240,0.08)"/>
          <rect x="120" y="118" width="80" height="5" rx="2.5" fill="rgba(245,244,240,0.06)"/>
          <rect x="120" y="127" width="50" height="5" rx="2.5" fill="rgba(245,244,240,0.05)"/>
        </g>
        {/* Layer 2 (middle, slight rotation) */}
        <g className="b20-fan2">
          <rect x="96" y="66" width="140" height="106" rx="10"
            fill="rgba(91,141,239,0.12)" stroke="rgba(91,141,239,0.3)" strokeWidth="1"/>
          <rect x="96" y="66" width="140" height="28" rx="10"
            fill="rgba(91,141,239,0.2)"/>
          <rect x="96" y="82" width="140" height="12" fill="rgba(91,141,239,0.2)"/>
          <rect x="104" y="104" width="55" height="6" rx="3" fill="rgba(245,244,240,0.1)"/>
          <rect x="104" y="114" width="75" height="5" rx="2.5" fill="rgba(245,244,240,0.07)"/>
          <rect x="104" y="123" width="45" height="5" rx="2.5" fill="rgba(245,244,240,0.06)"/>
        </g>
        {/* Layer 1 (front, main card) */}
        <g className="b20-fan1">
          <rect x="80" y="62" width="140" height="106" rx="10"
            fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.35)" strokeWidth="1.2"/>
          <rect x="80" y="62" width="140" height="28" rx="10"
            fill="rgba(46,219,180,0.15)"/>
          <rect x="80" y="78" width="140" height="12" fill="rgba(46,219,180,0.12)"/>
          {/* Format labels */}
          <text x="88" y="76"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>
            Post Carré 1:1
          </text>
          <rect x="88" y="96" width="55" height="6" rx="3" fill="rgba(46,219,180,0.12)"/>
          <rect x="88" y="106" width="80" height="5" rx="2.5" fill="rgba(245,244,240,0.1)"/>
          <rect x="88" y="115" width="60" height="5" rx="2.5" fill="rgba(245,244,240,0.08)"/>
          {/* Image placeholder */}
          <rect x="88" y="125" width="120" height="35" rx="5"
            fill="rgba(46,219,180,0.07)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.7"/>
          <line x1="88" y1="142" x2="208" y2="142" stroke="rgba(46,219,180,0.1)" strokeWidth="0.5"/>
          {/* "Post Carré" badge */}
          <rect x="88" y="153" width="50" height="12" rx="4"
            fill="rgba(46,219,180,0.15)" stroke="rgba(46,219,180,0.35)" strokeWidth="0.7"/>
          <text x="113" y="162" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
            CARRÉ
          </text>
          {/* Story badge */}
          <rect x="146" y="153" width="50" height="12" rx="4"
            fill="rgba(91,141,239,0.15)" stroke="rgba(91,141,239,0.35)" strokeWidth="0.7"/>
          <text x="171" y="162" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill="#5B8DEF">
            STORY
          </text>
        </g>
      </g>

      {/* ── Mini grid preview ── */}
      <g className="b20-grid">
        <rect x={gx-6} y={gy-6} width={cols*(miniW+mgX)-mgX+12} height={rows*(miniH+mgY)-mgY+12} rx="8"
          fill="rgba(0,0,0,0.25)" stroke="rgba(46,219,180,0.15)" strokeWidth="0.7"/>
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => {
            const idx = row * cols + col
            const cx = gx + col * (miniW + mgX)
            const cy = gy + row * (miniH + mgY)
            const color = miniColors[idx] || T
            return (
              <g key={idx}>
                <rect x={cx} y={cy} width={miniW} height={miniH} rx="4"
                  fill="rgba(13,28,66,0.95)" stroke={`${color}33`} strokeWidth="0.7"/>
                <rect x={cx} y={cy} width={miniW} height={12} rx="4"
                  fill={`${color}22`}/>
                <rect x={cx} y={cy+8} width={miniW} height={4} fill={`${color}22`}/>
                <rect x={cx+3} y={cy+15} width={miniW-6} height="4" rx="2" fill="rgba(245,244,240,0.09)"/>
                <rect x={cx+3} y={cy+22} width={miniW-10} height="3" rx="1.5" fill="rgba(245,244,240,0.06)"/>
                <rect x={cx+3} y={cy+28} width={miniW-6} height="8" rx="2" fill={`${color}15`}/>
                <text x={cx+miniW-3} y={cy+miniH-3} textAnchor="end"
                  fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="5.5" fill={`${color}77`}>
                  {idx+1}
                </text>
              </g>
            )
          })
        )}

        {/* "20" count overlay */}
        <g className="b20-count">
          <circle cx={gx + cols*(miniW+mgX)/2 - mgX/2} cy={gy + rows*(miniH+mgY)/2 - mgY/2} r="22"
            fill="rgba(9,22,54,0.88)" stroke={T} strokeWidth="1.5"/>
          <text x={gx + cols*(miniW+mgX)/2 - mgX/2} y={gy + rows*(miniH+mgY)/2 - mgY/2 + 5}
            textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="18" fill={T}>20</text>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="b20-b1">
        <rect x="32" y="222" width="90" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="77" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          20 templates
        </text>
      </g>
      <g className="b20-b2">
        <rect x="130" y="222" width="82" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="171" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Canva Pro
        </text>
      </g>
      <g className="b20-b3">
        <rect x="220" y="222" width="76" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="258" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          Saisonnier
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="30" y1="215" x2="450" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="b20-m1">
        <g className="b20-a1">
          <polygon points="338,219 333,228 343,228" fill={T}/>
        </g>
        <text x="338" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>20</text>
        <text x="338" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">FORMATS</text>
      </g>

      <line x1="368" y1="218" x2="368" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="b20-m2">
        <g className="b20-a2">
          <polygon points="396,219 391,228 401,228" fill={T}/>
        </g>
        <text x="396" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>100%</text>
        <text x="396" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">CHARTE</text>
      </g>

      <line x1="422" y1="218" x2="422" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="b20-m3">
        <g className="b20-a3">
          <polygon points="444,219 439,228 449,228" fill={T}/>
        </g>
        <text x="444" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>½j</text>
        <text x="444" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">ÉCONOMIE</text>
      </g>
    </svg>
  )
}
