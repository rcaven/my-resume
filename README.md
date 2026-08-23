# Ryan Caven — Portfolio & Résumé

An interactive résumé and portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. Features a bento-grid layout, dark/light mode, expandable experience modals, a skills doughnut chart, and a Selected Work case-study section.

**Live site:** https://ryan-caven-resume.vercel.app/

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173/ with hot module reload.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR at http://localhost:5173/ |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` output at http://localhost:4173/ — run `build` first |
| `npm run lint` | ESLint across the project |

`npm run preview` is the closest local match to production: minified bundle, hashed assets, and the SPA rewrite from `vercel.json`. Worth running before you push.

## Features

- **Dark/light mode** — theme toggle driven by React state, applied through composed Tailwind class strings
- **Selected Work** — three expandable case studies (One Medical, AWS, Blueland) driven by a single data file
- **Professional experience** — cards open detailed modals, one at a time
- **Skills chart** — Chart.js doughnut with custom HTML tooltips
- **Contact card** — direct email, LinkedIn, and GitHub links, plus a résumé request
- **Responsive** — mobile, tablet, and desktop layouts
- **Motion** — Framer Motion throughout; the Selected Work section respects `prefers-reduced-motion`

## Tech stack

- **React 19** — UI framework
- **Vite 7** — build tool and dev server (via the `rolldown-vite` drop-in)
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion** — animation
- **Chart.js** + **react-chartjs-2** — skills visualization
- **React Icons** — Feather icon set
- **Vercel** — hosting and CI/CD

## Project structure

```
index.html                     Document shell, title, meta and Open Graph tags
public/                        Static assets served from the site root
src/
  main.jsx                     React entry point
  App.jsx                      Page layout, theme state, and résumé sections
  index.css                    Tailwind directives, blob keyframes, scroll behavior
  components/
    SelectedWork.jsx           Case-study section and reusable project card
  data/
    selectedWork.js            Case-study content
  assets/                      Images imported by the bundler
```

Résumé content currently lives inline in `App.jsx`; Selected Work content is separated into `src/data/`.

## Styling notes

Theming does **not** use Tailwind's `dark:` variant. A `darkMode` state value in `App.jsx` selects between class strings (`textPrimary`, `cardBg`, `borderColor`, …) that are passed down as props. New components should follow that pattern.

Because Tailwind scans source files for complete class names, dynamically built classes must be written out in full. `` `text-${color}-500` `` will not generate any CSS — use a lookup map of literal strings instead, as `SelectedWork.jsx` does.

## Deployment

Pushing to `main` triggers a deploy through Vercel's GitHub integration. SPA routing is handled by the rewrite rule in `vercel.json`.

The `predeploy`/`deploy` scripts and the `homepage` field in `package.json` are left over from an earlier GitHub Pages setup and are not part of the current deployment path.
