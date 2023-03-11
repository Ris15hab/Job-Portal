//importing modules
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//creating Schema
const jobSchema = mongoose.Schema({
    companyName : {
        type:String
    },
    jobPost:{
        type:String
    },
    jobDescription:{
        type: String
    },
    location:{
        type:String 
    },
    salary:{
        type:String
    }
})
const Job = mongoose.model('jobs',jobSchema)