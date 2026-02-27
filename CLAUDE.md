# CLAUDE.md — my-portfolio

## Project Overview
Personal portfolio site for Naveen K (naveenkai.com). React 19 + Create React App, deployed to GitHub Pages.

## Dev Workflow

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Run tests
npm test -- --watchAll=false

# Build for production
npm run build

# Lint (via CRA's built-in ESLint)
npx eslint src/

# Format code
npx prettier --write "src/**/*.{js,jsx,css,json}"

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure
- `src/App.js` — Root component with HashRouter routing
- `src/Portfolio.js` — Main portfolio page (single-page layout)
- `src/App.css` — All styles
- `public/` — Static assets, images, favicon

## Conventions
- **No TypeScript** — this is a plain JavaScript (JSX) project. Do not add .ts or .tsx files.
- **No enums** — use plain objects or constants instead.
- **Functional components only** — no class components.
- **Single-file components** — keep components in `src/` unless they grow large enough to warrant a directory.
- **Helper functions** — define inline in the same file (e.g., the `L()` link helper in Portfolio.js). Do not create a utils/ directory for small helpers.
- **CSS** — all styles live in `App.css`. Do not introduce CSS modules, styled-components, or Tailwind unless explicitly asked.
- **Routing** — uses `HashRouter` for GitHub Pages compatibility. Do not switch to `BrowserRouter`.
- **Images** — go in `public/images/`. Reference via `process.env.PUBLIC_URL + '/images/...'`.
- **External links** — use the `L(href, text)` helper in Portfolio.js. Always include `target="_blank"` and `rel="noopener noreferrer"`.

## Testing
- Uses React Testing Library + Jest (via CRA).
- Run tests before committing: `npm test -- --watchAll=false`
- Test file lives alongside source: `src/App.test.js`

## Common Mistakes to Avoid
- Do NOT use BrowserRouter — GitHub Pages requires HashRouter.
- Do NOT add dependencies without asking — this is a lightweight project.
- Do NOT eject from CRA.
- Do NOT modify `public/index.html` unless explicitly asked.
- Do NOT add TypeScript or convert files to .ts/.tsx.
- Do NOT create unnecessary abstractions for a single-page portfolio.
- Always run `npm run build` to verify changes compile before pushing.
