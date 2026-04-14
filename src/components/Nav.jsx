import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav id="nav" className={`main-nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo variant="light" />
      </Link>

      <ul className="nav-links">
        <li><a href="#about"    onClick={(e) => { e.preventDefault(); scrollTo('about')    }}>Agence</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
        <li><a href="#process"  onClick={(e) => { e.preventDefault(); scrollTo('process')  }}>Méthode</a></li>
        <li><a href="#results"  onClick={(e) => { e.preventDefault(); scrollTo('results')  }}>Résultats</a></li>
      </ul>

      <button className="nav-cta" onClick={() => scrollTo('cta')}>
        Travailler ensemble
      </button>
    </nav>
  )
}
