var deps = ['a.js', 'b.js', 'c.js', 'd.js', 'e.js'];

require.ensure([/*'./a', './b'*/], function (require) {
  var target = 'a.js';
  require(target);
});
