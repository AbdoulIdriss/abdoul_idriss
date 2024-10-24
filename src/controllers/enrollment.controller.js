const express = require('express');


const Enrollment = require('../models/Enrollment');
const Student = require('../models/Student');
const Course = require('../models/Course');

const addStudentToCourse = async (req, res) => {

    const { studentId, courseId } = req.body;

    try {

        const student = await Student.findById(studentId);
        const course = await Course.findById(courseId);

        if (!student || !course) {
            return res.json({ 
                error: 404,
                message: 'Student or Course not found.' 
            });
        }

        const enrollment = new Enrollment({ studentId, courseId });
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (err) {
        res.json({ 
            error: 404,
            message: 'Error enrolling'
        });
    }
};

module.exports = { addStudentToCourse }
