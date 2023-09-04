const express = require('express');
const router = express.Router();
const controller = require('../controllers/department_details');

router.post('/createDepartmentdetails', controller.create);

router.get('/getDepartmentdetails', controller.getAll);

router.post('/:departmentdetailsId', controller.getById);
router.post('/:departmentdetailsId/update', controller.update);
router.post('/:departmentdetailsId/delete', controller.delete)

module.exports = router;