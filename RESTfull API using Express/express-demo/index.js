
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/api', (req, res) =>{
    res.send([1, 2, 3]);
});

//48.
app.get('/api/:id', (req, res) =>{
    //res.send(req.params);
    res.send(req.query);
    
});

//PORT 47.
const port =  process.env.port || 3000;

app.listen(port, () => console.log(`Listining at ${port}...`));
