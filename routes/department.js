const express = require('express');
const router = express.Router();
const controller = require('../controllers/departments');

router.post('/createDepartment', controller.create);

router.get('/getDepartments', controller.getAll);

router.post('/:departmentId', controller.getById);
router.post('/:departmentId/update', controller.update);
router.post('/:departmentId/delete', controller.delete)

module.exports = router;