const items = [
  'Marketing Digital', 'Stratégie de Marque', 'Automation N8N',
  'Génération de Leads', 'Google Ads', 'Meta Ads',
  'Développement Web', 'Intelligence Artificielle',
]

const doubled = [...items, ...items]

export default function MarqueeBar() {
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item} <b>·</b></span>
        ))}
      </div>
    </div>
  )
}
