//importing modules
const express = require('express')
const {jobs,applyJobs} = require('../Controllers/applyJobs')
const authentication = require('../Middleware/auth')
//initializing router
const router = new express.Router()
router.get('/jobs',jobs)
router.get('/applyJobs',authentication.auth,applyJobs)

//exporting modules
module.exports = router 