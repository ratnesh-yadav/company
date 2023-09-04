const departmentDetails = require('../models/department_details-model');

// add Faq API
module.exports.create = async (req, res, next) => {
    
    try {
        console.log('ccc')
        const addingdepartmentDetails = new departmentDetails(req.body)
       
        const insertDepartment = addingdepartmentDetails.save();
        res.json({
            status: true,
            msg: "Department created successfully..",
            data:addingdepartmentDetails,
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
        const getEmployee = await departmentDetails.find({});

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

// get by id Faq API
module.exports.getById = async (req, res, next) => {
    
    try {
        const _id = req.params.departmentdetailsId;
        const getDepartment = await departmentDetails.findById(_id);

        res.json({
            status: true,
            msg: "Data fetch successfully.",
            data:getDepartment,
        })
    } catch (error) {
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
        const getDepartment = await departmentDetails.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.json({
            status: true,
            msg: "departmentDetails updated successfully.",
            data:getDepartment,
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
        const getSplash = await departmentDetails.findByIdAndUpdate(_id, req.body, {
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
        const getDepartment = await departmentDetails.findByIdAndDelete(req.params.key);
        res.json({
            status: true,
            msg: "departmentDetails deleted successfully.",
            data:getDepartment,
        })
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}