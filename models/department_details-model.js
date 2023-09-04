const mongoose = require('mongoose');

const departmentdetailSchema = new mongoose.Schema({
    departmentId: {
        type:Object,
        required:true,
        default:"" 
    },
    employeeId: {
        type:Object,
        required:true,
        default:"" 
    }
})

const departmentDetails = new mongoose.model("departmentDetails",departmentdetailSchema)

module.exports = departmentDetails;