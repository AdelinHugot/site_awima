const T  = '#2EDBB4'
const MT = 'rgba(122,138,170,0.72)'
const FT = 'rgba(245,244,240,0.055)'
const W  = '#F5F4F0'

const css = `
  .ss-card  { animation: ssCardIn .65s cubic-bezier(.23,1,.32,1) .1s both; }
  .ss-b1 { animation: ssBadge .45s cubic-bezier(.34,1.56,.64,1) .8s  both; transform-box:fill-box; transform-origin:center; }
  .ss-b2 { animation: ssBadge .45s cubic-bezier(.34,1.56,.64,1) .96s both; transform-box:fill-box; transform-origin:center; }
  .ss-b3 { animation: ssBadge .45s cubic-bezier(.34,1.56,.64,1) 1.1s both; transform-box:fill-box; transform-origin:center; }
  .ss-line  { animation: ssLine .8s ease .6s both; transform-origin:left center; }
  .ss-n1 { animation: ssNode .4s cubic-bezier(.34,1.56,.64,1) .9s  both; transform-box:fill-box; transform-origin:center; }
  .ss-n2 { animation: ssNode .4s cubic-bezier(.34,1.56,.64,1) 1.1s both; transform-box:fill-box; transform-origin:center; }
  .ss-n3 { animation: ssNode .4s cubic-bezier(.34,1.56,.64,1) 1.3s both; transform-box:fill-box; transform-origin:center; }
  .ss-live { animation: ssLive 1.4s ease-in-out .5s infinite; transform-box:fill-box; transform-origin:center; }
  .ss-m1 { animation: ssUp .4s ease 1.5s  both; }
  .ss-m2 { animation: ssUp .4s ease 1.65s both; }
  .ss-m3 { animation: ssUp .4s ease 1.8s  both; }
  .ss-a1 { animation: ssArrow 1.7s ease-in-out 0s   infinite; transform-box:fill-box; transform-origin:center; }
  .ss-a2 { animation: ssArrow 1.7s ease-in-out .55s infinite; transform-box:fill-box; transform-origin:center; }
  .ss-a3 { animation: ssArrow 1.7s ease-in-out 1.1s infinite; transform-box:fill-box; transform-origin:center; }

  @keyframes ssCardIn {
    from { opacity:0; transform:scale(.88) translateY(18px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes ssBadge {
    from { opacity:0; transform:scale(.1); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes ssLine {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes ssNode {
    from { opacity:0; transform:scale(0); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes ssLive {
    0%,100% { opacity:.6; transform:scale(1); }
    50%     { opacity:1;  transform:scale(1.15); }
  }
  @keyframes ssUp {
    from { opacity:0; transform:translateY(12px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes ssArrow {
    0%,100% { opacity:.4; transform:translateY(0); }
    50%     { opacity:1;  transform:translateY(-5px); }
  }
`

const milestones = [
  { x: 150, label: 'Mois 1', sub: 'Audit', color: T },
  { x: 240, label: 'Mois 2', sub: 'Action', color: 'rgba(100,160,255,0.9)' },
  { x: 330, label: 'Mois 3', sub: 'Résultats', color: 'rgba(255,180,80,0.9)' },
]

