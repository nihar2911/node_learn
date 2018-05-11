

const os =require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

/* output
Total Memory: 4172316672
Free Memory: 1269596160
*/