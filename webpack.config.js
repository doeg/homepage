const path = require('path');

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
    ]
  }
};