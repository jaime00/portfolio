# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (Vite — port 9999, opens browser)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run lint         # Lint src/**/*.{js,jsx}
npm run lint:fix     # Lint and auto-fix
```

## Architecture

React 19 portfolio site using Vite, Wouter v3 routing, Tailwind CSS, Motion for animations, and GSAP (scroll-triggered effects in `FoldText`). Deployed to Netlify.

**Routing:** `App.jsx` defines all routes using Wouter v3 — `/`, `/about`, `/side-projects`, `/side-projects/:slug`, `/experiences`, `/contact`. Unknown routes are detected via `isKnownRoute()` and render `<NotFound />` (`src/pages/NotFound/`) outside the main layout (no NavBar, Footer, or Background). `<ErrorBoundary>` wraps the `<Switch>` for known routes. Gotcha: `/side-projects` renders `src/pages/Projects/` — folder name does not match the route path.

**Data flow:** Static data lives in `src/data/dataSite.json`. Service functions in `src/services/index.jsx` expose getters (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`, `getStyleButton`, `getYearsOfExperience`, `getProjectBySlug`, `getAdjacentProjects`, `getPlaylist`). Components never import `dataSite.json` directly — always go through services. The music playlist lives in `dataSite.json` under the `playlist` key. Gotcha: `getYearsOfExperience` always parses `.en` work entries (English month names) — do not change it to use `lang`.

**i18n:** Custom context-based system in `src/i18n/`. `LanguageProvider` wraps the app (in `App.jsx`) and exposes `useTranslation()` → `{ language, t, changeLanguage }`. UI strings live in `src/i18n/en.json` and `src/i18n/es.json`; use dot-notation keys with `t('section.key')`. Content data in `dataSite.json` is keyed by language (`projects.en`, `projects.es`); service functions accept a `lang` parameter. Language is auto-detected from browser and persisted in localStorage.

**Dark mode:** Class-based (`darkMode: 'class'` in Tailwind config). Toggled via `<html>` classList using the View Transition API (`document.startViewTransition`). Falls back gracefully on Safari (no View Transition). State managed by `DarkModeProvider` (`src/contexts/DarkMode.jsx`) which wraps the app in `App.jsx`. Any component needing dark mode calls `useDarkMode()` (default export of `src/contexts/DarkMode.jsx`) → `{ isDark, toggleDark }`. No prop-drilling of `isDark`. Persisted in `localStorage.isDark`. Use Tailwind's `dark:` prefix for dark variants. `LanguageProvider` wraps `DarkModeProvider` in `App.jsx` — order matters.

**Animations:** Import from `motion/react` (not `framer-motion`). Example: `import { motion, AnimatePresence } from 'motion/react'`. The app uses `<LazyMotion features={domAnimation}>` (not `domMax`) — only the standard animation feature set is available. Shared animation primitives live in `src/animations/index.jsx` — exports `EASE_OUT_EXPO`, `VIEWPORT_ONCE`, `staggerContainerVariants`, `staggerItemVariants`, and `floatVariants`. Always import from there instead of redefining these values inline.

**Path alias:** `@/` maps to `src/` (configured in `vite.config.js`). All imports use `@/components/...`, `@/pages/...`, etc. — never relative paths for cross-directory imports.

**Animated icons:** `src/assets/animatedIcons/createAnimatedIcon.jsx` is a HOC factory — `createAnimatedIcon(displayName, renderSVG, wrapperTag)`. Most icons use it; `GithubIcon` (multi-control animation) and `ExternalLinkIcon` (custom ref logic) are exceptions and implement `forwardRef` manually. All icons accept a `size` prop and expose `startAnimation`/`stopAnimation` via `ref`. Pass `autoAnimate` to make an icon animate on mount without needing a ref.

**Project detail (CaseStudy):** `ProjectDetail` page fetches a project by slug and renders `<CaseStudy>`. If the slug doesn't exist or has no `caseStudy`, it redirects to `/side-projects` (using Wouter's `<Redirect>`). The `caseStudy.sections` array in `dataSite.json` is type-driven — supported types: `narrative`, `gallery`, `video`, `features`, `commands`, `playground`. Each maps to a sub-component in `src/components/CaseStudy/`. The `playground` type renders an interactive live code editor (`PlaygroundSection/Showroom.jsx`) using the `smooth-components` npm package (`Poster` component). The last section may include a `highlights` array (`[{ value, label }]`) rendered as stat cards in `HeroBanner`. `HeroBanner` also renders a `BundlephobiaWidget` (from `smooth-components`) for the `smooth-components` and `eazy-git` slugs.

