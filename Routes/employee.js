//importing modules
const express = require('express')
const {register,
allJobs,
jobsLocation} = require('../Controllers/employee')
const authentication = require('../Middleware/auth')
//initializing router
const router = new express.Router()
router.post('/register',register)
router.get('/allJobs',authentication.auth,allJobs)
router.get('/jobsLocation',authentication.auth,jobsLocation)

//exporting modules
module.exports = router 