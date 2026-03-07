import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const getGitHubPagesBase = () => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

  if (!repoName) {
    return '/'
  }

  return repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
}

export default defineConfig(({ mode }) => ({
  base: mode === 'github-pages' ? getGitHubPagesBase() : '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        about: fileURLToPath(new URL('about.html', import.meta.url)),
        contact: fileURLToPath(new URL('contact.html', import.meta.url)),
        projects: fileURLToPath(new URL('projects.html', import.meta.url)),
        notes: fileURLToPath(new URL('notes.html', import.meta.url)),
        resume: fileURLToPath(new URL('resume.html', import.meta.url)),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src'),
    },
  },
}))
