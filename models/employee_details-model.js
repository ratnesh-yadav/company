const mongoose = require('mongoose');

const employeedetailSchema = new mongoose.Schema({
    salary: {
        type:Number,
    },
    employeeId: {
        type: Object,
        default: "",
    },
    location: { 
        type: String,
    },
    categoryName: {
        type: String
    },
    departmentName:{
        type: String
    } 
})

const EmployeeDetails = new mongoose.model("employeeDetails",employeedetailSchema)

module.exports = EmployeeDetails;