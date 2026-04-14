const stats = [
  { n: '+340%', l: 'Leads générés en 6 mois' },
  { n: '×4.2',  l: 'ROAS moyen sur Meta Ads' },
  { n: '-60%',  l: 'Coût par lead constaté' },
  { n: '48h',   l: 'Délai moyen de démarrage' },
]

export default function Results() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="results">
      <div className="stats">
        {stats.map((s, i) => (
          <div key={s.n} className={`stat reveal${i > 0 ? ` d${i}` : ''}`}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="results-body">
        <div className="s-eyebrow reveal">Résultats concrets</div>
        <h2 className="s-h2 reveal d1">On ne vend pas<br />des promesses.</h2>
        <br />
        <p className="reveal d2">
          Des campagnes qui performent. Des systèmes qui tournent. Des clients qui
          reviennent. C'est ça notre mesure de succès — pas les slides PowerPoint.
        </p>
        <button className="btn-fill reveal d3" onClick={() => scrollTo('cta')}>
          Parler de votre projet →
        </button>
      </div>
    </section>
  )
}
