
console.log(__filename);
console.log(__dirname);
//var logger = require('./logger');//not a best way 
//Every module must have main module 
//so that it get  some module form which app will start 

const log = require('./logger')
// best way

//console.log(global.module);//this is wrong way
//console.log(module); 
//correct way

//console.log(logger);
// for test
// works

//now test for log function
log("dummy Text");

//another way
log('new text');

