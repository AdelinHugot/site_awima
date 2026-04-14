const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .fi-card   { animation: fiCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .fi-term   { animation: fiTerm  .5s ease .3s both; }
  .fi-char   { animation: fiChar  3.5s steps(28,end) .9s both; overflow:hidden; }
  .fi-cursor { animation: fiCursor .7s step-end 1s infinite; }
  .fi-arrow  { animation: fiArrowIn .4s ease 1.4s both; transform-box:fill-box; transform-origin:center; }
  .fi-img    { animation: fiFade  .7s ease 1.6s both; }
  .fi-brain  { animation: fiBrain 2s ease-in-out 2s infinite; transform-box:fill-box; transform-origin:center; }
  .fi-b1 { animation: fiBadge .45s cubic-bezier(.34,1.56,.64,1) 1.2s both; transform-box:fill-box; transform-origin:center; }
  .fi-b2 { animation: fiBadge .45s cubic-bezier(.34,1.56,.64,1) 1.37s both; transform-box:fill-box; transform-origin:center; }
  .fi-b3 { animation: fiBadge .45s cubic-bezier(.34,1.56,.64,1) 1.54s both; transform-box:fill-box; transform-origin:center; }
  .fi-m1 { animation: fiUp .4s ease 1.1s  both; }
  .fi-m2 { animation: fiUp .4s ease 1.28s both; }
  .fi-m3 { animation: fiUp .4s ease 1.46s both; }
  .fi-a1 { animation: fiArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .fi-a2 { animation: fiArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .fi-a3 { animation: fiArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  .fi-glow { animation: fiGlow 2s ease-in-out 2s infinite; }
  .fi-px1 { animation: fiPixel 1.2s ease-in-out 2s infinite; }
  .fi-px2 { animation: fiPixel 1.2s ease-in-out 2.4s infinite; }
  .fi-px3 { animation: fiPixel 1.2s ease-in-out 2.8s infinite; }
  @keyframes fiCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes fiTerm {
    from { opacity:0; transform:translateX(-15px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes fiChar {
    from { width:0; }
    to   { width:160px; }
  }
  @keyframes fiCursor {
    0%,100% { opacity:1; }
    50%     { opacity:0; }
  }
  @keyframes fiArrowIn {
    from { opacity:0; transform:scaleX(0); }
    to   { opacity:1; transform:scaleX(1); }
  }
  @keyframes fiFade {
    from { opacity:0; transform:translateX(15px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes fiBrain {
    0%,100% { transform:scale(1); filter:drop-shadow(0 0 4px rgba(46,219,180,0.4)); }
    50%     { transform:scale(1.08); filter:drop-shadow(0 0 10px rgba(46,219,180,0.8)); }
  }
  @keyframes fiBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes fiUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fiArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes fiGlow {
    0%,100% { opacity:.5; }
    50%     { opacity:1; }
  }
  @keyframes fiPixel {
    0%,100% { opacity:.4; }
    50%     { opacity:1; }
  }
`

export default function FormationIAIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Formation IA — génération d'images par prompt"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="fi-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <linearGradient id="fi-img" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(155,107,223,0.3)"/>
          <stop offset="40%"  stopColor="rgba(46,219,180,0.25)"/>
          <stop offset="80%"  stopColor="rgba(91,141,239,0.2)"/>
          <stop offset="100%" stopColor="rgba(239,126,91,0.15)"/>
        </linearGradient>
        <filter id="fi-imgBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="fi-txtClip">
          <rect x="60" y="110" width="160" height="12"/>
        </clipPath>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="fi-card">
        <rect x="30" y="14" width="420" height="196" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="30" y="14" width="420" height="48" rx="14" fill="url(#fi-hdr)"/>
        <rect x="30" y="38" width="420" height="24" fill="url(#fi-hdr)"/>

        {/* Brain/AI icon */}
        <g className="fi-brain">
          <circle cx="52" cy="35" r="11"
            fill="rgba(46,219,180,0.15)" stroke="rgba(46,219,180,0.5)" strokeWidth="1"/>
          {/* Simplified brain shape */}
          <path d="M46,32 Q44,28 47,26 Q51,24 53,28 Q56,24 60,26 Q63,28 58,32 Q62,35 58,38 Q55,40 53,37 Q51,40 46,38 Q42,35 46,32Z"
            fill="none" stroke={T} strokeWidth="0.9" strokeLinejoin="round"/>
          <line x1="53" y1="28" x2="53" y2="38" stroke={T} strokeWidth="0.6" strokeDasharray="1.5,1.5"/>
        </g>

        <text x="72" y="33"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Formation IA Images
        </text>
        <text x="72" y="47"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Prompt → Génération · Midjourney · Ideogram · 1h
        </text>

        {/* Separator */}
        <line x1="40" y1="58" x2="440" y2="58" stroke={FT} strokeWidth="1"/>

        {/* ── Terminal / Prompt card ── */}
        <g className="fi-term">
          <rect x="42" y="65" width="190" height="120" rx="10"
            fill="rgba(0,5,20,0.85)" stroke="rgba(46,219,180,0.3)" strokeWidth="1"/>
          {/* Terminal top bar */}
          <rect x="42" y="65" width="190" height="22" rx="10"
            fill="rgba(0,5,20,0.9)"/>
          <rect x="42" y="75" width="190" height="12" fill="rgba(0,5,20,0.9)"/>
          {/* Window dots */}
          <circle cx="55" cy="76" r="3.5" fill="rgba(239,68,68,0.6)"/>
          <circle cx="66" cy="76" r="3.5" fill="rgba(245,196,66,0.6)"/>
          <circle cx="77" cy="76" r="3.5" fill="rgba(46,219,180,0.6)"/>
          <text x="130" y="79" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fill="rgba(122,138,170,0.5)">
            prompt.txt — terminal
          </text>

          {/* Prompt lines */}
          <text x="52" y="100"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill="rgba(46,219,180,0.7)">
            $
          </text>
          <text x="60" y="100"
            fontFamily="Montserrat,sans-serif" fontSize="7" fill="rgba(245,244,240,0.5)">
            midjourney imagine
          </text>

          {/* Animated typing text */}
          <text x="52" y="114"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="7" fill={T}
            clipPath="url(#fi-txtClip)">
            <tspan className="fi-char">"minimalist logo for</tspan>
          </text>
          <text className="fi-cursor" x="222" y="114"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>|</text>

          <text x="52" y="128"
            fontFamily="Montserrat,sans-serif" fontSize="7" fill="rgba(245,244,240,0.35)">
            tech startup, teal colors,
          </text>
          <text x="52" y="141"
            fontFamily="Montserrat,sans-serif" fontSize="7" fill="rgba(245,244,240,0.35)">
            clean geometric, 4K --ar 1:1"
          </text>

          {/* Parameters */}
          <rect x="52" y="152" width="54" height="12" rx="3"
            fill="rgba(91,141,239,0.2)" stroke="rgba(91,141,239,0.4)" strokeWidth="0.7"/>
          <text x="79" y="161" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill="#5B8DEF">
            --ar 1:1
          </text>
          <rect x="112" y="152" width="54" height="12" rx="3"
            fill="rgba(155,107,223,0.2)" stroke="rgba(155,107,223,0.4)" strokeWidth="0.7"/>
          <text x="139" y="161" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill="#9B6BDF">
            --q 2
          </text>

          {/* Processing indicator */}
          <text x="52" y="179"
            fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="rgba(46,219,180,0.55)">
            ✓ Génération en cours...
          </text>
        </g>

        {/* ── Arrow ── */}
        <g className="fi-arrow">
          <line x1="238" y1="125" x2="260" y2="125"
            stroke={T} strokeWidth="2" strokeLinecap="round"/>
          <polygon points="254,119 268,125 254,131" fill={T}/>
          {/* Glow */}
          <g className="fi-glow">
            <circle cx="252" cy="125" r="9"
              fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
          </g>
        </g>

        {/* ── Generated image preview ── */}
        <g className="fi-img">
          <rect x="274" y="65" width="148" height="120" rx="10"
            fill="rgba(5,10,30,0.9)" stroke="rgba(46,219,180,0.35)" strokeWidth="1.2"/>

          {/* Generated image content */}
          <rect x="276" y="67" width="144" height="116" rx="8" fill="url(#fi-img)"/>

          {/* Abstract AI-generated image suggestion: pixel blocks */}
          <g className="fi-px1">
            <rect x="285" y="78" width="20" height="20" rx="4" fill="rgba(46,219,180,0.25)"/>
            <rect x="291" y="84" width="8" height="8" rx="2" fill="rgba(46,219,180,0.5)"/>
          </g>
          <rect x="312" y="78" width="14" height="14" rx="3" fill="rgba(91,141,239,0.3)"/>
          <rect x="333" y="78" width="20" height="20" rx="4" fill="rgba(155,107,223,0.25)"/>

          <g className="fi-px2">
            <rect x="285" y="106" width="24" height="18" rx="4" fill="rgba(46,219,180,0.2)"/>
          </g>
          <rect x="316" y="106" width="50" height="18" rx="4" fill="rgba(91,141,239,0.15)"/>
          <g className="fi-px3">
            <rect x="374" y="106" width="38" height="18" rx="4" fill="rgba(239,126,91,0.2)"/>
          </g>

          <rect x="285" y="132" width="125" height="12" rx="3" fill="rgba(46,219,180,0.1)"/>
          <rect x="285" y="148" width="80" height="8" rx="3" fill="rgba(245,244,240,0.08)"/>
          <rect x="372" y="148" width="38" height="8" rx="3" fill="rgba(46,219,180,0.15)"/>

          {/* "AI" watermark */}
          <text x="348" y="92"
            fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="22" fill="rgba(46,219,180,0.1)">
            AI
          </text>

          {/* Resolution badge */}
          <rect x="284" y="166" width="40" height="12" rx="4"
            fill="rgba(0,0,0,0.5)"/>
          <text x="304" y="175" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill={T}>
            4K · HD
          </text>

          {/* Tool labels */}
          <rect x="332" y="166" width="54" height="12" rx="4"
            fill="rgba(46,219,180,0.12)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.7"/>
          <text x="359" y="175" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill={T}>
            Midjourney
          </text>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="fi-b1">
        <rect x="32" y="222" width="78" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="71" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Midjourney
        </text>
      </g>
      <g className="fi-b2">
        <rect x="118" y="222" width="72" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="154" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Ideogram
        </text>
      </g>
      <g className="fi-b3">
        <rect x="198" y="222" width="44" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="220" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          1h
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="30" y1="215" x2="450" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="fi-m1">
        <g className="fi-a1">
          <polygon points="312,219 307,228 317,228" fill={T}/>
        </g>
        <text x="312" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5" fill={T}>Prompts</text>
        <text x="312" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">MAÎTRISÉS</text>
      </g>

      <line x1="360" y1="218" x2="360" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="fi-m2">
        <g className="fi-a2">
          <polygon points="388,219 383,228 393,228" fill={T}/>
        </g>
        <text x="388" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5" fill={T}>IA Flow</text>
        <text x="388" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">WORKFLOW</text>
      </g>

      <line x1="424" y1="218" x2="424" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="fi-m3">
        <g className="fi-a3">
          <polygon points="444,219 439,228 449,228" fill={T}/>
        </g>
        <text x="444" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>+80%</text>
        <text x="444" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">TEMPS</text>
      </g>
    </svg>
  )
}
