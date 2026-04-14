export default function About() {
  return (
    <section id="about">
      <div className="about-visual reveal">
        <div className="about-photo-frame">
          <img src="/adelin-about.jpg" alt="Adelin — AWIMA" className="about-photo" />
          <div className="about-photo-badge">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1l.9 2.8H9L6.6 5.5l.9 2.8L5 6.6l-2.5 1.7.9-2.8L1 3.8h3.1L5 1z" fill="currentColor" />
            </svg>
            Lyon, France
          </div>
        </div>

        <div className="about-stats">
          <div className="ac">
            <div className="ac-label">Clients actifs</div>
            <div className="ac-num">24+</div>
            <div className="ac-sub">PME, ETI &amp; startups</div>
          </div>
          <div className="ac">
            <div className="ac-label">ROI moyen</div>
            <div className="ac-num">×3.8</div>
            <div className="ac-sub">Sur les campagnes</div>
          </div>
          <div className="ac">
            <div className="ac-label">Secteurs</div>
            <div className="ac-num">12</div>
            <div className="ac-sub">B2B, B2C, industrie</div>
          </div>
        </div>
      </div>

      <div className="about-body">
        <div className="s-eyebrow reveal">Qui je suis</div>
        <h2 className="s-h2 reveal d1">
          Adelin.<br />
          <span className="teal-word">Pas une agence.</span>
        </h2>
        <br />
        <p className="reveal d2">
          Je m'appelle Adelin. Je travaille en direct avec chaque client — pas d'équipe
          qui se relaie, pas d'interlocuteur différent selon la semaine.{' '}
          <strong>Vous me parlez à moi, et c'est moi qui livre.</strong>
        </p>
        <p className="reveal d2">
          Marketing, tech et stratégie ne sont pas trois prestations séparées : c'est
          comme ça que j'aborde chaque projet. Pour que ce qu'on construit ensemble{' '}
          <strong>tienne dans la durée</strong>.
        </p>
        <p className="reveal d2">
          Je travaille avec des PME, des startups et des indépendants qui veulent des
          résultats concrets, sans jargon et sans prise de tête.
        </p>
      </div>
    </section>
  )
}
