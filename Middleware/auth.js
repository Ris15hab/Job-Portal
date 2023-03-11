const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const user = require('../Models/user')
const authentication = {
     auth : async(req,res,next)=>{
        try{
            const header = req.header('auth')
            if(header)
            {
                const token = header.split(' ')[1]
                const verifiedtoken = jwt.verify(token , process.env.TOKEN)
                req.user=verifiedtoken
                next()
            }
            else
            {
                res.status(404).send('Invalid request ')
            }
        }catch(error){
            res.status(500).json({message:error.message})
        }
    }
}
module.exports = authentication