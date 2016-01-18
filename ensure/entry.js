var a = require('./modules/a');
require.ensure(['./modules/b'], function (require) {
  console.log(require('./modules/b'));
});
console.log(a);
