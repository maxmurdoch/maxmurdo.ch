const { resolve, join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssImport = require('postcss-import')
const modules = require('postcss-modules')
const autoreset = require('postcss-autoreset')
const cssNext = require('postcss-cssnext')
const values = require('postcss-modules-values')
const fontMagician = require('postcss-font-magician')

const postcssLoaders = [
  {
    loader: 'style-loader',
  },
  {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        modules,
        postcssImport,
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
        cssNext,
        values,
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
