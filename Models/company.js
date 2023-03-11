//importing modules
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//creating Schema
const companySchema = mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    designation:{
        type: String,
    },
    companyName:{
        type: String,
    },
    location:{
        type: String,
    }
},{timestamps:true})

const Company = mongoose.model('company',companySchema)
//exporting modules
module.exports = Company