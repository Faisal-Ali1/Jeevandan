const express = require('express');
const doner = require('../Models/donerSchema');
const donerValidate = require('../Validation/donerValidate');

const donerRouter = express.Router();

donerRouter.post('/profile' , async(req , res) =>{

    
    const {city , blood_group} = req.body;
    try{
        const person = await doner.find({city , blood_group});

        if(!person)
            return res.status(404).send('user not found');

        res.status(200).send(person);
    }
    catch(err){
        res.status(500).send('Error: '+ err.message);
    }
})

donerRouter.get('/alldoner' , async(req , res)=>{
    try{
        const allDoner = await doner.find({});

        if(allDoner.length === 0)
            return res.status(400).send('No doner found');

        res.status(200).send(allDoner);
    }
    catch(err){
        res.status(400).send('Error: '+ err.message);
    }
})

donerRouter.post('/register' ,donerValidate, async(req , res)=>{
    try{
       const donerDetail = await doner.insertOne(req.body);
       res.status(201).send(donerDetail);


    }
    catch(err){
        res.status(400).send('Error: '+ err.message);
    }
})

donerRouter.put('updatedoner' , (req , res)=>{
    try{

    }
    catch(err){
        res.status(500).send('Error: '+ err.message);
    }
})

module.exports = donerRouter;