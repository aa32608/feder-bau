import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { products, collections, stats } from '../translations'
import { ProductImage, SectionEyebrow, assetUrl } from '../components/UI'

const heroImages = [
  'assets/products/dreamer.jpg',
  'assets/products/viscoline.jpg',
  'assets/products/comfort.jpg',
]

function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setActive((active - 1 + slides.length) % slides.length)
  const next = () => setActive((active + 1) % slides.length)

  return (
    <section className="hero-carousel" aria-label="Hero slider">
      <div className="hero-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index} aria-hidden={active !== index}>
            <div className="hero-slide-bg">
              <img src={assetUrl(heroImages[index % heroImages.length])} alt="Feder Bau mattress" />
            </div>
            <div className="hero-slide-overlay" />
            <div className="hero-slide-content">
              <SectionEyebrow>{slide.eyebrow}</SectionEyebrow>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <Link className="button primary" to="/products">
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow carousel-prev" onClick={prev} type="button" aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="carousel-arrow carousel-next" onClick={next} type="button" aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={active === index ? 'active' : ''}
            onClick={() => setActive(index)}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const { t, language } = useLanguage()
  const featured = products.slice(0, 3)

  return (
    <>
      <HeroCarousel slides={t.heroSlides} />

      <section className="section categories">
        <SectionEyebrow>Feder Bau</SectionEyebrow>
        <h2>{t.categoriesTitle}</h2>
        <div className="category-list">
          {t.categories.map((category, index) => (
            <Link className="category-card" to="/products" key={index}>
              <span className="category-icon category-letter">
                {category.charAt(0)}
              </span>
              <span className="category-name">{category}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section products">
        <div className="section-heading">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{t.productsTitle}</h2>
          <p>{t.productsIntro}</p>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <article className="product-card" key={product.name}>
              <ProductImage product={product} ratio="4 / 3" />
              <div className="product-info">
                <div className="product-heading-row">
                  <h3>{product.name}</h3>
                  <span className="product-height">{product.height}</span>
                </div>
                <p>{product.detail}</p>
                <span className="product-price">—</span>
                <Link className="product-cta" to={`/products/${product.slug}`}>{t.productCta}</Link>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/products" className="button">{t.nav[1]} →</Link>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-media">
          <img className="about-photo" src={assetUrl('assets/brand/feder-bau-brand-photo.jpg')} alt="Feder Bau brand" loading="lazy" />
        </div>
        <div className="about-copy">
          <SectionEyebrow>1997</SectionEyebrow>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                <strong>{stat.value}</strong>
                <span>{stat.label[language]}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '28px' }}>
            <Link to="/about" className="button primary">{t.nav[2]} →</Link>
          </div>
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

      <section className="section collections">
        <div className="section-heading">
          <SectionEyebrow>{t.collectionsTitle}</SectionEyebrow>
          <h2>{t.collectionsTitle}</h2>
          <p>{t.collectionsIntro}</p>
        </div>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <article className="collection-card" key={index}>
              <div className="collection-media">
                <img src={assetUrl(products[index % products.length].image)} alt={collection.title} loading="lazy" />
              </div>
              <div className="collection-content">
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
                <Link to="/collections" className="link-arrow">{t.collectionCta} →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
