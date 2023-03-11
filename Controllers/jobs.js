const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { ObjectId } = require('mongodb')
const User = require('../Models/user')
const Employee = require('../Models/employee')
const Company = require('../Models/company')
const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')

const post = async(req,res)=>{
    try{
        
    }catch(error){
        res.status(400).json({message:error.message})
    }
}