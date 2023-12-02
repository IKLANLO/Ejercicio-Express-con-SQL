const express =require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController.js')

router.get('/createTable', OrderController.createTable)

module.exports = router