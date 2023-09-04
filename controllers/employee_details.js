const EmployeeDetails = require('../models/employee_details-model');
const Employees = require('../models/employee-model');


// add Faq API
module.exports.create = async (req, res, next) => {
    
    try {
        const addingEmployeeDetails = new EmployeeDetails(req.body)
       
        const insertEmployee = addingEmployeeDetails.save();
        res.json({
            status: true,
            msg: "Employee details added successfully..",
            data:addingEmployeeDetails,
        })
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}

// get all API
module.exports.getAll = async (req, res, next) => {
    try{
        const getEmployee = await EmployeeDetails.find({});

        res.json({ 
            status: true,
            msg: "Data fetch successfully.",
            data:getEmployee,
        })
    }catch(error){
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}

// get by emp_id
module.exports.getByEmpId = async (req, res, next) => {
    try{console.log('47')
        let _id = req.params.empId;
        const getEmployee = await EmployeeDetails.findOne({employeeId:_id});
        const getData = await Employees.findById(_id);
        delete getData.password;
         
            res.json({ 
            status: true,
            msg: "Data fetch successfully.",
            data:getData,
            officedata:getEmployee
        })
    }catch(error){
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}

// get by id Faq API
module.exports.getById = async (req, res, next) => {
    
    try {console.log('33')
        const _id = req.params.employeedetailsId;
    //     const getEmployee = await EmployeeDetails.aggregate([
    //         {
    //           $lookup: {
    //             from: "employees", // Name of the second collection
    //             localField: "employeeId", // Field from the first collection
    //             foreignField: "_id", // Field from the second collection
    //             as: "employeeInfo" // Alias for the joined data
    //           }
    //         }
    //       ]).then((orders) => {
    //         console.log(orders,'60')
    //         // res.json(getEmployee);
    //       }).catch((error)=>{
    //         console.log(error,'62')
    //       });

    //     res.json({
    //         status: true,
    //         msg: "Data fetch successfully.",
    //         data:getEmployee,
    //     })
    const getEmployee = await Employees.findById(_id);
    res.json({
        status: true,
        msg: "Data fetch successfully.",
        data:getEmployee,
    })
    } catch (error) {
        console.log(error)
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}


// update Faq API
module.exports.update = async (req, res, next) => {
    
    try {
        const _id = req.params.key;
        const getEmployee = await EmployeeDetails.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.json({
            status: true,
            msg: "Employee updated successfully.",
            data:getEmployee,
        })
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}


//update status Faq api
module.exports.statusupdate = async (req, res, next) => {

    try {
        console.log(req.params);
        const _id = req.params.key;
        const getSplash = await EmployeeDetails.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.json({
            status: true,
            msg: "status updated successfully.",
            response_data: getSplash,
        });
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            response_data: error,
        }))
    }
}


// delete faq api
module.exports.delete = async (req, res, next) => {
    
    try {
        const getEmployee = await EmployeeDetails.findByIdAndDelete(req.params.key);
        res.json({
            status: true,
            msg: "Employee details deleted successfully.",
            data:getEmployee,
        })
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}