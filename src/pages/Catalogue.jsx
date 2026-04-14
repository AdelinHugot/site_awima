import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services }      from '../data/services'
import { illustrations } from '../data/illustrations'
import CartPanel     from '../components/catalogue/CartPanel'
import CheckoutModal from '../components/catalogue/CheckoutModal'
import Logo          from '../components/Logo'

const FILTERS = [
  { key: 'all',       label: 'Tout' },
  { key: 'seo',       label: 'SEO' },
  { key: 'sea',       label: 'SEA' },
  { key: 'print',     label: 'Projet Print' },
  { key: 'video',     label: 'Vidéo' },
  { key: 'image',     label: 'Image' },
  { key: 'strategie', label: 'Stratégie & Formation' },
]

const CAT_LABELS = {
  seo:       'SEO',
  sea:       'SEA',
  print:     'Projet Print',
  video:     'Vidéo',
  image:     'Image',
  strategie: 'Stratégie & Formation',
}

function PriceDisplay({ price, className = 'card-price' }) {
  if (price === null) return <div className={className}>Sur devis</div>
  return <div className={className}>{price} € <small>HT</small></div>
}

function ServiceCard({ s, onOpen, index }) {
  const [clicking, setClicking] = useState(false)

  const handleClick = () => {
    setClicking(true)
    setTimeout(() => {
      setClicking(false)
      onOpen(s)
    }, 150)
  }

  return (
    <div
      className={`card${clicking ? ' card-clicking' : ''}`}
      style={{ animationDelay: `${index * 0.07}s` }}
      onClick={handleClick}
    >
      <div className="card-shine" />

      <div className="card-header">
        <div className="card-cat">{CAT_LABELS[s.cat]}</div>
        {s.delay && <span className="card-delay">⏱ {s.delay}</span>}
      </div>

      <div className="card-title">{s.title}</div>
      <div className="card-short-desc">{s.short}</div>

      {s.includes?.length > 0 && (
        <ul className="card-includes">
          {s.includes.slice(0, 3).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="card-footer">
        <PriceDisplay price={s.price} />
        <div className="card-btn">
          Voir
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function ServiceModal({ modal, onClose, onAdd }) {
  return (
    <div
      className="modal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content modal-enriched">
        <button className="close-modal" onClick={onClose}>✕</button>

        <div className="modal-header-row">
          <div className="modal-cat">{CAT_LABELS[modal.cat]}</div>
          {modal.delay && (
            <span className="modal-delay-badge">⏱ {modal.delay}</span>
          )}
        </div>

        <div className="modal-title">{modal.title}</div>
        <div className="modal-long-desc">{modal.long}</div>

        {modal.includes?.length > 0 && (
          <div className="modal-includes">
            <div className="modal-section-label">Ce qui est inclus</div>
            <ul className="modal-includes-list">
              {modal.includes.map(item => (
                <li key={item}>
                  <span className="modal-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Portfolio */}
        <div className="modal-portfolio">
          <div className="modal-section-label">Exemples de réalisations</div>
          {(() => {
            const Illustration = illustrations[modal.id]
            if (Illustration) {
              return (
                <div className="portfolio-illustration">
                  <Illustration />
                </div>
              )
            }
            if (modal.portfolio?.length > 0) {
              return (
                <div className="portfolio-grid">
                  {modal.portfolio.map((img, i) => (
                    <img key={i} src={img} alt={`Exemple ${i + 1}`} className="portfolio-img" />
                  ))}
                </div>
              )
            }
            return (
              <div className="portfolio-empty">
                <span>📁</span>
                <p>Exemples à venir</p>
              </div>
            )
          })()}
        </div>

        <div className="modal-actions">
          <PriceDisplay price={modal.price} className="modal-price-big" />
          <button className="btn-confirm" onClick={() => onAdd(modal)}>
            {modal.price === null ? 'Demander un devis' : 'Ajouter au panier'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Catalogue() {
  const [activeFilter,  setActiveFilter]  = useState('all')
  const [modal,         setModal]         = useState(null)
  const [cart,          setCart]          = useState([])
  const [cartHover,     setCartHover]     = useState(false)
  const cartLeaveTimer = useRef(null)
  const [showCheckout,  setShowCheckout]  = useState(false)

  const filtered = activeFilter === 'all'
    ? services
    : services.filter(s => s.cat === activeFilter)

  const total = cart.reduce((sum, item) => sum + (item.price ?? 0), 0)

  const addToCart = (service) => {
    setCart(prev => [...prev, service])
    setModal(null)
  }

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const grouped = filtered.reduce((acc, s) => {
    const key = CAT_LABELS[s.cat]
    if (!acc[key]) acc[key] = []
    acc[key].push(s)
    return acc
  }, {})

  const showGroups = activeFilter === 'all'

  return (
    <div className="catalogue-page">
      <nav className="catalogue-nav">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo variant="light" />
        </Link>
        <div style={{ fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--muted)', fontWeight: 600 }}>
          CATALOGUE SOLUTIONS
        </div>
      </nav>

      <header className="cat-hero">
        <h1>Nos solutions.</h1>
        <p>Une expertise hybride entre marketing de performance et ingénierie tech pour transformer votre croissance.</p>
        <div className="filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <main className="services-container">
        {/* key={activeFilter} force le re-mount → rejoue les animations d'entrée */}
        {showGroups ? (
          <div key={activeFilter}>
            {Object.entries(grouped).map(([label, items]) => (
              <div key={label} className="subcat-group">
                <div className="subcat-header">
                  <span className="subcat-label">{label}</span>
                </div>
                <div className="services-grid">
                  {items.map((s, i) => (
                    <ServiceCard key={s.id} s={s} onOpen={setModal} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="services-grid" key={activeFilter}>
            {filtered.map((s, i) => (
              <ServiceCard key={s.id} s={s} onOpen={setModal} index={i} />
            ))}
          </div>
        )}
      </main>

      {modal && (
        <ServiceModal
          modal={modal}
          onClose={() => setModal(null)}
          onAdd={addToCart}
        />
      )}

      <div
        className={`cart-bar${cart.length > 0 ? ' visible' : ''}`}
        onMouseEnter={() => { clearTimeout(cartLeaveTimer.current); setCartHover(true) }}
        onMouseLeave={() => { cartLeaveTimer.current = setTimeout(() => setCartHover(false), 180) }}
      >
        {cartHover && (
          <div
            onMouseEnter={() => clearTimeout(cartLeaveTimer.current)}
            onMouseLeave={() => { cartLeaveTimer.current = setTimeout(() => setCartHover(false), 180) }}
          >
            <CartPanel cart={cart} total={total} onRemove={removeFromCart} />
          </div>
        )}
        <div>
          <div className="cart-label">{cart.length} prestation{cart.length > 1 ? 's' : ''}</div>
          <div className="cart-total-amount">{total} € HT</div>
        </div>
        <button className="btn-checkout" onClick={() => setShowCheckout(true)}>
          Commander
        </button>
      </div>

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          total={total}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  )
}
