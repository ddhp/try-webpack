var path = require('path');
var CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;

module.exports = {
  // entry: {
  //   'a': './a',
  //   'b': './b'
  // },
  entry: path.join(__dirname, 'entry.js'),
  output: {
    path: path.join(__dirname, 'output'),
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      // name: 'common', 
      async: true
      // chunks: ['a', 'b']
    })
  ]
};
