const { resolve, join } = require('path');
const normalize = require('postcss-normalize');
const autoreset = require('postcss-autoreset');
const cssNext = require('postcss-cssnext');
const values = require('postcss-modules-values');
const fontMagician = require('postcss-font-magician');

module.exports = (env) => ({
  entry: resolve(__dirname, 'input', 'index.js'),
  output: {
    filename: 'output.js',
    path: join(__dirname, 'output'),
    pathinfo: !env.prod,
  },
  context: resolve(__dirname, 'input'),
  devtool: env.prod ? 'cheap-module-source-map' : 'eval',
  bail: env.prod,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'postcss-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [ 'url?limit=10000', 'img?minimize' ],
      },
    ],
  },
  postcss: () => ([
    normalize,
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
  ]),
});
