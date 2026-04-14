const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .gi-card { animation: giCardIn  .65s cubic-bezier(.23,1,.32,1) .1s  both; }

  .gi-b1 { animation: giBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .gi-b2 { animation: giBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .gi-b3 { animation: giBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }
  .gi-b4 { animation: giBadge .45s cubic-bezier(.34,1.56,.64,1) 1.24s both;
            transform-box:fill-box; transform-origin:center; }

  .gi-s1 { animation: giStar .28s ease .72s  both; transform-box:fill-box; transform-origin:center; }
  .gi-s2 { animation: giStar .28s ease .80s  both; transform-box:fill-box; transform-origin:center; }
  .gi-s3 { animation: giStar .28s ease .88s  both; transform-box:fill-box; transform-origin:center; }
  .gi-s4 { animation: giStar .28s ease .96s  both; transform-box:fill-box; transform-origin:center; }
  .gi-s5 { animation: giStar .28s ease 1.04s both; transform-box:fill-box; transform-origin:center; }

  .gi-chk { animation: giCheck .5s cubic-bezier(.34,1.56,.64,1) 1.45s both;
             transform-box:fill-box; transform-origin:center; }

  .gi-pls { animation: giPulse 2.4s ease-out .9s infinite;
             transform-box:fill-box; transform-origin:center; }

  .gi-m1 { animation: giUp .4s ease 1.1s  both; }
  .gi-m2 { animation: giUp .4s ease 1.28s both; }
  .gi-m3 { animation: giUp .4s ease 1.46s both; }

  .gi-a1 { animation: giArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .gi-a2 { animation: giArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .gi-a3 { animation: giArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .gi-conn { animation: giConn .6s ease 1.0s both; }

  @keyframes giCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes giBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes giStar {
    from { opacity:0; transform:scale(0) rotate(-40deg); }
    to   { opacity:1; transform:scale(1) rotate(0deg); }
  }
  @keyframes giCheck {
    from { opacity:0; transform:scale(0); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes giPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
  @keyframes giUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes giArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes giConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
`

export default function GmbIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Audit & Optimisation Google My Business"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="gi-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.07)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <filter id="gi-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ══ GMB CARD ═════════════════════════════════════ */}
      <g className="gi-card">
        {/* Card */}
        <rect x="100" y="26" width="280" height="176" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="100" y="26" width="280" height="70" rx="14" fill="url(#gi-hdr)"/>

        {/* Google G */}
        <circle cx="122" cy="54" r="12" fill="#EA4335"/>
        <text x="122" y="59" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="13" fill="white">G</text>

        {/* Name + category */}
        <text x="141" y="50"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10.5" fill={W}>
          Votre Entreprise
        </text>
        <text x="141" y="62"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Restaurant · Lyon, France
        </text>

        {/* 5 stars */}
        {[0,1,2,3,4].map(i => (
          <text key={i} className={`gi-s${i+1}`}
            x={141 + i * 13} y="77"
            fontFamily="Montserrat,sans-serif" fontSize="12" fill="#FBBC04">★</text>
        ))}
        <text x="212" y="77" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          4.8 · 127 avis
        </text>

        {/* Separator */}
        <line x1="110" y1="88" x2="370" y2="88" stroke={FT} strokeWidth="1"/>

        {/* Map pin */}
        <ellipse cx="118" cy="101" rx="4.2" ry="5" fill="none"
          stroke="rgba(122,138,170,0.55)" strokeWidth="1.1"/>
        <line x1="118" y1="106" x2="118" y2="110"
          stroke="rgba(122,138,170,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
        {/* pulse ring */}
        <circle className="gi-pls" cx="118" cy="101" r="4.5" fill="none"
          stroke="rgba(46,219,180,0.38)" strokeWidth="1"/>

        <text x="129" y="104" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          12 Rue de la Paix, 69001 Lyon
        </text>

        {/* Clock */}
        <circle cx="118" cy="118" r="4.5" fill="none"
          stroke="rgba(46,219,180,0.6)" strokeWidth="1"/>
        <line x1="118" y1="114.5" x2="118" y2="118"
          stroke="rgba(46,219,180,0.6)" strokeWidth="1.1" strokeLinecap="round"/>
        <line x1="118" y1="118" x2="121" y2="120.5"
          stroke="rgba(46,219,180,0.6)" strokeWidth="1.1" strokeLinecap="round"/>
        <text x="129" y="121" fontFamily="Montserrat,sans-serif" fontSize="7.5"
          fill="rgba(46,219,180,0.88)">
          Ouvert · Ferme à 22:00
        </text>

        {/* Separator */}
        <line x1="110" y1="131" x2="370" y2="131" stroke={FT} strokeWidth="1"/>

        {/* Photo thumbnails */}
        {[0,1,2].map(i => {
          const x  = 110 + i * 76
          const op = [0.12, 0.08, 0.05][i]
          const so = [0.25, 0.16, 0.1][i]
          return (
            <g key={i}>
              <rect x={x} y="137" width="68" height="46" rx="7"
                fill={`rgba(46,219,180,${op})`}
                stroke={`rgba(46,219,180,${so})`} strokeWidth="0.8"/>
              <circle cx={x+34} cy="157" r="9"
                fill={`rgba(46,219,180,${op*1.5})`}/>
              <circle cx={x+34} cy="157" r="4"
                fill={`rgba(46,219,180,${so})`}/>
            </g>
          )
        })}
        <text x="344" y="162" fontFamily="Montserrat,sans-serif" fontSize="7.5"
          fill="rgba(46,219,180,0.65)">+23 →</text>
      </g>

      {/* ══ VERIFIED BADGE ════════════════════════════════ */}
      <g className="gi-chk" filter="url(#gi-glow)">
        <circle cx="365" cy="42" r="12" fill="rgba(46,219,180,0.2)"
          stroke={T} strokeWidth="1.5"/>
        <polyline points="360,42 364,47.5 370,37"
          stroke={T} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>

      {/* ══ CONNECTOR LINES ═══════════════════════════════ */}
      <g className="gi-conn">
        <line x1="84" y1="43"  x2="100" y2="54"
          stroke="rgba(46,219,180,0.22)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="396" y1="43"  x2="380" y2="54"
          stroke="rgba(46,219,180,0.22)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="84" y1="159" x2="100" y2="150"
          stroke="rgba(46,219,180,0.16)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="396" y1="159" x2="380" y2="150"
          stroke="rgba(46,219,180,0.16)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}

      {/* + Photos (TL) */}
      <g className="gi-b1">
        <rect x="6" y="32" width="78" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="45" y="47" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          + Photos
        </text>
      </g>

      {/* + Posts (TR) */}
      <g className="gi-b2">
        <rect x="396" y="32" width="78" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="435" y="47" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          + Posts
        </text>
      </g>

      {/* + Q&A (BL) */}
      <g className="gi-b3">
        <rect x="6" y="148" width="78" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="45" y="163" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5"
          fill="rgba(46,219,180,0.9)">
          + Q&amp;A
        </text>
      </g>

      {/* + Catégories (BR) */}
      <g className="gi-b4">
        <rect x="396" y="148" width="78" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="435" y="163" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5"
          fill="rgba(46,219,180,0.9)">
          + Catégories
        </text>
      </g>

      {/* ══ METRICS ═══════════════════════════════════════ */}

      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      {/* Vues */}
      <g className="gi-m1">
        <g className="gi-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          +340%
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">
          VUES
        </text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      {/* Clics */}
      <g className="gi-m2">
        <g className="gi-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          +127%
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">
          CLICS
        </text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      {/* Appels */}
      <g className="gi-m3">
        <g className="gi-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          +89%
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">
          APPELS
        </text>
      </g>
    </svg>
  )
}
