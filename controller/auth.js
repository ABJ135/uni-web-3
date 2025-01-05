const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const person  = require('../models/person.model')

const authenticate = passport.authenticate('local',{session:false})

passport.use(new LocalStrategy(
    async(username,password,done)=>{
        try{
            const user  = await person.findOne({username})
            if(!user){
                return done(null,false,{message:'incorrect username'})
            }

            if(user.password !== password){
                return done(null,false,{message:'incorrect password'})
            }

            return done(null,user)
        }
        catch(error){
            return done(error)
        }
    }
))

module.exports = authenticate 