# Feder Bau

Demo website – Feder Bau mattress showroom, Reçicë e Madhe, Tetovo, North Macedonia.

Live: **https://aa32608.github.io/feder-bau/**

- React 19 + Vite 6
- React Router (HashRouter – GitHub Pages safe)
- SQ / MK / EN – 3 languages
- 5 pages: Home, Products, Collections, About, Contact

## Routes
- `/` – Home – hero carousel, featured
- `/#/products` – Dyshekët – full catalog
- `/#/collections` – Koleksionet
- `/#/about` – Përvoja – 1997 story
- `/#/contact` – Kontakt + Showroom map

## Dev
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy – GitHub Pages (branch /docs)
```bash
npm run build
# copy dist → docs
rm -rf docs && cp -r dist docs && cp docs/index.html docs/404.html && touch docs/.nojekyll
git add docs && git commit -m "deploy"
git push origin main
```
Then Settings → Pages → Source: **Deploy from a branch** → **main /docs**

Vite base is set to `/feder-bau/` – change in `vite.config.js` if you fork/rename.

---
© 2026 Feder Bau – Tetovo
