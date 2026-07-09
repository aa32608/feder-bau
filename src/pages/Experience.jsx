import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { experienceAssets, experienceContent } from '../data/experience'
import { SectionEyebrow } from '../components/UI'
import { assetUrl } from '../utils/assets'

export default function Experience() {
  const { language } = useLanguage()
  const copy = experienceContent[language] || experienceContent.en

  return (
    <>
      <section className="experience-hero">
        <div className="experience-hero-media">
          <img src={assetUrl(experienceAssets.hero)} alt="Feder Bau production facility" />
        </div>
        <div className="experience-hero-overlay" />
        <div className="experience-hero-content reveal-up">
          <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
          <div className="experience-actions">
            <Link to="/products" className="button primary">{copy.primaryCta}</Link>
            <a href={assetUrl(experienceAssets.pdf)} className="button light" target="_blank" rel="noreferrer">
              {copy.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="section experience-stats">
        {copy.stats.map((stat, index) => (
          <div className="experience-stat reveal-up" style={{ animationDelay: `${index * 0.08}s` }} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section experience-story">
        <div className="experience-story-media reveal-left">
          <img src={assetUrl(experienceAssets.garage)} alt="Feder Bau early workshop" loading="lazy" />
          <img src={assetUrl(experienceAssets.factory)} alt="Feder Bau factory" loading="lazy" />
        </div>
        <div className="experience-story-copy reveal-up">
          <SectionEyebrow>{copy.storyLabel}</SectionEyebrow>
          <h2>{copy.storyTitle}</h2>
          <p>{copy.storyText}</p>
          <p>{copy.growthText}</p>
        </div>
      </section>

      <section className="section experience-secret">
        <div className="experience-secret-card reveal-up">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{copy.secretTitle}</h2>
          <p>{copy.secretText}</p>
        </div>
      </section>

      <section className="section experience-timeline">
        {copy.timeline.map((item, index) => (
          <article className="timeline-card reveal-up" style={{ animationDelay: `${index * 0.1}s` }} key={`${item.year}-${item.title}`}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section experience-capacity">
        <div className="experience-capacity-copy reveal-up">
          <SectionEyebrow>6000 m²</SectionEyebrow>
          <h2>{copy.capacityTitle}</h2>
          <p>{copy.capacityText}</p>
        </div>
        <div className="experience-capacity-media reveal-right">
          <img src={assetUrl(experienceAssets.aerial)} alt="Feder Bau factory aerial view" loading="lazy" />
        </div>
      </section>

      <section className="section experience-showcase">
        <div className="section-heading centered reveal-up">
          <SectionEyebrow>{copy.growthTitle}</SectionEyebrow>
          <h2>{copy.growthTitle}</h2>
          <p>{copy.growthIntro}</p>
        </div>
        <div className="experience-showcase-grid">
          <figure className="experience-panel reveal-left">
            <img src={assetUrl(experienceAssets.growthChart)} alt="Feder Bau areas of growth chart" loading="lazy" />
          </figure>
          <figure className="experience-panel reveal-up">
            <img src={assetUrl(experienceAssets.productRange)} alt="Feder Bau product range" loading="lazy" />
            <figcaption>
              <h3>{copy.productsTitle}</h3>
              <p>{copy.productsIntro}</p>
            </figcaption>
          </figure>
          <figure className="experience-panel reveal-right">
            <img src={assetUrl(experienceAssets.hotelReferences)} alt="Feder Bau hotel references" loading="lazy" />
            <figcaption>
              <h3>{copy.hotelsTitle}</h3>
              <p>{copy.hotelsIntro}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section experience-gallery">
        <img className="reveal-left" src={assetUrl(experienceAssets.mattressDetail)} alt="Feder Bau mattress detail" loading="lazy" />
        <img className="reveal-up" src={assetUrl(experienceAssets.bedroomCraft)} alt="Feder Bau bedroom craftsmanship" loading="lazy" />
        <img className="reveal-right" src={assetUrl(experienceAssets.premiumBed)} alt="Feder Bau premium bed" loading="lazy" />
      </section>

      <section className="section experience-quote">
        <blockquote className="reveal-up">
          “{copy.quote}”
          <cite>{copy.quoteAuthor}</cite>
        </blockquote>
      </section>

      <section
        className="section experience-closing"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(28,35,49,0.94), rgba(28,35,49,0.82)), url(${assetUrl(experienceAssets.premiumBed)})` }}
      >
        <div className="reveal-up">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{copy.closingTitle}</h2>
          <p>{copy.closingText}</p>
          <div className="experience-actions centered-actions">
            <Link to="/products" className="button primary">{copy.primaryCta}</Link>
            <Link to="/contact" className="button">{copy.contactCta}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
