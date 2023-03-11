//importing modules
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { ObjectId } = require('mongodb')
const Company = require('../Models/company')
const User = require('../Models/user')
const Employee = require('../Models/employee')

//create event

const register = async(req,res)=>{
        try{
            const { username, firstName, lastName, status , experience , location} = req.body
            const validUser = await User.findOne({username: req.body.username})
            if(validUser){
                const employee = await new Employee(req.body)
                employee.save()
                const token = jwt.sign({username:req.body.username},process.env.TOKEN,{expiresIn:'1d'})
                return res.status(200).header('auth',token).send({
                    Employee:validUser,
                    tokens:token,
                    code:200
                })
            }
            else
            {
                res.status(400).json({"code":"400"},{message:'please register first'},{code:400})
            }
        }catch(error){
            return res.status(400).json({"code":"400"},{message:error.message})
        }
    
}
const allJobs = async(req,res)=>{
    try{
        const jobs = await Company.find({})
        res.status(200).json({"code":"200"},jobs)
    }catch(error){
        res.status(404).json({"code":"400"},{message:error.message})
    }
}
const jobsLocation = async(req,res)=>{
    try{
        const location = req.body
        const jobs = await Company.find({location : req.body.location})
        if(jobs==[]){
            res.status(400).json({"code":"400"},{message:'No jobs in this location'})
        }
        else{
            
            res.status(200).json({"code":"200"},jobs)
        }
    }catch(error){
        res.status(400).json({message:error.messsage})
    }
}
//exporting modules
module.exports = {
    register,
    allJobs,
    jobsLocation
}