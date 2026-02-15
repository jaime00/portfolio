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

React 19 portfolio site using CRA + Craco, Wouter routing, Tailwind CSS, and Motion (Framer Motion) for animations. Deployed to Netlify.

**Routing:** `App.js` defines all routes using Wouter — `/`, `/about`, `/side-projects`, `/experiences`, `/contact`. To add a page, create a component in `src/pages/` and register the route in `App.js`.

**Data flow:** Static data lives in `src/data/dataSite.json`. Service functions in `src/services/index.js` expose getters (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`). Components consume these — no external state management.

**i18n:** Custom context-based system in `src/i18n/`. `LanguageProvider` wraps the app (in `App.js`) and exposes `useTranslation()` → `{ language, t, changeLanguage }`. UI strings live in `src/i18n/en.json` and `src/i18n/es.json`; use dot-notation keys with `t('section.key')`. Content data in `dataSite.json` is keyed by language (`projects.en`, `projects.es`); service functions accept a `lang` parameter. Language is auto-detected from browser and persisted in localStorage.

**Dark mode:** Class-based (`darkMode: 'class'` in Tailwind config). Toggled via `<html>` classList and persisted in localStorage. Use Tailwind's `dark:` prefix for dark variants.

## Key Conventions

- **Tailwind-first styling.** Never edit `src/styles/output.css` directly — it's generated. Modify `src/styles/tailwind.css` or `tailwind.config.js` and regenerate with `npm run watch:css`.
- **Custom CSS** (fonts, scrollbars, gradients) lives in `src/styles/general.css`.
- **Component structure:** One folder per component with `index.js` barrel export.
- **Images:** Project previews hosted on Cloudinary. Local assets in `src/assets/`. Lazy-loaded with Lozad (`.lozad` class).
- **Custom Tailwind breakpoints:** `min-1045` and `min-445` (min-width).
- **Prettier config:** No semicolons, single quotes, no trailing commas, 80 char width, Tailwind class sorting plugin.
