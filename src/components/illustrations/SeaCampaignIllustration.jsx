const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .sc-card { animation: scCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .sc-line { animation: scDraw 1.0s ease .7s both;
             stroke-dasharray: 300; stroke-dashoffset: 300; }
  .sc-dot  { animation: scBadge .4s cubic-bezier(.34,1.56,.64,1) 1.6s both;
             transform-box:fill-box; transform-origin:center; }

  .sc-b1 { animation: scBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .sc-b2 { animation: scBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .sc-b3 { animation: scBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }

  .sc-roi { animation: scBadge .5s cubic-bezier(.34,1.56,.64,1) 1.2s both;
            transform-box:fill-box; transform-origin:center; }

  .sc-m1 { animation: scUp .4s ease 1.2s  both; }
  .sc-m2 { animation: scUp .4s ease 1.35s both; }
  .sc-m3 { animation: scUp .4s ease 1.5s  both; }

  .sc-a1 { animation: scArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .sc-a2 { animation: scArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .sc-a3 { animation: scArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .sc-conn { animation: scConn .6s ease 1.0s both; }
  .sc-pls  { animation: scPulse 2.4s ease-out 1.2s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes scCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes scDraw {
    to { stroke-dashoffset: 0; }
  }
  @keyframes scBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes scUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes scArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes scConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes scPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function SeaCampaignIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Setup et suivi campagne SEA"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="sc-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <linearGradient id="sc-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.3)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <filter id="sc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── MAIN DASHBOARD CARD ───────────────────────────── */}
      <g className="sc-card">
        <rect x="95" y="22" width="290" height="178" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="95" y="22" width="290" height="52" rx="14" fill="url(#sc-hdr)"/>

        {/* Header */}
        <text x="240" y="40" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Dashboard Campagnes
        </text>
        <text x="240" y="53" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
          Budget total : 2 500 € / mois
        </text>

        <line x1="105" y1="62" x2="375" y2="62" stroke={FT} strokeWidth="1"/>

        {/* Chart area */}
        {/* Area fill under sparkline */}
        <path d="M110 145 L150 130 L190 118 L230 105 L270 90 L310 78 L350 62 L350 155 L110 155 Z"
          fill="url(#sc-area)" opacity="0.4"/>

        {/* Sparkline */}
        <polyline className="sc-line"
          points="110,145 150,130 190,118 230,105 270,90 310,78 350,62"
          stroke={T} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Y-axis labels */}
        <text x="108" y="70" textAnchor="end"
          fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>Conv.</text>
        <line x1="110" y1="155" x2="355" y2="155" stroke="rgba(46,219,180,0.12)" strokeWidth="1"/>

        {/* X-axis months */}
        {['Jan','Fév','Mar','Avr','Mai','Jun','Jul'].map((m,i) => (
          <text key={m} x={110 + i*40} y="163"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT}>{m}</text>
        ))}

        {/* Dot on last point */}
        <g className="sc-dot" filter="url(#sc-glow)">
          <circle cx="350" cy="62" r="5" fill={T} opacity=".9"/>
          <circle cx="350" cy="62" r="3" fill="white"/>
        </g>
        <circle className="sc-pls" cx="350" cy="62" r="5" fill="none"
          stroke="rgba(46,219,180,0.5)" strokeWidth="1.5"/>

        {/* CTR chip */}
        <rect x="110" y="168" width="54" height="16" rx="8"
          fill="rgba(46,219,180,0.14)" stroke="rgba(46,219,180,0.45)" strokeWidth="1"/>
        <text x="137" y="179" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>CTR 7.8%</text>

        {/* ROI badge */}
        <g className="sc-roi" filter="url(#sc-glow)">
          <rect x="174" y="168" width="60" height="16" rx="8"
            fill="rgba(46,219,180,0.2)" stroke={T} strokeWidth="1.2"/>
          <text x="204" y="179" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="7.5" fill={T}>ROAS 4.2×</text>
        </g>

        {/* Tracking OK */}
        <rect x="244" y="168" width="70" height="16" rx="8"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.28)" strokeWidth="1"/>
        <text x="279" y="179" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>Tracking ✓</text>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="sc-conn">
        <line x1="74" y1="40"  x2="95"  y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="385" y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="162" x2="95"  y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="162" x2="385" y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="sc-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(66,133,244,0.18)" stroke="rgba(66,133,244,0.55)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill="#4285F4">
          Google Ads
        </text>
      </g>
      <g className="sc-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(24,119,242,0.18)" stroke="rgba(24,119,242,0.55)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill="#1877F2">
          Meta Ads
        </text>
      </g>
      <g className="sc-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5"
          fill="rgba(46,219,180,0.9)">
          Tracking ✓
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="sc-m1">
        <g className="sc-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          4.2×
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">ROAS</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="sc-m2">
        <g className="sc-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          7.8%
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">CTR</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="sc-m3">
        <g className="sc-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          -34%
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">CPC</text>
      </g>
    </svg>
  )
}