**Rich text in strings:** `renderRichText(text)` in `src/components/CaseStudy/richText.jsx` parses markdown-like syntax — `` `code` ``, `**bold**`, `[label](url)` — into styled JSX. Use it (instead of `dangerouslySetInnerHTML`) when i18n strings or section text need inline formatting.

**Reading time:** `getReadingTime(sections)` in `src/components/CaseStudy/readingTime.jsx` estimates reading time (minutes) from a case study's sections array by counting words across `title`, `text`, `footer`, `items`, and `commands` fields.

**Motion config:** `<MotionConfig reducedMotion="user">` in `App.jsx` respects the OS reduced-motion preference (WCAG 2.3.3). Animations play normally unless the user has enabled "Reduce Motion" in their OS settings.

**Button:** `src/components/Button/index.jsx` renders as `<a>` (when `openUrl` is set), `<button>` (when `onClick` is set), or `<Link>` (default, uses `to` prop). Supports `magnetic` prop for a spring-based magnetic hover effect. Accepts `size="icon"` for square 65×65 buttons.

**Background:** `src/components/Background/` composes three layers — `Aurora` (gradient blobs), `Grain` (SVG noise texture), and `Particles` (floating dots). Rendered once at the app root, below the NavBar.

**HyperLink:** Imported from the `smooth-components` npm package (no longer a local component). Used for inline links with animated underline.

**ReadingProgress:** `src/components/ReadingProgress/` — fixed top bar (3px, teal gradient) tracking `scrollYProgress` via Motion spring. Used in CaseStudy pages.

**AnimatedCounter:** `src/components/AnimatedCounter/` — counts from 1 to `target` prop with per-step motion animation. Used in `HeroBanner` highlights stat cards.

**Hooks:** `src/hooks/useTypewriter.jsx` returns `{ visible, hidden }` for a typewriter effect; render as `<span>{visible}<span style={{ visibility:'hidden' }}>{hidden}</span></span>`. `src/hooks/useTilt.jsx` provides a mouse-tracking tilt transform via a ref.

## Key Conventions

- **Tailwind-first styling.** Modify `src/styles/tailwind.css` or `tailwind.config.js` — Vite + PostCSS regenerate CSS automatically on save. Never edit `src/styles/output.css` (legacy; unused since Vite migration).
- **Custom CSS** (fonts, scrollbars, gradients) lives in `src/styles/general.css`.
- **Component structure:** One folder per component with `index.jsx` barrel export. All source files use `.jsx` extension (including those without JSX). Flat file exceptions (no folder): `FoldText.jsx` and `ShinyText.jsx`.
- **Images:** Project previews hosted on Cloudinary. Local assets in `src/assets/`. Lazy-loaded with Lozad (`.lozad` class).
- **Public static assets:** `public/` contains only favicons, manifests, and SEO files. Music MP3s, album covers, and the vinyl image are all hosted on Cloudinary — URLs live in `dataSite.json` under `playlist[].url` and `playlist[].cover`.
- **localStorage keys in use:** `isDark`, `language`, `music-index`, `music-time`, `music-playing`.
- **Custom Tailwind breakpoints:** `min-1045`, `min-807`, and `min-445` (min-width).
- **Prettier config:** No semicolons, single quotes, no trailing commas, 80 char width. Plugins: `prettier-plugin-tailwindcss` (class sorting) and `@trivago/prettier-plugin-sort-imports` (import ordering: third-party first, then `@/` groups alphabetically, then relative).
- **Pre-commit hook (Husky):** Rejects relative imports using `../` across directories, runs ESLint on staged `.js/.jsx`, then runs Prettier on all staged files. All must pass.
- **ESLint a11y:** `eslint-plugin-jsx-a11y` is active — accessibility violations are lint errors.
- **No tests exist yet** in the codebase.
- **Pages are eagerly imported** in `App.jsx` — no `React.lazy()` is used.

## Adding a Page

1. Create `src/pages/PageName/index.jsx`
2. Register route in `src/App.jsx` (inside `<Switch>`)
3. Add NavBar link if needed (in `NavBarOptions`)
4. Add i18n keys to `src/i18n/en.json` and `src/i18n/es.json`
