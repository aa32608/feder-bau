import { assetUrl } from '../utils/assets'

export function PlaceholderBox({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`placeholder-box ${className}`} style={{ aspectRatio: ratio }}>
      <span className="placeholder-label">{label}</span>
      <span className="placeholder-badge">Placeholder</span>
    </div>
  )
}

export function ProductImage({ product, ratio = '4 / 3', className = '' }) {
  if (!product?.image) {
    return <PlaceholderBox label={product?.name || 'Product'} ratio={ratio} className={className} />
  }

  return (
    <figure className={`product-image ${className}`} style={{ aspectRatio: ratio }}>
      <img src={assetUrl(product.image)} alt={product.alt || `${product.name} Feder Bau`} loading="lazy" />
      {product.height && <figcaption>{product.height}</figcaption>}
    </figure>
  )
}

export function BrandLogo({ className = '' }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src={assetUrl('assets/brand/feder-bau-logo.jpg')}
      alt="Feder Bau"
    />
  )
}

export function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

export function PageHero({ eyebrow, title, text, backgroundImage }) {
  const style = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(28, 35, 49, 0.75), rgba(28, 35, 49, 0.75)), url(${assetUrl(backgroundImage)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff'
  } : {};

  return (
    <section className="page-hero" style={style}>
      <div className="page-hero-inner">
        {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
        <h1 style={backgroundImage ? {color: '#fff'} : {}}>{title}</h1>
        {text && <p style={backgroundImage ? {color: 'rgba(255,255,255,0.9)'} : {}}>{text}</p>}
      </div>
    </section>
  )
}
