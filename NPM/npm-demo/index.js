
var _ = require('underscore');

// how NPM finds module 
// 1. core module
// 2. file or folder 
// 3.  node_module


var result = _.contains([1,2,4], 4);

console.log(result);