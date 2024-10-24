const { Router } = require('express');
const router = Router();

const courseController = require('../src/controllers/course.controller');



router.get('/', courseController.getCourses)
router.post('/create', courseController.addCourse);
router.put('/update/:id', courseController.editCourse);
router.delete('/delete/:id', courseController.deleteCourse);

module.exports = { router };
