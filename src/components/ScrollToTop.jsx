import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const labels = {
  sq: 'Kthehu lart',
  mk: 'Назад горе',
  en: 'Back to top',
}

export default function ScrollToTop() {
  const { language } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      type="button"
      aria-label={labels[language] || labels.en}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