export default function SessionStrategieIllustration() {
  return (
    <svg
      viewBox="0 0 480 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width:'100%', display:'block', borderRadius:'14px',
               background:'rgba(9,22,54,0.6)', border:'1px solid rgba(46,219,180,0.1)' }}
      aria-label="Illustration Session stratégie"
    >
      <defs><style>{css}</style></defs>

      <g className="ss-card">
        {/* Main card */}
        <rect x="90" y="26" width="300" height="176" rx="14"
          fill="rgba(13,28,66,0.98)" stroke="rgba(46,219,180,0.22)" strokeWidth="1"/>

        {/* Video call header */}
        <rect x="90" y="26" width="300" height="72" rx="14" fill="rgba(46,219,180,0.06)"/>
        <rect x="90" y="67" width="300" height="31" fill="rgba(46,219,180,0.06)"/>

        {/* Screen icon */}
        <rect x="136" y="38" width="68" height="46" rx="6"
          fill="rgba(13,28,66,0.8)" stroke="rgba(46,219,180,0.3)" strokeWidth="1"/>
        {/* Person silhouette */}
        <circle cx="170" cy="51" r="8" fill="rgba(46,219,180,0.25)"/>
        <path d="M155,72 Q155,60 170,60 Q185,60 185,72"
          fill="rgba(46,219,180,0.2)"/>

        {/* LIVE badge */}
        <g className="ss-live">
          <rect x="134" y="34" width="24" height="10" rx="3" fill="rgba(220,50,50,0.85)"/>
          <text x="146" y="42" textAnchor="middle"
            fontFamily="Montserrat,sans-serif" fontSize="6" fontWeight="800" fill={W}>LIVE</text>
        </g>

        {/* Title */}
        <text x="216" y="48" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="800" fill={W}>
          Session stratégie
        </text>
        <text x="216" y="63" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill={MT}>
          1h · Visio ou Présentiel
        </text>
        <text x="216" y="75" fontFamily="Montserrat,sans-serif" fontSize="7" fill="rgba(46,219,180,0.7)">
          CR envoyé sous 24h ✓
        </text>

        {/* Separator */}
        <line x1="100" y1="104" x2="380" y2="104" stroke={FT} strokeWidth="1"/>

        {/* Roadmap timeline */}
        <text x="100" y="120" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="700"
          letterSpacing=".12em" fill={MT}>ROADMAP 3 MOIS</text>

        {/* Timeline line */}
        <line className="ss-line" x1="150" y1="152" x2="330" y2="152"
          stroke="rgba(46,219,180,0.3)" strokeWidth="2"/>

        {/* Milestone nodes */}
        {milestones.map((m, i) => (
          <g key={i} className={`ss-n${i+1}`}>
            <circle cx={m.x} cy="152" r="10"
              fill="rgba(13,28,66,0.9)" stroke={m.color} strokeWidth="2"/>
            <circle cx={m.x} cy="152" r="4" fill={m.color}/>
            <text x={m.x} y="138" textAnchor="middle"
              fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="700" fill={W}>
              {m.label}
            </text>
            <text x={m.x} y="128" textAnchor="middle"
              fontFamily="Montserrat,sans-serif" fontSize="6.5" fill={m.color}>
              {m.sub}
            </text>
            <line x1={m.x} y1="133" x2={m.x} y2="142" stroke={m.color} strokeWidth="1" opacity=".5"/>
          </g>
        ))}

        {/* Priority list */}
        <line x1="100" y1="170" x2="380" y2="170" stroke={FT} strokeWidth="1"/>
        {['Identifier vos points de friction', 'Définir les 3 priorités', 'Plan actionnable livré'].map((txt, i) => (
          <g key={i}>
            <circle cx="107" cy={182 + i*13} r="3" fill="rgba(46,219,180,0.6)"/>
            <text x="114" y={186 + i*13}
              fontFamily="Montserrat,sans-serif" fontSize="7" fill={MT}>{txt}</text>
          </g>
        ))}
      </g>

      {/* Badges */}
      <g className="ss-b1">
        <rect x="6" y="30" width="80" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="46" y="45" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>Roadmap 3 mois</text>
      </g>
      <g className="ss-b2">
        <rect x="394" y="30" width="80" height="22" rx="11"
          fill="rgba(46,219,180,0.13)" stroke="rgba(46,219,180,0.48)" strokeWidth="1"/>
        <text x="434" y="45" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8" fill={T}>CR sous 24h</text>
      </g>
      <g className="ss-b3">
        <rect x="190" y="208" width="100" height="22" rx="11"
          fill="rgba(46,219,180,0.09)" stroke="rgba(46,219,180,0.32)" strokeWidth="1"/>
        <text x="240" y="223" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8"
          fill="rgba(46,219,180,0.9)">Sans engagement</text>
      </g>

      {/* Metrics */}
      <line x1="44" y1="238" x2="436" y2="238" stroke={FT} strokeWidth="1"/>
      <g className="ss-m1">
        <g className="ss-a1"><polygon points="148,242 143,251 153,251" fill={T}/></g>
        <text x="148" y="261" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>1h session</text>
        <text x="148" y="270" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6" fill={MT} letterSpacing="1">INTENSIVE</text>
      </g>
      <line x1="204" y1="240" x2="204" y2="272" stroke={FT} strokeWidth="1"/>
      <g className="ss-m2">
        <g className="ss-a2"><polygon points="240,242 235,251 245,251" fill={T}/></g>
        <text x="240" y="261" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>3 priorités</text>
        <text x="240" y="270" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6" fill={MT} letterSpacing="1">DÉFINIES</text>
      </g>
      <line x1="296" y1="240" x2="296" y2="272" stroke={FT} strokeWidth="1"/>
      <g className="ss-m3">
        <g className="ss-a3"><polygon points="350,242 345,251 355,251" fill={T}/></g>
        <text x="350" y="261" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10" fill={T}>Plan livré</text>
        <text x="350" y="270" textAnchor="middle"
          fontFamily="Montserrat,sans-serif" fontWeight="600" fontSize="6" fill={MT} letterSpacing="1">SOUS 24H</text>
      </g>
    </svg>
  )
}
