const express = require('express');
const main = require('./config/db');
const doner = require('./Models/donerSchema');
const donerRouter = require('./Routes/donerRoute');
const app = express();

app.use(express.json());
app.use( '/' , donerRouter);



main()
.then(()=> {
    console.log('connected to db');

    app.listen(3000 , ()=>{
        console.log('listening at port no 3000');
        
    })
    
})
.catch((err)=>console.log('Error: '+ err.message))



