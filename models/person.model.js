const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const personSchema = new Schema({
    username:String,
    password:String,
    email:String
})

const person = mongoose.model('person',personSchema)

module.exports = person