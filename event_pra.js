
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('logger', (eventArg) => {
    console.log('logger se aaya mai', eventArg);
});

emitter.emit('logger', {massage: 'mai aa gaya'});