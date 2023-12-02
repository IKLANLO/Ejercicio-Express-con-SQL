const express = require('express')
const router = express.Router()
const db = require('../config/database.js')
const UserOrderController = require('../controllers/UsersOrdersController.js')

router.get('/createTable', UserOrderController.createTable)

router.get('/getUsersOrders', UserOrderController.getAll)

module.exports = router