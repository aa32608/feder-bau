import { useLanguage } from '../context/LanguageContext'
import { products, stats } from '../translations'
import { PageHero, SectionEyebrow, assetUrl } from '../components/UI'
import { Link } from 'react-router-dom'

export default function About() {
  const { t, language } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow="1997 • Tetovo"
        title={t.aboutTitle}
        text={t.aboutText}
      />

      <section className="section about">
        <div className="about-media">
          <img className="about-photo" src={assetUrl('assets/brand/feder-bau-brand-photo.jpg')} alt="Feder Bau brand" loading="lazy" />
        </div>
        <div className="about-copy">
          <SectionEyebrow>Showroom</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                <strong>{stat.value}</strong>
                <span>{stat.label[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="section-heading">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{t.benefitsTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
        <div className="benefits-grid">
          {t.benefits.map((benefit, index) => (
            <div className="benefit-card tall" key={index}>
              <div className="benefit-icon benefit-number">
                {index + 1}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section about">
        <div className="about-copy">
          <SectionEyebrow>Craftsmanship</SectionEyebrow>
          <h2>{t.heroSlides[1].title}</h2>
          <p>{t.heroSlides[1].text}</p>
          <p style={{marginTop: '18px'}}>{t.aboutText}</p>
          <div style={{marginTop:'28px', display:'flex', gap:'14px', flexWrap:'wrap'}}>
            <Link to="/products" className="button primary">{t.heroSlides[0].cta}</Link>
            <Link to="/contact" className="button">{t.contactTitle}</Link>
          </div>
        </div>
        <div className="about-media">
          <img className="about-photo" src={assetUrl(products[5].image)} alt="Feder Bau Dreamer mattress" loading="lazy" />
        </div>
      </section>
    </>
  )
}
