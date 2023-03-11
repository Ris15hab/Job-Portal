//importing modules
const express = require('express')
const {jobPost,
jobCategory,
allJobs} = require('../Controllers/jobs')
//initializing router
const router = new express.Router()
router.post('/jobPost',jobPost)
router.get('/jobCategory',jobCategory)
router.get('/allJobs',allJobs)

//exporting modules
module.exports = router 