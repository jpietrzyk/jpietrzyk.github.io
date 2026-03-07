# jcp.github

Personal site built with React, Vite, Tailwind CSS, and shadcn/ui.

## Scripts

- `npm run dev` - local development
- `npm run build` - production build (default base `/`)
- `npm run build:pages` - GitHub Pages build mode
- `npm run preview` - local preview

## GitHub Pages build

Use:

```bash
npm run build:pages
```

In `github-pages` mode, Vite base path is set automatically:

- User repo (`<user>.github.io`) -> `/`
- Project repo (`<repo>`) -> `/<repo>/`

## GitHub Pages deploy

This repo includes workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds and deploys `dist` on each push to `main`.

In repository settings, set **Pages** -> **Build and deployment** -> **Source** to **GitHub Actions**.

## URL map (static pages)

- `/` -> Home page (`index.html`, `src/main.tsx`, `src/pages/HomePage.tsx`)
- `/about.html` -> About page (`about.html`, `src/main-about.tsx`, `src/pages/AboutPage.tsx`)
- `/projects.html` -> Projects page (`projects.html`, `src/main-projects.tsx`, `src/pages/ProjectsPage.tsx`)
- `/resume.html` -> Resume page (`resume.html`, `src/main-resume.tsx`, `src/ResumePage.tsx`)
- `/notes.html` -> Notes page (`notes.html`, `src/main-notes.tsx`, `src/pages/NotesPage.tsx`)
- `/contact.html` -> Contact template page (`contact.html`, `src/main-contact.tsx`, `src/pages/ContactPage.tsx`)

All pages share the same header/navigation layout from `src/components/site-layout.tsx`.

## How to add a new static page

1. Create HTML entry file, e.g. `new-page.html`, with `<script type="module" src="/src/main-new-page.tsx"></script>`.
2. Create page component, e.g. `src/pages/NewPage.tsx`, and entrypoint `src/main-new-page.tsx`.
3. Add new input in `vite.config.ts` under `build.rollupOptions.input`.
4. (Optional) Add link in `src/components/site-layout.tsx` navigation.
5. Build and verify: `pnpm run build:pages`.
