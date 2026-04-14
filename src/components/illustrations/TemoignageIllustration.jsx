const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .tm-card { animation: tmCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .tm-bubble { animation: tmBubble .55s cubic-bezier(.34,1.56,.64,1) .3s both;
               transform-box:fill-box; transform-origin:center bottom; }
  .tm-b1 { animation: tmBadge .45s cubic-bezier(.34,1.56,.64,1) .9s both;
            transform-box:fill-box; transform-origin:center; }
  .tm-b2 { animation: tmBadge .45s cubic-bezier(.34,1.56,.64,1) 1.07s both;
            transform-box:fill-box; transform-origin:center; }
  .tm-s1 { animation: tmStar .28s ease .8s  both; transform-box:fill-box; transform-origin:center; }
  .tm-s2 { animation: tmStar .28s ease .92s both; transform-box:fill-box; transform-origin:center; }
  .tm-s3 { animation: tmStar .28s ease 1.04s both; transform-box:fill-box; transform-origin:center; }
  .tm-s4 { animation: tmStar .28s ease 1.16s both; transform-box:fill-box; transform-origin:center; }
  .tm-s5 { animation: tmStar .28s ease 1.28s both; transform-box:fill-box; transform-origin:center; }
  .tm-vid { animation: tmFade .5s ease 1.0s both; }
  .tm-play { animation: tmPulse 2s ease-in-out 1.5s infinite; transform-box:fill-box; transform-origin:center; }
  .tm-m1 { animation: tmUp .4s ease 1.1s  both; }
  .tm-m2 { animation: tmUp .4s ease 1.28s both; }
  .tm-m3 { animation: tmUp .4s ease 1.46s both; }
  .tm-a1 { animation: tmArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .tm-a2 { animation: tmArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .tm-a3 { animation: tmArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  @keyframes tmCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes tmBubble {
    from { opacity:0; transform:scale(.85); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes tmBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes tmStar {
    from { opacity:0; transform:scale(0) rotate(-40deg); }
    to   { opacity:1; transform:scale(1) rotate(0deg); }
  }
  @keyframes tmFade {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes tmPulse {
    0%,100% { opacity:.7; transform:scale(1); }
    50%     { opacity:1;  transform:scale(1.12); }
  }
  @keyframes tmUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes tmArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
`

export default function TemoignageIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Témoignage client vidéo"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="tm-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <filter id="tm-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="tm-card">
        <rect x="30" y="18" width="420" height="192" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="30" y="18" width="420" height="50" rx="14" fill="url(#tm-hdr)"/>
        <rect x="30" y="45" width="420" height="23" fill="url(#tm-hdr)"/>

        {/* Header */}
        <text x="50" y="37"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Témoignage Client
        </text>
        <text x="50" y="51"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Vidéo authentique · Identité intégrée
        </text>

        {/* Separator */}
        <line x1="40" y1="62" x2="440" y2="62" stroke={FT} strokeWidth="1"/>

        {/* ── Speech bubble ── */}
        <g className="tm-bubble">
          {/* Bubble shape */}
          <rect x="40" y="70" width="246" height="104" rx="12"
            fill="rgba(46,219,180,0.06)" stroke="rgba(46,219,180,0.28)" strokeWidth="1"/>
          {/* Bubble tail */}
          <polygon points="60,174 76,174 68,184"
            fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.28)" strokeWidth="1"/>

          {/* Opening quote mark */}
          <text x="52" y="92"
            fontFamily="Georgia,serif" fontSize="38" fill="rgba(46,219,180,0.18)">"</text>

          {/* Quote lines */}
          <rect x="80" y="80" width="188" height="7" rx="3.5" fill="rgba(245,244,240,0.12)"/>
          <rect x="80" y="92" width="170" height="7" rx="3.5" fill="rgba(245,244,240,0.10)"/>
          <rect x="80" y="104" width="182" height="7" rx="3.5" fill="rgba(245,244,240,0.10)"/>
          <rect x="80" y="116" width="145" height="7" rx="3.5" fill="rgba(245,244,240,0.08)"/>

          {/* Actual short text */}
          <text x="80" y="84"
            fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="7.5" fill={W}>
            "Résultats impressionnants dès le premier mois,
          </text>
          <text x="80" y="96"
            fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="rgba(245,244,240,0.85)">
            notre taux de conversion a doublé grâce
          </text>
          <text x="80" y="108"
            fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="rgba(245,244,240,0.85)">
            à la vidéo de témoignage réalisée par AWIMA."
          </text>

          {/* Separator inside bubble */}
          <line x1="50" y1="126" x2="276" y2="126" stroke={FT} strokeWidth="1"/>

          {/* Avatar circle */}
          <circle cx="62" cy="150" r="14"
            fill="rgba(46,219,180,0.15)" stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
          <circle cx="62" cy="146" r="5" fill="rgba(46,219,180,0.4)"/>
          <path d="M50,162 Q62,154 74,162" fill="rgba(46,219,180,0.3)"/>

          {/* Name + role */}
          <text x="82" y="144"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={W}>
            Marie Dupont
          </text>
          <text x="82" y="156"
            fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
            Directrice Marketing · TechCorp
          </text>

          {/* Stars */}
          {[0,1,2,3,4].map(i => (
            <text key={i} className={`tm-s${i+1}`}
              x={82 + i * 14} y="170"
              fontFamily="Montserrat,sans-serif" fontSize="13" fill="#FBBC04">★</text>
          ))}
        </g>

        {/* ── Video thumbnail ── */}
        <g className="tm-vid">
          <rect x="298" y="70" width="132" height="80" rx="9"
            fill="rgba(0,0,0,0.45)" stroke="rgba(46,219,180,0.25)" strokeWidth="1"/>
          {/* Thumbnail gradient overlay */}
          <rect x="298" y="70" width="132" height="80" rx="9"
            fill="rgba(46,219,180,0.04)"/>
          {/* Grid lines suggesting video frame */}
          <line x1="298" y1="97" x2="430" y2="97" stroke="rgba(46,219,180,0.07)" strokeWidth="0.7"/>
          <line x1="298" y1="120" x2="430" y2="120" stroke="rgba(46,219,180,0.07)" strokeWidth="0.7"/>
          <line x1="342" y1="70" x2="342" y2="150" stroke="rgba(46,219,180,0.07)" strokeWidth="0.7"/>
          <line x1="386" y1="70" x2="386" y2="150" stroke="rgba(46,219,180,0.07)" strokeWidth="0.7"/>

          {/* Person silhouette */}
          <circle cx="364" cy="95" r="10" fill="rgba(46,219,180,0.2)"/>
          <path d="M347,118 Q364,108 381,118" fill="rgba(46,219,180,0.15)" stroke="none"/>

          {/* Play button */}
          <g className="tm-play" filter="url(#tm-glow)">
            <circle cx="364" cy="110" r="14"
              fill="rgba(46,219,180,0.25)" stroke={T} strokeWidth="1.5"/>
            <polygon points="360,104 360,116 372,110" fill={T}/>
          </g>

          {/* Duration label */}
          <rect x="304" y="140" width="30" height="12" rx="3"
            fill="rgba(0,0,0,0.6)"/>
          <text x="319" y="149" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={W}>
            1:47
          </text>

          {/* "Témoignage" label below thumb */}
          <text x="364" y="164" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7.5" fill={T}>
            Voir le témoignage
          </text>
          <text x="364" y="176" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={MT}>
            Format 16:9 · Sous-titré
          </text>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="tm-b1">
        <rect x="52" y="222" width="82" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="93" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Authentique
        </text>
      </g>
      <g className="tm-b2">
        <rect x="142" y="222" width="112" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="198" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          Identité intégrée
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="30" y1="215" x2="450" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="tm-m1">
        <g className="tm-a1">
          <polygon points="330,219 325,228 335,228" fill={T}/>
        </g>
        <text x="330" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>+340%</text>
        <text x="330" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">CONFIANCE</text>
      </g>

      <line x1="370" y1="218" x2="370" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="tm-m2">
        <g className="tm-a2">
          <polygon points="400,219 395,228 405,228" fill={T}/>
        </g>
        <text x="400" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>5★</text>
        <text x="400" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">NOTE MOY.</text>
      </g>

      <line x1="432" y1="218" x2="432" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="tm-m3">
        <g className="tm-a3">
          <polygon points="452,219 447,228 457,228" fill={T}/>
        </g>
        <text x="452" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>×2.3</text>
        <text x="452" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">CTR</text>
      </g>
    </svg>
  )
}
