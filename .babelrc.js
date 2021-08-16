const path = require('path')

module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          pages: './src/pages',
          components: './src/components',
        },
      },
    ],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
