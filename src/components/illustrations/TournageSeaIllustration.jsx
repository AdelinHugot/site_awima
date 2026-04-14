const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .ts-card { animation: tsCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .ts-b1 { animation: tsBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .ts-b2 { animation: tsBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .ts-b3 { animation: tsBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }

  .ts-play { animation: tsBadge .5s cubic-bezier(.34,1.56,.64,1) .9s both;
              transform-box:fill-box; transform-origin:center; }

  .ts-live { animation: tsLive 1.2s ease-in-out .5s infinite;
             transform-box:fill-box; transform-origin:center; }

  .ts-m1 { animation: tsUp .4s ease 1.2s  both; }
  .ts-m2 { animation: tsUp .4s ease 1.35s both; }
  .ts-m3 { animation: tsUp .4s ease 1.5s  both; }

  .ts-a1 { animation: tsArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .ts-a2 { animation: tsArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .ts-a3 { animation: tsArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .ts-conn { animation: tsConn .6s ease 1.0s both; }
  .ts-pls  { animation: tsPulse 2.4s ease-out .8s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes tsCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes tsBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes tsLive {
    0%,100% { opacity:1; }
    50%     { opacity:.25; }
  }
  @keyframes tsUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes tsArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes tsConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes tsPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function TournageSeaIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Tournage complet SEA"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="ts-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <filter id="ts-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── MAIN CARD ─────────────────────────────────────── */}
      <g className="ts-card">
        <rect x="100" y="18" width="280" height="180" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>

        {/* Clapperboard */}
        {/* Board body */}
        <rect x="155" y="28" width="170" height="110" rx="8"
          fill="rgba(9,22,54,0.85)" stroke="rgba(46,219,180,0.35)" strokeWidth="1.5"/>
        {/* Clapper top */}
        <rect x="155" y="28" width="170" height="24" rx="8"
          fill="rgba(46,219,180,0.2)" stroke="rgba(46,219,180,0.5)" strokeWidth="1"/>
        {/* Stripe lines on clapper */}
        {[0,1,2,3,4,5].map(i => (
          <line key={i}
            x1={165 + i*24} y1="28" x2={155 + i*24} y2="52"
            stroke="rgba(9,22,54,0.7)" strokeWidth="6"/>
        ))}
        {/* Clapper text */}
        <text x="240" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="9" fill={T}>
          SCENE 01 / TAKE 1
        </text>

        {/* Film frame inner */}
        <rect x="163" y="58" width="154" height="72" rx="5"
          fill="rgba(0,0,0,0.4)" stroke="rgba(46,219,180,0.15)" strokeWidth="1"/>

        {/* Film perforations left */}
        {[0,1,2].map(i => (
          <rect key={i} x="166" y={63 + i*22} width="8" height="14" rx="3"
            fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
        ))}
        {/* Film perforations right */}
        {[0,1,2].map(i => (
          <rect key={i} x="306" y={63 + i*22} width="8" height="14" rx="3"
            fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
        ))}

        {/* Play button */}
        <g className="ts-play" filter="url(#ts-glow)">
          <circle cx="240" cy="94" r="20" fill="rgba(46,219,180,0.18)" stroke={T} strokeWidth="1.5"/>
          <polygon points="234,85 234,103 255,94" fill={T}/>
        </g>
        <circle className="ts-pls" cx="240" cy="94" r="20" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1.5"/>

        {/* View count */}
        <text x="240" y="120" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
          2.1M vues · VTR 68%
        </text>

        {/* LIVE indicator */}
        <g className="ts-live">
          <circle cx="120" cy="33" r="5" fill="#FF3B30"/>
          <text x="130" y="37"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8" fill="#FF3B30">LIVE</text>
        </g>

        {/* Camera icon (right side) */}
        <rect x="114" y="148" width="212" height="38" rx="8"
          fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.15)" strokeWidth="1"/>
        <text x="150" y="162"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>Formats :</text>
        {/* Format chips */}
        <rect x="148" y="167" width="38" height="12" rx="6"
          fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
        <text x="167" y="176" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={T}>16:9</text>
        <rect x="192" y="167" width="38" height="12" rx="6"
          fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
        <text x="211" y="176" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={T}>9:16</text>
        <rect x="236" y="167" width="38" height="12" rx="6"
          fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
        <text x="255" y="176" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={T}>1:1</text>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="ts-conn">
        <line x1="74" y1="40"  x2="100" y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="380" y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="162" x2="100" y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="162" x2="380" y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="ts-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(255,0,0,0.12)" stroke="rgba(255,0,0,0.45)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill="#FF3B30">
          YouTube
        </text>
      </g>
      <g className="ts-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(24,119,242,0.15)" stroke="rgba(24,119,242,0.45)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill="#1877F2">
          Meta
        </text>
      </g>
      <g className="ts-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">
          Display
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="ts-m1">
        <g className="ts-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          2.1M
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">VUES</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="ts-m2">
        <g className="ts-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          68%
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">VTR</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="ts-m3">
        <g className="ts-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          3
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">FORMATS</text>
      </g>
    </svg>
  )
}
