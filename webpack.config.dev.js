const {resolve, join} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  entry: {
    main: resolve(__dirname, 'input', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: join(__dirname, 'output')
  },
  devServer: {
    port: 5000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ],
        include: join(__dirname, 'input')
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['commons', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'input', 'index.html'),
      inject: 'body'
    })
  ]
})
