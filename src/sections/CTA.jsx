import { useState } from 'react'
import RdvModal from '../components/RdvModal'

export default function CTA() {
  const [showRdv, setShowRdv] = useState(false)

  return (
    <section id="cta">
      <div className="cta-orb" />

      <div className="cta-avatar reveal">
        <img src="/adelin-cta.jpg" alt="Adelin" className="cta-avatar-img" />
        <div className="cta-avatar-info">
          <span className="cta-avatar-name">Adelin</span>
          <span className="cta-avatar-role">Fondateur · AWIMA</span>
        </div>
      </div>

      <div className="s-eyebrow reveal" style={{ justifyContent: 'center' }}>
        Passons à l'action
      </div>
      <h2 className="s-h2 reveal d1" style={{ fontSize: 'clamp(2.8rem,5vw,4.2rem)', marginBottom: '1.4rem' }}>
        On se parle ?
      </h2>
      <p className="reveal d2">
        30 minutes en direct avec moi — pour voir si je peux vous aider, et comment.
        Sans engagement, sans jargon, sans PowerPoint inutile.
      </p>
      <div className="cta-btns reveal d3">
        <button className="btn-fill" onClick={() => setShowRdv(true)}>
          Réserver un créneau
        </button>
        <a className="btn-border" href="mailto:hello@awima.fr">
          M'écrire directement
        </a>
      </div>

      {showRdv && <RdvModal onClose={() => setShowRdv(false)} />}
    </section>
  )
}
