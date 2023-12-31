const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController.js')

router.get('/createTable', ProductController.createTable)

router.post('/newProduct', ProductController.create)

router.put('/updateProduct/id/:id', ProductController.update)

router.get('/getProducts', ProductController.getAll)

router.get('/getProduct/id/:id', ProductController.getById)

router.get('/getProductsDescent', ProductController.getDescent)

router.get('/getProduct/name/:title', ProductController.getByName)

router.delete('/deleteById/id/:id', ProductController.deleteById)

module.exports = router