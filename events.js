
/*What is event?

A signal that somthing has happend

*/


const EvetEmittre = require('events');

const nayaEvent = new EvetEmittre();

nayaEvent.on('Object', function(Eventarg){
    console.log('Ye raha Object', Eventarg)
});
// Register a listener

nayaEvent.emit('Object', {id:1, url:'pornhub.com'})
//Raise an event 
//Event emits some data 
//We must catch it object 



// order is imp