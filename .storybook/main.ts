import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../src', import.meta.url)),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/shared/styles/global";`,
          },
        },
      },
    })
  },
}

export default config
