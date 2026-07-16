import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = '/home/user/feder-bau/public/assets/cover'
const outputDir = '/home/user/feder-bau/public/assets/cover-optimized'

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Mapping of original filename -> optimized filename + purpose
// Based on current usage in siteImages.js and page components
const imageMap = [
  // Hero carousel (3 images) - large atmospheric shots
  { original: 'DSC02844.jpg', optimized: 'hero-01.webp', purpose: 'Hero slide 1 - atmospheric mattress/factory' },
  { original: 'DSC02973.jpg', optimized: 'hero-02.webp', purpose: 'Hero slide 2 - atmospheric' },
  { original: 'DSC03001.jpg', optimized: 'hero-03.webp', purpose: 'Hero slide 3 - atmospheric' },

  // Categories (6 images) - product category themed
  { original: 'DSC08246.jpg', optimized: 'category-01.webp', purpose: 'Category: Spring/foam mattresses' },
  { original: 'DSC08247.jpg', optimized: 'category-02.webp', purpose: 'Category: Memory foam' },
  { original: 'DSC08313.jpg', optimized: 'category-03.webp', purpose: 'Category: Orthopedic/support' },
  { original: 'DSC08318.jpg', optimized: 'category-04.webp', purpose: 'Category: Premium' },
  { original: 'DSC08319_1.jpg', optimized: 'category-05.webp', purpose: 'Category: Hotel/family' },
  { original: 'DSC08324.jpg', optimized: 'category-06.webp', purpose: 'Category: Specialty' },

  // Benefits (4 images) - small accent images matching benefit text
  { original: 'DSC08355.jpg', optimized: 'benefit-01.webp', purpose: 'Benefit: Quality materials' },
  { original: 'DSC08358.jpg', optimized: 'benefit-02.webp', purpose: 'Benefit: Craftsmanship' },
  { original: 'DSC08368.jpg', optimized: 'benefit-03.webp', purpose: 'Benefit: Durability' },
  { original: 'DSC08371.jpg', optimized: 'benefit-04.webp', purpose: 'Benefit: Sleep comfort' },

  // Collections (6 images) - gallery/showroom photos
  { original: 'DSC02917.jpg', optimized: 'collection-01.webp', purpose: 'Collection: Gallery 1' },
  { original: 'DSC02932.jpg', optimized: 'collection-02.webp', purpose: 'Collection: Gallery 2' },
  { original: 'DSC02941.jpg', optimized: 'collection-03.webp', purpose: 'Collection: Gallery 3' },
  { original: 'DSC02826.jpg', optimized: 'collection-04.webp', purpose: 'Collection: Showroom 1' },
  { original: 'DSC02830.jpg', optimized: 'collection-05.webp', purpose: 'Collection: Showroom 2' },
  { original: 'DSC02840.jpg', optimized: 'collection-06.webp', purpose: 'Collection: Showroom 3' },

  // About page (3 images)
  { original: 'DSC08232.jpg', optimized: 'about-showroom.webp', purpose: 'About: Showroom interior' },
  { original: 'DSC08266.jpg', optimized: 'about-craft.webp', purpose: 'About: Craftsmanship detail' },
  { original: 'DSC08285.jpg', optimized: 'about-home.webp', purpose: 'About: Home/bedroom setting' },

  // Page backgrounds
  { original: 'DSC02877.jpg', optimized: 'page-collections-bg.webp', purpose: 'Collections page hero background' },
  { original: 'DSC03039.jpg', optimized: 'page-contact-bg.webp', purpose: 'Contact page hero background' },
]

async function optimizeImages() {
  console.log('Starting image optimization...\n')

  for (const item of imageMap) {
    const inputPath = path.join(inputDir, item.original)
    const outputPath = path.join(outputDir, item.optimized)

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Missing: ${item.original}`)
      continue
    }

    try {
      // Get original metadata
      const metadata = await sharp(inputPath).metadata()
      console.log(`Processing: ${item.original} (${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(1)}MB)`)

      // Resize to max 1600px width, maintain aspect ratio, convert to WebP quality 80
      await sharp(inputPath)
        .resize(1600, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath)

      const outStats = fs.statSync(outputPath)
      console.log(`  ✓ ${item.optimized} (${(outStats.size / 1024).toFixed(0)}KB) - ${item.purpose}\n`)
    } catch (err) {
      console.error(`  ✗ Failed: ${item.original}`, err.message)
    }
  }

  console.log('Optimization complete!')
  console.log(`\nOptimized images saved to: ${outputDir}`)
}

optimizeImages()