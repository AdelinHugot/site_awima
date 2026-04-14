import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Magnetic buttons — les boutons .btn-fill et .btn-ghost
 * sont attirés vers le curseur quand il passe à proximité.
 * Désactivé sur mobile/tablette (pas de curseur).
 */
export default function useMagnetic() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.innerWidth <= 900) return

    const RADIUS   = 130  // px — rayon d'attraction
    const STRENGTH = 0.40 // intensité du pull (0 = rien, 1 = curseur pur)

    const onMouseMove = (e) => {
      document.querySelectorAll('.btn-fill, .btn-ghost').forEach(btn => {
        const rect = btn.getBoundingClientRect()
        const cx   = rect.left + rect.width  / 2
        const cy   = rect.top  + rect.height / 2
        const dx   = e.clientX - cx
        const dy   = e.clientY - cy
        const dist = Math.hypot(dx, dy)

        if (dist < RADIUS) {
          const pull = (1 - dist / RADIUS) * STRENGTH
          btn.style.transition = 'translate 0.08s ease'
          btn.style.setProperty('--mag-x', `${dx * pull}px`)
          btn.style.setProperty('--mag-y', `${dy * pull}px`)
        } else {
          btn.style.transition = 'translate 0.55s cubic-bezier(0.23, 1, 0.32, 1)'
          btn.style.setProperty('--mag-x', '0px')
          btn.style.setProperty('--mag-y', '0px')
        }
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [pathname])
}
