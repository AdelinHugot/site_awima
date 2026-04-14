const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .nl-card { animation: nlCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .nl-env  { animation: nlCardIn .5s cubic-bezier(.23,1,.32,1) .2s both;
             transform-box:fill-box; transform-origin:center; }
  .nl-lid  { animation: nlLid .7s cubic-bezier(.23,1,.32,1) .6s both;
             transform-box:fill-box; transform-origin:50% 100%; }
  .nl-content { animation: nlFade .5s ease 1.0s both; }

  .nl-b1 { animation: nlBadge .45s cubic-bezier(.34,1.56,.64,1) .8s  both;
            transform-box:fill-box; transform-origin:center; }
  .nl-b2 { animation: nlBadge .45s cubic-bezier(.34,1.56,.64,1) .95s both;
            transform-box:fill-box; transform-origin:center; }
  .nl-b3 { animation: nlBadge .45s cubic-bezier(.34,1.56,.64,1) 1.1s both;
            transform-box:fill-box; transform-origin:center; }

  .nl-m1 { animation: nlUp .4s ease 1.2s  both; }
  .nl-m2 { animation: nlUp .4s ease 1.35s both; }
  .nl-m3 { animation: nlUp .4s ease 1.5s  both; }

  .nl-a1 { animation: nlArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .nl-a2 { animation: nlArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .nl-a3 { animation: nlArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .nl-conn { animation: nlConn .6s ease 1.0s both; }
  .nl-pls  { animation: nlPulse 2.4s ease-out 1.1s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes nlCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes nlLid {
    from { transform:rotateX(0deg); }
    to   { transform:rotateX(-40deg); }
  }
  @keyframes nlFade {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes nlBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes nlUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes nlArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes nlConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes nlPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function NewsletterIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Newsletter mensuelle"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="nl-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <filter id="nl-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── ENVELOPE ──────────────────────────────────────── */}
      <g className="nl-env">
        {/* Envelope body */}
        <rect x="150" y="30" width="180" height="120" rx="10"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.28)" strokeWidth="1.2"/>

        {/* Envelope bottom flaps */}
        <path d="M150 80 L240 120 L330 80" fill="none"
          stroke="rgba(46,219,180,0.18)" strokeWidth="1"/>

        {/* Envelope lid (animated open) */}
        <g className="nl-lid">
          <path d="M150 30 L240 75 L330 30 Z"
            fill="rgba(13,35,80,0.98)" stroke="rgba(46,219,180,0.28)" strokeWidth="1.2"/>
        </g>

        {/* Email preview card inside envelope */}
        <g className="nl-content">
          {/* Header band */}
          <rect x="162" y="42" width="156" height="22" rx="5"
            fill="rgba(46,219,180,0.22)"/>
          <text x="240" y="57" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8" fill={T}>
            Newsletter du mois
          </text>

          {/* Subject line */}
          <text x="165" y="76" fontFamily="Montserrat,sans-serif" fontSize="7" fill={W}>
            Objet : Nos actualités de mars 2026
          </text>

          {/* Content lines */}
          <rect x="165" y="83" width="100" height="5" rx="2.5" fill="rgba(245,244,240,0.12)"/>
          <rect x="165" y="92" width="130" height="5" rx="2.5" fill="rgba(245,244,240,0.09)"/>
          <rect x="165" y="101" width="80"  height="5" rx="2.5" fill="rgba(245,244,240,0.09)"/>

          {/* CTA button */}
          <rect x="190" y="110" width="100" height="18" rx="9"
            fill="rgba(46,219,180,0.25)" stroke={T} strokeWidth="1"/>
          <text x="240" y="122" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
            Lire l'article →
          </text>
        </g>
      </g>

      {/* Open-rate arc */}
      <g className="nl-card">
        <rect x="94" y="68" width="48" height="52" rx="10"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <text x="118" y="85" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>Ouverture</text>
        <circle cx="118" cy="104" r="14" fill="none"
          stroke="rgba(46,219,180,0.12)" strokeWidth="4"/>
        <circle cx="118" cy="104" r="14" fill="none"
          stroke={T} strokeWidth="4"
          strokeDasharray="56" strokeDashoffset="32"
          strokeLinecap="round"
          transform="rotate(-90 118 104)"/>
        <text x="118" y="108" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8" fill={T}>42%</text>

        {/* Pulse */}
        <circle className="nl-pls" cx="118" cy="104" r="6" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="nl-conn">
        <line x1="74" y1="42"  x2="150" y2="62"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="42" x2="330" y2="62"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="155" x2="150" y2="142"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="155" x2="330" y2="142"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="nl-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
          A/B Test ✓
        </text>
      </g>
      <g className="nl-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
          248 dest.
        </text>
      </g>
      <g className="nl-b3">
        <rect x="4" y="148" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="161" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5"
          fill="rgba(46,219,180,0.9)">
          Score A
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="nl-m1">
        <g className="nl-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          +42%
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">OUVERTURE</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="nl-m2">
        <g className="nl-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          12 CTAs
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">CALL TO ACTION</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="nl-m3">
        <g className="nl-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          Score A
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">QUALITÉ</text>
      </g>
    </svg>
  )
}
