# AGENTS.md

## Commands

```bash
npm install              # Install
npm run dev              # Dev server + Tailwind CSS watcher (concurrently)
npm start                # Dev server only (Craco)
npm run build            # watch:css then craco build → build/
npm run watch:css        # Compile src/styles/tailwind.css → src/styles/output.css
npm test                 # Jest via Craco (watch mode)
npm test -- -t "<patt>"  # Single test
npm test -- --watchAll=false  # Once
npx eslint "src/**/*.{js,jsx}"  # Lint (eslintConfig in package.json)
```

## Architecture

React 19 + CRA/Craco + Wouter routing + Tailwind CSS 3 + Motion (Framer Motion) + Sonner (toasts).  
Custom context-based i18n (`LanguageProvider` + `useTranslation`).  
Lozad.js for lazy image loading.  
Deployed to Netlify (`build/`, `npm run build`).

**Entry:** `src/index.js` → `App.js`. Routes in `App.js` (`/`, `/about`, `/side-projects`, `/contact`, `/experiences`).

**Data flow:** Static content in `src/data/dataSite.json` (keyed by language). Accessed only through service functions in `src/services/index.js` (`getProjects`, `getWorkExperience`, `getExperiences`, `getCurriculumUrl`, `getStyleButton`, `getYearsOfExperience`). Components never import dataSite.json directly.

**i18n:** UI strings in `src/i18n/en.json` / `es.json`, dot-notation keys, accessed via `t('section.key')`. Language auto-detected from browser, persisted in localStorage.

## Style & Conventions

- **Prettier:** No semicolons, single quotes, no trailing commas, 80 width, `prettier-plugin-tailwindcss` for class sorting.
- **Components:** One folder per component, `index.js` barrel export, default export, destructure props.
- **Never edit `src/styles/output.css`** — it's generated from `tailwind.css`. Custom CSS (fonts, gradients, view transitions) in `general.css`.
- **Dark mode:** Class-based (`darkMode: 'class'`). Toggle via `<html>` classList. Uses View Transition API (`document.startViewTransition`). Persisted in `localStorage.isDark`.
- **Custom breakpoints:** `min-1045` (1045px), `min-445` (445px).
- **Images:** Project previews on Cloudinary. Local assets in `src/assets/`. Lazy-loaded with Lozad (`.lozad` class).
- **Pre-commit hook (Husky):** Runs `npx prettier` on staged files only (no lint check).
- **No tests exist yet** in codebase.

## Adding a Page

1. Create `src/pages/PageName/index.js`
2. Register route in `src/App.js`
3. Add NavBar link if needed
4. Add i18n keys to `en.json` / `es.json`
