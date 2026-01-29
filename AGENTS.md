# AGENTS.md

## Project Overview

Personal portfolio and CV website. Static single-page app with JSON-driven content — no backend, no database, no auth.

## Tech Stack

- React 19 + TypeScript 5.9 (strict mode)
- Vite 7 (build tool, base path: `/portfolio/`)
- Tailwind CSS v4 (utility-first, OKLCH color system, CSS variables)
- shadcn/ui (new-york style, lucide icons, CVA variants)
- GitHub Pages (static hosting via GitHub Actions)

## Project Structure

```
src/
├── components/
│   ├── sections/    # Page sections: Navbar, Hero, Skills, Experience, Education, Projects, Footer
│   └── ui/          # shadcn/ui primitives: button, card, badge, separator
├── data/            # JSON content files (profile, skills, experience, education, projects)
├── lib/utils.ts     # cn() utility (clsx + tailwind-merge)
├── types.ts         # TypeScript interfaces for all data models
├── App.tsx          # Root component — imports data and composes sections
├── main.tsx         # Entry point (React 19 createRoot, StrictMode)
└── index.css        # Tailwind v4 theme, CSS variables, base styles
```

## Key Conventions

### Components

- **Section components** (`src/components/sections/`) receive typed props from JSON data. They use semantic HTML with `id` attributes for scroll navigation. Consistent layout: `py-20 px-6` padding, `mx-auto max-w-5xl` container.
- **UI components** (`src/components/ui/`) are shadcn/ui primitives using CVA for variants, Radix UI for accessibility, and the `asChild` pattern via `@radix-ui/react-slot`.
- All components are functional with explicit TypeScript interfaces.

### Data

Content is managed through JSON files in `src/data/`. Types are defined in `src/types.ts`. Data is imported and typed in `App.tsx`. To update content, edit the JSON files — no code changes needed.

### Styling

- Tailwind utility classes only — no custom CSS besides theme variables in `index.css`.
- Use `cn()` from `@/lib/utils` to merge classes.
- Responsive: mobile-first with `sm:` and `md:` breakpoints.
- Light mode only (no `.dark` theme).
- Alternating section backgrounds with `bg-muted/30`.

### Path Aliases

`@/` maps to `./src/` (configured in `tsconfig.app.json`, `tsconfig.json`, and `vite.config.ts`).

## Commands

```
npm run dev       # Start dev server with HMR
npm run build     # TypeScript check + production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## Adding shadcn/ui Components

```
npx shadcn add <component-name>
```

Components are generated into `src/components/ui/`.

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` (currently commented out). When enabled, it builds and deploys to GitHub Pages on push to `main`. The `base` path in `vite.config.ts` must match the repository name.

## Guidelines

- Keep components simple — no unnecessary abstractions.
- All content changes go through JSON files, not code.
- Maintain type safety — update `src/types.ts` if data shapes change.
- No dark mode — light theme only.
- No backend or API calls — this is a fully static site.
