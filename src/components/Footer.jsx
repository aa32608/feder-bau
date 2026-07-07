import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { BrandLogo } from './UI'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Feder Bau home">
            <BrandLogo />
          </Link>
          <p>{t.footerTagline}</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/Feder-Bau-280635381948835/?ref=page_internal" target="_blank" rel="noreferrer">Facebook</a>
            <span> • </span>
            <a href="mailto:info@feder-bau.com.mk">info@feder-bau.com.mk</a>
          </div>
        </div>
        <div className="footer-links">
          <strong>Products</strong>
          <Link to="/products">Mattresses</Link>
          <Link to="/products">Classic</Link>
          <Link to="/products">Comfort</Link>
          <Link to="/products">Dreamer</Link>
        </div>
        <div className="footer-links">
          <strong>Company</strong>
          <Link to="/about">{t.nav[2]}</Link>
          <Link to="/contact">{t.nav[3] || 'Showroom'}</Link>
          <Link to="/contact">{t.nav[4]}</Link>
          <Link to="/collections">{t.nav[0]}</Link>
        </div>
        <div className="footer-links">
          <strong>Support</strong>
          <Link to="/contact">Service</Link>
          <Link to="/contact">Warranty</Link>
          <Link to="/contact">Delivery</Link>
          <Link to="/contact">FAQ</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.placeholderNotice}</p>
        <span>© {new Date().getFullYear()} Feder Bau · Tetovo, MK</span>
      </div>
    </footer>
  )
}
