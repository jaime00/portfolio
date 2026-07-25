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

React 19 + Vite + Wouter v3 + Tailwind CSS 3 + Motion + Sonner.  
Custom i18n (`LanguageProvider` + `useTranslation` → `t('section.key')`).  
Deployed to Netlify (`dist/`, `npm run build`).

**Entry:** `src/index.jsx` → `src/App.jsx`. All routes in `App.jsx` inside `<Switch>`. Pages eagerly imported (no lazy loading).

**Routes:** `/`, `/about`, `/side-projects`, `/side-projects/:slug`, `/experiences`, `/contact`. Unknown → `<NotFound />`. `<ErrorBoundary>` wraps `<Switch>`.

**Data:** Static content in `src/data/dataSite.json` (keyed by language). Access ONLY through `src/services/index.jsx` (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`, `getStyleButton`, `getYearsOfExperience`, `getProjectBySlug`, `getAdjacentProjects`, `getPlaylist`). Never import `dataSite.json` directly.

**Dark mode:** `DarkModeProvider` in `src/contexts/DarkMode.jsx` wraps app in `App.jsx`. Call `useDarkMode()` → `{ isDark, toggleDark }`. Class-based (`darkMode: 'class'`), persisted in `localStorage.isDark`.

**Animations:** Import from `motion/react` (not `framer-motion`). `<LazyMotion features={domAnimation}>` — only `domAnimation`, not `domMax`. Shared primitives in `src/animations/index.jsx` (`EASE_OUT_EXPO`, `VIEWPORT_ONCE`, `staggerContainerVariants`, `staggerItemVariants`, `floatVariants`) — import from there, don't redefine inline.

## Style & Conventions

- **All source files use `.jsx` extension** — including files without JSX. The only exceptions are config files.
- **Path alias:** `@/` → `src/` (Vite resolve alias). All cross-directory imports use `@/components/...` — never relative `../` paths.
- **Pre-commit hook (Husky):** Enforces `@/` alias (rejects `../` relative imports across dirs), runs ESLint on staged `.js/.jsx`, then Prettier on all staged files. Both must pass.
- **Prettier:** No semicolons, single quotes, no trailing commas, 80 width. Plugins: `prettier-plugin-tailwindcss` (class sorting) + `@trivago/prettier-plugin-sort-imports` (ordering: third-party → `@/` groups alphabetically → relative).
- **Component structure:** One folder per component, `index.jsx` barrel export, default export, destructure props.
- **Custom CSS:** `src/styles/general.css` (fonts, scrollbars, gradients). `src/styles/tailwind.css` is the Tailwind entry — Vite + PostCSS regenerate on save.
- **Custom breakpoints:** `min-1045` (1045px), `min-445` (min-width).
- **Images:** Project previews on Cloudinary. Local assets in `src/assets/`. Lazy-loaded with Lozad (`.lozad` class).
- **Animated icons HOC:** `src/assets/animatedIcons/createAnimatedIcon.jsx` — most icons use it; `GithubIcon` is exception. Icons accept `size` prop, expose `startAnimation`/`stopAnimation` via ref. `autoAnimate` prop for mount animation.
- **localStorage keys:** `isDark`, `language`, `music-index`, `music-time`, `music-playing`.

## Adding a Page

1. Create `src/pages/PageName/index.jsx`
2. Register route in `src/App.jsx` (inside `<Switch>`)
3. Add NavBar link if needed (in `NavBarOptions`)
4. Add i18n keys to `src/i18n/en.json` and `src/i18n/es.json`
