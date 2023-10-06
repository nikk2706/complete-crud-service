const Student = require('../models/studentmodel');

const CreateStudent = async(data) =>{
    return await Student.create(data);
}

const Findallstudent = async()=>{
    return await Student.find();
}

const Findstudent = async(id)=>{
    return await Student.findById(id);
}

const Deletestudent = async(id)=>{
    return await Student.findByIdAndDelete(id)
}

const Updatestudent = async(id, data)=>{
    return await Student.findByIdAndUpdate(id, data)
}
module.exports = {CreateStudent, Findallstudent, Findstudent, Deletestudent, Updatestudent}