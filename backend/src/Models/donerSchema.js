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
    age:{
        type:Number,
        required:true,
        min:[18 , 'you are under age'],
        max:[60 , 'you are over age']
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
    address:{
        colony:{
            type:String,
            required: true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        }
    },
    phone_num:{
        type:String,
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