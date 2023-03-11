//importing modules
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//creating Schema
const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    useremail:{
        type: String,
    },
    password:{
        type: String,
    },
    role:{
        type: Boolean,
    }
})
//Hashing password
userSchema.pre('save',async function(next){
    let currentUser = this
    if(!currentUser.isModified('password')){
        return next()
    }
    try{
        const salt = await bcrypt.genSalt(10)
        currentUser.password = await bcrypt.hash(currentUser.password,salt)
        return next();
    }catch(error){
        return next(error)
    }
})
const User = mongoose.model('user',userSchema)
//exporting modules
module.exports = User