var path = require('path');
var webpack = require('webpack');

// setup path which needs to be replaced
// to support dynamic require
var pathNeedReplace = [''];
var replacementReg = new RegExp('\.\/[abf]\.js$');
console.log(__dirname);

module.exports = {
  // entry: {
  //   'a': './a',
  //   'b': './b'
  // },
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: path.join(__dirname, 'output'),
    publicPath: 'output/', // relative public folder path where generated files would be, make browser able to load
    filename: '[name].js'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/common-async/, replacementReg),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'main',
    //   async: 'async1'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'main',
    //   async: 'async2'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      // name: 'common', 
      async: true
      // chunks: ['a', 'b']
    })
  ],
  module: {
exprContextRegExp: /$^/,
    exprContextCritical: false,
// unknownContextRegExp: /$^/,
// unknownContextCritical: false
  }
};
