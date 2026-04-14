import { useNavigate } from 'react-router-dom'

const IcoMarketing = () => (
  <svg className="srv-ico" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#2EDBB4" strokeWidth="1.4"/>
    <circle cx="20" cy="20" r="8"  stroke="#2EDBB4" strokeWidth="1.4"/>
    <circle cx="20" cy="20" r="2.5" fill="#2EDBB4"/>
    <line x1="20" y1="4"  x2="20" y2="8"  stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="20" y1="32" x2="20" y2="36" stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="4"  y1="20" x2="8"  y2="20" stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="32" y1="20" x2="36" y2="20" stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const IcoTech = () => (
  <svg className="srv-ico" viewBox="0 0 40 40" fill="none">
    <rect x="5" y="9" width="30" height="22" rx="2" stroke="#2EDBB4" strokeWidth="1.4"/>
    <path d="M14 16l-4 4 4 4M26 16l4 4-4 4" stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 24l4-8" stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const IcoStrategie = () => (
  <svg className="srv-ico" viewBox="0 0 40 40" fill="none">
    <path d="M6 32l9-11 7 5.5 10-15" stroke="#2EDBB4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="34" cy="11" r="3" stroke="#2EDBB4" strokeWidth="1.4"/>
  </svg>
)

const srvData = [
  {
    n: '01', ico: <IcoMarketing />, name: 'Marketing',
    txt: 'Acquisition payante, organique et contenu. On construit des tunnels qui convertissent — pas juste du trafic qui passe.',
    pills: ['Google Ads', 'Meta Ads', 'SEO', 'Email', 'Contenu'],
  },
  {
    n: '02', ico: <IcoTech />, name: 'Tech',
    txt: 'Landing pages haute performance, automatisations sur mesure, intégrations CRM et agents IA — la tech au service de la conversion.',
    pills: ['N8N', 'React', 'CRM', 'Agents IA', 'Automation'],
  },
  {
    n: '03', ico: <IcoStrategie />, name: 'Stratégie',
    txt: 'Audit, positionnement, roadmap digitale. On pense avant d\'agir — pour que chaque euro investi travaille dans la bonne direction.',
    pills: ['Audit', 'Positionnement', 'Roadmap', 'Analytics'],
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="srv-header">
        <div>
          <div className="s-eyebrow reveal">Ce qu'on fait</div>
          <h2 className="s-h2 reveal d1">Trois disciplines.<br />Une cohérence.</h2>
        </div>
        <button className="btn-fill reveal d1" onClick={() => navigate('/catalogue')}>
          Voir le catalogue →
        </button>
      </div>

      <div className="srv-grid reveal d2">
        {srvData.map((s) => (
          <div key={s.n} className="srv">
            <div className="srv-n">{s.n}</div>
            {s.ico}
            <div className="srv-name">{s.name}</div>
            <div className="srv-txt">{s.txt}</div>
            <div className="srv-pills">
              {s.pills.map(p => <span key={p} className="pill">{p}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
