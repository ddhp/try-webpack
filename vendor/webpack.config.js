var path = require('path');
var CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    'vendor': ['jquery'],
    'a': './a',
    'b': './b'
  },
  output: {
    path: path.join(__dirname, 'output'),
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
