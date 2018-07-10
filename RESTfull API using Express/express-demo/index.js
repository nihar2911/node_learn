const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

var courses = [{id:1, name: 'course1'},{id:2, name: 'course1'}]

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

//48.
app.get('/api/post/:year/:month', (req, res) =>{
    // res.send(req.params.id);
    res.send(req.query);  
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('NOT FOUND');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
   /* // validation hard-code
    if (!req.body.name || req.body.name.length < 3){
      // 400  bad request status
      res.status(400).send('Invalid name');
      return;
    };
    */

    //with Joi
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    const course = {
        id: courses.length + 1,
        name: req.body.name 
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) =>{
    //Look up coures is avilable
    //If not send error 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('NOT FOUND');

    //validate 
    //if invalide, return 400 - request 
    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //result.error
    if(error) return res.status(400).send(error.details[0].message);

    //update course
    course.name = req.body.name;
    //Return the update course
    res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
    //Lookup the course
    //Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('NOT FOUND');

    //delete 
    const index = courses.indexOf(course); 
    courses.splice(index, 1);

    //Return the deleted course
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
};


//PORT 47.
const port =  process.env.PORT;

app.listen(port, () => console.log(`Listining at ${port}...`));
