const express = require('express')
const router = express.Router()
const auth = require('../controller/auth')

const controller = require('../controller/book.controller')

router.post('/addBook',auth,controller.addBook)
router.get('/showBook',controller.showBook)

module.exports = router