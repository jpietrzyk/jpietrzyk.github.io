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
