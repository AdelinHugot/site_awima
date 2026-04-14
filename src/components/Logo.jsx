import logoBlanc from '../logo_blanc.png'
import logoBleu   from '../logo_bleu.png'

/**
 * variant="light" → logo blanc (sur fond sombre)
 * variant="dark"  → logo bleu  (sur fond clair)
 * height          → hauteur en px (défaut 36)
 */
export default function Logo({ variant = 'light', height = 36, className = '' }) {
  const src = variant === 'dark' ? logoBleu : logoBlanc

  return (
    <img
      src={src}
      alt="AWIMA"
      height={height}
      style={{ display: 'block', width: 'auto' }}
      className={className}
    />
  )
}
