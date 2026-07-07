import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedProducts } from '../translations'
import { ProductImage, PageHero } from '../components/UI'
import { Link } from 'react-router-dom'

export default function Products() {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState('all')

  const products = getLocalizedProducts(language)
  const allLabel = { sq: 'Të gjitha', mk: 'Сите', en: 'All' }[language] || 'All'
  const madeLabel = { sq: 'Prodhuar në Tetovë', mk: 'Произведено во Тетово', en: 'Made in Tetovo' }[language] || 'Made in Tetovo'
  const categories = [
    { key: 'all', label: allLabel },
    ...Array.from(new Map(products.map((product) => [product.categoryKey, product.category])).entries())
      .map(([key, label]) => ({ key, label })),
  ]
  const visibleProducts = filter === 'all'
    ? products
    : products.filter((product) => product.categoryKey === filter)

  return (
    <>
      <PageHero
        eyebrow="Feder Bau • Tetovo"
        title={t.productsTitle}
        text={t.productsIntro}
      />

      <section className="section products" style={{ paddingTop: '40px' }}>
        <div className="product-filters">
          {categories.map((category) => (
            <button 
              key={category.key}
              onClick={()=>setFilter(category.key)}
              className={filter === category.key ? 'active':''}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <ProductImage product={product} ratio="3 / 2" />
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
                  <span className="product-tag">{madeLabel}</span>
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
