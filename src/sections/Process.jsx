const steps = [
  { n: '01', t: 'Diagnostic',  d: 'On analyse votre situation actuelle, vos objectifs réels et ce qui bloque votre croissance.' },
  { n: '02', t: 'Stratégie',   d: 'On construit un plan d\'action précis — canal par canal, semaine par semaine.' },
  { n: '03', t: 'Exécution',   d: 'On déploie, on itère, on ajuste. Vite. Avec rigueur et transparence totale.' },
  { n: '04', t: 'Performance', d: 'On mesure, on optimise et on vous rend compte — en chiffres, pas en jargon.' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="s-eyebrow reveal">Comment on travaille</div>
      <h2 className="s-h2 reveal d1">Méthode. Rigueur. Résultats.</h2>
      <div className="steps">
        {steps.map((s, i) => (
          <div key={s.n} className={`step reveal d${i + 1}`}>
            <div className="step-dot">{s.n}</div>
            <div className="step-t">{s.t}</div>
            <div className="step-d">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
