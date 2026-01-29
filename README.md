# Portfolio

Personal CV and portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **React** + **TypeScript** - UI framework
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **GitHub Pages** - Hosting

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Updates

All content is managed through JSON files in `src/data/`:

| File | Content |
|------|---------|
| `profile.json` | Name, title, summary, social links |
| `skills.json` | Technical skills by category |
| `experience.json` | Work experience timeline |
| `education.json` | Education history |
| `projects.json` | Portfolio projects |

Edit these files to update your website content. No code changes needed.

## Deployment to GitHub Pages

### Automatic (recommended)

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on every push to `main`.

**Setup steps:**

1. Push this repository to GitHub
2. Go to **Settings > Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` and the site will deploy automatically

### Manual

```bash
npm run build
```

Upload the `dist/` folder contents to your hosting provider.

### Custom Repository Name

If your repository is **not** named `portfolio`, update the `base` path in `vite.config.ts`:

```ts
base: "/your-repo-name/",
```

For a user/org site (`username.github.io`), set `base` to `"/"`.

## Project Structure

```
src/
├── components/
│   ├── sections/     # Page sections (Hero, Skills, etc.)
│   └── ui/           # shadcn/ui components
├── data/             # JSON content files
├── lib/              # Utilities
├── types.ts          # TypeScript type definitions
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```
