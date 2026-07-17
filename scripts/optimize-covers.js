import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const inputDir = path.join(rootDir, 'foto cover')
const outputDir = path.join(rootDir, 'public/assets/cover-optimized')

// Only images that are referenced by the website are exported. The original
// camera files stay outside public/, so Vite never publishes their 190+ MB.
const imageMap = [
  ['DSC02844.jpg', 'hero-01.webp'],
  ['DSC02973.jpg', 'hero-02.webp'],
  ['DSC03001.jpg', 'hero-03.webp'],
  ['DSC08246.jpg', 'category-01.webp'],
  ['DSC08247.jpg', 'category-02.webp'],
  ['DSC08313.jpg', 'category-03.webp'],
  ['DSC08318.jpg', 'category-04.webp'],
  ['DSC08319_1.jpg', 'category-05.webp'],
  ['DSC08324.jpg', 'category-06.webp'],
  ['DSC08355.jpg', 'benefit-01.webp'],
  ['DSC08358.jpg', 'benefit-02.webp'],
  ['DSC08368.jpg', 'benefit-03.webp'],
  ['DSC08371.jpg', 'benefit-04.webp'],
  ['DSC02917.jpg', 'collection-01.webp'],
  ['DSC02932.jpg', 'collection-02.webp'],
  ['DSC02941.jpg', 'collection-03.webp'],
  ['DSC02826.jpg', 'collection-04.webp'],
  ['DSC02830.jpg', 'collection-05.webp'],
  ['DSC02840.jpg', 'collection-06.webp'],
  ['DSC08232.jpg', 'about-showroom.webp'],
  ['DSC08266.jpg', 'about-craft.webp'],
  ['DSC08285.jpg', 'about-home.webp'],
  ['DSC02877.jpg', 'page-collections-bg.webp'],
  ['DSC03039.jpg', 'page-contact-bg.webp'],
]

fs.mkdirSync(outputDir, { recursive: true })

for (const [original, optimized] of imageMap) {
  const input = path.join(inputDir, original)
  const output = path.join(outputDir, optimized)

  if (!fs.existsSync(input)) {
    console.warn(`Missing source image: ${original}`)
    continue
  }

  // ImageMagick is available in the project environment and avoids adding a
  // native Node dependency just to maintain static assets.
  execFileSync('convert', [
    input,
    '-auto-orient',
    '-resize', '1600x1600>',
    '-strip',
    '-quality', '80',
    output,
  ], { stdio: 'inherit' })

  const sizeKb = Math.round(fs.statSync(output).size / 1024)
  console.log(`Optimized ${original} → ${optimized} (${sizeKb} KB)`)
}
