# Copilot instructions — portfolio

Purpose

This file gives repository-specific guidance for Copilot sessions: how to build, test, and lint; a concise high-level architecture; and key conventions that are not obvious from a single file.

Quick commands

- Install dependencies
  - npm install

- Development (start dev server + watch Tailwind CSS)
  - npm run dev
    - runs `npm run watch` (chokidar) and `npm start` concurrently

- Start dev server only
  - npm start

- Build production
  - npm run build
    - runs `npm run watch:css` then `react-scripts build` (output -> build/)

- Tailwind / CSS
  - npm run watch:css # compiles src/styles/tailwind.css -> src/styles/output.css
  - npm run watch # chokidar watches src/\*_/_.js and re-runs watch:css

- Tests
  - npm test
  - Run a single test by name/pattern:
    - npm test -- -t "<test name or pattern>"
  - Run tests once (no watch):
    - npm test -- --watchAll=false

- Linting
  - There is no dedicated lint script; eslintConfig is present in package.json and is used by react-scripts.
  - To run ESLint directly (may require installing eslint):
    - npx eslint "src/\*_/_.{js,jsx}" --ext .js,.jsx

High-level architecture

- Entry: src/index.js -> mounts <App /> from App.js.
- Routing: App.js uses wouter for routing; pages are located in src/pages and mapped to routes there.
- Pages: src/pages — top-level route components.
- Components: src/components — reusable UI primitives and widgets used across pages.
- Blocks: src/blocks — composable page sections / larger layout pieces.
- Providers: src/providers — React context providers/wrappers (applied at app root).
- Hooks: src/hooks — custom React hooks used by components/pages.
- Services: src/services — data fetching and API wrapper functions; keep network logic here.
- Data: src/data — site-wide static data (site metadata, menus, etc.).
- Assets & Public: src/assets for images/illustrations; public/ for static files (robots, \_redirects, etc.).
- Styles: Tailwind config in tailwind.config.js and postcss.config.js. Source CSS entry: src/styles/tailwind.css; generated file: src/styles/output.css.
- Build output: build/

Third-party / notable libs

- Routing: wouter
- Lazy loading images: lozad
- Animations: motion / Framer Motion (see README)
- CSS: tailwindcss + postcss-cli
- Base components: Flowbite (UI primitives)
- Testing: @testing-library/react, jest via react-scripts
- Deployment: README notes Netlify; build command: `npm run build`, publish dir: `build/`

Key conventions and repository-specific patterns

- Tailwind-first workflow: modify src/styles/tailwind.css and tailwind.config.js; never edit src/styles/output.css directly — regenerate with `npm run watch:css` or run `npm run dev`.
- Reusable CSS: create utility classes with @apply inside files under src/styles.
- Routing pattern: add a page component under src/pages and register its route in App.js following existing examples.
- Data & services separation: prefer reading site/static data from src/data and network calls from src/services to keep components simple.
- Tests: tests use React Testing Library and live next to components; run single tests with the `-t` pattern shown above.
- Images/OG: Open Graph images referenced in README are hosted on Cloudinary — avoid adding large binary files to the repo.
- Netlify: CI/CD assumes `npm run build` produces a `build/` folder to deploy.

Other AI assistant configs

- No CLAUDE.md, AGENTS.md, .cursorrules, .windsurfrules, CONVENTIONS.md, or other known assistant-config files detected in the repository root.

Notes for Copilot sessions

- Prefer minimal, surgical changes; update generated CSS via the provided npm scripts after editing Tailwind sources.
- For routing or adding pages, follow the existing App.js routing pattern and reuse components in src/components.
- When modifying build or deployment scripts, validate by running `npm run build` locally.
