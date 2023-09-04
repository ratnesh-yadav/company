const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    department_name: {
        type:String,
        required:true   
    }
})

const Department = new mongoose.model("Department",departmentSchema)

module.exports = Department;