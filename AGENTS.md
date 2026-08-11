# AGENTS.md

## Commands

```bash
npm install          # Install
npm run dev          # Vite dev server (port 9999, opens browser)
npm run build        # Vite build → dist/
npm run preview      # Preview production build
npm run lint         # ESLint src/**/*.{js,jsx}
npm run lint:fix     # ESLint --fix
npm run prepare      # Husky install (runs on npm install)
```

No test runner configured. No tests exist.

## Architecture

React 19 + Vite + Wouter v3 + Tailwind CSS 3 + Motion. `gsap` (only in `FoldText.jsx`) and `smooth-components` (Poster, BundlephobiaWidget) are the other runtime deps.  
Custom i18n (`LanguageProvider` + `useTranslation` → `t('section.key')`, `changeLanguage`).  
Deployed to Netlify (`netlify.toml`: `npm run build`, SPA redirect `/*` → `/index.html`, immutable cache for `dist` assets).

**Entry:** `src/index.jsx` → `src/App.jsx`. All routes in `App.jsx` inside `<Switch>`. Pages eagerly imported (no lazy loading).

**Routes:** `/`, `/about`, `/side-projects`, `/side-projects/:slug`, `/experiences`, `/contact`. Unknown routes detected via `isKnownRoute()` — renders `<NotFound />` outside main layout (no NavBar/Footer/Background). `<ErrorBoundary>` wraps `<Switch>` for known routes. Gotcha: `/side-projects` route renders `src/pages/Projects/` — folder name ≠ route path.

Deeper component guidance (CaseStudy section types, Button, Background, hooks) lives in `CLAUDE.md` — read it before touching `src/components/`.

**Data:** Static content in `src/data/dataSite.json` (keyed by language). Access ONLY through `src/services/index.jsx` (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`, `getStyleButton`, `getYearsOfExperience`, `getProjectBySlug`, `getAdjacentProjects`, `getPlaylist`). Never import `dataSite.json` directly. Gotcha: `getYearsOfExperience` always parses `.en` work entries (English month names) — don't "fix" to use `lang`.

**Dark mode:** `DarkModeProvider` in `src/contexts/DarkMode.jsx` wraps app in `App.jsx`. Call `useDarkMode()` (default export) → `{ isDark, toggleDark }`. Class-based (`darkMode: 'class'`), persisted in `localStorage.isDark`. Toggle uses View Transition API, falls back to instant on Safari. Provider order in `App.jsx`: `LanguageProvider` wraps `DarkModeProvider`.

**Animations:** Import from `motion/react` (not `framer-motion`). `<LazyMotion features={domAnimation}>` — only `domAnimation`, not `domMax`. Shared primitives in `src/animations/index.jsx` (`EASE_OUT_EXPO`, `VIEWPORT_ONCE`, `staggerContainerVariants`, `staggerItemVariants`, `floatVariants`) — import from there, don't redefine inline.

## Style & Conventions

- **All source files use `.jsx` extension** — including files without JSX. The only exceptions are config files.
- **Path alias:** `@/` → `src/` (Vite resolve alias). All cross-directory imports use `@/components/...`. Husky pre-commit rejects any relative import with `../` or `./subdir/...` — same-folder single-file imports like `./App` are the only allowed relative form.
- **Pre-commit hook (Husky):** Rejects the relative imports above, runs ESLint on staged `.js/.jsx`, then Prettier on all staged files. All must pass. Local commit message is Spanish; hooks run via `npx` so they fail silently if deps missing.
- **ESLint:** `react/prop-types` off; `no-unused-vars`/`no-console` warn; `jsx-a11y` recommended is error — a11y violations block commit. Also errors: `no-var`, `eqeqeq`, `no-duplicate-imports`, `react/jsx-no-target-blank`.
- **Prettier:** No semicolons, single quotes, no trailing commas, 80 width. Plugins: `prettier-plugin-tailwindcss` (class sorting) + `@trivago/prettier-plugin-sort-imports` (ordering: third-party → `@/` groups alphabetically → relative).
- **Component structure:** One folder per component, `index.jsx` barrel export, default export, destructure props. Exceptions (flat files, no folder): `FoldText.jsx`, `ShinyText.jsx`.
- **Custom CSS:** `src/styles/general.css` (fonts, scrollbars, gradients). `src/styles/tailwind.css` is the Tailwind entry — Vite + PostCSS regenerate on save. No `output.css` in repo.
- **Custom breakpoints:** `min-1045` (1045px), `min-807` (807px), `min-445` (min-width).
- **Images & media:** Project previews, music MP3s, and album art all on Cloudinary — URLs in `dataSite.json` (`playlist[].url`/`cover`). `public/` holds only favicons/SEO files; don't add media there. Local assets in `src/assets/`.
- **Animated icons HOC:** `src/assets/animatedIcons/createAnimatedIcon.jsx` — most icons use it; `GithubIcon` is exception. Icons accept `size` prop, expose `startAnimation`/`stopAnimation` via ref. `autoAnimate` prop for mount animation.
- **localStorage keys:** `isDark`, `language`, `music-index`, `music-time`, `music-playing`.

## Adding a Page

1. Create `src/pages/PageName/index.jsx`
2. Register route in `src/App.jsx` (inside `<Switch>`)
3. Add NavBar link if needed (in `NavBarOptions`)
4. Add i18n keys to `src/i18n/en.json` and `src/i18n/es.json`
