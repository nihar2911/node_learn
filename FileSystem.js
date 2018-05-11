
const fs =  require('fs');

var files = fs.readdirSync('./');

console.log(files);
// for sync functipn

//Now for Async function 

var filesAsync = fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files)
});


//always use async method for JS