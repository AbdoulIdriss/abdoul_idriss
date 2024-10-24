const express = require('express');


const Schedule = require('../models/Schedule');

const addSchedule = async (req, res) => {
    
    const { startTime, endTime, classroom } = req.body;

    try {

        const schedule = new Schedule({ courseId:req.params.courseId, instructorId:req.params.instructorId, classroom, startTime, endTime });
        await schedule.save();
        res.status(201).json(schedule);

    } catch (err) {

        res.status(400).json({ error: err.message });

    }
};

module.exports = { addSchedule }