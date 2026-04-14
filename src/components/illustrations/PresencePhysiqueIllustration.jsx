const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .pp-card  { animation: ppCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .pp-b1 { animation: ppBadge .45s cubic-bezier(.34,1.56,.64,1) .8s  both; transform-box:fill-box; transform-origin:center; }
  .pp-b2 { animation: ppBadge .45s cubic-bezier(.34,1.56,.64,1) .96s both; transform-box:fill-box; transform-origin:center; }
  .pp-b3 { animation: ppBadge .45s cubic-bezier(.34,1.56,.64,1) 1.1s both; transform-box:fill-box; transform-origin:center; }
  .pp-pin  { animation: ppPin .6s cubic-bezier(.34,1.56,.64,1) .7s both; transform-box:fill-box; transform-origin:bottom center; }
  .pp-pls  { animation: ppPulse 2.2s ease-out .9s infinite; transform-box:fill-box; transform-origin:center; }
  .pp-day  { animation: ppDay .4s cubic-bezier(.34,1.56,.64,1) .9s both; transform-box:fill-box; transform-origin:center; }
  .pp-s1 { animation: ppStep .5s ease 1.0s both; }
  .pp-s2 { animation: ppStep .5s ease 1.2s both; }
  .pp-s3 { animation: ppStep .5s ease 1.4s both; }
  .pp-m1 { animation: ppUp .4s ease 1.5s  both; }
  .pp-m2 { animation: ppUp .4s ease 1.65s both; }
  .pp-m3 { animation: ppUp .4s ease 1.8s  both; }
  .pp-a1 { animation: ppArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .pp-a2 { animation: ppArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .pp-a3 { animation: ppArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }

  @keyframes ppCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes ppBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes ppPin {
    from { opacity:0; transform:scale(0) translateY(10px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes ppPulse {
    0%   { opacity:.5; transform:scale(1); }
    100% { opacity:0;  transform:scale(3); }
  }
  @keyframes ppDay {
    from { opacity:0; transform:scale(0); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes ppStep {
    from { opacity:0; transform:translateX(-8px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes ppUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes ppArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
`

export default function PresencePhysiqueIllustration() {
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width:'100%', display:'block', borderRadius:'14px',
               background:'rgba(9,22,54,0.6)', border:'1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Présence physique ½ journée"
    >
      <defs><style>{css}</style></defs>

      <g className="pp-card">
        {/* ── Calendar card (left) */}
        <rect x="60" y="28" width="170" height="170" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>

        {/* Calendar header */}
        <rect x="60" y="28" width="170" height="36" rx="14" fill="rgba(46,219,180,0.1)"/>
        <rect x="60" y="50" width="170" height="14" fill="rgba(46,219,180,0.1)"/>
        <text x="145" y="50" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="800" fill={W}>Avril 2026</text>
        {/* Prev/next arrows */}
        <text x="76" y="50" fontFamily="Montserrat,sans-serif" fontSize="10" fill={MT}>‹</text>
        <text x="210" y="50" fontFamily="Montserrat,sans-serif" fontSize="10" fill={MT}>›</text>

        {/* Day labels */}
        {weekDays.map((d, i) => (
          <text key={i} x={74 + i * 22} y="72"
            textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fontWeight="700"
            fill={i >= 5 ? 'rgba(122,138,170,0.35)' : MT}>{d}</text>
        ))}

        {/* Calendar grid */}
        {[
          [null,1,2,3,4,5,6],
          [7,8,9,10,11,12,13],
          [14,15,16,17,18,19,20],
          [21,22,23,24,25,26,27],
        ].map((row, ri) => row.map((day, ci) => {
          if (!day) return null
          const isHighlighted = day === 17
          return (
            <g key={`${ri}-${ci}`} className={isHighlighted ? 'pp-day' : ''}>
              {isHighlighted && (
                <rect x={63 + ci * 22} y={78 + ri * 20} width="20" height="18" rx="5"
                  fill="rgba(46,219,180,0.25)" stroke={T} strokeWidth="1.2"/>
              )}
              <text x={73 + ci * 22} y={91 + ri * 20}
                textAnchor="middle" fontFamily="Montserrat,sans-serif"
                fontSize={isHighlighted ? '8' : '7'}
                fontWeight={isHighlighted ? '800' : '400'}
                fill={isHighlighted ? T : ci >= 5 ? 'rgba(122,138,170,0.3)' : MT}>
                {day}
              </text>
            </g>
          )
        }))}

        {/* ½j badge on highlighted day */}
        <rect x="71" y="158" width="22" height="9" rx="3" fill="rgba(46,219,180,0.8)"/>
        <text x="82" y="165" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="5.5" fontWeight="800" fill="rgba(9,22,54,1)">½j</text>

        {/* ── Map pin (right of calendar) */}
        <g className="pp-pin">
          <ellipse cx="290" cy="100" rx="14" ry="16"
            fill="rgba(46,219,180,0.15)" stroke={T} strokeWidth="1.5"/>
          <circle cx="290" cy="98" r="5" fill={T}/>
          <line x1="290" y1="116" x2="290" y2="124"
            stroke={T} strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        <circle className="pp-pls" cx="290" cy="100" r="14"
          fill="none" stroke="rgba(46,219,180,0.35)" strokeWidth="1.2"/>

        {/* Location label */}
        <text x="290" y="136" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="700" fill={W}>Sur site</text>
        <text x="290" y="147" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={MT}>Déplacement inclus</text>

        {/* ── Timeline steps (right card) */}
        <rect x="310" y="28" width="110" height="170" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>
        <text x="365" y="48" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="800"
          letterSpacing=".1em" fill={MT}>DÉROULÉ</text>

        {[
          { label: 'Arrivée', sub: 'Prise de contact', icon: '📍', color: T },
          { label: 'Workshop', sub: 'Tournage / Réunion', icon: '🎬', color: 'rgba(100,160,255,0.9)' },
          { label: 'Livraison', sub: 'CR sous 48h', icon: '📋', color: 'rgba(255,180,80,0.9)' },
        ].map((step, i) => (
          <g key={i} className={`pp-s${i+1}`}>
            {i < 2 && (
              <line x1="325" y1={78 + i * 44} x2="325" y2={100 + i * 44}
                stroke="rgba(46,219,180,0.2)" strokeWidth="1" strokeDasharray="2,2"/>
            )}
            <circle cx="325" cy={68 + i * 44} r="7"
              fill="rgba(13,28,66,0.9)" stroke={step.color} strokeWidth="1.5"/>
            <circle cx="325" cy={68 + i * 44} r="3" fill={step.color}/>
            <text x="337" y={65 + i * 44}
              fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill={W}>
              {step.label}
            </text>
            <text x="337" y={76 + i * 44}
              fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={MT}>
              {step.sub}
            </text>
          </g>
        ))}
      </g>

      {/* Badges */}
      <g className="pp-b1">
        <rect x="6" y="30" width="52" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="32" y="45" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>½ journée</text>
      </g>
      <g className="pp-b2">
        <rect x="422" y="30" width="52" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="448" y="45" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>Sur site ✓</text>
      </g>
      <g className="pp-b3">
        <rect x="176" y="206" width="128" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="240" y="221" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">Plan d'action sous 48h</text>
      </g>

      {/* Metrics */}
      <line x1="44" y1="238" x2="436" y2="238" stroke={FT} strokeWidth="1"/>
      <g className="pp-m1">
        <g className="pp-a1"><polygon points="148,242 143,251 153,251" fill={T}/></g>
        <text x="148" y="261" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>½ journée</text>
        <text x="148" y="270" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6" fill={MT} letterSpacing="1">SUR SITE</text>
      </g>
      <line x1="204" y1="240" x2="204" y2="272" stroke={FT} strokeWidth="1"/>
      <g className="pp-m2">
        <g className="pp-a2"><polygon points="240,242 235,251 245,251" fill={T}/></g>
        <text x="240" y="261" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>Workshop</text>
        <text x="240" y="270" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6" fill={MT} letterSpacing="1">OU TOURNAGE</text>
      </g>
      <line x1="296" y1="240" x2="296" y2="272" stroke={FT} strokeWidth="1"/>
      <g className="pp-m3">
        <g className="pp-a3"><polygon points="350,242 345,251 355,251" fill={T}/></g>
        <text x="350" y="261" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>CR livré</text>
        <text x="350" y="270" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6" fill={MT} letterSpacing="1">SOUS 48H</text>
      </g>
    </svg>
  )
}
