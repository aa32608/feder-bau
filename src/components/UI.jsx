export function assetUrl(path) {
  if (!path) return ''
  if (/^https?:\/\//.test(path) || path.startsWith('data:')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

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
      <img src={assetUrl(product.image)} alt={`${product.name} Feder Bau mattress`} loading="lazy" />
      {product.height && <figcaption>{product.height} height</figcaption>}
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

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
