const { Router } = require('express');
const router = Router();

const categoryController = require('../src/controllers/category.controller');

router.get('/', categoryController.viewCategory);
router.post('/create', categoryController.createCategory);


module.exports = { router } ;