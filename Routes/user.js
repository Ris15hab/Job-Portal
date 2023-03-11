//importing modules
const express = require('express')
const {register,
        login} = require('../Controllers/user')
//initializing router
const router = new express.Router()
router.post('/register',register)
router.get('/login',login)

//exporting modules
module.exports = router 