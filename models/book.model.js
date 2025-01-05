const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const bookSchema = new Schema({
    title:String,
    author:String,
    isbn:String
})

const book = mongoose.model('book',bookSchema)

module.exports = book