# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development (dev server + Tailwind CSS watcher via concurrently)
npm start            # Dev server only (Craco wrapping CRA)
npm run build        # Production build (watch:css then craco build → build/)
npm run watch:css    # Compile src/styles/tailwind.css → src/styles/output.css
npm test             # Run tests (Jest via Craco, watch mode)
npm test -- -t "<pattern>"      # Run single test by name
npm test -- --watchAll=false    # Run tests once without watch
npx eslint "src/**/*.{js,jsx}"  # Lint (no dedicated script; eslintConfig in package.json)
```

## Architecture

React 19 portfolio site using CRA + Craco, Wouter routing, Tailwind CSS, and Motion for animations. Deployed to Netlify.

**Routing:** `App.js` defines all routes using Wouter — `/`, `/about`, `/side-projects`, `/experiences`, `/contact`. To add a page, create a component in `src/pages/` and register the route in `App.js`.

**Data flow:** Static data lives in `src/data/dataSite.json`. Service functions in `src/services/index.js` expose getters (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`, `getStyleButton`, `getYearsOfExperience`). Components never import `dataSite.json` directly — always go through services.

**i18n:** Custom context-based system in `src/i18n/`. `LanguageProvider` wraps the app (in `App.js`) and exposes `useTranslation()` → `{ language, t, changeLanguage }`. UI strings live in `src/i18n/en.json` and `src/i18n/es.json`; use dot-notation keys with `t('section.key')`. Content data in `dataSite.json` is keyed by language (`projects.en`, `projects.es`); service functions accept a `lang` parameter. Language is auto-detected from browser and persisted in localStorage.

**Dark mode:** Class-based (`darkMode: 'class'` in Tailwind config). Toggled via `<html>` classList using the View Transition API (`document.startViewTransition`). Persisted in `localStorage.isDark`. Use Tailwind's `dark:` prefix for dark variants.

**Animations:** Import from `motion/react` (not `framer-motion`). Example: `import { motion, AnimatePresence } from 'motion/react'`.

**Toasts:** Sonner is used for toast notifications.

## Key Conventions

- **Tailwind-first styling.** Never edit `src/styles/output.css` directly — it's generated. Modify `src/styles/tailwind.css` or `tailwind.config.js` and regenerate with `npm run watch:css`.
- **Custom CSS** (fonts, scrollbars, gradients) lives in `src/styles/general.css`.
- **Component structure:** One folder per component with `index.js` barrel export. The only `.jsx` file is `CarouselOfTechnologies`.
- **Images:** Project previews hosted on Cloudinary. Local assets in `src/assets/`. Lazy-loaded with Lozad (`.lozad` class).
- **Public static assets:** Music files in `public/songs/`, album covers in `public/covers/`, vinyl image at `public/vinyl.png`.
- **localStorage keys in use:** `isDark`, `language`, `music-index`, `music-time`, `music-playing`.
- **Custom Tailwind breakpoints:** `min-1045` and `min-445` (min-width).
- **Prettier config:** No semicolons, single quotes, no trailing commas, 80 char width, Tailwind class sorting plugin.
- **Pre-commit hook (Husky):** Runs Prettier on staged files only — no lint check on commit.
- **No tests exist yet** in the codebase.

## Adding a Page

1. Create `src/pages/PageName/index.js`
2. Register route in `src/App.js`
3. Add NavBar link if needed
4. Add i18n keys to `src/i18n/en.json` and `src/i18n/es.json`
