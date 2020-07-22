const path = require('path');

const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require("sass")
            }
          }
        ],
      },
       {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024
        }
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre'
      },
    ]
  },
  plugins: [
    new HtmlWebpack({
      template: './src/index.html',
      xhtml: true,
    }),
  ]
}