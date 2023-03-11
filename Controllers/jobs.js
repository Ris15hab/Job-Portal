const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { ObjectId } = require('mongodb')
const User = require('../Models/user')
const Employee = require('../Models/employee')
const Company = require('../Models/company')
const Job = require('../Models/jobs')
const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')

const jobPost = async(req,res)=>{
    try{
        const {companyName,category,jobDescription,jobType,location,salary,deadline} = req.body
            const job = new Job(req.body)
            await job.save()
             res.status(200).json({message:'Success'})
    }catch(error){
        return res.status(400).json({message:error.message})
    }

}
const jobCategory = async(req,res)=>{
    try{
        const {category}= req.query
        console.log(category)
        const jobs = await Job.find({category:req.query.category})
        res.status(200).json(jobs)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
const allJobs = async(req,res)=>{
    try{
        const job = await Job.find({})
        res.status(200).json({job})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
module.exports = {jobPost,jobCategory,allJobs}