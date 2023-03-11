//importing modules
const express = require('express')
const {register,
allEmployees} = require('../Controllers/company')
//initializing router
const router = new express.Router()
router.post('/register',register)
router.get('/allEmployees',allEmployees)

//exporting modules
module.exports = router 