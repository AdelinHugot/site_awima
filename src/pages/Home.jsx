import { useEffect } from 'react'
import Nav        from '../components/Nav'
import MarqueeBar from '../components/MarqueeBar'
import Footer     from '../components/Footer'
import Hero       from '../sections/Hero'
import About      from '../sections/About'
import Services   from '../sections/Services'
import Process    from '../sections/Process'
import Results    from '../sections/Results'
import CTA        from '../sections/CTA'
import useReveal  from '../hooks/useReveal'

export default function Home() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <MarqueeBar />
      <About />
      <Services />
      <Process />
      <Results />
      <CTA />
      <Footer />
    </>
  )
}
