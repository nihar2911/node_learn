
const EventEmitter = require('events');

const Logger = require('./logger');
//use loggar.js file 
const logger = new Logger();
//const emitter = new EventEmitter();

logger.on('messageLogged', (eventArg) => {
    console.log('logger se aaya mai', eventArg);
});

logger.log('massage');
// 

