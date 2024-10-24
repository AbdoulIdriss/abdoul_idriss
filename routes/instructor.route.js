const { Router } = require('express');
const router = Router();

const instructorController = require('../src/controllers/instructor.controller')

router.get('/', instructorController.getInstructor);
router.post('/create' , instructorController.createInstructor);

module.exports = { router };