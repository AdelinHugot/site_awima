const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .mc-card { animation: mcCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .mc-b1 { animation: mcBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .mc-b2 { animation: mcBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .mc-b3 { animation: mcBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }

  .mc-play { animation: mcBadge .5s cubic-bezier(.34,1.56,.64,1) .9s both;
             transform-box:fill-box; transform-origin:center; }

  .mc-like { animation: mcBadge .4s cubic-bezier(.34,1.56,.64,1) 1.1s  both;
             transform-box:fill-box; transform-origin:center; }
  .mc-cmt  { animation: mcBadge .4s cubic-bezier(.34,1.56,.64,1) 1.2s  both;
             transform-box:fill-box; transform-origin:center; }
  .mc-shr  { animation: mcBadge .4s cubic-bezier(.34,1.56,.64,1) 1.3s  both;
             transform-box:fill-box; transform-origin:center; }

  .mc-prog { animation: mcProgress 1.0s ease 1.0s both; }

  .mc-m1 { animation: mcUp .4s ease 1.2s  both; }
  .mc-m2 { animation: mcUp .4s ease 1.35s both; }
  .mc-m3 { animation: mcUp .4s ease 1.5s  both; }

  .mc-a1 { animation: mcArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .mc-a2 { animation: mcArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .mc-a3 { animation: mcArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .mc-conn { animation: mcConn .6s ease 1.0s both; }
  .mc-pls  { animation: mcPulse 2.4s ease-out 1.0s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes mcCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes mcBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes mcProgress {
    from { width: 0; }
    to   { width: 80px; }
  }
  @keyframes mcUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes mcArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes mcConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes mcPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function MontageCourtIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Montage vidéo court format"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="mc-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(6,14,40,0.95)"/>
          <stop offset="100%" stopColor="rgba(13,28,66,0.95)"/>
        </linearGradient>
        <filter id="mc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── PHONE ─────────────────────────────────────────── */}
      <g className="mc-card">
        {/* Phone body */}
        <rect x="188" y="14" width="104" height="186" rx="18"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.28)" strokeWidth="2"/>

        {/* Top notch */}
        <rect x="218" y="18" width="44" height="8" rx="4"
          fill="rgba(6,12,36,0.9)"/>

        {/* Screen area */}
        <rect x="193" y="30" width="94" height="162" rx="5"
          fill="url(#mc-screen)"/>

        {/* View count top */}
        <text x="198" y="42"
          fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={W}>
          34K vues
        </text>

        {/* User avatar */}
        <circle cx="210" cy="155" r="10"
          fill="rgba(46,219,180,0.2)" stroke={T} strokeWidth="1.2"/>
        <text x="210" y="159" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>U</text>
        <text x="225" y="153" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={W}>
          @creator
        </text>
        <rect x="222" y="155" width="55" height="4" rx="2" fill="rgba(245,244,240,0.2)"/>

        {/* Interaction icons - right side */}
        <g className="mc-like">
          <text x="272" y="80"
            fontFamily="Montserrat,sans-serif" fontSize="14" fill={W}>♥</text>
          <text x="273" y="91"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT} textAnchor="middle">2.1K</text>
        </g>
        <g className="mc-cmt">
          <rect x="267" y="98" width="14" height="11" rx="3"
            fill="rgba(245,244,240,0.18)" stroke="rgba(245,244,240,0.4)" strokeWidth="0.8"/>
          <text x="274" y="107" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="5" fill={W}>💬</text>
          <text x="274" y="118"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT} textAnchor="middle">348</text>
        </g>
        <g className="mc-shr">
          <text x="272" y="132"
            fontFamily="Montserrat,sans-serif" fontSize="12" fill={W}>↗</text>
          <text x="274" y="143"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT} textAnchor="middle">Share</text>
        </g>

        {/* Play button center */}
        <g className="mc-play" filter="url(#mc-glow)">
          <circle cx="230" cy="105" r="16" fill="rgba(46,219,180,0.15)" stroke={T} strokeWidth="1.2"/>
          <polygon points="225,98 225,112 240,105" fill={T}/>
        </g>
        <circle className="mc-pls" cx="230" cy="105" r="16" fill="none"
          stroke="rgba(46,219,180,0.5)" strokeWidth="1.5"/>

        {/* Progress bar at bottom */}
        <rect x="195" y="182" width="90" height="3" rx="1.5"
          fill="rgba(245,244,240,0.12)"/>
        <rect className="mc-prog" x="195" y="182" width="80" height="3" rx="1.5"
          fill={T}/>
        {/* Playhead dot */}
        <circle cx="275" cy="183.5" r="4" fill={T}/>
      </g>

      {/* Timeline scrubber below phone */}
      <g className="mc-card">
        <rect x="145" y="205" width="190" height="8" rx="4"
          fill="rgba(13,28,66,0.8)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
        {/* Clip segments */}
        <rect x="147" y="206" width="48" height="6" rx="3" fill="rgba(46,219,180,0.35)"/>
        <rect x="198" y="206" width="32" height="6" rx="3" fill="rgba(122,138,170,0.35)"/>
        <rect x="233" y="206" width="60" height="6" rx="3" fill="rgba(46,219,180,0.2)"/>
        {/* Playhead */}
        <line x1="252" y1="202" x2="252" y2="215"
          stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <polygon points="248,202 256,202 252,206" fill={T}/>
        <text x="240" y="178" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>Timeline</text>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="mc-conn">
        <line x1="74" y1="40"  x2="188" y2="70"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="292" y2="70"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="mc-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(0,0,0,0.3)" stroke="rgba(245,244,240,0.35)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={W}>
          TikTok
        </text>
      </g>
      <g className="mc-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(214,56,159,0.15)" stroke="rgba(214,56,159,0.5)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill="#D6389F">
          Reels
        </text>
      </g>
      <g className="mc-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">
          &lt; 60s
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="mc-m1">
        <g className="mc-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          34K
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">VUES</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="mc-m2">
        <g className="mc-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          8.2%
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">ENGAGE.</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="mc-m3">
        <g className="mc-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          +12
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">ABONNÉS</text>
      </g>
    </svg>
  )
}
