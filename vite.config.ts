import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig(({ mode }) => ({
  plugins: [
    ...(mode === 'test'
      ? []
      : [
          devtools({
            enhancedLogs: {
              enabled: false,
            },
            consolePiping: {
              enabled: false,
            },
          }),
        ]),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    ...(mode === 'test' ? [] : [tanstackStart()]),
    viteReact(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
}))

export default config
