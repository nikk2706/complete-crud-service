const {CreateStudent, Findallstudent, Findstudent, Deletestudent, Updatestudent} = require("../Services/student-services");



const AddStudent = async(req, res) =>{

    try{
        // const data = new Student(req.body);
        const student = await CreateStudent(req.body);
        res.status(201).send(student);

    }catch(e){res.status(400).send(e);}
}

const Studentsdata = async(req, res) =>{
    try{
        const data = await Findallstudent();
        res.status(200).send(data);
    }catch(e){res.status(400).send(e);}
}

const Studentdata = async(req, res)=>{
    try{
        const sdata = await Findstudent(req.params.id);
        res.status(200).send(sdata);
    }catch(e){res.status(400).send(e);}
}

const Updatedata = async(req, res)=>{
    try{
        const data = await Updatestudent(req.params.id, req.body ,{ new : true });
        res.status(200).send(data);
    }catch(e){res.status(400).send(e);}
}

const Deletedata = async(req, res) =>{
    try{
        const data = await Deletestudent(req.params.id);
        res.status(200).send(data);
    }catch(e){res.status(400).send(e);}
}

module.exports = {AddStudent, Studentsdata, Studentdata, Deletedata, Updatedata}
