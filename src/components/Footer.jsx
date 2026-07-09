import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { BrandLogo } from './UI'

const footerLabels = {
  sq: {
    products: 'Produkte',
    mattresses: 'Dyshekët',
    company: 'Kompania',
    support: 'Mbështetje',
    service: 'Shërbimi',
    warranty: 'Garancia',
    delivery: 'Dërgesa',
    faq: 'Pyetje të shpeshta',
    home: 'Feder Bau kreu',
  },
  mk: {
    products: 'Производи',
    mattresses: 'Душеци',
    company: 'Компанија',
    support: 'Поддршка',
    service: 'Сервис',
    warranty: 'Гаранција',
    delivery: 'Испорака',
    faq: 'Чести прашања',
    home: 'Feder Bau почетна',
  },
  en: {
    products: 'Products',
    mattresses: 'Mattresses',
    company: 'Company',
    support: 'Support',
    service: 'Service',
    warranty: 'Warranty',
    delivery: 'Delivery',
    faq: 'FAQ',
    home: 'Feder Bau home',
  },
}

export default function Footer() {
  const { t, language } = useLanguage()
  const copy = footerLabels[language] || footerLabels.en

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label={copy.home}>
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
          <strong>{copy.products}</strong>
          <Link to="/products">{copy.mattresses}</Link>
          <Link to="/products/classic">Classic</Link>
          <Link to="/products/comfort">Comfort</Link>
          <Link to="/products/dreamer">Dreamer</Link>
        </div>
        <div className="footer-links">
          <strong>{copy.company}</strong>
          <Link to="/experience">{t.nav[2]}</Link>
          <Link to="/contact">{t.nav[3] || 'Showroom'}</Link>
          <Link to="/contact">{t.nav[4]}</Link>
          <Link to="/collections">{t.nav[0]}</Link>
        </div>
        <div className="footer-links">
          <strong>{copy.support}</strong>
          <Link to="/contact">{copy.service}</Link>
          <Link to="/contact">{copy.warranty}</Link>
          <Link to="/contact">{copy.delivery}</Link>
          <Link to="/contact">{copy.faq}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.placeholderNotice}</p>
        <span>© {new Date().getFullYear()} Feder Bau · Tetovo, MK</span>
      </div>
    </footer>
  )
}
