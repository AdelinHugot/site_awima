import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cursor      from './components/Cursor'
import Home        from './pages/Home'
import Catalogue   from './pages/Catalogue'
import useMagnetic from './hooks/useMagnetic'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function MagneticButtons() {
  useMagnetic()
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <MagneticButtons />
      <Cursor />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </>
  )
}
