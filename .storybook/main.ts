import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async (options) => {
    options.presets = options.presets || []
    options.plugins = options.plugins || []

    return {
      ...options,
      presets: [...options.presets, '@emotion/babel-preset-css-prop'],
      plugins: [...options.plugins, 'babel-plugin-twin', 'babel-plugin-macros'],
    }
  },
}
export default config
