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
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
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