import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@components': './src/components',
      '@utils': './src/utils'
    }
  },
})
