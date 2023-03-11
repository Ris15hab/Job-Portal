//importing modules
const express = require('express')
const morgan = require('morgan')
const db = require('./connection')
const dotenv = require('dotenv').config()
// initialising express app
const app = express()

// formatting incoming data
app.use(express.json())
// Logging 
app.use(morgan('dev'))

//importing routes
const userRoute = require('./Routes/user')
const companyRoute = require('./Routes/company')
const employeeRoute = require('./Routes/employee')
//assigning routes
app.use('/user',userRoute)
app.use('/company',companyRoute)
app.use('/employee',employeeRoute)
//Setting Port
let port = process.env.PORT || 8002

//setting server
app.use((req,res,next)=>{
    res.status(404).send('Error')
})
app.listen(port,()=>{
    console.log(`listening to ${port}`)
})