const {resolve, join} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoreset = require('postcss-autoreset')
const fontMagician = require('postcss-font-magician')

const postcssLoaders = [
  {
    loader: 'style-loader',
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        fontMagician({
          hosted: resolve(__dirname, 'input', 'style', 'fonts'),
        }),
        autoreset({
          reset: {
            fontSize: '100%',
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
        }),
      ],
    },
  },
]

module.exports = () => ({
  entry: {
    main: resolve(__dirname, 'input', 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: join(__dirname, 'output'),
  },
  devServer: {
    port: 5000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
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
              presets: ['es2015', 'stage-2'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        include: join(__dirname, 'input'),
      },
      {
        test: /\.css$/,
        use: postcssLoaders,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['commons', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'input', 'index.html'),
      inject: 'body',
    }),
  ],
})
