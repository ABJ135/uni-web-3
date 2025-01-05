const express = require('express')
const router = express.Router()

const controller = require('../controller/person.controller')

router.post('/addPerson',controller.addUser)

router.get('/showPerson',controller.showUser)

module.exports = router