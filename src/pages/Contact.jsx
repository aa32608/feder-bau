import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedProducts } from '../translations'
import { PageHero, SectionEyebrow } from '../components/UI'

const mapUrl =
  'https://www.google.com/maps?q=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia&output=embed'

const labels = {
  sq: {
    eyebrow: 'Kontakt',
    showroom: 'Showroom',
    addressCountry: 'Maqedonia e Veriut',
    openMaps: 'Hap në Google Maps',
    hoursTitle: 'Orari i punës',
    hours: 'E hënë – E shtunë: 08:00 – 19:00',
    sunday: 'E diel: Mbyllur',
    email: 'Email',
    message: 'Mesazhi',
    messagePlaceholder: 'Shkruani pyetjen tuaj...',
    mapsEyebrow: 'Google Maps',
  },
  mk: {
    eyebrow: 'Контакт',
    showroom: 'Салон',
    addressCountry: 'Северна Македонија',
    openMaps: 'Отвори во Google Maps',
    hoursTitle: 'Работно време',
    hours: 'Понеделник – Сабота: 08:00 – 19:00',
    sunday: 'Недела: Затворено',
    email: 'Е-пошта',
    message: 'Порака',
    messagePlaceholder: 'Напишете го вашето прашање...',
    mapsEyebrow: 'Google Maps',
  },
  en: {
    eyebrow: 'Contact',
    showroom: 'Showroom',
    addressCountry: 'North Macedonia',
    openMaps: 'Open in Google Maps',
    hoursTitle: 'Working hours',
    hours: 'Monday – Saturday: 08:00 – 19:00',
    sunday: 'Sunday: Closed',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Write your question...',
    mapsEyebrow: 'Google Maps',
  },
}

export default function Contact() {
  const { t, language } = useLanguage()
  const copy = labels[language] || labels.en
  const products = getLocalizedProducts(language)
  const [searchParams] = useSearchParams()
  const requestedProduct = searchParams.get('product')
  const selectedProduct = products.find((product) => product.slug === requestedProduct)?.name || products[0]?.name

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Feder Bau - ${data.get('interest') || t.contactTitle}`)
    const body = encodeURIComponent([
      `${t.name}: ${data.get('name') || ''}`,
      `${t.phone}: ${data.get('phone') || ''}`,
      `${copy.email}: ${data.get('email') || ''}`,
      `${t.interest}: ${data.get('interest') || ''}`,
      `${copy.message}:`,
      data.get('message') || '',
    ].join('\n'))
    window.location.href = `mailto:info@feder-bau.com.mk?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={t.contactTitle}
        text={t.contactIntro}
      />

      <section className="section contact">
        <div className="contact-copy">
          <SectionEyebrow>{copy.showroom}</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <address>
            <strong>Feder Bau</strong>
            <span>Golema Rechica 1200, Tetovo<br/>{copy.addressCountry}</span>
            <div style={{display:'grid', gap:'6px', marginTop:'10px'}}>
              <a href="tel:+38971224805">+389 (0) 71 224 805</a>
              <a href="tel:+38971224804">+389 (0) 71 224 804</a>
              <a href="tel:+38971224803">+389 (0) 71 224 803</a>
              <a href="tel:+38944482141">+389 (0) 44 482 141</a>
              <a href="mailto:info@feder-bau.com.mk">info@feder-bau.com.mk</a>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia"
              rel="noreferrer"
              target="_blank"
            >
              {copy.openMaps} →
            </a>
          </address>

          <div className="contact-hours">
            <strong>{copy.hoursTitle}</strong>
            <p>{copy.hours}<br/>{copy.sunday}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            {t.name}
            <input name="name" type="text" placeholder="Arben" required />
          </label>
          <label>
            {t.phone}
            <input name="phone" type="tel" placeholder="+389..." required />
          </label>
          <label>
            {copy.email}
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            {t.interest}
            <select name="interest" defaultValue={selectedProduct}>
              {products.map((product) => (
                <option key={product.slug} value={product.name}>{product.name}</option>
              ))}
            </select>
          </label>
          <label>
            {copy.message}
            <textarea name="message" rows="4" placeholder={copy.messagePlaceholder} style={{width:'100%', border:'none', borderBottom:'1px solid var(--line)', padding:'10px', fontFamily:'inherit', fontSize:'1rem', resize:'vertical'}}></textarea>
          </label>
          <button type="submit">{t.send}</button>
          <p style={{fontSize:'0.78rem', color:'var(--muted)', margin:0}}>
            {t.placeholderNotice}
          </p>
        </form>
      </section>

      <section className="section location">
        <div className="location-copy">
          <SectionEyebrow>{copy.mapsEyebrow}</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <address>
            <strong>Feder Bau</strong>
            <span>Golema Rechica 1200, Tetovo</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia"
              rel="noreferrer"
              target="_blank"
            >
              {copy.openMaps}
            </a>
          </address>
        </div>
        <iframe
          className="map-frame"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
          title="Feder Bau location on Google Maps"
        />
      </section>
    </>
  )
}
