import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="grid-bg" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-tag">Consultant digital — Lyon &amp; à distance</div>
          <h1 className="hero-h1">
            Le digital<br /><em>repensé.</em><br />Vraiment.
          </h1>
          <p className="hero-sub">
            Je travaille directement avec vous — pas une équipe anonyme. Stratégie,
            marketing de performance et tech, taillés pour faire croître votre activité.
          </p>
          <div className="hero-btns">
            <button className="btn-fill" onClick={() => navigate('/catalogue')}>
              Découvrir mes services
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('about')}>
              Qui je suis{' '}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src="/adelin-hero.jpg" alt="Adelin — AWIMA" className="hero-photo" />
            <div className="hero-photo-overlay" />
            <div className="hero-stat-float">
              <span className="hsf-num">100% humain</span>
              <span className="hsf-label">Votre conseiller business</span>
            </div>
            <div className="hero-photo-tag">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                <circle cx="4" cy="4" r="4" />
              </svg>
              Disponible pour de nouveaux projets
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-ind">
        <div className="scroll-track"><div className="scroll-runner" /></div>
        <span className="scroll-word">Scroll</span>
      </div>
    </section>
  )
}
