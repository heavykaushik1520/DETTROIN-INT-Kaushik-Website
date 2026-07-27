# Horizon International School

Official school website for **Horizon International School** — a CBSE-affiliated K–12 campus site with admissions enquiry, academics overview, awards, photo gallery, and contact.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Router](https://reactrouter.com/) 7

## Requirements

- Node.js **18+**
- npm

## Getting started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start local development server   |
| `npm run build`   | Production build to `dist/`      |
| `npm run preview` | Preview the production build     |

## Pages

| Path                     | Page                  |
| ------------------------ | --------------------- |
| `/`                      | Home                  |
| `/about-us`              | About Us              |
| `/academics`             | Academics             |
| `/admissions`            | Admissions enquiry    |
| `/awards-achievements`   | Awards & Achievements |
| `/gallery`               | Photo Gallery         |
| `/contact-us`            | Connect With Us       |

## Project structure

```
src/
  assets/img/       # Logos, hero, gallery, awards, campus images
  components/       # UI sections (hero, awards, admissions, layout, …)
  constants/        # Copy, links, SEO titles, form config
  hooks/            # Shared hooks (e.g. page title)
  pages/            # Route-level pages
  App.jsx           # Router setup
```

## Deploy on Vercel

The repo includes `vercel.json` with SPA rewrites so client-side routes work on refresh.

1. Push this project to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

Or via CLI:

```bash
npx vercel
```

## Notes

- Contact and enquiry forms are front-end only (no backend yet).
- Social links in the footer are placeholders — update them in `src/constants/` / `Footer.jsx` when ready.
- School branding assets live under `src/assets/img/`.
