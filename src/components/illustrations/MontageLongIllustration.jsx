const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .ml-card { animation: mlCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }

  .ml-track1 { animation: mlTrack .5s ease .7s  both; }
  .ml-track2 { animation: mlTrack .5s ease .85s both; }
  .ml-track3 { animation: mlTrack .5s ease 1.0s both; }

  .ml-head  { animation: mlHeadIn .6s ease .9s both; }
  .ml-label { animation: mlFade .4s ease 1.1s both; }

  .ml-b1 { animation: mlBadge .45s cubic-bezier(.34,1.56,.64,1) .75s both;
            transform-box:fill-box; transform-origin:center; }
  .ml-b2 { animation: mlBadge .45s cubic-bezier(.34,1.56,.64,1) .92s both;
            transform-box:fill-box; transform-origin:center; }
  .ml-b3 { animation: mlBadge .45s cubic-bezier(.34,1.56,.64,1) 1.08s both;
            transform-box:fill-box; transform-origin:center; }

  .ml-m1 { animation: mlUp .4s ease 1.2s  both; }
  .ml-m2 { animation: mlUp .4s ease 1.35s both; }
  .ml-m3 { animation: mlUp .4s ease 1.5s  both; }

  .ml-a1 { animation: mlArrow 1.7s ease-in-out 0s   infinite;
            transform-box:fill-box; transform-origin:center; }
  .ml-a2 { animation: mlArrow 1.7s ease-in-out .55s infinite;
            transform-box:fill-box; transform-origin:center; }
  .ml-a3 { animation: mlArrow 1.7s ease-in-out 1.1s infinite;
            transform-box:fill-box; transform-origin:center; }

  .ml-conn { animation: mlConn .6s ease 1.0s both; }
  .ml-pls  { animation: mlPulse 2.4s ease-out 1.1s infinite;
             transform-box:fill-box; transform-origin:center; }

  @keyframes mlCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1)   translateY(0); }
  }
  @keyframes mlTrack {
    from { opacity:0; transform:scaleX(0); transform-origin:left; }
    to   { opacity:1; transform:scaleX(1); transform-origin:left; }
  }
  @keyframes mlHeadIn {
    from { opacity:0; transform:translateX(-20px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes mlFade {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes mlBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes mlUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes mlArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
  @keyframes mlConn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes mlPulse {
    0%   { opacity:.55; transform:scale(1); }
    100% { opacity:0;   transform:scale(3.2); }
  }
`

export default function MontageLongIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block', borderRadius: '14px',
               background: 'rgba(9,22,54,0.6)', border: '1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Montage vidéo long format"
    >
      <defs>
        <style>{css}</style>
        <linearGradient id="ml-hdr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(46,219,180,0.09)"/>
          <stop offset="100%" stopColor="rgba(46,219,180,0)"/>
        </linearGradient>
        <linearGradient id="ml-preview" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(6,14,40,0.98)"/>
          <stop offset="60%"  stopColor="rgba(13,28,66,0.95)"/>
          <stop offset="100%" stopColor="rgba(20,40,90,0.9)"/>
        </linearGradient>
        <filter id="ml-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── MAIN EDITOR CARD ──────────────────────────────── */}
      <g className="ml-card">
        <rect x="80" y="14" width="320" height="188" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <rect x="80" y="14" width="320" height="42" rx="14" fill="url(#ml-hdr)"/>
        <rect x="80" y="42" width="320" height="14" fill="url(#ml-hdr)"/>

        {/* Header */}
        <text x="240" y="30" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={W}>
          Éditeur de montage
        </text>
        <text x="240" y="44" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>
          Projet : Interview CEO · 3 caméras · 4K
        </text>

        <line x1="90" y1="54" x2="390" y2="54" stroke={FT} strokeWidth="1"/>

        {/* ── VIDEO PREVIEW FRAME (16:9) ── */}
        <rect x="90" y="58" width="200" height="112" rx="5"
          fill="url(#ml-preview)" stroke="rgba(46,219,180,0.2)" strokeWidth="1"/>

        {/* Play button */}
        <g filter="url(#ml-glow)">
          <circle cx="190" cy="114" r="16" fill="rgba(46,219,180,0.15)" stroke={T} strokeWidth="1.2"/>
          <polygon points="185,107 185,121 200,114" fill={T}/>
        </g>
        <circle className="ml-pls" cx="190" cy="114" r="16" fill="none"
          stroke="rgba(46,219,180,0.4)" strokeWidth="1.5"/>

        {/* Timecode */}
        <text x="96" y="70"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={T}>
          00:42:18:12
        </text>
        <text x="283" y="70"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="6.5" fill={MT}>
          4K · H.264
        </text>

        {/* Camera angle thumbnails on right */}
        <rect x="300" y="58" width="90" height="34" rx="4"
          fill="rgba(46,219,180,0.08)" stroke="rgba(46,219,180,0.2)" strokeWidth="0.8"/>
        <text x="345" y="70" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>CAM 1</text>
        <circle cx="345" cy="82" r="8" fill="rgba(46,219,180,0.15)"/>
        <polygon points="341,78 341,86 351,82" fill={T} opacity="0.8"/>

        <rect x="300" y="96" width="90" height="34" rx="4"
          fill="rgba(46,219,180,0.05)" stroke="rgba(46,219,180,0.15)" strokeWidth="0.8"/>
        <text x="345" y="108" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>CAM 2</text>
        <circle cx="345" cy="120" r="8" fill="rgba(46,219,180,0.08)"/>
        <polygon points="341,116 341,124 351,120" fill={MT} opacity="0.6"/>

        <rect x="300" y="134" width="90" height="34" rx="4"
          fill="rgba(46,219,180,0.05)" stroke="rgba(46,219,180,0.12)" strokeWidth="0.8"/>
        <text x="345" y="146" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6" fill={MT}>CAM 3</text>
        <circle cx="345" cy="158" r="8" fill="rgba(46,219,180,0.06)"/>
        <polygon points="341,154 341,162 351,158" fill={MT} opacity="0.4"/>

        {/* ── TIMELINE TRACKS ── */}
        <line x1="90" y1="172" x2="390" y2="172" stroke={FT} strokeWidth="1"/>

        {/* Track labels */}
        <g className="ml-label">
          <text x="90" y="183"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT}>VID</text>
          <text x="90" y="193"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT}>SON</text>
          <text x="90" y="203"
            fontFamily="Montserrat,sans-serif" fontSize="5.5" fill={MT}>FX</text>
        </g>

        {/* Video track (teal) */}
        <g className="ml-track1" style={{transformBox:'fill-box',transformOrigin:'left center'}}>
          <rect x="104" y="177" width="50" height="8" rx="2" fill="rgba(46,219,180,0.5)"/>
          <rect x="158" y="177" width="30" height="8" rx="2" fill="rgba(46,219,180,0.35)"/>
          <rect x="192" y="177" width="70" height="8" rx="2" fill="rgba(46,219,180,0.5)"/>
          <rect x="266" y="177" width="40" height="8" rx="2" fill="rgba(46,219,180,0.3)"/>
          <rect x="310" y="177" width="70" height="8" rx="2" fill="rgba(46,219,180,0.45)"/>
        </g>

        {/* Audio track (muted blue) */}
        <g className="ml-track2" style={{transformBox:'fill-box',transformOrigin:'left center'}}>
          <rect x="104" y="189" width="276" height="6" rx="2" fill="rgba(122,138,170,0.35)"/>
          {/* Audio waveform hint */}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27].map(i => (
            <rect key={i}
              x={105 + i*10} y={189 + (i%3===0?0:i%3===1?1:2)}
              width="8" height={i%3===0?6:i%3===1?4:5}
              rx="1" fill="rgba(122,138,170,0.2)"/>
          ))}
        </g>

        {/* Effects track */}
        <g className="ml-track3" style={{transformBox:'fill-box',transformOrigin:'left center'}}>
          <rect x="104" y="199" width="40" height="5" rx="2" fill="rgba(255,180,50,0.35)"/>
          <rect x="188" y="199" width="25" height="5" rx="2" fill="rgba(255,180,50,0.25)"/>
          <rect x="290" y="199" width="90" height="5" rx="2" fill="rgba(255,180,50,0.3)"/>
        </g>

        {/* Playhead */}
        <g className="ml-head">
          <line x1="192" y1="172" x2="192" y2="205"
            stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
          <polygon points="188,172 196,172 192,177" fill={T}/>
        </g>
      </g>

      {/* ── CONNECTOR LINES ───────────────────────────────── */}
      <g className="ml-conn">
        <line x1="60" y1="40"  x2="80"  y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="420" y1="40" x2="400" y2="52"
          stroke="rgba(46,219,180,0.2)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="60" y1="172" x2="80"  y2="162"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
        <line x1="420" y1="172" x2="400" y2="162"
          stroke="rgba(46,219,180,0.14)" strokeWidth="0.9" strokeDasharray="3,2.5"/>
      </g>

      {/* ── BADGES ────────────────────────────────────────── */}
      <g className="ml-b1">
        <rect x="4" y="28" width="54" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="31" y="41" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>
          Multi-cam
        </text>
      </g>
      <g className="ml-b2">
        <rect x="422" y="28" width="54" height="20" rx="10"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="449" y="41" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill={T}>
          Étalonnage
        </text>
      </g>
      <g className="ml-b3">
        <rect x="4" y="162" width="54" height="20" rx="10"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="31" y="175" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7"
          fill="rgba(46,219,180,0.9)">
          HD · 4K
        </text>
      </g>

      {/* ── METRICS ───────────────────────────────────────── */}
      <line x1="44" y1="218" x2="436" y2="218" stroke={FT} strokeWidth="1"/>

      <g className="ml-m1">
        <g className="ml-a1">
          <polygon points="148,222 143,231 153,231" fill={T}/>
        </g>
        <text x="148" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          60→180s
        </text>
        <text x="148" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">DURÉE</text>
      </g>

      <line x1="204" y1="220" x2="204" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="ml-m2">
        <g className="ml-a2">
          <polygon points="240,222 235,231 245,231" fill={T}/>
        </g>
        <text x="240" y="245" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="11" fill={T}>
          3
        </text>
        <text x="240" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">PISTES</text>
      </g>

      <line x1="296" y1="220" x2="296" y2="260" stroke={FT} strokeWidth="1"/>

      <g className="ml-m3">
        <g className="ml-a3">
          <polygon points="338,222 333,231 343,231" fill={T}/>
        </g>
        <text x="338" y="243" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9" fill={T}>
          Multi-fmt
        </text>
        <text x="338" y="257" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6.5"
          fill={MT} letterSpacing="1.2">EXPORT</text>
      </g>
    </svg>
  )
}
