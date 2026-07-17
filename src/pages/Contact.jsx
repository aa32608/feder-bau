import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedProducts } from '../translations'
import { siteImages } from '../data/siteImages'
import { PageHero, SectionEyebrow } from '../components/UI'

const showroomMapsUrl =
  'https://www.google.com/maps/place/FederBau/@42.0031445,20.9934168,17z/data=!3m1!4b1!4m6!3m5!1s0x1353fa83fa913b41:0x9f2ccc3f384f5385!8m2!3d42.0031445!4d20.9959917!16s%2Fg%2F11cjj32gqj?entry=ttu'
const productionMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia'
const showroomMapEmbedUrl =
  'https://www.google.com/maps?q=42.0031445,20.9959917%20FederBau%20Showroom&output=embed'
const productionMapEmbedUrl =
  'https://www.google.com/maps?q=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia&output=embed'

const labels = {
  sq: {
    eyebrow: 'Kontakt',
    showroom: 'Showroom',
    showroomLocation: 'Showroom FederBau',
    productionLocation: 'Prodhimi / Lokacioni aktual',
    showroomAddress: 'FederBau Showroom, Tetovë',
    productionAddress: 'Reçicë e Madhe, 1200 Tetovë',
    addressCountry: 'Maqedonia e Veriut',
    openMaps: 'Hap në Google Maps',
    hoursTitle: 'Orari i punës',
    hours: 'E hënë – E shtunë: 08:00 – 19:00',
    sunday: 'E diel: Mbyllur',
    email: 'Email',
    message: 'Mesazhi',
    messagePlaceholder: 'Shkruani pyetjen tuaj...',
    mapsEyebrow: 'Google Maps',
    mapTitleShowroom: 'Lokacioni i showroom-it Feder Bau në Google Maps',
    mapTitleProduction: 'Lokacioni i Feder Bau në Reçicë të Madhe në Google Maps',
    sentNotice: 'Faleminderit. Kërkesa juaj u dërgua.',
    formNote: 'Forma dërgohet te info@feder-bau.com.mk. Në dërgimin e parë mund të kërkohet konfirmim nga emaili i kompanisë.',
  },
  mk: {
    eyebrow: 'Контакт',
    showroom: 'Салон',
    showroomLocation: 'FederBau салон',
    productionLocation: 'Производство / Тековна локација',
    showroomAddress: 'FederBau салон, Тетово',
    productionAddress: 'Голема Речица 1200, Тетово',
    addressCountry: 'Северна Македонија',
    openMaps: 'Отвори во Google Maps',
    hoursTitle: 'Работно време',
    hours: 'Понеделник – Сабота: 08:00 – 19:00',
    sunday: 'Недела: Затворено',
    email: 'Е-пошта',
    message: 'Порака',
    messagePlaceholder: 'Напишете го вашето прашање...',
    mapsEyebrow: 'Google Maps',
    mapTitleShowroom: 'Feder Bau салон на Google Maps',
    mapTitleProduction: 'Feder Bau локација во Голема Речица на Google Maps',
    sentNotice: 'Ви благодариме. Вашето барање е испратено.',
    formNote: 'Формата се испраќа на info@feder-bau.com.mk. При првото испраќање може да биде потребна потврда од компаниската е-пошта.',
  },
  en: {
    eyebrow: 'Contact',
    showroom: 'Showroom',
    showroomLocation: 'FederBau Showroom',
    productionLocation: 'Production / Current location',
    showroomAddress: 'FederBau Showroom, Tetovo',
    productionAddress: 'Golema Rechica 1200, Tetovo',
    addressCountry: 'North Macedonia',
    openMaps: 'Open in Google Maps',
    hoursTitle: 'Working hours',
    hours: 'Monday – Saturday: 08:00 – 19:00',
    sunday: 'Sunday: Closed',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Write your question...',
    mapsEyebrow: 'Google Maps',
    mapTitleShowroom: 'Feder Bau showroom location on Google Maps',
    mapTitleProduction: 'Feder Bau Golema Rechica location on Google Maps',
    sentNotice: 'Thank you. Your inquiry has been sent.',
    formNote: 'This form sends to info@feder-bau.com.mk. The first submission may require confirmation from the company email address.',
  },
}

export default function Contact() {
  const { t, language } = useLanguage()
  const copy = labels[language] || labels.en
  const products = getLocalizedProducts(language)
  const [searchParams] = useSearchParams()
  const requestedProduct = searchParams.get('product')
  const selectedProduct = products.find((product) => product.slug === requestedProduct)?.name || products[0]?.name
  const sent = searchParams.get('sent') === 'true'
  const nextUrl = `${window.location.origin}${import.meta.env.BASE_URL}#/contact?sent=true`

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={t.contactTitle}
        text={t.contactIntro}
        backgroundImage={siteImages.pageBackgrounds.contact}
      />

      <section className="section contact">
        <div className="contact-copy">
          <SectionEyebrow>{copy.showroom}</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>

          <div className="contact-location-list">
            <address className="contact-location-card">
              <strong>{copy.showroomLocation}</strong>
              <span>{copy.showroomAddress}<br/>{copy.addressCountry}</span>
              <a href={showroomMapsUrl} rel="noreferrer" target="_blank">
                {copy.openMaps} →
              </a>
            </address>

            <address className="contact-location-card">
              <strong>{copy.productionLocation}</strong>
              <span>{copy.productionAddress}<br/>{copy.addressCountry}</span>
              <a href={productionMapsUrl} rel="noreferrer" target="_blank">
                {copy.openMaps} →
              </a>
            </address>
          </div>

          <address>
            <strong>Feder Bau</strong>
            <div style={{display:'grid', gap:'6px', marginTop:'10px'}}>
              <a href="tel:+38971224805">+389 (0) 71 224 805</a>
              <a href="tel:+38971224804">+389 (0) 71 224 804</a>
              <a href="tel:+38971224803">+389 (0) 71 224 803</a>
              <a href="tel:+38944482141">+389 (0) 44 482 141</a>
              <a href="mailto:info@feder-bau.com.mk">info@feder-bau.com.mk</a>
            </div>
          </address>

          <div className="contact-hours">
            <strong>{copy.hoursTitle}</strong>
            <p>{copy.hours}<br/>{copy.sunday}</p>
          </div>
        </div>

        <form action="https://formsubmit.co/info@feder-bau.com.mk" method="POST">
          <input type="hidden" name="_subject" value="New Feder Bau website inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />
          <input type="text" name="_honey" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />

          {sent && <p className="form-success">{copy.sentNotice}</p>}

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
            {copy.formNote}
          </p>
        </form>
      </section>

      <section className="section location">
        <div className="location-copy">
          <SectionEyebrow>{copy.mapsEyebrow}</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <address>
            <strong>{copy.showroomLocation}</strong>
            <span>{copy.showroomAddress}</span>
            <a href={showroomMapsUrl} rel="noreferrer" target="_blank">
              {copy.openMaps}
            </a>
          </address>
          <address>
            <strong>{copy.productionLocation}</strong>
            <span>{copy.productionAddress}</span>
            <a href={productionMapsUrl} rel="noreferrer" target="_blank">
              {copy.openMaps}
            </a>
          </address>
        </div>
        <div className="map-grid">
          <iframe
            className="map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={showroomMapEmbedUrl}
            title={copy.mapTitleShowroom}
          />
          <iframe
            className="map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={productionMapEmbedUrl}
            title={copy.mapTitleProduction}
          />
        </div>
      </section>
    </>
  )
}
