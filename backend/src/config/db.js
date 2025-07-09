const mongoose = require('mongoose')


async function main(){
   await  mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING);
}


module.exports = main;