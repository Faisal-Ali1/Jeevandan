const mongoose = require('mongoose');


async function main(){
   await  mongoose.connect('mongodb+srv://fa4492977:ali%40123@codingadda.ln0ajxn.mongodb.net/blood_donation')
}


module.exports = main;