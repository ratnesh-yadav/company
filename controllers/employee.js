const Employee = require('../models/employee-model');


module.exports.signin = async (req, res, next) => {
    
    try {console.log('6')
        const email = req.body.email;
        const password = req.body.password; 
        console.log(email,'9')
        console.log(password,'10')
        const getEmployee = await Employee.findOne({email:email, password:password});
        res.json({
            status: true,
            msg: "Employee signin successfully..",
            data:getEmployee,
        })
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Invalid credentials",
            data:error,
        }))
    }
}

// add Faq API
module.exports.create = async (req, res, next) => {
    
    try {
        const addingEmployee = new Employee(req.body)
       
        const insertEmployee = addingEmployee.save();
        res.json({
            status: true,
            msg: "Employee created successfully..",
            data:addingEmployee,
        })
    } catch (error) {
        next(res.json({
            status: false,
            msg: "Something wrong with details",
            data:error,
        }))
    }
}

// get all  API
module.exports.getAll = async (req, res, next) => {
    try{
        const getEmployee = await Employee.find({});

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

// get Employee  API
module.exports.getAll = async (req, res, next) => {
    try{
        const getEmployee = await Employee.find({role:'Employee'});

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
        const _id = req.params.key;
        const getEmployee = await Employee.findById(_id);

        res.json({
            status: true,
            msg: "Data fetch successfully.",
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


// update  API
module.exports.update = async (req, res, next) => {
    
    try {
        const _id = req.params.key;
        const getEmployee = await Employee.findByIdAndUpdate(_id,req.body,{
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


//update status api
module.exports.statusupdate = async (req, res, next) => {

    try {
        console.log(req.params);
        const _id = req.params.key;
        const getSplash = await Employee.findByIdAndUpdate(_id, req.body, {
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


// delete api
module.exports.delete = async (req, res, next) => {
    
    try {
        const getEmployee = await Employee.findByIdAndDelete(req.params.key);
        res.json({
            status: true,
            msg: "Employee deleted successfully.",
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