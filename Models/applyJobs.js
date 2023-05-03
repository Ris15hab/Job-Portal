//importing modules
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//creating Schema
const applySchema = mongoose.Schema({
    companyName : {
        type:String
    },
    userName: {
        type:String,
    },
    category:{
        type:String
    },
    jobDescription:{
        type: String
    },
    location:{
        type:String 
    },
    deadline:{
        type: Date
    },
    jobType:{
        type: String
    }
})
const apply = mongoose.model('apply',applySchema)
module.exports = apply