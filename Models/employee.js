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
    status:{
        type: String,
    },
    experience:{
        type: Number,
    },
    location:{
        type: String,
    },
    phoneNumber:{
        type: String,
    }
},{timestamps:true})

const Employee = mongoose.model('employee',employeeSchema)
//exporting modules
module.exports = Employee