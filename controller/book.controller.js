const book = require('../models/book.model')

const addBook = async (req,res)=>{
    try{
        const data = req.body
        const object = await book.create(data)
        res.status(200).json({"message":"object created successfully",object})
    }
    catch(error){
        res.status(500).json("Error adding book")
        console.log(error)
    }
}

const showBook  = async (req,res)=>{
    try{
        const object = await book.find()
        res.status(200).json(object)
    }
    catch(error){
        res.status(500).json("error showing book")
        console.log(error)
    }
}

module.exports = {
    addBook,
    showBook
}