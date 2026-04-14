const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .bs-card { animation: bsCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .bs-line1 { animation: bsSlide .4s ease .5s  both; }
  .bs-line2 { animation: bsSlide .4s ease .62s both; }
  .bs-line3 { animation: bsSlide .4s ease .74s both; }
  .bs-line4 { animation: bsSlide .4s ease .86s both; }
  .bs-line5 { animation: bsSlide .4s ease .98s both; }

  .bs-kw1 { animation: bsBadge .4s cubic-bezier(.34,1.56,.64,1) 1.0s both;
             transform-box:fill-box; transform-origin:center; }
  .bs-kw2 { animation: bsBadge .4s cubic-bezier(.34,1.56,.64,1) 1.14s both;
             transform-box:fill-box; transform-origin:center; }
  .bs-kw3 { animation: bsBadge .4s cubic-bezier(.34,1.56,.64,1) 1.28s both;
             transform-box:fill-box; transform-origin:center; }

  .bs-rank { animation: bsBadge .5s cubic-bezier(.34,1.56,.64,1) 1.1s both;
             transform-box:fill-box; transform-origin:center; }
  .bs-dial { animation: bsDialIn .7s ease .9s both; }

  .bs-b1 { animation: bsBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .bs-b2 { animation: bsBadge .45s cubic-bezier(.34,1.56,.64,1) .9s both;
            transform-box:fill-box; transform-origin:center; }
  .bs-b3 { animation: bsBadge .45s cubic-bezier(.34,1.56,.64,1) 1.05s both;
            transform-box:fill-box; transform-origin:center; }

  .bs-m1 { animation: bsUp .4s ease 1.15s both; }
  .bs-m2 { animation: bsUp .4s ease 1.3s  both; }
  .bs-m3 { animation: bsUp .4s ease 1.45s both; }

  .bs-a1 { animation: bsArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .bs-a2 { animation: bsArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .bs-a3 { animation: bsArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .bs-conn { animation: bsConn .6s ease 1.0s both; }
  .bs-pls  { animation: bsPulse 2.4s ease-out .9s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes bsCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes bsSlide {
    from { opacity:0; transform:translateX(-14px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes bsBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes bsDialIn {
    from { opacity:0; stroke-dashoffset:120; }
    to   { opacity:1; stroke-dashoffset:30; }
  }
  @keyframes bsUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes bsArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes bsConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes bsPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function BlogSeoIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Article de blog SEO"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="bs-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <filter id="bs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── MAIN CARD ─────────────────────────────────────── */}
      <g className="bs-card">
        <rect x="90" y="22" width="300" height="182" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="90" y="22" width="300" height="52" rx="14" fill="url(#bs-hdr)"/>

        {/* Editor toolbar */}
        <circle cx="108" cy="40" r="4.5" fill="rgba(46,219,180,0.18)" stroke={T} strokeWidth="1"/>
        <text x="108" y="44" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="7" fill={T}>B</text>
        <text x="122" y="44" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="400" fontSize="7" fontStyle="italic" fill={MT}>I</text>
        <line x1="130" y1="34" x2="130" y2="47" stroke={FT} strokeWidth="1"/>
        <text x="240" y="36"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Article de blog SEO
        </text>
        <text x="240" y="48"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
          Dernière modif. aujourd'hui · 847 mots
        </text>

        <line x1="100" y1="60" x2="380" y2="60" stroke={FT} strokeWidth="1"/>

        {/* Text lines */}
        <rect className="bs-line1" x="100" y="67" width="260" height="7" rx="3.5" fill="rgba(245,244,240,0.15)"/>
        <rect className="bs-line2" x="100" y="80" width="220" height="7" rx="3.5" fill="rgba(245,244,240,0.11)"/>
        <rect className="bs-line3" x="100" y="93" width="240" height="7" rx="3.5" fill="rgba(245,244,240,0.11)"/>
        <rect className="bs-line4" x="100" y="106" width="180" height="7" rx="3.5" fill="rgba(245,244,240,0.08)"/>
        <rect className="bs-line5" x="100" y="119" width="200" height="7" rx="3.5" fill="rgba(245,244,240,0.08)"/>

        {/* Keyword chips */}
        <g className="bs-kw1">
          <rect x="100" y="133" width="70" height="16" rx="8"
            fill="rgba(46,219,180,0.18)" stroke="rgba(46,219,180,0.55)" strokeWidth="1"/>
          <text x="135" y="144" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
            SEO local
          </text>
        </g>
        <g className="bs-kw2">
          <rect x="178" y="133" width="82" height="16" rx="8"
            fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
          <text x="219" y="144" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
            longue traîne
          </text>
        </g>
        <g className="bs-kw3">
          <rect x="268" y="133" width="68" height="16" rx="8"
            fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.3)" strokeWidth="1"/>
          <text x="302" y="144" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
            backlinks
          </text>
        </g>

        <line x1="100" y1="158" x2="380" y2="158" stroke={FT} strokeWidth="1"/>

        {/* SEO score bar */}
        <text x="100" y="171"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>Score SEO</text>
        <rect x="155" y="163" width="150" height="8" rx="4" fill="rgba(46,219,180,0.1)"/>
        <rect x="155" y="163" width="118" height="8" rx="4" fill={T} opacity=".75"/>
        <text x="313" y="171"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="7.5" fill={T}>79/100</text>

        {/* Rank badge */}
        <g className="bs-rank" filter="url(#bs-glow)">
          <rect x="335" y="63" width="46" height="36" rx="8"
            fill="rgba(46,219,180,0.14)" stroke={T} strokeWidth="1.2"/>
          <text x="358" y="77" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={MT}>Position</text>
          <text x="358" y="91" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="14" fill={T}>#3</text>
        </g>

        {/* Pulse on rank */}
        <circle className="bs-pls" cx="358" cy="80" r="5" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="bs-conn">
        <line x1="74" y1="40"  x2="90"  y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="40" x2="390" y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="74" y1="160" x2="90"  y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="406" y1="160" x2="390" y2="152"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="bs-b1">
        <rect x="4" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="38" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>
          Top 10
        </text>
      </g>
      <g className="bs-b2">
        <rect x="408" y="30" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="442" y="43" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>
          Schema.org
        </text>
      </g>
      <g className="bs-b3">
        <rect x="4" y="152" width="68" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="38" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">
          Meta OK
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="bs-m1">
        <g className="bs-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          +63%
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">TRAFIC</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="bs-m2">
        <g className="bs-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          Pos. #3
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">POSITION</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="bs-m3">
        <g className="bs-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          8.4%
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">CTR</text>
      </g>
    </svg>
  )
}
