const express =require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController.js')

router.get('/createTable', OrderController.createTable)

router.post('/newOrder', OrderController.create)

router.get('/getOrders', OrderController.getAll)

module.exports = router