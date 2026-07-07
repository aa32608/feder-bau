import { copyFileSync } from 'node:fs'

copyFileSync('index.dev.html', 'index.html')
console.log('Prepared Vite source index.html')
