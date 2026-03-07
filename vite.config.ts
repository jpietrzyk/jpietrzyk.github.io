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
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src'),
    },
  },
}))
