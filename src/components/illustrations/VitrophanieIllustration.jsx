const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .vt-card { animation: vtCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .vt-logo { animation: vtPop .5s cubic-bezier(.34,1.56,.64,1) .8s  both;
             transform-box:fill-box; transform-origin:center; }
  .vt-tag  { animation: vtPop .5s cubic-bezier(.34,1.56,.64,1) 1.0s both;
             transform-box:fill-box; transform-origin:center; }
  .vt-hrs  { animation: vtPop .5s cubic-bezier(.34,1.56,.64,1) 1.2s both;
             transform-box:fill-box; transform-origin:center; }
  .vt-refl { animation: vtFade .8s ease 1.3s both; }

  .vt-b1 { animation: vtBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .vt-b2 { animation: vtBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .vt-b3 { animation: vtBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }

  .vt-m1 { animation: vtUp .4s ease 1.2s  both; }
  .vt-m2 { animation: vtUp .4s ease 1.35s both; }
  .vt-m3 { animation: vtUp .4s ease 1.5s  both; }

  .vt-a1 { animation: vtArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .vt-a2 { animation: vtArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .vt-a3 { animation: vtArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .vt-conn { animation: vtConn .6s ease 1.0s both; }
  .vt-pls  { animation: vtPulse 2.4s ease-out 1.0s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes vtCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes vtPop {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes vtFade {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes vtBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes vtUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes vtArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes vtConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes vtPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function VitrophanieIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Vitrophanie"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="vt-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.07)"/>
          <stop offset="50%"  stopColor="rgba(245,244,240,0.04)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0.03)"/>
        </linearGradient>
        <linearGradient id="vt-refl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(245,244,240,0.12)"/>
          <stop offset="100%" stopColor="rgba(245,244,240,0)"/>
        </linearGradient>
        <filter id="vt-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── WINDOW FRAME ──────────────────────────────────── */}
      <g className="vt-card">
        {/* Outer frame */}
        <rect x="110" y="18" width="260" height="180" rx="6"
          fill="rgba(13,28,66,0.6)" stroke="rgba(122,138,170,0.5)" strokeWidth="3"/>

        {/* Glass pane */}
        <rect x="113" y="21" width="254" height="174" rx="4"
          fill="url(#vt-glass)" stroke="rgba(46,219,180,0.12)" strokeWidth="0.5"/>

        {/* Window dividers - horizontal */}
        <line x1="110" y1="108" x2="370" y2="108"
          stroke="rgba(122,138,170,0.5)" strokeWidth="3"/>
        {/* Window dividers - vertical */}
        <line x1="240" y1="18" x2="240" y2="198"
          stroke="rgba(122,138,170,0.5)" strokeWidth="3"/>

        {/* Glass reflection overlay */}
        <g className="vt-refl">
          <path d="M116 24 L200 24 L130 80 L116 80 Z"
            fill="url(#vt-refl)" opacity="0.5"/>
          <path d="M243 24 L340 24 L280 80 L243 80 Z"
            fill="url(#vt-refl)" opacity="0.3"/>
        </g>

        {/* Logo circle (top left pane) */}
        <g className="vt-logo" filter="url(#vt-glow)">
          <circle cx="175" cy="65" r="28"
            fill="rgba(46,219,180,0.12)" stroke={T} strokeWidth="1.5"/>
          <circle cx="175" cy="65" r="20"
            fill="rgba(46,219,180,0.08)"/>
          <text x="175" y="60" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="12" fill={T}>AW</text>
          <text x="175" y="72" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="5.5" fill={MT}
            letterSpacing="1">AGENCY</text>
        </g>
        <circle className="vt-pls" cx="175" cy="65" r="28" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>

        {/* Tagline (top right pane) */}
        <g className="vt-tag">
          <text x="305" y="56" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="9" fill={W}>
            Studio créatif
          </text>
          <text x="305" y="70" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
            &amp; digital
          </text>
          <line x1="265" y1="60" x2="345" y2="60"
            stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
          <line x1="265" y1="76" x2="345" y2="76"
            stroke="rgba(46,219,180,0.15)" strokeWidth="0.8"/>
        </g>

        {/* Hours block (bottom panes) */}
        <g className="vt-hrs">
          {/* Bottom left */}
          <rect x="122" y="118" width="106" height="68" rx="5"
            fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
          <text x="175" y="134" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="7.5" fill={T}>
            Horaires
          </text>
          <text x="122" y="148" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={MT}>
          </text>
          {['Lun – Ven : 9h – 18h','Sam : 10h – 13h','Dim : Fermé'].map((h,i)=>(
            <text key={h} x="175" y={146 + i*13} textAnchor="middle"
              fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>{h}</text>
          ))}

          {/* Bottom right */}
          <rect x="248" y="118" width="106" height="68" rx="5"
            fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
          <text x="301" y="134" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="7.5" fill={T}>
            Contact
          </text>
          <text x="301" y="149" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>+33 1 23 45 67 89</text>
          <text x="301" y="162" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>hello@awima.fr</text>
          <text x="301" y="175" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill={T}>awima.fr</text>
        </g>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="vt-conn">
        <line x1="74" y1="40"  x2="110" y2="55"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="370" y2="55"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="162" x2="110" y2="155"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="162" x2="370" y2="155"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="vt-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          Fichier poseur
        </text>
      </g>
      <g className="vt-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>
          Pose-ready
        </text>
      </g>
      <g className="vt-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">
          PDF + source
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="vt-m1">
        <g className="vt-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          Format A0
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">DIMENSIONS</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="vt-m2">
        <g className="vt-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          Pose-ready
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">FICHIER</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="vt-m3">
        <g className="vt-a3">
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
