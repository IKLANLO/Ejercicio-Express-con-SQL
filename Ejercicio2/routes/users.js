const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')

router.get('/createTable', UserController.createTable)

router.post('/newUser', UserController.create)

router.put('/updateUser/id/:id', UserController.update)

router.get('/getUsers', UserController.getAll)

router.get('/getById/id/:id', UserController.getById)

router.delete('/deleteById/id/:id', UserController.deleteById)

module.exports = router