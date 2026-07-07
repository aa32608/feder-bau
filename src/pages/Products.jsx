import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { products } from '../translations'
import { ProductImage, PageHero } from '../components/UI'
import { Link } from 'react-router-dom'

export default function Products() {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState('all')

  const allLabel = { sq: 'Të gjitha', mk: 'Сите', en: 'All' }[language] || 'All'
  const categories = ['all', ...Array.from(new Set(products.map((product) => product.category).filter(Boolean)))]
  const visibleProducts = filter === 'all'
    ? products
    : products.filter((product) => product.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Feder Bau • Tetovo"
        title={t.productsTitle}
        text={t.productsIntro}
      />

      <section className="section products" style={{ paddingTop: '40px' }}>
        <div className="product-filters">
          {categories.map((c) => (
            <button 
              key={c}
              onClick={()=>setFilter(c)}
              className={filter === c ? 'active':''}
              type="button"
            >
              {c === 'all' ? allLabel : c}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <ProductImage product={product} ratio="4 / 3" />
              <div className="product-info">
                <div className="product-heading-row">
                  <h3>{product.name}</h3>
                  {product.height && <span className="product-height">{product.height}</span>}
                </div>
                <p>{product.detail}</p>
                {product.materials?.length > 0 && (
                  <ul className="material-list" aria-label={`${product.name} materials`}>
                    {product.materials.map((material) => <li key={material}>{material}</li>)}
                  </ul>
                )}
                <div className="product-meta">
                  <span className="product-price">—</span>
                  <span className="product-tag">Made in Tetovo</span>
                </div>
                <div className="product-actions">
                  <Link to={`/products/${product.slug}`} className="product-cta">{t.productCta}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="product-help">
          <h3>{t.benefits[2].title}</h3>
          <p>{t.benefits[2].text}</p>
          <Link to="/contact" className="button primary">{t.contactTitle}</Link>
        </div>
      </section>
    </>
  )
}
