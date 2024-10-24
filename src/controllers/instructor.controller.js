const Instructor = require('../models/Instructor');

const createInstructor = async (req , res ) => {
    
    const { firstName , lastName , email, contactNumber } = req.body;

    try {
        
        const instructor = new Instructor( { firstName , lastName , email, contactNumber } );
        await instructor.save();

        res.status(201).json(instructor)

    } catch (error) {
        res.status(404).json({
            error: true,
            message: 'Error creating instructor'
        })
    }

};

const getInstructor = async ( req , res ) => {

    try {
        const instructor = await Instructor.find()
        res.json(instructor)
    } catch (error) {
        res.json(404).json({
            error: true,
            message: 'Error getting instructor'
        })
    }

};

module.exports = { createInstructor , getInstructor }