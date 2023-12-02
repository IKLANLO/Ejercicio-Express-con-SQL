const express = require('express')
const router = express.Router()
const db = require('../config/database.js')
const ProdCatController = require('../controllers/ProductsCategoriesController.js')

router.get('/getProductsCategories', ProdCatController.getAll)

module.exports = router