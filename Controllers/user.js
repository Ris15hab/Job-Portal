
//importing modules
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { ObjectId } = require('mongodb')
const User = require('../Models/user')
const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')

//create event

const sendMail = async(username,useremail)=>{
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
            text: `Congratulations ${username}!! You have successfully registered to the job portal.`, // plain text body
        });
    }catch(err){
        console.log(err);
    }
}

const register = async(req,res)=>{
    const { username, useremail, password, role} = req.body
        const user = new User(req.body)
        try{
            await user.save()
            res.status(200).json({message:'Success'})
            sendMail(username,useremail);
            console.log("Email sent");
        }catch(error){
            return res.status(400).json({message:error.message})
        }
    
}

const login = async(req,res)=>{
    
        const { username  , password } = req.body
        const validname= await User.findOne({username: req.body.username})
        if(validname)
        {
            const validPassword = await bcrypt.compare(req.body.password , validname.password)
            if(validPassword)
            {
                const token = jwt.sign({username:req.body.username},process.env.TOKEN,{expiresIn:'1d'})
                return res.status(200).header('auth',token).send({
                    User:validname,
                    tokens:token
                })
            }
            else
            {
                res.status(400).json({message:'incorrect'})
            }
        }
        else
        {
            res.status(400).json({message:'incorrect'})
        }
}
//exporting modules
module.exports = {
    register,
    login
}