var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./entry.js",
  output: {
    path: path.join(__dirname, 'output'),
    publicPath: 'output/',
    filename: "main.js",
    chunkFilename: 'js/[hash]/[id].js'
  },
  // plugins: [ new webpack.optimize.CommonsChunkPlugin() ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
