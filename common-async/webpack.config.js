var path = require('path');
var webpack = require('webpack');

// setup path which needs to be replaced
// to support dynamic require
var pathNeedReplace = [''];
var replacementReg = new RegExp('\.\/[abcdef]\.js$');
console.log(__dirname);

module.exports = {
  // entry: {
  //   'a': './a',
  //   'b': './b'
  // },
  entry: [path.resolve(__dirname, 'entry.js')],
  output: {
    path: path.join(__dirname, 'output'),
    publicPath: 'output', // relative public folder path where generated files would be, make browser able to load
    filename: '[name].js'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/\.\/?/, replacementReg),
    new webpack.optimize.CommonsChunkPlugin({
      // name: 'common', 
      async: true
      // chunks: ['a', 'b']
    })
  ],
  module: {
exprContextRegExp: /$^/,
    exprContextCritical: false,
unknownContextRegExp: /$^/,
unknownContextCritical: false
  }
};
