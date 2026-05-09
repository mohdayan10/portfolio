# Portfolio — Mohammed Ayan

Personal portfolio site built with React + Vite. Animated 3D hero, parallax tilt cards, scroll-driven motion, and a live GitHub contribution graph.

## Stack

- **React 19** + **Vite 5** — app shell and dev tooling
- **Three.js** via **@react-three/fiber** and **@react-three/drei** — animated icosahedron in the hero
- **framer-motion** — entrance and scroll-into-view animations
- **react-parallax-tilt** — interactive cards and buttons
- **react-github-calendar** — contribution heatmap (themed to the site accent)

## Sections

- `Hero` — name lockup with an auto-rotating distorted icosahedron
- `Intro` — short positioning statement
- `Services` — branding & marketing service list
- `GitHubActivity` — live contribution calendar for [@mohdayan10](https://github.com/mohdayan10)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run eslint
```

## Project layout

```
src/
  App.jsx       # all sections (Hero, Intro, Services, GitHubActivity)
  App.css       # section styles
  index.css     # global styles
  main.jsx      # entry point
```
