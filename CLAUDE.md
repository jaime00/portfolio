# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (Vite — includes PostCSS/Tailwind natively)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run lint         # Lint src/**/*.{js,jsx}
npm run lint:fix     # Lint and auto-fix
```

## Architecture

React 19 portfolio site using Vite, Wouter v3 routing, Tailwind CSS, and Motion for animations. Deployed to Netlify.

**Routing:** `App.jsx` defines all routes using Wouter v3 — `/`, `/about`, `/side-projects`, `/side-projects/:slug`, `/experiences`, `/contact`. Unknown routes render `<NotFound />` (`src/pages/NotFound/`). `<ErrorBoundary>` wraps the `<Switch>` to catch render errors.

**Data flow:** Static data lives in `src/data/dataSite.json`. Service functions in `src/services/index.jsx` expose getters (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`, `getStyleButton`, `getYearsOfExperience`, `getProjectBySlug`, `getAdjacentProjects`, `getPlaylist`). Components never import `dataSite.json` directly — always go through services. The music playlist lives in `dataSite.json` under the `playlist` key.

**i18n:** Custom context-based system in `src/i18n/`. `LanguageProvider` wraps the app (in `App.js`) and exposes `useTranslation()` → `{ language, t, changeLanguage }`. UI strings live in `src/i18n/en.json` and `src/i18n/es.json`; use dot-notation keys with `t('section.key')`. Content data in `dataSite.json` is keyed by language (`projects.en`, `projects.es`); service functions accept a `lang` parameter. Language is auto-detected from browser and persisted in localStorage.

**Dark mode:** Class-based (`darkMode: 'class'` in Tailwind config). Toggled via `<html>` classList using the View Transition API (`document.startViewTransition`). Falls back gracefully on Safari (no View Transition). State managed by `DarkModeProvider` (`src/contexts/DarkMode.jsx`) which wraps the app in `App.jsx`. Any component needing dark mode calls `useDarkMode()` (default export of `src/contexts/DarkMode.jsx`) → `{ isDark, toggleDark }`. No prop-drilling of `isDark`. Persisted in `localStorage.isDark`. Use Tailwind's `dark:` prefix for dark variants.

**Animations:** Import from `motion/react` (not `framer-motion`). Example: `import { motion, AnimatePresence } from 'motion/react'`. Shared animation primitives live in `src/animations/index.jsx` — exports `EASE_OUT_EXPO`, `VIEWPORT_ONCE`, `staggerContainerVariants`, `staggerItemVariants`, and `floatVariants`. Always import from there instead of redefining these values inline.

**Toasts:** Sonner is used for toast notifications.

**Path alias:** `@/` maps to `src/` (configured in `vite.config.js`). All imports use `@/components/...`, `@/pages/...`, etc. — never relative paths for cross-directory imports.

**Animated icons:** `src/assets/animatedIcons/createAnimatedIcon.jsx` is a HOC factory — `createAnimatedIcon(displayName, renderSVG, wrapperTag)`. Most icons use it; `GithubIcon` is the exception (multi-control animation).

**Project detail (CaseStudy):** `ProjectDetail` page fetches a project by slug and renders `<CaseStudy>`. The `caseStudy.sections` array in `dataSite.json` is type-driven — supported types: `narrative`, `gallery`, `video`, `features`, `commands`, `playground`. Each maps to a sub-component in `src/components/CaseStudy/`. The `playground` type renders an interactive live code editor (`PlaygroundSection/Showroom.jsx`) using the `smooth-components` npm package (`Poster` component).

**Rich text in strings:** `renderRichText(text)` in `src/components/CaseStudy/richText.jsx` parses markdown-like syntax — `` `code` ``, `**bold**`, `[label](url)` — into styled JSX. Use it (instead of `dangerouslySetInnerHTML`) when i18n strings or section text need inline formatting.

**Reading time:** `getReadingTime(sections)` in `src/components/CaseStudy/readingTime.jsx` estimates reading time (minutes) from a case study's sections array by counting words across `title`, `text`, `footer`, `items`, and `commands` fields.

**Motion config:** `<MotionConfig reducedMotion="user">` in `App.js` respects the OS reduced-motion preference (WCAG 2.3.3). Animations play normally unless the user has enabled "Reduce Motion" in their OS settings.

## Key Conventions

- **Tailwind-first styling.** Modify `src/styles/tailwind.css` or `tailwind.config.js` — Vite + PostCSS regenerate CSS automatically on save. Never edit `src/styles/output.css` (legacy; unused since Vite migration).
- **Custom CSS** (fonts, scrollbars, gradients) lives in `src/styles/general.css`.
- **Component structure:** One folder per component with `index.jsx` barrel export. All source files use `.jsx` extension (including those without JSX). Exceptions: `CarouselOfTechnologies/index.jsx` and `ShinyText.jsx` (flat file, no folder).
- **Images:** Project previews hosted on Cloudinary. Local assets in `src/assets/`. Lazy-loaded with Lozad (`.lozad` class).
- **Public static assets:** Music files in `public/songs/`, album covers in `public/covers/`, vinyl image at `public/vinyl.png`.
- **localStorage keys in use:** `isDark`, `language`, `music-index`, `music-time`, `music-playing`.
- **Custom Tailwind breakpoints:** `min-1045` and `min-445` (min-width).
- **Prettier config:** No semicolons, single quotes, no trailing commas, 80 char width. Plugins: `prettier-plugin-tailwindcss` (class sorting) and `@trivago/prettier-plugin-sort-imports` (import ordering: third-party first, then `@/` groups alphabetically, then relative).
- **Pre-commit hook (Husky):** Runs Prettier on staged files only — no lint check on commit.
- **No tests exist yet** in the codebase.

## Adding a Page

1. Create `src/pages/PageName/index.jsx`
2. Register route in `src/App.jsx` (inside `<Switch>`)
3. Add NavBar link if needed (in `NavBarOptions`)
4. Add i18n keys to `src/i18n/en.json` and `src/i18n/es.json`
