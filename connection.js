//importing modules
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectionParameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//connecting to the database
const connection = mongoose.connect(process.env.MONGODB_URL , connectionParameters).then(()=>{
    console.log("Connected to the database")
}).catch((error)=>{
    console.log(error)
})

//exporting module
module.exports = connection