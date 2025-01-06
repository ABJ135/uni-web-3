const mongoose = require('mongoose')
const URL = "mongodb://localhost:27017/library"

mongoose.connect(URL)

const db = mongoose.connection

db.on("connected",()=>{
    console.log("mongo db is connected")
})

db.on("disconnected",()=>{
    console.log("mongo db is no connected")
})

db.on("error",()=>{
    console.log("Error connecting mongo db")
})

module.exports = db