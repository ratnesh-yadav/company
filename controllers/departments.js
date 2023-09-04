const Department = require('../models/department-model');

// add Faq API
module.exports.create = async (req, res, next) => {
    
    try {
        const addingDepartment = new Department(req.body)
       
        const insertDepartment = addingDepartment.save();
        res.json({
            status: true,
            msg: "Department created successfully..",
            data:addingDepartment,
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
            const getEmployee = await Department.find({});
    
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


// get by id API
module.exports.getById = async (req, res, next) => {
    
    try {
        const _id = req.params.departmentId;
        const getDepartment = await Department.findById(_id);

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
        const getDepartment = await Department.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.json({
            status: true,
            msg: "Department updated successfully.",
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
        const getSplash = await Department.findByIdAndUpdate(_id, req.body, {
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
        const getDepartment = await Department.findByIdAndDelete(req.params.key);
        res.json({
            status: true,
            msg: "Department deleted successfully.",
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