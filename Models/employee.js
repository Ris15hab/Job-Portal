//importing modules
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//creating Schema
const employeeSchema = mongoose.Schema({
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
    experience:{
        type: Number,
    },
    gender:{
        type: String,
    },
    location:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    dob:{
        type: Date
    }
},{timestamps:true})

const Employee = mongoose.model('employee',employeeSchema)
//exporting modules
module.exports = Employee