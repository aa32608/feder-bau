import { Link, useParams } from 'react-router-dom'
import { products } from '../translations'
import { useLanguage } from '../context/LanguageContext'
import { ProductImage, SectionEyebrow } from '../components/UI'

const labels = {
  sq: {
    back: 'Kthehu te dyshekët',
    details: 'Detajet e produktit',
    description: 'Përshkrimi',
    materials: 'Materialet dhe veçoritë',
    height: 'Lartësia',
    category: 'Kategoria',
    price: 'Çmimi',
    pricePlaceholder: 'Me kërkesë',
    ask: 'Pyet për këtë model',
    missingTitle: 'Produkti nuk u gjet',
    missingText: 'Ky produkt mund të jetë zhvendosur ose nuk ekziston më.',
  },
  mk: {
    back: 'Назад кон душеци',
    details: 'Детали за производот',
    description: 'Опис',
    materials: 'Материјали и карактеристики',
    height: 'Висина',
    category: 'Категорија',
    price: 'Цена',
    pricePlaceholder: 'По барање',
    ask: 'Прашај за овој модел',
    missingTitle: 'Производот не е пронајден',
    missingText: 'Овој производ можеби е преместен или повеќе не постои.',
  },
  en: {
    back: 'Back to mattresses',
    details: 'Product details',
    description: 'Description',
    materials: 'Materials & features',
    height: 'Height',
    category: 'Category',
    price: 'Price',
    pricePlaceholder: 'On request',
    ask: 'Ask about this model',
    missingTitle: 'Product not found',
    missingText: 'This product may have been moved or no longer exists.',
  },
}

export default function ProductDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const copy = labels[language] || labels.en
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <section className="section product-detail-empty">
        <SectionEyebrow>Feder Bau</SectionEyebrow>
        <h1>{copy.missingTitle}</h1>
        <p>{copy.missingText}</p>
        <Link className="button primary" to="/products">{copy.back}</Link>
      </section>
    )
  }

  return (
    <>
      <section className="product-detail-hero">
        <Link className="link-arrow product-back" to="/products">← {copy.back}</Link>
        <div className="product-detail-grid">
          <ProductImage product={product} ratio="16 / 10" className="product-detail-image" />
          <div className="product-detail-copy">
            <SectionEyebrow>{copy.details}</SectionEyebrow>
            <h1>{product.name}</h1>
            <p className="product-detail-lead">{product.detail}</p>
            <div className="product-detail-facts" aria-label={`${product.name} quick facts`}>
              <div>
                <span>{copy.height}</span>
                <strong>{product.height || '—'}</strong>
              </div>
              <div>
                <span>{copy.category}</span>
                <strong>{product.category || '—'}</strong>
              </div>
              <div>
                <span>{copy.price}</span>
                <strong>{product.price || copy.pricePlaceholder}</strong>
              </div>
            </div>
            <Link className="button primary" to={`/contact?product=${product.slug}`}>{copy.ask}</Link>
          </div>
        </div>
      </section>

      <section className="section product-detail-body">
        <div className="product-detail-section">
          <h2>{copy.description}</h2>
          <p>{product.description || 'Product description placeholder. Add final copy for this mattress when available.'}</p>
        </div>

        <div className="product-detail-section product-detail-materials">
          <h2>{copy.materials}</h2>
          {product.materials?.length ? (
            <ul className="material-list detail-material-list">
              {product.materials.map((material) => <li key={material}>{material}</li>)}
            </ul>
          ) : (
            <p>Materials placeholder.</p>
          )}
        </div>
      </section>
    </>
  )
}
