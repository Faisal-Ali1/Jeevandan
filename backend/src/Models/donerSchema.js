const mongoose = require('mongoose');

const { Schema }= mongoose;


const donerSchema = new Schema({
    first_name:{
        type: String,
        required: true,
        minLength:3,
        maxLength:20
    },
    last_name:{
        type:String,
        maxLength:20
    },
    Dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male" , "female"],
        required: true
    },
    blood_group:{
        type:String,
        enum:[ 'O+' , 'O-' , 'A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-'],
        required: true
    },
    img:{
        type:String,
        default:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    },
    city:{
        type:String,
        required: true
    },
    phone_num:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:10,
        unique: true

    },
    email:{
        type:String
    },
    isAvailable:{
        type:String,
        enum:['yes' , 'no']
    }

})

const doner = mongoose.model('doner' , donerSchema);

module.exports = doner;