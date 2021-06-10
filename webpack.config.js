const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'App.tsx'),
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
    }),
  ],
}
