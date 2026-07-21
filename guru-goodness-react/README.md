# Guru & Goodness — React (Vite)

Small React site built with Vite. This repository contains the frontend for the Guru & Goodness website, a content-driven React app that uses local JSON/article files for product, blog and review data.

**Quick links**
- Code: repository root
- App entry: [src/main.jsx](src/main.jsx#L1)
- Routes: [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx#L1)

## Features
- Built with Vite + React (fast dev server and HMR)
- Client-side routing via `react-router-dom`
- Local JSON-backed content in the `data/` folder for easy editing
- Reusable UI components in `src/components/`

## Project structure (high level)
- `src/` — React source files and components
- `public/` — static assets and manifest
- `data/` — JSON and HTML article files used by the app
- `styles/` — CSS stylesheets

Notable folders:
- [data/](data) — contains `allProduct.json`, `blogs.json`, `customer-reviews.json`, and the `articles/` HTML files.
- [src/components/](src/components) — UI components like `ArticleCard`, `ProductCard`, `ReviewCard`.

## Prerequisites
- Node.js (18+ recommended)
- npm or yarn

## Setup
Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Available npm scripts (from `package.json`):
- `dev` — start Vite development server
- `build` — build production assets
- `preview` — locally preview the production build
- `lint` — run `oxlint` checks

## Data & Content
- To edit products, blogs or reviews, update the files in [data/](data).
- Article HTML files live in `data/articles/` and are rendered by the blog/article pages.

## Development notes
- Frontend entry: [src/main.jsx](src/main.jsx#L1)
- Main layout: [src/components/Layout/MainLayout.jsx](src/components/Layout/MainLayout.jsx#L1)
- Routes defined in: [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx#L1)

If you add new static assets, place them in `public/` or `src/assets/` and reference them from components.

## Contributing
- Create a branch for your change
- Keep commits focused and atomic
- Open a pull request describing the change

## License
This repository does not include a license file. Add one if you intend to make the project public.

---

If you'd like specific sections added or a different README style (short landing, or detailed developer guide), tell me which sections to expand and I'll update it.
