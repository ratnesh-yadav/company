const express = require('express');
const router = express.Router();
const controller = require('../controllers/employee');

router.post('/createEmployee', controller.create);

router.post('/signinEmployee', controller.signin);

router.get('/getEmployee', controller.getAll);


router.post('/:employeeId', controller.getById);
router.post('/:employeeId/update', controller.update);
router.post('/:employeeId/delete', controller.delete)

module.exports = router;