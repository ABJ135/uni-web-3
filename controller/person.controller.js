const person = require('../models/person.model')

const addUser = async(req,res)=>{
try{
    const data = req.body
    const object = await person.create(data)
    res.status(200).json({"message":"user created successfully",object})
}
catch(error){
    console.log(error)
    res.status(500).json("error adding user")
}
}

const showUser = async(req,res)=>{
    try{
        const object = await person.find()
        res.status(200).json(object)
    }
    catch(error){
        res.status(500).json("Error finding user")
        console.log(error)
    }
}

module.exports = {
    showUser,
    addUser
}