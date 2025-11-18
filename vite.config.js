import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.test.js',
        '**/*.test.jsx',
        'src/presentation/**', // Excluir componentes React
        'src/main.jsx',
        'src/App.jsx',
        '**/*.styles.js',
        'vite.config.js',
        'test-api.js',
      ],
      include: [
        'src/domain/**',
        'src/application/**',
        'src/infrastructure/**',
      ],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
})
