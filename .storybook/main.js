const path = require('path')

module.exports = {
  'stories': [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...config.resolve.modules,
      path.resolve(__dirname, '..'),
    ]

    return config
  },
}
