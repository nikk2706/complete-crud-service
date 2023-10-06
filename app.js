const express = require('express');
const app = express();
require('./db/connection');
const Student = require('./models/studentmodel');
const studentrouter = require('./routes/studentroute');

app.use(express.json());//for inlog req.body => undefined

app.listen(3000,()=>{console.log("API Running on Port 3000");});

app.use(studentrouter);



