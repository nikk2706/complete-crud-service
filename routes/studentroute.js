const express = require("express");
const route = express.Router();
const Student = require('../models/studentmodel');

const  {AddStudent, Studentsdata, Studentdata, Deletedata, Updatedata}  = require( "../Controller/studentcontroller");

route.post('/student', AddStudent);
route.get('/student', Studentsdata);
route.get('/student/:id', Studentdata);
route.delete('/student/:id', Deletedata);
route.put('/student/:id', Updatedata);


module.exports = route;