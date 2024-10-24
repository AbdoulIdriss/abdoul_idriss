const Category = require('../models/Category.js')

const viewCategory = async( req , res ) => {
    try {
        const categories = await Category.find();
        res.json(categories)
    } catch (error) {
        res.json ({
            error: 404,
            message: "category not found"
        })
    }
};

const createCategory = async( req , res ) => {

    const {  name , description } = req.body

    try {
        
        const category = new Category({ name , description })
        await category.save()

        res.status(201).json({
            error: false,
            message: " Category created successfully. ",
        })
    } catch (error) {
        res.status(404).json({
            error: true,
            message: " Error creating category. "
        })
    }
}

module.exports = { viewCategory , createCategory }
