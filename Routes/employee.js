//importing modules
const express = require('express')
const {register} = require('../server/Controllers/employee')
//initializing router
const router = new express.Router()
router.post('/register',register)

//exporting modules
module.exports = router 