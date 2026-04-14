const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .co-card    { animation: coCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .co-canvas  { animation: coCanvas .55s cubic-bezier(.34,1.56,.64,1) .35s both;
                transform-box:fill-box; transform-origin:center; }
  .co-tool1   { animation: coTool .4s cubic-bezier(.34,1.56,.64,1) .8s both;
                transform-box:fill-box; transform-origin:center; }
  .co-tool2   { animation: coTool .4s cubic-bezier(.34,1.56,.64,1) .96s both;
                transform-box:fill-box; transform-origin:center; }
  .co-tool3   { animation: coTool .4s cubic-bezier(.34,1.56,.64,1) 1.12s both;
                transform-box:fill-box; transform-origin:center; }
  .co-spark1  { animation: coSpark 2.4s ease-out 1.2s infinite;
                transform-box:fill-box; transform-origin:center; }
  .co-spark2  { animation: coSpark 2.4s ease-out 1.8s infinite;
                transform-box:fill-box; transform-origin:center; }
  .co-spark3  { animation: coSpark 2.4s ease-out 2.4s infinite;
                transform-box:fill-box; transform-origin:center; }
  .co-b1 { animation: coBadge .45s cubic-bezier(.34,1.56,.64,1) 1.0s both;
            transform-box:fill-box; transform-origin:center; }
  .co-b2 { animation: coBadge .45s cubic-bezier(.34,1.56,.64,1) 1.17s both;
            transform-box:fill-box; transform-origin:center; }
  .co-b3 { animation: coBadge .45s cubic-bezier(.34,1.56,.64,1) 1.34s both;
            transform-box:fill-box; transform-origin:center; }
  .co-m1 { animation: coUp .4s ease 1.1s  both; }
  .co-m2 { animation: coUp .4s ease 1.28s both; }
  .co-m3 { animation: coUp .4s ease 1.46s both; }
  .co-a1 { animation: coArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .co-a2 { animation: coArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .co-a3 { animation: coArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  .co-guide { animation: coGuide 3s ease-in-out 1s infinite; }
  @keyframes coCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes coCanvas {
    from { opacity:0; transform:scale(.88); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes coTool {
    from { opacity:0; transform:scale(.1) rotate(-20deg); }
    to   { opacity:1; transform:scale(1) rotate(0deg); }
  }
  @keyframes coSpark {
    0%   { opacity:.9; transform:scale(.3); }
    40%  { opacity:.7; transform:scale(1); }
    100% { opacity:0;  transform:scale(2); }
  }
  @keyframes coBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes coUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes coArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes coGuide {
    0%,100% { opacity:.15; }
    50%     { opacity:.35; }
  }
`

export default function CreaOneShotIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Créa One Shot — visuel unique haute définition"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="co-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <linearGradient id="co-comp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.15)"/>
          <stop offset="50%"  stopColor="rgba(91,141,239,0.12)"/>
          <stop offset="100%" stopColor="rgba(155,107,223,0.1)"/>
        </linearGradient>
        <filter id="co-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="co-card">
        <rect x="40" y="14" width="400" height="196" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="40" y="14" width="400" height="48" rx="14" fill="url(#co-hdr)"/>
        <rect x="40" y="38" width="400" height="24" fill="url(#co-hdr)"/>

        {/* Artboard icon */}
        <rect x="56" y="22" width="24" height="24" rx="4"
          fill="rgba(46,219,180,0.1)" stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
        <rect x="60" y="26" width="16" height="16" rx="2"
          fill="rgba(46,219,180,0.15)"/>
        <line x1="60" y1="26" x2="60" y2="42" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
        <line x1="76" y1="26" x2="76" y2="42" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>

        <text x="90" y="33"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Créa One Shot
        </text>
        <text x="90" y="47"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Visuel unique · Haute Définition · Charte respectée
        </text>

        {/* Separator */}
        <line x1="50" y1="58" x2="430" y2="58" stroke={FT} strokeWidth="1"/>

        {/* ── Canvas / Artboard ── */}
        <g className="co-canvas">
          {/* Artboard frame with ruler hints */}
          <rect x="110" y="66" width="220" height="128" rx="6"
            fill="rgba(5,12,35,0.7)" stroke="rgba(46,219,180,0.35)" strokeWidth="1.2"/>

          {/* Alignment guides */}
          <g className="co-guide">
            <line x1="220" y1="66" x2="220" y2="194" stroke={T} strokeWidth="0.6" strokeDasharray="3,3"/>
            <line x1="110" y1="130" x2="330" y2="130" stroke={T} strokeWidth="0.6" strokeDasharray="3,3"/>
          </g>

          {/* Background gradient fill */}
          <rect x="112" y="68" width="216" height="124" rx="4" fill="url(#co-comp)"/>

          {/* Geometric shapes composition */}
          {/* Big circle */}
          <circle cx="220" cy="130" r="48"
            fill="none" stroke="rgba(46,219,180,0.18)" strokeWidth="1.5"/>
          <circle cx="220" cy="130" r="32"
            fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.25)" strokeWidth="1"/>

          {/* Accent triangle */}
          <polygon points="178,170 220,96 262,170"
            fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.3)" strokeWidth="1"/>

          {/* Color blocks */}
          <rect x="138" y="90" width="32" height="32" rx="6"
            fill="rgba(91,141,239,0.2)" stroke="rgba(91,141,239,0.4)" strokeWidth="0.8"/>
          <rect x="272" y="138" width="40" height="26" rx="6"
            fill="rgba(155,107,223,0.2)" stroke="rgba(155,107,223,0.35)" strokeWidth="0.8"/>
          <rect x="148" y="158" width="26" height="14" rx="4"
            fill="rgba(239,126,91,0.2)" stroke="rgba(239,126,91,0.35)" strokeWidth="0.7"/>

          {/* Logo placeholder in center */}
          <rect x="206" y="116" width="28" height="28" rx="5"
            fill="rgba(46,219,180,0.15)" stroke={T} strokeWidth="1"/>
          <text x="220" y="134" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="11" fill={T}>A</text>

          {/* Text overlay suggestion */}
          <rect x="158" y="176" width="124" height="9" rx="4.5"
            fill="rgba(245,244,240,0.1)"/>
          <rect x="178" y="180" width="84" height="5" rx="2.5"
            fill="rgba(245,244,240,0.07)"/>

          {/* Corner handles */}
          {[
            [110,66],[328,66],[110,194],[328,194]
          ].map(([cx,cy],i) => (
            <rect key={i} x={cx-4} y={cy-4} width="8" height="8" rx="2"
              fill="rgba(13,28,66,0.95)" stroke="rgba(46,219,180,0.7)" strokeWidth="1"/>
          ))}
        </g>

        {/* ── Floating tool icons ── */}
        {/* Color picker */}
        <g className="co-tool1">
          <rect x="54" y="80" width="44" height="44" rx="8"
            fill="rgba(13,28,66,0.9)" stroke="rgba(46,219,180,0.25)" strokeWidth="0.8"/>
          <circle cx="76" cy="96" r="8" fill="rgba(46,219,180,0.15)" stroke={T} strokeWidth="0.8"/>
          <circle cx="76" cy="96" r="3" fill={T}/>
          <text x="76" y="115" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="5.5" fill={MT}>Couleur</text>
        </g>

        {/* Layers icon */}
        <g className="co-tool2">
          <rect x="54" y="134" width="44" height="44" rx="8"
            fill="rgba(13,28,66,0.9)" stroke="rgba(46,219,180,0.25)" strokeWidth="0.8"/>
          {[0,1,2].map(i => (
            <rect key={i} x="61" y={142 + i*7} width="30" height="5" rx="2"
              fill={`rgba(46,219,180,${0.25 - i*0.07})`} stroke={`rgba(46,219,180,${0.4 - i*0.1})`} strokeWidth="0.5"/>
          ))}
          <text x="76" y="166" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="5.5" fill={MT}>Calques</text>
        </g>

        {/* Export icon */}
        <g className="co-tool3">
          <rect x="342" y="80" width="44" height="44" rx="8"
            fill="rgba(13,28,66,0.9)" stroke="rgba(46,219,180,0.25)" strokeWidth="0.8"/>
          <rect x="350" y="88" width="28" height="22" rx="3"
            fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.7"/>
          <line x1="364" y1="96" x2="364" y2="104" stroke={T} strokeWidth="1.2" strokeLinecap="round"/>
          <polyline points="360,100 364,96 368,100" stroke={T} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="364" y="115" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="5.5" fill={MT}>Export</text>
        </g>

        {/* HD badge */}
        <g className="co-tool3">
          <rect x="342" y="134" width="44" height="44" rx="8"
            fill="rgba(13,28,66,0.9)" stroke="rgba(46,219,180,0.25)" strokeWidth="0.8"/>
          <text x="364" y="162" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="14" fill={T}>HD</text>
          <text x="364" y="170" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="5.5" fill={MT}>300 dpi</text>
        </g>

        {/* Sparkle effects */}
        <g className="co-spark1" filter="url(#co-glow)">
          <path d="M330 72 L332 76 L336 78 L332 80 L330 84 L328 80 L324 78 L328 76 Z" fill={T} opacity="0.9"/>
        </g>
        <g className="co-spark2" filter="url(#co-glow)">
          <path d="M120 190 L121.5 193 L125 195 L121.5 197 L120 200 L118.5 197 L115 195 L118.5 193 Z" fill={T} opacity="0.9"/>
        </g>
        <g className="co-spark3" filter="url(#co-glow)">
          <path d="M285 72 L286 74.5 L289 76 L286 77.5 L285 80 L284 77.5 L281 76 L284 74.5 Z" fill="rgba(245,196,66,0.9)" opacity="0.9"/>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="co-b1">
        <rect x="42" y="222" width="96" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="90" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          1 visuel unique
        </text>
      </g>
      <g className="co-b2">
        <rect x="146" y="222" width="52" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="172" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          48h
        </text>
      </g>
      <g className="co-b3">
        <rect x="206" y="222" width="44" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="228" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          HD
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="40" y1="215" x2="440" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="co-m1">
        <g className="co-a1">
          <polygon points="318,219 313,228 323,228" fill={T}/>
        </g>
        <text x="318" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>PNG+PDF</text>
        <text x="318" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">FORMATS</text>
      </g>

      <line x1="366" y1="218" x2="366" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="co-m2">
        <g className="co-a2">
          <polygon points="396,219 391,228 401,228" fill={T}/>
        </g>
        <text x="396" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>300dpi</text>
        <text x="396" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">RÉSOLUTION</text>
      </g>

      <line x1="430" y1="218" x2="430" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="co-m3">
        <g className="co-a3">
          <polygon points="450,219 445,228 455,228" fill={T}/>
        </g>
        <text x="450" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5" fill={T}>100%</text>
        <text x="450" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">CHARTE</text>
      </g>
    </svg>
  )
}
