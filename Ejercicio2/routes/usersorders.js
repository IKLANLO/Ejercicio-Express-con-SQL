const express = require('express')
const router = express.Router()
const db = require('../config/database.js')
const UserOrderController = require('../controllers/UsersOrdersController.js')

router.get('/createTable', UserOrderController.createTable)

module.exports = router