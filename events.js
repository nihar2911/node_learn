
/*What is event?

A signal that somthing has happend

*/


const EvetEmittre = require('events');

const nayaEvent = new EvetEmittre();

nayaEvent.on('Text aaya', function(){
    console.log('Hao aa gaya Text')
});
// Register a listener

nayaEvent.emit('Text aaya')
//Raise an event 



// order is imp