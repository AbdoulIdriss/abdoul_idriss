// routes/enrollmentRoutes.js
const { Router } = require('express');
const router = Router();

const enrollmentController = require('../src/controllers/enrollment.controller');


router.post('/enrollments', enrollmentController.addStudentToCourse);

module.exports = { router };
