# Webpack Code Spliting Tryout
Go to each folder, run `webpack`, and visit html page (local filesystem is ok) to see examples
- *vendor/*: compile vendor codes into `vendor.js` by directly pointing out at webpack.config.js
- *common/*: use `CommonsChunkPlugin` to transpile common files by specifying several entry files
- *ensure/*: webpack load child chunks by jsonp when require.ensure pattern is presented
