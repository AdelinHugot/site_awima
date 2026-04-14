const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .at-card  { animation: atCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .at-left  { animation: atLeft  .5s cubic-bezier(.34,1.56,.64,1) .4s both;
              transform-box:fill-box; transform-origin:center; }
  .at-arrow { animation: atArrowIn .4s ease .9s both; }
  .at-right { animation: atRight .5s cubic-bezier(.34,1.56,.64,1) 1.0s both;
              transform-box:fill-box; transform-origin:center; }
  .at-swatch { animation: atSwatch .6s ease 1.2s both; }
  .at-b1 { animation: atBadge .45s cubic-bezier(.34,1.56,.64,1) 1.1s both;
            transform-box:fill-box; transform-origin:center; }
  .at-b2 { animation: atBadge .45s cubic-bezier(.34,1.56,.64,1) 1.28s both;
            transform-box:fill-box; transform-origin:center; }
  .at-m1 { animation: atUp .4s ease 1.1s  both; }
  .at-m2 { animation: atUp .4s ease 1.28s both; }
  .at-m3 { animation: atUp .4s ease 1.46s both; }
  .at-a1 { animation: atArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .at-a2 { animation: atArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .at-a3 { animation: atArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  .at-glow { animation: atGlow 2.2s ease-in-out 1.5s infinite; transform-box:fill-box; transform-origin:center; }
  @keyframes atCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes atLeft {
    from { opacity:0; transform:translateX(-20px) scale(.9); }
    to   { opacity:1; transform:translateX(0) scale(1); }
  }
  @keyframes atArrowIn {
    from { opacity:0; transform:scaleX(0); }
    to   { opacity:1; transform:scaleX(1); }
  }
  @keyframes atRight {
    from { opacity:0; transform:translateX(20px) scale(.9); }
    to   { opacity:1; transform:translateX(0) scale(1); }
  }
  @keyframes atSwatch {
    from { opacity:0; transform:scaleX(.4); }
    to   { opacity:1; transform:scaleX(1); }
  }
  @keyframes atBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes atUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes atArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes atGlow {
    0%,100% { opacity:.5; filter:drop-shadow(0 0 4px rgba(46,219,180,0.4)); }
    50%     { opacity:1;  filter:drop-shadow(0 0 10px rgba(46,219,180,0.9)); }
  }
`

export default function AdaptationTemplateIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Adaptation de template — avant/après charte"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="at-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <linearGradient id="at-oldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(107,70,193,0.35)"/>
          <stop offset="100%" stopColor="rgba(107,70,193,0.1)"/>
        </linearGradient>
        <linearGradient id="at-newGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(46,219,180,0.25)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0.06)"/>
        </linearGradient>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="at-card">
        <rect x="30" y="14" width="420" height="196" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="30" y="14" width="420" height="48" rx="14" fill="url(#at-hdr)"/>
        <rect x="30" y="38" width="420" height="24" fill="url(#at-hdr)"/>

        <text x="50" y="33"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Adaptation de Template
        </text>
        <text x="50" y="47"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Nouvelle charte · Couleurs · Typographies · Logo
        </text>

        {/* ── AVANT label ── */}
        <text x="142" y="63" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill="rgba(107,70,193,0.8)">
          AVANT
        </text>
        <text x="338" y="63" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
          APRÈS
        </text>

        <line x1="40" y1="66" x2="440" y2="66" stroke={FT} strokeWidth="1"/>

        {/* ── Left card (old colors — purple/gray) ── */}
        <g className="at-left">
          <rect x="50" y="72" width="160" height="112" rx="10"
            fill="rgba(30,20,60,0.95)" stroke="rgba(107,70,193,0.35)" strokeWidth="1"/>
          {/* Old header band */}
          <rect x="50" y="72" width="160" height="32" rx="10" fill="url(#at-oldGrad)"/>
          <rect x="50" y="92" width="160" height="12" fill="url(#at-oldGrad)"/>
          {/* Old logo placeholder */}
          <rect x="60" y="78" width="28" height="18" rx="4"
            fill="rgba(107,70,193,0.3)" stroke="rgba(107,70,193,0.5)" strokeWidth="0.8"/>
          <text x="74" y="91" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8" fill="rgba(107,70,193,0.8)">
            Logo
          </text>
          {/* Old title text bar */}
          <rect x="60" y="108" width="100" height="7" rx="3.5" fill="rgba(150,130,200,0.15)"/>
          <rect x="60" y="119" width="130" height="5" rx="2.5" fill="rgba(150,130,200,0.1)"/>
          <rect x="60" y="128" width="80" height="5" rx="2.5" fill="rgba(150,130,200,0.08)"/>
          {/* Old image block */}
          <rect x="60" y="138" width="140" height="36" rx="5"
            fill="rgba(107,70,193,0.1)" stroke="rgba(107,70,193,0.2)" strokeWidth="0.7"/>
          <line x1="60" y1="156" x2="200" y2="156" stroke="rgba(107,70,193,0.1)" strokeWidth="0.5"/>
          {/* Old color dot swatches */}
          <circle cx="64" cy="176" r="4" fill="rgba(107,70,193,0.6)"/>
          <circle cx="76" cy="176" r="4" fill="rgba(150,130,200,0.5)"/>
          <circle cx="88" cy="176" r="4" fill="rgba(60,60,90,0.7)"/>
          <text x="100" y="179" fontFamily="Montserrat,sans-serif" fontSize="6" fill="rgba(150,130,200,0.5)">
            ancienne palette
          </text>
        </g>

        {/* ── Arrow ── */}
        <g className="at-arrow">
          <line x1="224" y1="128" x2="252" y2="128"
            stroke={T} strokeWidth="2" strokeLinecap="round"/>
          <polygon points="246,122 260,128 246,134" fill={T}/>
          <g className="at-glow">
            <circle cx="240" cy="128" r="8"
              fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
          </g>
        </g>

        {/* ── Right card (new colors — teal/navy) ── */}
        <g className="at-right">
          <rect x="270" y="72" width="160" height="112" rx="10"
            fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.4)" strokeWidth="1.2"/>
          {/* New header band */}
          <rect x="270" y="72" width="160" height="32" rx="10" fill="url(#at-newGrad)"/>
          <rect x="270" y="92" width="160" height="12" fill="url(#at-newGrad)"/>
          {/* New logo placeholder */}
          <rect x="280" y="78" width="28" height="18" rx="4"
            fill="rgba(46,219,180,0.2)" stroke="rgba(46,219,180,0.5)" strokeWidth="0.8"/>
          <text x="294" y="91" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="8" fill={T}>
            Logo
          </text>
          {/* New title text bar */}
          <rect x="280" y="108" width="100" height="7" rx="3.5" fill="rgba(46,219,180,0.12)"/>
          <rect x="280" y="119" width="130" height="5" rx="2.5" fill="rgba(245,244,240,0.1)"/>
          <rect x="280" y="128" width="80" height="5" rx="2.5" fill="rgba(245,244,240,0.08)"/>
          {/* New image block */}
          <rect x="280" y="138" width="140" height="36" rx="5"
            fill="rgba(46,219,180,0.07)" stroke="rgba(46,219,180,0.25)" strokeWidth="0.7"/>
          <line x1="280" y1="156" x2="420" y2="156" stroke="rgba(46,219,180,0.1)" strokeWidth="0.5"/>
          {/* New color swatches */}
          <circle cx="284" cy="176" r="4" fill={T}/>
          <circle cx="296" cy="176" r="4" fill="rgba(13,28,66,0.95)" stroke={T} strokeWidth="1"/>
          <circle cx="308" cy="176" r="4" fill="rgba(245,244,240,0.7)"/>
          <text x="320" y="179" fontFamily="Montserrat,sans-serif" fontSize="6" fill="rgba(46,219,180,0.6)">
            nouvelle palette ✓
          </text>
        </g>

        {/* ── Color swatch transition bar ── */}
        <g className="at-swatch">
          <rect x="50" y="190" width="380" height="12" rx="6"
            fill="rgba(0,0,0,0.3)"/>
          {/* Old colors */}
          <rect x="50" y="190" width="60" height="12" rx="6"
            fill="rgba(107,70,193,0.55)"/>
          <rect x="108" y="190" width="60" height="12"
            fill="rgba(107,70,193,0.3)"/>
          {/* Transition */}
          <rect x="168" y="190" width="40" height="12"
            fill="rgba(100,100,150,0.2)"/>
          {/* New colors */}
          <rect x="206" y="190" width="100" height="12"
            fill="rgba(46,219,180,0.35)"/>
          <rect x="304" y="190" width="126" height="12" rx="6"
            fill="rgba(46,219,180,0.55)"/>
          {/* Divider arrow */}
          <line x1="235" y1="190" x2="235" y2="202" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <text x="196" y="200" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill="rgba(255,255,255,0.4)">avant</text>
          <text x="280" y="200" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill="rgba(46,219,180,0.7)">après</text>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="at-b1">
        <rect x="32" y="222" width="108" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="86" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Nouvelle charte
        </text>
      </g>
      <g className="at-b2">
        <rect x="148" y="222" width="52" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="174" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          48h
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="30" y1="215" x2="450" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="at-m1">
        <g className="at-a1">
          <polygon points="318,219 313,228 323,228" fill={T}/>
        </g>
        <text x="318" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>Couleurs ✓</text>
        <text x="318" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">PALETTE</text>
      </g>

      <line x1="374" y1="218" x2="374" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="at-m2">
        <g className="at-a2">
          <polygon points="400,219 395,228 405,228" fill={T}/>
        </g>
        <text x="400" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10.5" fill={T}>Typos ✓</text>
        <text x="400" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">POLICES</text>
      </g>

      <line x1="432" y1="218" x2="432" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="at-m3">
        <g className="at-a3">
          <polygon points="452,219 447,228 457,228" fill={T}/>
        </g>
        <text x="452" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10.5" fill={T}>Logo ✓</text>
        <text x="452" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">BRANDING</text>
      </g>
    </svg>
  )
}
