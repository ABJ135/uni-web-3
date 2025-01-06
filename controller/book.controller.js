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

const updateBook = async(req,res)=>{
    try{
        const id = req.params.id
        const data = req.body
        const object = await book.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({message:"updated data is",object})
      }catch(error){
        console.log(error)
        res.status(500).json("Error received")
      }
}

const deleteBook = async (req,res)=>{
    try{
        const id = req.params.id
        const object = await book.findByIdAndDelete(id)
        res.status(200).json({message:"book deleted successfully",object})
    }
    catch(error){
        console.log(error)
        res.status(500).json("Error deleting book")
    }
}

module.exports = {
    addBook,
    showBook,
    updateBook,
    deleteBook
}