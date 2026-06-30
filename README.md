# Michał Pawłyna Portfolio

This is my personal portfolio website built with Vue 3, Vite, and Tailwind CSS.

## Project Overview

The portfolio features a modern dark theme, animated background effects, smooth navigation, and a clean section layout:

- **Hero** with a primary greeting and CTA
- **About** with my profile summary, photo, and highlights
- **Skills** with a branded logo carousel
- **Projects** showcasing my work with descriptions and tags
- **Contact** with email, LinkedIn, and GitHub links
- **Footer** with navigation and social links

## Technologies

- `Vue 3` (Composition API, `<script setup>`)
- `Vite` for development and build tooling
- `Tailwind CSS` for styling and layout
- `PostCSS` + `@tailwindcss/postcss`
- `ogl` for the Aurora background effect in `Aurora.vue`

## Key Features

- responsive layout for desktop and mobile
- smooth scrolling between sections
- active section tracking in the navbar
- CV download dropdown with English and Polish versions
- lazy-loaded profile image in About
- consistent dark theme across the site

## Project Structure

- `index.html` — main HTML template
- `src/main.js` — application entry point
- `src/App.vue` — root component that renders page sections
- `src/components/` — main page components
  - `NavBar.vue`
  - `HeroSection.vue`
  - `AboutSection.vue`
  - `SkillsSection.vue`
  - `ProjectsSection.vue`
  - `ContactSection.vue`
  - `Footer.vue`
- `src/vuebits/` — decorative and utility components
  - `Aurora/Aurora.vue`
  - `LogoLoop/LogoLoop.vue`
- `src/assets/` — images and icons
- `public/cv/` — place downloadable CV files here

## Local Setup

```bash
npm install
npm run dev
```

Then open the URL provided by Vite (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

## Notes

- `src/index.css` contains global styles, color theming, and font setup.
- `tailwind.config.js` extends fonts with `Space Grotesk` and `Inter`.
- `NavBar.vue` uses `IntersectionObserver` to track the visible section while scrolling.
- The CV dropdown expects files under `public/cv/` named `cv-michal-pawlyna-eng.pdf` and `cv-michal-pawlyna-pl.pdf`.

## Future Improvements

- add a working contact form or email integration
- add filtering and details to the projects section
- optimize images and deploy with an SSG/hosting service

## Author

Michał Pawłyna

---

This portfolio was created as a personal project to showcase my frontend skills and design approach.
