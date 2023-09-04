const express = require('express');
const router = express.Router();
const controller = require('../controllers/employee_details');

router.post('/createEmployeedetails', controller.create);

// router.get('/getEmployeedetails', controller.getEmployee);

router.get('/:employeedetailsId', controller.getById);
router.get('/emp/:empId', controller.getByEmpId);
router.get('/employeedetails/all', controller.getAll);
router.post('/:employeedetailsId/update', controller.update);
router.post('/:employeedetailsId/delete', controller.delete)

module.exports = router;