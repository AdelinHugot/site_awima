import { useState } from 'react'

const WEBHOOK = 'https://n8n.srv800894.hstgr.cloud/webhook/92517cb2-d25d-4e13-8ea8-b1c6c3ec41b6'

export default function CheckoutModal({ cart, total, onClose }) {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      client_name:    form.name,
      client_email:   form.email,
      client_phone:   form.phone || '—',
      client_message: form.message || '—',
      services: cart.map(item => ({
        title: item.title,
        price: item.price !== null ? `${item.price} € HT` : 'Sur devis',
      })),
      total: total > 0 ? `${total} € HT` : 'À définir (devis inclus)',
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
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-content checkout-modal">
        <button className="close-modal" onClick={onClose}>✕</button>

        {status === 'success' ? (
          <div className="checkout-success">
            <div className="checkout-success-icon">✓</div>
            <h3>Demande envoyée !</h3>
            <p>On revient vers vous sous 24h avec un récapitulatif et la suite à donner.</p>
            <button className="btn-fill" style={{ marginTop: '2rem' }} onClick={onClose}>
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="modal-cat">Finaliser la commande</div>
            <div className="modal-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              Vos coordonnées
            </div>

            <div className="checkout-summary">
              {cart.map((item, i) => (
                <div key={i} className="checkout-summary-item">
                  <span>{item.title}</span>
                  <span>{item.price !== null ? `${item.price} € HT` : 'Sur devis'}</span>
                </div>
              ))}
              <div className="checkout-summary-total">
                <span>Total</span>
                <span>{total > 0 ? `${total} € HT` : 'Sur devis'}</span>
              </div>
            </div>

            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="checkout-row">
                <div className="checkout-field">
                  <label>Nom &amp; Prénom *</label>
                  <input
                    name="name" type="text" required
                    placeholder="Adelin Hugot"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="checkout-field">
                  <label>Email *</label>
                  <input
                    name="email" type="email" required
                    placeholder="adelin@awima.fr"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="checkout-field">
                <label>Téléphone</label>
                <input
                  name="phone" type="tel"
                  placeholder="+33 6 00 00 00 00"
                  value={form.phone} onChange={handleChange}
                />
              </div>
              <div className="checkout-field">
                <label>Message (optionnel)</label>
                <textarea
                  name="message" rows={3}
                  placeholder="Contexte, délais, questions..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="checkout-error">
                  Une erreur est survenue. Réessayez ou écrivez directement à hello@awima.fr
                </p>
              )}

              <button className="btn-confirm" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer la demande →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
