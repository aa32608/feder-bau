import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { languages } from '../translations'
import { useState } from 'react'
import { BrandLogo } from './UI'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const aria = {
    sq: { home: 'Feder Bau kreu', call: 'Telefono showroom-in', menu: 'Menyja' },
    mk: { home: 'Feder Bau почетна', call: 'Јавете се во салонот', menu: 'Мени' },
    en: { home: 'Feder Bau home', call: 'Call showroom', menu: 'Menu' },
  }[language] || { home: 'Feder Bau home', call: 'Call showroom', menu: 'Menu' }

  // normalize: if t.nav items are strings, use them directly
  const navLinks = [
    { to: '/', key: 'home' },
    { to: '/products', key: 1 },
    { to: '/collections', key: 0 },
    { to: '/experience', key: 2 },
    { to: '/contact', key: 4 },
  ]

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label={aria.home} onClick={()=>setOpen(false)}>
        <BrandLogo />
      </Link>

      <nav aria-label="Primary navigation" className={open ? 'nav-open' : ''}>
        {navLinks.map((n) => {
          const label = n.to === '/' 
            ? ({ sq: 'Kreu', mk: 'Почетна', en: 'Home' }[language])
            : t.nav[n.key]
          return (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              onClick={()=>setOpen(false)}
              className={({ isActive }) => isActive ? 'active-link' : undefined}
            >
              {label}
            </NavLink>
          )
        })}
      </nav>

      <div className="header-actions">
        <a className="header-phone" href="tel:+38971224805" aria-label={aria.call}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hide-mobile">+389 71 224 805</span>
        </a>

        <div className="language-switcher" aria-label="Language">
          {Object.keys(languages).map((code) => (
            <button
              className={language === code ? 'active' : ''}
              key={code}
              onClick={() => setLanguage(code)}
              type="button"
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <button 
          className="mobile-menu-toggle"
          aria-label={aria.menu}
          onClick={()=>setOpen(!open)}
          type="button"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
