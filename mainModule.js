
var logger = require('./logger');
//Every module must have main module 
//so that it get  some module form which app will start 


//console.log(global.module);//this is wrong way
//console.log(module); 
//correct way

//console.log(logger);
// for test
// works

//now test for log function
logger.log("dummy Text");

