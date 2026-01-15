import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

const projectRoot = process.cwd()
const outputDir = resolve(projectRoot, 'fwindemiko/test')

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: [resolve(__dirname, 'test/setup.ts')],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: resolve(outputDir, 'coverage'),
      include: [
        // '**/.vitepress/**/*.{ts,js,vue}', // 包含 .vitepress 目录下的所有 TypeScript、JavaScript 和 Vue 文件
        // '**/components/**/*.{ts,js,vue}', // 包含组件文件
        // '**/utils/**/*.{ts,js}', // 包含工具函数
        './.vitepress/test/**/*.{ts,js,vue,test.ts}',
      ],
      exclude: [
        './node_modules/**',
        '**/dist/**',
        '**/fwindemiko/**',
        '**/*.config.*',
        '**/*.d.ts',
        '**/*.spec.{ts,js}', // 排除测试文件
      ],
      enabled: true,
      clean: true,
      cleanOnRerun: true,
      thresholds: {
        lines: 0, // 暂时不设置阈值，后续可以调整
        functions: 0,
        branches: 0,
        statements: 0
      }
    },
    reporters: [
      'default',
      ['junit', { 
        outputFile: resolve(outputDir, 'test-results/junit.xml')
      }]
    ],
    outputFile: resolve(outputDir, 'test-results/test-output.json'),
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/fwindemiko/**']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../'),
      '@components': resolve(__dirname, '../components'),
      '@utils': resolve(__dirname, 'utils')
    }
  }
})