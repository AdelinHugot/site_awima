const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .bp-banner { animation: bpUnroll .8s cubic-bezier(.23,1,.32,1) .2s both;
               transform-box:fill-box; transform-origin:50% 100%; }

  .bp-el1 { animation: bpFade .4s ease 1.0s  both; }
  .bp-el2 { animation: bpFade .4s ease 1.15s both; }
  .bp-el3 { animation: bpFade .4s ease 1.3s  both; }
  .bp-el4 { animation: bpFade .4s ease 1.45s both; }

  .bp-b1 { animation: bpBadge .45s cubic-bezier(.34,1.56,.64,1) .8s  both;
            transform-box:fill-box; transform-origin:center; }
  .bp-b2 { animation: bpBadge .45s cubic-bezier(.34,1.56,.64,1) .95s both;
            transform-box:fill-box; transform-origin:center; }
  .bp-b3 { animation: bpBadge .45s cubic-bezier(.34,1.56,.64,1) 1.1s both;
            transform-box:fill-box; transform-origin:center; }

  .bp-m1 { animation: bpUp .4s ease 1.2s  both; }
  .bp-m2 { animation: bpUp .4s ease 1.35s both; }
  .bp-m3 { animation: bpUp .4s ease 1.5s  both; }

  .bp-a1 { animation: bpArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .bp-a2 { animation: bpArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .bp-a3 { animation: bpArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .bp-conn { animation: bpConn .6s ease 1.0s both; }
  .bp-pls  { animation: bpPulse 2.4s ease-out 1.1s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes bpUnroll {
    from { clip-path: inset(100% 0 0 0); opacity:.6; }
    to   { clip-path: inset(0% 0 0 0);   opacity:1; }
  }
  @keyframes bpFade {
    from { opacity:0; transform:translateY(8px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes bpBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes bpUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes bpArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes bpConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes bpPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function BachePlvIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Bâche et PLV marque"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="bp-top" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor={T} stopOpacity="0.8"/>
          <stop offset="100%" stopColor={T} stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="bp-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(13,28,66,0.98)"/>
          <stop offset="100%" stopColor="rgba(9,20,50,0.98)"/>
        </linearGradient>
        <filter id="bp-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── PULL-UP BANNER STAND ──────────────────────────── */}

      {/* Base plate */}
      <ellipse cx="240" cy="200" rx="42" ry="7"
        fill="rgba(46,219,180,0.15)" stroke="rgba(46,219,180,0.4)" strokeWidth="1.5"/>

      {/* Pole */}
      <rect x="238" y="22" width="4" height="178" rx="2"
        fill="rgba(122,138,170,0.4)"/>

      {/* Banner body with unroll animation */}
      <g className="bp-banner">
        {/* Banner */}
        <rect x="178" y="22" width="124" height="176" rx="4"
          fill="url(#bp-body)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>

        {/* Top color band */}
        <g className="bp-el1">
          <rect x="178" y="22" width="124" height="40" rx="4"
            fill="url(#bp-top)"/>
          <circle cx="240" cy="42" r="14" fill="rgba(13,28,66,0.6)"/>
          <text x="240" y="47" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="11" fill={W}>AW</text>
        </g>

        {/* Headline bars */}
        <g className="bp-el2">
          <rect x="186" y="70" width="108" height="10" rx="3"
            fill="rgba(245,244,240,0.85)"/>
          <rect x="190" y="84" width="80" height="10" rx="3"
            fill="rgba(245,244,240,0.6)"/>
        </g>

        {/* Content lines */}
        <g className="bp-el3">
          <rect x="186" y="102" width="108" height="5" rx="2" fill="rgba(245,244,240,0.2)"/>
          <rect x="186" y="112" width="90"  height="5" rx="2" fill="rgba(245,244,240,0.15)"/>
          <rect x="186" y="122" width="100" height="5" rx="2" fill="rgba(245,244,240,0.15)"/>
          <rect x="186" y="132" width="70"  height="5" rx="2" fill="rgba(245,244,240,0.12)"/>
        </g>

        {/* CTA bar */}
        <g className="bp-el4">
          <rect x="186" y="147" width="108" height="20" rx="10"
            fill="rgba(46,219,180,0.25)" stroke={T} strokeWidth="1.2"/>
          <text x="240" y="161" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8" fill={T}>
            Découvrir →
          </text>
        </g>

        {/* Footer zone */}
        <rect x="178" y="174" width="124" height="24"
          fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.18)" strokeWidth="0.8"/>
        <text x="240" y="183" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT}>awima.fr · +33 1 23 45 67 89</text>
        <text x="240" y="193" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="5" fill={MT}>Salon de la Communication · Juin 2026</text>

        {/* Pulse on logo */}
        <circle className="bp-pls" cx="240" cy="42" r="14" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1.5"/>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="bp-conn">
        <line x1="74" y1="40"  x2="178" y2="65"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="302" y2="65"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="162" x2="178" y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="162" x2="302" y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="bp-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="38" y="41" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          Impression
        </text>
        <text x="38" y="48" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          ready
        </text>
      </g>
      <g className="bp-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>
          Charte intégrée
        </text>
      </g>
      <g className="bp-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">
          85×200 cm
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="bp-m1">
        <g className="bp-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          85×200
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">FORMAT CM</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="bp-m2">
        <g className="bp-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          PDF HD
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">LIVRAISON</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="bp-m3">
        <g className="bp-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          Charte ✓
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">BRAND</text>
      </g>
    </svg>
  )
}
