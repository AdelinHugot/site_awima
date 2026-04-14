const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .af-card { animation: afCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .af-el1 { animation: afSlide .4s ease .7s  both; }
  .af-el2 { animation: afSlide .4s ease .84s both; }
  .af-el3 { animation: afSlide .4s ease .98s both; }
  .af-el4 { animation: afSlide .4s ease 1.12s both; }
  .af-el5 { animation: afSlide .4s ease 1.26s both; }
  .af-deco { animation: afFade .6s ease 1.1s both; }

  .af-b1 { animation: afBadge .45s cubic-bezier(.34,1.56,.64,1) .8s  both;
            transform-box:fill-box; transform-origin:center; }
  .af-b2 { animation: afBadge .45s cubic-bezier(.34,1.56,.64,1) .95s both;
            transform-box:fill-box; transform-origin:center; }
  .af-b3 { animation: afBadge .45s cubic-bezier(.34,1.56,.64,1) 1.1s both;
            transform-box:fill-box; transform-origin:center; }

  .af-m1 { animation: afUp .4s ease 1.2s  both; }
  .af-m2 { animation: afUp .4s ease 1.35s both; }
  .af-m3 { animation: afUp .4s ease 1.5s  both; }

  .af-a1 { animation: afArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .af-a2 { animation: afArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .af-a3 { animation: afArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .af-conn { animation: afConn .6s ease 1.0s both; }
  .af-pls  { animation: afPulse 2.4s ease-out 1.2s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes afCardIn {
    from { opacity:0; transform:scale(.82) translateY(22px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes afSlide {
    from { opacity:0; transform:translateY(-8px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes afFade {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes afBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes afUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes afArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes afConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes afPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function AfficheIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Affiche événement"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="af-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor={T} stopOpacity="0.7"/>
          <stop offset="100%" stopColor={T} stopOpacity="0.15"/>
        </linearGradient>
        <linearGradient id="af-poster" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(13,28,66,0.98)"/>
          <stop offset="100%" stopColor="rgba(9,20,50,0.98)"/>
        </linearGradient>
        <filter id="af-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── POSTER CARD (portrait) ─────────────────────────── */}
      <g className="af-card">
        {/* Shadow */}
        <rect x="192" y="18" width="96" height="168" rx="5"
          fill="rgba(0,0,0,0.3)" transform="translate(4,6)"/>

        {/* Poster body */}
        <rect x="192" y="18" width="96" height="168" rx="5"
          fill="url(#af-poster)" stroke="rgba(245,244,240,0.45)" strokeWidth="1.5"/>

        {/* Header band */}
        <g className="af-el1">
          <rect x="192" y="18" width="96" height="32" rx="5"
            fill="url(#af-hdr)"/>
          <rect x="192" y="38" width="96" height="12"
            fill="url(#af-hdr)"/>
          <text x="240" y="30" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="7" fill={W}
            letterSpacing="2">ÉVÉNEMENT</text>
          <text x="240" y="44" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="5.5" fill={T}
            letterSpacing="1">AWIMA AGENCY · 2026</text>
        </g>

        {/* Big title placeholder */}
        <g className="af-el2">
          <rect x="200" y="58" width="80" height="11" rx="2"
            fill="rgba(245,244,240,0.9)"/>
          <rect x="200" y="73" width="60" height="11" rx="2"
            fill="rgba(245,244,240,0.7)"/>
        </g>

        {/* Subtitle */}
        <g className="af-el3">
          <rect x="200" y="92" width="80" height="6" rx="2"
            fill="rgba(46,219,180,0.6)"/>
        </g>

        {/* Decorative graphic element */}
        <g className="af-deco">
          {/* Abstract circle shape */}
          <circle cx="240" cy="126" r="24" fill="none"
            stroke="rgba(46,219,180,0.35)" strokeWidth="1.5"/>
          <circle cx="240" cy="126" r="16" fill="none"
            stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>
          <circle cx="240" cy="126" r="8" fill="rgba(46,219,180,0.15)"/>
          {/* Cross lines */}
          <line x1="240" y1="102" x2="240" y2="150"
            stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
          <line x1="216" y1="126" x2="264" y2="126"
            stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
        </g>

        {/* Date / location */}
        <g className="af-el4">
          <rect x="200" y="153" width="44" height="6" rx="2"
            fill="rgba(122,138,170,0.4)"/>
          <rect x="248" y="153" width="36" height="6" rx="2"
            fill="rgba(122,138,170,0.3)"/>
        </g>

        {/* Footer info */}
        <g className="af-el5">
          <rect x="192" y="166" width="96" height="20" rx="5"
            fill="rgba(46,219,180,0.1)" stroke="rgba(46,219,180,0.25)" strokeWidth="0.8"/>
          <text x="240" y="179" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}
            letterSpacing="0.5">entrée libre · www.event.fr</text>
        </g>

        {/* CMJN badge on poster */}
        <g filter="url(#af-glow)">
          <rect x="194" y="20" width="38" height="12" rx="6"
            fill="rgba(46,219,180,0.2)" stroke={T} strokeWidth="0.8"/>
          <text x="213" y="29" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="5.5" fill={T}>300 dpi</text>
        </g>
        <circle className="af-pls" cx="213" cy="26" r="6" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="af-conn">
        <line x1="74" y1="40"  x2="192" y2="58"
          stroke="rgba(46,219,180,0.18)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="288"  y2="58"
          stroke="rgba(46,219,180,0.18)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="162" x2="192" y2="152"
          stroke="rgba(46,219,180,0.12)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="162" x2="288" y2="152"
          stroke="rgba(46,219,180,0.12)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="af-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>
          A1 format
        </text>
      </g>
      <g className="af-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>
          CMJN
        </text>
      </g>
      <g className="af-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5"
          fill="rgba(46,219,180,0.9)">
          Source inclus
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="af-m1">
        <g className="af-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8.5" fill={T}>
          PDF HD
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">LIVRAISON</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="af-m2">
        <g className="af-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8.5" fill={T}>
          300 dpi
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">RÉSOLUTION</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="af-m3">
        <g className="af-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8.5" fill={T}>
          CMJN
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">IMPRESSION</text>
      </g>
    </svg>
  )
}
