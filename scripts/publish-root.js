import { copyFileSync, cpSync, existsSync, rmSync } from 'node:fs'

if (!existsSync('dist/index.html')) {
  throw new Error('dist/index.html not found. Run vite build first.')
}

copyFileSync('dist/index.html', 'index.html')

if (existsSync('assets')) {
  rmSync('assets', { recursive: true, force: true })
}
cpSync('dist/assets', 'assets', { recursive: true })

if (existsSync('dist/.nojekyll')) {
  copyFileSync('dist/.nojekyll', '.nojekyll')
} else {
  copyFileSync('public/.nojekyll', '.nojekyll')
}

if (existsSync('dist/404.html')) {
  copyFileSync('dist/404.html', '404.html')
} else if (existsSync('public/404.html')) {
  copyFileSync('public/404.html', '404.html')
}

console.log('Published production build to repository root for GitHub Pages main/root deployment')
