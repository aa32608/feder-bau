import { useLanguage } from '../context/LanguageContext'
import { getLocalizedCollections } from '../translations'
import { siteImages } from '../data/siteImages'
import { PageHero, SectionEyebrow } from '../components/UI'
import { assetUrl } from '../utils/assets'
import { Link } from 'react-router-dom'

export default function Collections() {
  const { t, language } = useLanguage()
  const collections = getLocalizedCollections(language)

  return (
    <>
      <PageHero 
        eyebrow={t.nav[0]}
        title={t.collectionsTitle}
        text={t.collectionsIntro}
        backgroundImage={siteImages.pageBackgrounds.collections}
      />

      <section className="section collections" style={{paddingTop: '40px'}}>
        <div className="collection-grid large">
          {collections.map((collection, index) => (
            <article className="collection-card" key={index}>
              <div className="collection-media">
                <img src={assetUrl(siteImages.collections[index % siteImages.collections.length])} alt={collection.title} loading="lazy" />
              </div>
              <div className="collection-content">
                <SectionEyebrow>{'0'+(index+1)}</SectionEyebrow>
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
                <Link to="/products" className="link-arrow">{t.collectionCta} →</Link>
              </div>
            </article>
          ))}
          {collections.map((collection, index) => (
            <article className="collection-card subtle" key={'b'+index}>
              <div className="collection-media">
                <img src={assetUrl(siteImages.collections[(index + 3) % siteImages.collections.length])} alt={t.categories[index+3] || collection.title} loading="lazy" />
              </div>
              <div className="collection-content">
                <h3>{t.categories[index+3] || collection.title}</h3>
                <p>{t.productsIntro}</p>
                <Link to="/products" className="link-arrow">{t.collectionCta} →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits">
        <div className="section-heading centered">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{t.benefitsTitle}</h2>
        </div>
        <div className="benefits-grid">
          {t.benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon benefit-number">
                {index + 1}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
