
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url ==='/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// This is not clean structure 
// We can use Express for clean structure

//have all the method of eventEmitter
server.listen(3000);

// server.on('connection', (socket) => {
//     console.log('New connction');
// });

//low level 


console.log('listining on port 3000....')