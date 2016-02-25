const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: 'build',

   /*
    * Must compile to UMD or CommonJS so it can be required in a Node context
    * @see https://github.com/markdalgleish/static-site-generator-webpack-plugin#webpackconfigjs
    */
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        ),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
    /*
     * Provide a series of paths to be rendered, and a matching set of index.html
     * files will be rendered in your output directory by executing your own
     * custom, webpack-compiled render function defined in the entry file.
     */
    new StaticSiteGeneratorPlugin('bundle.js', ['/'], {})
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.svg', '.png', '.jpg']
  }
};