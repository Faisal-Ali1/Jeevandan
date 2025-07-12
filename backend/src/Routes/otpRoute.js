const express = require('express')
const donerValidate = require('../Validation/donerValidate')
const doner = require('../Models/donerSchema')

const otpRouter = express.Router();


otpRouter.post( '/send-otp' , donerValidate , (req , res) =>{
    const {phone_num } = req.body

    let otp = Math.floor(Math.random()*6);
    res.status(200).send(otp);
})


module.exports = otpRouter;