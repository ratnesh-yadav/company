const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true   
    },
    lastName: {
        type:String,
    },
    gender: { 
        type: String,
        enum : ['Male','Female', 'Others'],
    },
    hobbies: {
        type: [String]
    },
    email:{
        type: String,
        required:true  
    },
    password:{
        type: String
    },
    role:{
        type:String,
        enum: ['Manager','Employee']
    }
})

const Employee = new mongoose.model("Employee",employeeSchema)

module.exports = Employee;