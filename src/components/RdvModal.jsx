import { useState } from 'react'

const WEBHOOK = 'https://n8n.srv800894.hstgr.cloud/webhook/c3442f63-22d8-4e3e-87ba-d4f4834400c0'

const DAYS  = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
const SLOTS = [
  { key: 'matin', label: 'Matin',          sub: '9h – 12h'  },
  { key: 'aprem', label: 'Après-midi',     sub: '14h – 17h' },
  { key: 'fin',   label: 'Fin de journée', sub: '17h – 19h' },
]

export default function RdvModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [days,   setDays]   = useState([])
  const [slots,  setSlots]  = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const toggleDay  = (day) =>
    setDays(prev => prev.includes(day)  ? prev.filter(d => d !== day)  : [...prev, day])

  const toggleSlot = (key) =>
    setSlots(prev => prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      client_name:    form.name,
      client_email:   form.email,
      client_phone:   form.phone || '—',
      client_message: form.message || '—',
      jours:          days.length  ? days.join(', ')                                                 : 'Non précisé',
      creneaux:       slots.length ? slots.map(k => SLOTS.find(s => s.key === k)?.label).join(', ') : 'Non précisé',
    }

    try {
      const res = await fetch(WEBHOOK, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content rdv-modal">
        <button className="close-modal" onClick={onClose}>✕</button>

        {status === 'success' ? (
          <div className="checkout-success">
            <div className="checkout-success-icon">✓</div>
            <h3>Demande envoyée !</h3>
            <p>On vous contacte dans les 24h pour confirmer le créneau. À très vite !</p>
            <button className="btn-fill" style={{ marginTop: '2rem' }} onClick={onClose}>
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="modal-cat">Prise de rendez-vous</div>
            <div className="modal-title" style={{ fontSize: '1.8rem', marginBottom: '.4rem' }}>
              Vos coordonnées
            </div>
            <p className="rdv-subtitle">
              Un échange de 30 min suffit. Laissez vos dispo et on s'adapte.
            </p>

            <form className="checkout-form" onSubmit={handleSubmit}>

              <div className="checkout-row">
                <div className="checkout-field">
                  <label>Nom &amp; Prénom *</label>
                  <input
                    name="name" type="text" required
                    placeholder="Jean Dupont"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="checkout-field">
                  <label>Email *</label>
                  <input
                    name="email" type="email" required
                    placeholder="jean@société.fr"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="checkout-field">
                <label>Téléphone (pour être rappelé)</label>
                <input
                  name="phone" type="tel"
                  placeholder="+33 6 00 00 00 00"
                  value={form.phone} onChange={handleChange}
                />
              </div>

              <div className="checkout-field">
                <label>Jours disponibles</label>
                <div className="rdv-chips">
                  {DAYS.map(day => (
                    <button
                      key={day}
                      type="button"
                      className={`rdv-chip${days.includes(day) ? ' active' : ''}`}
                      onClick={() => toggleDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="checkout-field">
                <label>Créneaux préférés</label>
                <div className="rdv-slots">
                  {SLOTS.map(s => (
                    <button
                      key={s.key}
                      type="button"
                      className={`rdv-slot${slots.includes(s.key) ? ' active' : ''}`}
                      onClick={() => toggleSlot(s.key)}
                    >
                      <span className="rdv-slot-label">{s.label}</span>
                      <span className="rdv-slot-sub">{s.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="checkout-field">
                <label>Votre projet en quelques mots (optionnel)</label>
                <textarea
                  name="message" rows={3}
                  placeholder="Secteur d'activité, objectifs, questions..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="checkout-error">
                  Une erreur est survenue. Écrivez-nous directement à{' '}
                  <a href="mailto:hello@awima.fr">hello@awima.fr</a>
                </p>
              )}

              <button className="btn-confirm" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours...' : 'Réserver mon créneau →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
