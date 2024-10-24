const Course = require('../models/Course');

const getCourses = async ( req , res ) => {

    try {
        const course = await Course.find()
        res.json(course)

    } catch (error) {

        res.json({
            eror: true,
            message:"could not retrieve user"
        })
    }
}

const addCourse = async (req, res) => {

    const { title, description, instructor , category, duration } = req.body;
    
    try {
        const course = new Course({ title, description, instructor , category, duration });
        await course.save();
        res.status(201).json(course);

    } catch (err) {
        res.status(404).json({ 
            error: true,
            message: "Error adding course" 
        });
    }

};


const editCourse = async (req, res) => {
    const { name, description, category, duration } = req.body;
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, { name, description, category, duration }, { new: true });
        if (!course) 
            return res.status(404).json({ error: "Course not found" });
        res.json(course);
    } catch (err) {
        res.status(400).json({ 
            error: 404, 
            message: "Error editing course" 
        });
    }
};


const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json({
            error: false,
            message: "Course deleted" });
    } catch (err) 
    {
        res.status(404).json({ 
            error: true,
            message: "Error deleting course" });
    }
};





module.exports = { getCourses , addCourse , editCourse , deleteCourse };
