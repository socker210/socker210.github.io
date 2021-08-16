const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const modules = {
  ts: {
    test: /\.tsx?$/,
    use: 'babel-loader',
  },
  css: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
}

const webpackConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'App.tsx'),
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
    modules: ['node_modules', path.resolve(__dirname)],
  },
  module: {
    rules: [{ ...modules.ts }, { ...modules.css }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
    }),
  ],
}

module.exports = {
  modules,
  default: webpackConfig,
}
