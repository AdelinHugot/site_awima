const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .fl-card { animation: flCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .fl-logo { animation: flPop .5s cubic-bezier(.34,1.56,.64,1) .9s  both;
             transform-box:fill-box; transform-origin:center; }
  .fl-name { animation: flSlide .4s ease 1.0s both; }
  .fl-tel  { animation: flSlide .4s ease 1.15s both; }
  .fl-url  { animation: flSlide .4s ease 1.3s  both; }

  .fl-b1 { animation: flBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .fl-b2 { animation: flBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .fl-b3 { animation: flBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }

  .fl-m1 { animation: flUp .4s ease 1.2s  both; }
  .fl-m2 { animation: flUp .4s ease 1.35s both; }
  .fl-m3 { animation: flUp .4s ease 1.5s  both; }

  .fl-a1 { animation: flArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .fl-a2 { animation: flArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .fl-a3 { animation: flArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .fl-conn { animation: flConn .6s ease 1.0s both; }
  .fl-pls  { animation: flPulse 2.4s ease-out 1.0s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes flCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes flPop {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes flSlide {
    from { opacity:0; transform:translateX(12px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes flBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes flUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes flArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes flConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes flPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function FlocageIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Flocage véhicule"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="fl-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(13,28,80,0.98)"/>
          <stop offset="100%" stopColor="rgba(8,18,55,0.98)"/>
        </linearGradient>
        <linearGradient id="fl-stripe" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.7)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0.3)"/>
        </linearGradient>
        <filter id="fl-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── VAN ILLUSTRATION ──────────────────────────────── */}
      <g className="fl-card">

        {/* Van body */}
        <path d="M60 105 Q60 75 80 75 L370 75 Q410 75 420 105 L420 165 Q420 175 410 175 L70 175 Q60 175 60 165 Z"
          fill="url(#fl-body)" stroke="rgba(46,219,180,0.3)" strokeWidth="1.5"/>

        {/* Cab section (front) */}
        <path d="M340 75 L380 75 Q410 75 420 105 L420 140 L340 140 Z"
          fill="rgba(9,16,48,0.9)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>

        {/* Windshield */}
        <path d="M345 80 L378 80 Q400 80 412 105 L412 135 L345 135 Z"
          fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.25)" strokeWidth="1"/>

        {/* Side windows */}
        <rect x="255" y="82" width="76" height="44" rx="5"
          fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>
        <rect x="168" y="82" width="76" height="44" rx="5"
          fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>

        {/* Door line */}
        <line x1="250" y1="75" x2="250" y2="175"
          stroke="rgba(46,219,180,0.15)" strokeWidth="1" strokeDasharray="2,2"/>

        {/* Teal brand stripe */}
        <path d="M60 140 L340 140 L340 155 L60 155 Z"
          fill="url(#fl-stripe)" opacity="0.8"/>

        {/* Wheels */}
        {/* Front wheel */}
        <circle cx="360" cy="177" r="22" fill="rgba(6,12,36,0.95)" stroke="rgba(122,138,170,0.5)" strokeWidth="2"/>
        <circle cx="360" cy="177" r="14" fill="rgba(13,22,58,0.9)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>
        <circle cx="360" cy="177" r="5"  fill="rgba(46,219,180,0.3)"/>
        {/* Rear wheel */}
        <circle cx="140" cy="177" r="22" fill="rgba(6,12,36,0.95)" stroke="rgba(122,138,170,0.5)" strokeWidth="2"/>
        <circle cx="140" cy="177" r="14" fill="rgba(13,22,58,0.9)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>
        <circle cx="140" cy="177" r="5"  fill="rgba(46,219,180,0.3)"/>

        {/* Headlight */}
        <rect x="413" y="112" width="8" height="18" rx="3"
          fill="rgba(245,244,240,0.4)" stroke="rgba(245,244,240,0.3)" strokeWidth="0.5"/>

        {/* Rear light */}
        <rect x="60" y="112" width="8" height="18" rx="3"
          fill="rgba(255,80,80,0.4)" stroke="rgba(255,80,80,0.3)" strokeWidth="0.5"/>

        {/* ── BRAND GRAPHICS ON VAN SIDE ── */}

        {/* Logo circle */}
        <g className="fl-logo" filter="url(#fl-glow)">
          <circle cx="108" cy="112" r="22"
            fill="rgba(46,219,180,0.12)" stroke={T} strokeWidth="1.5"/>
          <text x="108" y="117" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="13" fill={T}>AW</text>
        </g>
        <circle className="fl-pls" cx="108" cy="112" r="22" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1.5"/>

        {/* Company name */}
        <g className="fl-name">
          <text x="175" y="108" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="11" fill={W}>
            AWIMA Agency
          </text>
        </g>

        {/* Phone */}
        <g className="fl-tel">
          <text x="175" y="122" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="8" fill={MT}>
            +33 1 23 45 67 89
          </text>
        </g>

        {/* URL on stripe */}
        <g className="fl-url">
          <text x="200" y="150" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill="rgba(9,22,54,0.9)">
            www.awima.fr
          </text>
        </g>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="fl-conn">
        <line x1="74" y1="34"  x2="90"  y2="75"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="34" x2="390" y2="75"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="fl-b1">
        <rect x="4" y="22" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="38" y="33" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill={T}>
          Maquette
        </text>
        <text x="38" y="40" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill={T}>
          photo-réaliste
        </text>
      </g>
      <g className="fl-b2">
        <rect x="408" y="22" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="442" y="33" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          Fichier poseur
        </text>
        <text x="442" y="40" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          inclus
        </text>
      </g>
      <g className="fl-b3">
        <rect x="4" y="192" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="205" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5"
          fill="rgba(46,219,180,0.9)">
          3 éléments
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="fl-m1">
        <g className="fl-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          3 éléments
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">BRAND</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="fl-m2">
        <g className="fl-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          Maquette
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">PHOTO-RÉAL.</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="fl-m3">
        <g className="fl-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          PDF + AI
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">LIVRAISON</text>
      </g>
    </svg>
  )
}
