export default function CartPanel({ cart, total, onRemove }) {
  if (cart.length === 0) return null

  return (
    <div className="cart-panel">
      <div className="cart-panel-header">
        Récapitulatif
      </div>
      <ul className="cart-panel-items">
        {cart.map((item, i) => (
          <li key={i} className="cart-panel-item">
            <span className="cpi-name">{item.title}</span>
            <div className="cpi-right">
              <span className="cpi-price">
                {item.price !== null ? `${item.price} €` : 'Sur devis'}
              </span>
              <button className="cpi-remove" onClick={(e) => { e.stopPropagation(); onRemove(i) }}>
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-panel-footer">
        <span>Total HT</span>
        <span className="cpf-total">{total} €</span>
      </div>
    </div>
  )
}
