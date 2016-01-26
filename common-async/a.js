var $ = require('jquery');
console.log($);
$('body').css('background-color', 'red');
require(['./c', './d']);
module.exports = 'a';
