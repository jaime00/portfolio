# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Commands

```bash
npm install                    # Install dependencies
npm run dev                    # Development (dev server + Tailwind CSS watcher)
npm start                      # Dev server only (Craco wrapping CRA)
npm run build                  # Production build (watch:css then craco build → build/)
npm run watch:css              # Compile src/styles/tailwind.css → src/styles/output.css
npm test                       # Run tests (Jest via Craco, watch mode)
npm test -- -t "<pattern>"     # Run single test by name/pattern
npm test -- --watchAll=false   # Run tests once without watch
npx eslint "src/**/*.{js,jsx}"  # Lint (no dedicated script)
```

## Architecture

React 19 portfolio site using Create React App + Craco, Wouter routing, Tailwind CSS, and Motion (Framer Motion) for animations. Deployed to Netlify.

**Directory structure:**

- `src/index.js` → Entry point, mounts `<App />`
- `src/App.js` → Routing configuration with Wouter, providers, dark mode state
- `src/pages/` → Top-level route components (Home, About, Projects, Experiences, Contact)
- `src/components/` → Reusable UI components (one folder per component, index.js barrel export)
- `src/services/index.js` → Data access functions (getProjects, getWorkExperience, etc.)
- `src/data/dataSite.json` → Static site data keyed by language
- `src/i18n/` → Custom i18n system (LanguageProvider, useTranslation hook)
- `src/styles/` → CSS files (tailwind.css source, output.css generated, general.css for custom styles)

**Key libraries:**

- Routing: `wouter` (Route, Redirect, Switch)
- Animations: `motion` (Framer Motion)
- Lazy loading: `lozad`
- CSS: `tailwindcss` + `postcss-cli`

## Code Style

### Formatting (Prettier)

- No semicolons
- Single quotes
- Print width: 80 characters
- No trailing commas
- Tailwind class sorting via `prettier-plugin-tailwindcss`

### Imports

Group imports in this order:

1. External libraries (React, wouter, etc.)
2. Internal components/services (relative paths)
3. Styles

```javascript
import MyHistory from '../../components/MyHistory'
import Separator from '../../components/Separator'
import React from 'react'
```

### Component Pattern

- One folder per component with `index.js` barrel export
- Use default exports for components
- Destructure props in function signature with default values
- Use named exports for utilities and hooks

```javascript
export default function Button({ children, isDark = true, to = '/' }) {
  // ...
}
```

### Naming Conventions

- Components: PascalCase (e.g., `NavBar`, `WorkExperience`)
- Functions/variables: camelCase (e.g., `getProjects`, `changeLanguage`)
- CSS classes: Use Tailwind utilities, custom classes in `general.css`
- Files: PascalCase for components (matches component name)

### Dark Mode

- Class-based: `darkMode: 'class'` in Tailwind config
- Toggle by adding/removing `dark` class on `<html>` element
- Use Tailwind's `dark:` prefix for variants
- Persist preference in localStorage (`localStorage.isDark`)

### i18n (Internationalization)

- UI strings: `src/i18n/en.json` and `src/i18n/es.json` with dot-notation keys
- Access translations via `useTranslation()` hook: `t('section.key')`
- Content data in `dataSite.json` is keyed by language: `projects.en`, `projects.es`
- Service functions accept `lang` parameter: `getProjects({ lang: 'en' })`
- Language persisted in localStorage and auto-detected from browser

### Data Flow

- Static data lives in `src/data/dataSite.json`
- Service functions in `src/services/index.js` expose getters
- Components consume services — no external state management
- Never access dataSite.json directly from components

## Key Conventions

### Tailwind-First Styling

- Never edit `src/styles/output.css` directly — it's generated
- Modify `src/styles/tailwind.css` or `tailwind.config.js`
- Regenerate with `npm run watch:css` or run `npm run dev`
- Custom CSS (fonts, scrollbars, gradients) lives in `src/styles/general.css`

### Adding a New Page

1. Create component in `src/pages/PageName/index.js`
2. Register route in `src/App.js` following existing pattern
3. Add navigation link in NavBar if needed
4. Add i18n keys to `en.json` and `es.json`

### Custom Tailwind Breakpoints

- `min-1045`: 1045px minimum width
- `min-445`: 445px minimum width

### Images

- Project previews hosted on Cloudinary
- Local assets in `src/assets/`
- Use `.lozad` class for lazy loading

## Error Handling

- Throw descriptive errors for context misuse:

```javascript
if (!context) {
  throw new Error('useTranslation must be used within a LanguageProvider')
}
```

- Provide fallbacks for missing translations/data:

```javascript
const projects = DataSite.projects[lang] || DataSite.projects.en
```

## Testing

- Uses React Testing Library and Jest via react-scripts
- Tests should live next to components (not yet present in codebase)
- Run single tests with `-t` pattern: `npm test -- -t "Button renders"`

## Deployment

- Platform: Netlify
- Build command: `npm run build`
- Publish directory: `build/`
- Redirects configured in `public/_redirects`

## Pre-Commit Hooks

- Husky is configured (`npm run prepare` sets up hooks)
- Ensure code passes linting before committing
