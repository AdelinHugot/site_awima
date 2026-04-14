import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    const cur  = curRef.current
    const ring = ringRef.current

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      cur.style.left = e.clientX + 'px'
      cur.style.top  = e.clientY + 'px'
    }

    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.1
      p.ry += (p.my - p.ry) * 0.1
      ring.style.left = p.rx + 'px'
      ring.style.top  = p.ry + 'px'
      rafId.current = requestAnimationFrame(loop)
    }

    const addHover   = () => document.body.classList.add('hovering')
    const removeHover = () => document.body.classList.remove('hovering')

    document.addEventListener('mousemove', onMove)
    rafId.current = requestAnimationFrame(loop)

    const hoverTargets = 'button, a, .srv, .stat, .step, .ac, .card, .filter-btn'
    const attach = () => {
      document.querySelectorAll(hoverTargets).forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    attach()

    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={curRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
