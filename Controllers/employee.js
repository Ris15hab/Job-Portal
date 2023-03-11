//importing modules
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { ObjectId } = require('mongodb')
const User = require('../Models/user')
const Employee = require('../Models/employee')

//create event

const register = async(req,res)=>{
        try{
            const { username, firstName, lastName, status , experience , location} = req.body
            const validUser = await User.findOne({username: req.body.username})
            if(validUser){
                const employee = new Employee(req.body)
                await employee.save()
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