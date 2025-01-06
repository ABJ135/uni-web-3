const express = require('express')
const router = express.Router()
const auth = require('../controller/auth')

const controller = require('../controller/book.controller')

router.post('/addBook',auth,controller.addBook)
router.get('/showBook',auth,controller.showBook)
router.put('/updateBook/:id',auth,controller.updateBook)
router.delete('/deleteBook/:id',auth,controller.deleteBook)

module.exports = router