import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { experienceAssets, experienceContent, growthData, hotelReferences } from '../data/experience'
import { SectionEyebrow } from '../components/UI'
import { assetUrl } from '../utils/assets'

const growthKeys = ['investments', 'market', 'sales']
const maxGrowth = 11

function GrowthChart({ copy }) {
  return (
    <div className="growth-chart-card reveal-up">
      <div className="growth-chart-head">
        <div>
          <h3>{copy.growthChartTitle}</h3>
          <p>{copy.growthChartSubtitle}</p>
        </div>
        <div className="growth-legend">
          {growthKeys.map((key) => (
            <span key={key} className={`growth-legend-item ${key}`}>
              <i /> {copy.growthLabels[key]}
            </span>
          ))}
        </div>
      </div>

      <div className="growth-chart" aria-label={copy.growthChartTitle}>
        <div className="growth-axis">
          {[12, 10, 8, 6, 4, 2, 0].map((tick) => <span key={tick}>{tick}</span>)}
        </div>
        <div className="growth-plot">
          {[12, 10, 8, 6, 4, 2, 0].map((tick) => <span className="growth-grid-line" key={tick} />)}
          {growthData.map((year) => (
            <div className="growth-year" key={year.year}>
              <div className="growth-bars">
                {growthKeys.map((key) => (
                  <div
                    className="growth-bar-wrap"
                    key={key}
                    style={{ '--bar-height': `${(year[key] / maxGrowth) * 100}%` }}
                  >
                    <span className="growth-value">{year[key]}</span>
                    <span
                      className={`growth-bar ${key}`}
                      style={{ height: `${(year[key] / maxGrowth) * 100}%` }}
                    />
                  </div>
                ))}
              </div>
              <strong>{year.year}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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

      <section className="experience-full-bleed reveal-up">
        <img src={assetUrl(experienceAssets.aerial)} alt="Feder Bau full factory view" loading="lazy" />
      </section>

      <section className="section experience-growth-section">
        <div className="section-heading centered reveal-up">
          <SectionEyebrow>{copy.growthTitle}</SectionEyebrow>
          <h2>{copy.growthTitle}</h2>
          <p>{copy.growthIntro}</p>
        </div>
        <GrowthChart copy={copy} />
      </section>

      <section className="section experience-product-range">
        <div className="experience-product-copy reveal-left">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{copy.productsTitle}</h2>
          <p>{copy.productsIntro}</p>
        </div>
        <div className="experience-product-visuals reveal-right">
          <img src={assetUrl(experienceAssets.productRange)} alt="Feder Bau product range" loading="lazy" />
          <img src={assetUrl(experienceAssets.mattressDetail)} alt="Feder Bau mattress detail" loading="lazy" />
        </div>
      </section>

      <section className="section experience-hotels">
        <div className="section-heading centered reveal-up">
          <SectionEyebrow>{copy.hotelsTitle}</SectionEyebrow>
          <h2>{copy.hotelsTitle}</h2>
          <p>{copy.hotelsIntro}</p>
          <span className="hotel-note">{copy.hotelsNote}</span>
        </div>
        <div className="hotel-logo-grid">
          {hotelReferences.map((hotel, index) => (
            <article className="hotel-logo-card reveal-up" style={{ animationDelay: `${index * 0.05}s` }} key={hotel.name}>
              <img src={assetUrl(hotel.logo)} alt={hotel.name} loading="lazy" />
              <strong>{hotel.name}</strong>
            </article>
          ))}
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
