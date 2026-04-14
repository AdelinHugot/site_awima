import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <Logo variant="light" />
      <div className="f-links">
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="mailto:hello@awima.fr">hello@awima.fr</a>
      </div>
      <div className="f-copy">© 2026 AWIMA. Tous droits réservés.</div>
    </footer>
  )
}
