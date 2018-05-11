
const path = require('path');
//build in module

var patObj = path.parse(__filename);

console.log(patObj);

/*E:\node> node .\path.js
{ root: 'E:\\',
dir: 'E:\\node',
base: 'path.js',
ext: '.js',
name: 'path' }

*/