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

const sendMail1 = async(username,useremail)=>{
    try{
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.Email,
                pass: process.env.Password,
            }
        })

        let info = await transporter.sendMail({
            from: process.env.Email, // sender address
            to: useremail, // list of receivers
            subject: "Registration Acknowledgement", // Subject line
            text: ` ${username}!! You have successfully applied for a job `, // plain text body
        });
    }catch(err){
        console.log(err);
    }
}
const sendMail2 = async(username,useremail)=>{
    try{
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.Email,
                pass: process.env.Password,
            }
        })

        let info = await transporter.sendMail({
            from: process.env.Email, // sender address
            to: useremail, // list of receivers
            subject: "Registration Acknowledgement", // Subject line
            text: ` ${username}!! You have successfully applied for a job `, // plain text body
        });
    }catch(err){
        console.log(err);
    }
}

const jobs = async(req,res)=>{
    try{
        const jobs = await Job.find({})
        res.status(200).json(jobs)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
const applyJobs = async(req,res)=>{
    try{
        const companyName = req.body
        const comp = await Company.findOne({companyName:req.body.companyName})
        console.log(comp)
        const validCompany = await Job.findOne({companyName:req.body.compnayName})
        if(validCompany)
        {
            
            sendMail1(userData.name,userData.email)
            sendMail2(userData.name,user.useremail)
            res.status(200).json({message:'Successfully applied'})
        }
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports = {jobs,applyJobs}