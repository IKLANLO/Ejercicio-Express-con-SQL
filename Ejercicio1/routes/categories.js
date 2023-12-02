const express = require('express')
const router = express.Router()
const db = require('../config/database.js')
const CategoryController = require('../controllers/CategoryController.js')

router.post('/newCategory', CategoryController.create)

router.put('/updateCategory/id/:id', CategoryController.update)

router.get('/getCategories', CategoryController.getAll)

router.get('/getCategory/id/:id', CategoryController.getById)

module.exports = router