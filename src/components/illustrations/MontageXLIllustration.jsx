const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .mx-card { animation: mxCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .mx-b1 { animation: mxBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .mx-b2 { animation: mxBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .mx-b3 { animation: mxBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }
  .mx-m1 { animation: mxUp .4s ease 1.1s  both; }
  .mx-m2 { animation: mxUp .4s ease 1.28s both; }
  .mx-m3 { animation: mxUp .4s ease 1.46s both; }
  .mx-a1 { animation: mxArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .mx-a2 { animation: mxArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .mx-a3 { animation: mxArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }
  .mx-ph { animation: mxPlayhead 3s ease-in-out 1s infinite; }
  .mx-glow { animation: mxGlow 2.5s ease-in-out 0s infinite; }
  .mx-cl1 { animation: mxClip 2.8s ease-in-out 0.3s infinite; }
  .mx-cl2 { animation: mxClip 2.8s ease-in-out 0.9s infinite; }
  @keyframes mxCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes mxBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes mxUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes mxArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes mxPlayhead {
    0%,100% { transform:translateX(0); }
    50%     { transform:translateX(6px); }
  }
  @keyframes mxGlow {
    0%,100% { opacity:.4; }
    50%     { opacity:1; }
  }
  @keyframes mxClip {
    0%,100% { opacity:.7; }
    50%     { opacity:1; }
  }
`

export default function MontageXLIllustration() {
  const tracks = [
    { label: 'VIDEO',   color: '#2EDBB4', y: 86,  clips: [[0,42],[48,30],[84,38],[128,28],[162,36]] },
    { label: 'AUDIO 1', color: '#5B8DEF', y: 108, clips: [[0,60],[66,45],[117,55],[178,24]] },
    { label: 'AUDIO 2', color: '#9B6BDF', y: 130, clips: [[10,35],[52,28],[90,50],[148,38]] },
    { label: 'EFFETS',  color: '#EF7E5B', y: 152, clips: [[0,18],[25,15],[48,22],[80,18],[108,25],[140,20],[168,24]] },
    { label: 'TITRES',  color: '#F5C842', y: 174, clips: [[0,55],[62,40],[110,60]] },
  ]

  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Montage format très long — timeline multi-pistes"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="mx-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <clipPath id="mx-clip">
          <rect x="116" y="82" width="214" height="98" rx="0"/>
        </clipPath>
        <filter id="mx-gf" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ══ MAIN CARD ═══════════════════════════════════════ */}
      <g className="mx-card">
        <rect x="44" y="18" width="392" height="192" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="44" y="18" width="392" height="55" rx="14" fill="url(#mx-hdr)"/>
        <rect x="44" y="50" width="392" height="23" fill="url(#mx-hdr)"/>

        {/* Preview window */}
        <rect x="54" y="26" width="54" height="36" rx="5"
          fill="rgba(0,0,0,0.5)" stroke="rgba(46,219,180,0.3)" strokeWidth="0.8"/>
        {/* Widescreen content suggestion */}
        <rect x="58" y="30" width="46" height="28" rx="3" fill="rgba(46,219,180,0.06)"/>
        <line x1="58" y1="38" x2="104" y2="38" stroke="rgba(46,219,180,0.15)" strokeWidth="0.5"/>
        <line x1="58" y1="44" x2="104" y2="44" stroke="rgba(46,219,180,0.1)" strokeWidth="0.5"/>
        <line x1="58" y1="50" x2="104" y2="50" stroke="rgba(46,219,180,0.08)" strokeWidth="0.5"/>
        {/* Play triangle */}
        <polygon points="77,39 77,51 87,45" fill="rgba(46,219,180,0.55)"/>

        {/* Title */}
        <text x="116" y="38"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Montage XL — Documentaire
        </text>
        <text x="116" y="52"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          Timeline · 5 pistes · 3h 24min · Master 4K
        </text>

        {/* Timecode */}
        <rect x="358" y="26" width="70" height="18" rx="4"
          fill="rgba(0,0,0,0.4)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.7"/>
        <text x="393" y="38" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>
          03:24:17:12
        </text>

        {/* Separator */}
        <line x1="54" y1="68" x2="426" y2="68" stroke={FT} strokeWidth="1"/>

        {/* Track labels column */}
        {tracks.map((tr, i) => (
          <g key={i}>
            <rect x="54" y={tr.y - 9} width="56" height="17" rx="3"
              fill="rgba(0,0,0,0.35)" stroke={`${tr.color}33`} strokeWidth="0.6"/>
            <text x="82" y={tr.y + 3} textAnchor="middle"
              fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6" fill={tr.color}>
              {tr.label}
            </text>
          </g>
        ))}

        {/* Timeline area background */}
        <rect x="116" y="72" width="304" height="108" rx="4"
          fill="rgba(0,0,0,0.3)"/>

        {/* Time ruler */}
        {[0,1,2,3,4,5,6].map(i => (
          <g key={i}>
            <line x1={116 + i*44} y1="72" x2={116 + i*44} y2="180"
              stroke="rgba(255,255,255,0.04)" strokeWidth="0.7"/>
            <text x={116 + i*44 + 2} y="80"
              fontFamily="Montserrat,sans-serif" fontSize="5.5" fill="rgba(122,138,170,0.4)">
              {`${i*30}min`}
            </text>
          </g>
        ))}

        {/* Clips on each track */}
        {tracks.map((tr, ti) =>
          tr.clips.map((clip, ci) => {
            const cx = 116 + (clip[0] / 215) * 304
            const cw = (clip[1] / 215) * 304
            return (
              <g key={`${ti}-${ci}`} className={ci % 2 === 0 ? 'mx-cl1' : 'mx-cl2'}>
                <rect x={cx} y={tr.y - 8} width={cw} height="14" rx="2.5"
                  fill={`${tr.color}28`} stroke={`${tr.color}88`} strokeWidth="0.7"/>
                {cw > 18 && (
                  <text x={cx + 3} y={tr.y + 2}
                    fontFamily="Montserrat,sans-serif" fontSize="5" fill={`${tr.color}cc`}>
                    {ci === 0 ? 'Clip' : `C${ci+1}`}
                  </text>
                )}
              </g>
            )
          })
        )}

        {/* Playhead */}
        <g className="mx-ph">
          <line x1="230" y1="72" x2="230" y2="180"
            stroke="rgba(46,219,180,0.9)" strokeWidth="1.2"/>
          <polygon points="226,72 234,72 230,78" fill={T}/>
        </g>
      </g>

      {/* ══ BADGES ════════════════════════════════════════ */}
      <g className="mx-b1">
        <rect x="52" y="220" width="88" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="96" y="235" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Documentaire
        </text>
      </g>
      <g className="mx-b2">
        <rect x="148" y="220" width="88" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="192" y="235" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill={T}>
          Multi-pistes
        </text>
      </g>
      <g className="mx-b3">
        <rect x="244" y="220" width="72" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="280" y="235" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8.5" fill="rgba(46,219,180,0.9)">
          Sur devis
        </text>
      </g>

      {/* ══ METRICS ════════════════════════════════════════ */}
      <line x1="44" y1="215" x2="436" y2="215" stroke={FT} strokeWidth="1"/>

      <g className="mx-m1">
        <g className="mx-a1">
          <polygon points="358,219 353,228 363,228" fill={T}/>
        </g>
        <text x="358" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>3h+</text>
        <text x="358" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">DURÉE</text>
      </g>

      <line x1="383" y1="218" x2="383" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="mx-m2">
        <g className="mx-a2">
          <polygon points="404,219 399,228 409,228" fill={T}/>
        </g>
        <text x="404" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>5</text>
        <text x="404" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">PISTES</text>
      </g>

      <line x1="421" y1="218" x2="421" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="mx-m3">
        <g className="mx-a3">
          <polygon points="436,219 431,228 441,228" fill={T}/>
        </g>
        <text x="436" y="242" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>4K</text>
        <text x="436" y="254" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1">MASTER</text>
      </g>
    </svg>
  )
}
