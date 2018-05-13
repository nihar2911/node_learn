
var _ = require('underscore');
var mongoose = require('mongoose');


// how NPM finds module 
// 1. core module
// 2. file or folder 
// 3.  node_module

var mResult = mongoose.Collection()

var result = _.contains([1,2,4], 4);

console.log(result);