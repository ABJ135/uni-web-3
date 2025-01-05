const express = require('express')
const app = express()
const port = 3000
const db = require('./db')
const passport = require('passport')

app.use(express.json())
app.use(passport.initialize())

const bookRouter = require('./router/book.route')
const personRouter = require('./router/person.route')

app.use('/book',bookRouter)
app.use('/person',personRouter)

app.listen(port,()=>{
    console.log(`server is listning at port ${port}`)
})