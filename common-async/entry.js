require.ensure(['./a', './b'], function (require) {
  require('./a');
  require('./b');
});
