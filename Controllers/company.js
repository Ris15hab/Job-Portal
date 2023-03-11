//importing modules
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { ObjectId } = require('mongodb')
const Company = require('../Models/company')
const User = require('../Models/user')

//create event

const register = async(req,res)=>{
        try{
            const { username, firstName, lastName, designation , companyName , location} = req.body
            const validUser = await User.findOne({username: req.body.username})
            if(validUser){
                const company = new Company(req.body)
                await company.save()
                 res.status(200).json({message:'Success'})
            }
            else
            {
                res.status(400).json({message:'please register first'})
            }
        }catch(error){
            return res.status(400).json({message:error.message})
        }
    
}
//exporting modules
module.exports = {
    register
}