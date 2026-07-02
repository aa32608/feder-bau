import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://aa32608.github.io/feder-bau/
  // Must match repo name exactly or assets 404 (main.jsx error)
  base: '/feder-bau/',
  plugins: [react()],
})
