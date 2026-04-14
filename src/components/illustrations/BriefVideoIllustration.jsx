const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .bv-card { animation: bvCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .bv-clap { animation: bvClap .5s cubic-bezier(.34,1.56,.64,1) .5s both;
             transform-box:fill-box; transform-origin:center; }
  .bv-row1 { animation: bvSlide .4s ease .7s both; }
  .bv-row2 { animation: bvSlide .4s ease .88s both; }
  .bv-row3 { animation: bvSlide .4s ease 1.06s both; }
  .bv-b1 { animation: bvBadge .45s cubic-bezier(.34,1.56,.64,1) .9s both;
            transform-box:fill-box; transform-origin:center; }
  .bv-b2 { animation: bvBadge .45s cubic-bezier(.34,1.56,.64,1) 1.07s both;
            transform-box:fill-box; transform-origin:center; }
  .bv-b3 { animation: bvBadge .45s cubic-bezier(.34,1.56,.64,1) 1.24s both;
            transform-box:fill-box; transform-origin:center; }
  .bv-m1 { animation: bvUp .4s ease 1.1s  both; }
  .bv-m2 { animation: bvUp .4s ease 1.28s both; }
  .bv-m3 { animation: bvUp .4s ease 1.46s both; }
  .bv-a1 { animation: bvArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .bv-a2 { animation: bvArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .bv-a3 { animation: bvArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }
  .bv-blink { animation: bvBlink 1.2s step-end 1.5s infinite; }
  @keyframes bvCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes bvClap {
    from { opacity:0; transform:scale(0) rotate(-15deg); }
    to   { opacity:1; transform:scale(1) rotate(0deg); }
  }
  @keyframes bvSlide {
    from { opacity:0; transform:translateX(-14px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes bvBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes bvUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes bvArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes bvBlink {
    0%,100% { opacity:1; }
    50%     { opacity:0; }
  }
`

export default function BriefVideoIllustration() {
  const scenes = [
    { num: '01', time: '0:00–0:15', type: 'Talking Head', icon: '👤', color: '#2EDBB4' },
    { num: '02', time: '0:15–0:32', type: 'B-Roll',       icon: '🎬', color: '#5B8DEF' },
    { num: '03', time: '0:32–0:55', type: 'CTA Final',    icon: '🎯', color: '#EF7E5B' },
  ]

  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Brief vidéo et script de production"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="bv-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
      </defs>

      {/* ══ MAIN CARD ══════════════════════════════════════ */}
      <g className="bv-card">
        <rect x="60" y="14" width="360" height="196" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="60" y="14" width="360" height="52" rx="14" fill="url(#bv-hdr)"/>
        <rect x="60" y="42" width="360" height="24" fill="url(#bv-hdr)"/>

        {/* Clipboard rings */}
        <rect x="214" y="8" width="52" height="14" rx="7"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.35)" strokeWidth="1.2"/>

        {/* Clapperboard */}
        <g className="bv-clap">
          {/* Board body */}
          <rect x="66" y="20" width="38" height="28" rx="3"
            fill="rgba(0,0,0,0.55)" stroke="rgba(46,219,180,0.4)" strokeWidth="1"/>
          {/* Clap strips */}
          {[0,1,2,3].map(i => (
            <rect key={i} x="66" y={20 + i * 4} width="38" height="3"
              fill={i % 2 === 0 ? 'rgba(245,244,240,0.9)' : 'rgba(0,0,0,0.7)'}/>
          ))}
          {/* Clap arm */}
          <rect x="66" y="14" width="38" height="8" rx="2"
            fill="rgba(46,219,180,0.7)" stroke="rgba(46,219,180,0.9)" strokeWidth="0.8"/>
          <line x1="80" y1="14" x2="76" y2="22" stroke="rgba(0,0,0,0.4)" strokeWidth="1"/>
          <line x1="92" y1="14" x2="88" y2="22" stroke="rgba(0,0,0,0.4)" strokeWidth="1"/>
        </g>

        {/* Title */}
        <text x="114" y="35"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={W}>
          Brief Vidéo &amp; Script
        </text>
        <text x="114" y="50"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Document de production · 3 scènes · 0:55 total
        </text>

        {/* Separator */}
        <line x1="70" y1="62" x2="410" y2="62" stroke={FT} strokeWidth="1"/>

        {/* Column headers */}
        <rect x="70" y="66" width="340" height="16" rx="3"
          fill="rgba(46,219,180,0.05)"/>
        <text x="86" y="77" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T} letterSpacing="0.8">SCÈNE</text>
        <text x="138" y="77" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T} letterSpacing="0.8">TIMECODE</text>
        <text x="218" y="77" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T} letterSpacing="0.8">TYPE</text>
        <text x="308" y="77" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T} letterSpacing="0.8">NOTES</text>

        {/* Scene rows */}
        {scenes.map((sc, i) => {
          const ry = 86 + i * 32
          const cls = `bv-row${i+1}`
          const notes = ['Plan serré, regard caméra', 'Extérieur, mouvement', 'Texte + logo animé'][i]
          return (
            <g key={i} className={cls}>
              <rect x="70" y={ry} width="340" height="26" rx="4"
                fill={i % 2 === 0 ? 'rgba(46,219,180,0.03)' : 'rgba(0,0,0,0.15)'}
                stroke={`${sc.color}22`} strokeWidth="0.6"/>

              {/* Scene number badge */}
              <rect x="76" y={ry + 5} width="34" height="16" rx="4"
                fill={`${sc.color}22`} stroke={`${sc.color}66`} strokeWidth="0.7"/>
              <text x="93" y={ry + 16} textAnchor="middle"
                fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="7.5" fill={sc.color}>
                #{sc.num}
              </text>

              {/* Timecode */}
              <text x="138" y={ry + 16}
                fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="7.5" fill={W}>
                {sc.time}
              </text>

              {/* Type tag */}
              <rect x="214" y={ry + 5} width="60" height="16" rx="4"
                fill={`${sc.color}18`} stroke={`${sc.color}44`} strokeWidth="0.7"/>
              <text x="244" y={ry + 16} textAnchor="middle"
                fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={sc.color}>
                {sc.type}
              </text>

              {/* Notes */}
              <text x="308" y={ry + 16}
                fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={MT}>
                {notes}
              </text>
            </g>
          )
        })}

        {/* Separator */}
        <line x1="70" y1="186" x2="410" y2="186" stroke={FT} strokeWidth="1"/>

        {/* Status row */}
        <text x="84" y="200"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
          Statut:
        </text>
        <rect x="108" y="191" width="52" height="14" rx="4"
          fill="rgba(46,219,180,0.15)" stroke="rgba(46,219,180,0.4)" strokeWidth="0.7"/>
        <text x="134" y="201" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          Validé ✓
        </text>
        <text x="170" y="200"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
          Livraison:
        </text>
        <text x="210" y="200"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={W}>
          48h
        </text>
        <text className="bv-blink" x="218" y="200"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>|</text>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="bv-b1">
        <rect x="38" y="222" width="64" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="70" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Script ✓
        </text>
      </g>
      <g className="bv-b2">
        <rect x="110" y="222" width="100" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="160" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Tournage guidé
        </text>
      </g>
      <g className="bv-b3">
        <rect x="218" y="222" width="52" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="244" y="237" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          48h
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="60" y1="215" x2="420" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="bv-m1">
        <g className="bv-a1">
          <polygon points="340,219 335,228 345,228" fill={T}/>
        </g>
        <text x="340" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>3</text>
        <text x="340" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">SCÈNES</text>
      </g>

      <line x1="364" y1="218" x2="364" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="bv-m2">
        <g className="bv-a2">
          <polygon points="390,219 385,228 395,228" fill={T}/>
        </g>
        <text x="390" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5" fill={T}>0:55</text>
        <text x="390" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">CADRÉ</text>
      </g>

      <line x1="418" y1="218" x2="418" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="bv-m3">
        <g className="bv-a3">
          <polygon points="440,219 435,228 445,228" fill={T}/>
        </g>
        <text x="440" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>100%</text>
        <text x="440" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">AUTONOME</text>
      </g>
    </svg>
  )
}
