const eventEmitter = require('events');
const emitter = new eventEmitter();
var url = 'http:.....';

class Logger extends eventEmitter {
    log(massage) {
        // send an HTTP request
        console.log(massage);

        this.emit('messageLogged', { id: 1, url: 'http' });
        // Raise an event        
    }

}

module.exports = Logger;
//module.export.url = url; 
// x because we want url to be private
// made mistake didnt add use "export" instided of "exports" 