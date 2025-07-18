const express = require('express');
const main = require('./config/db');
const doner = require('./Models/donerSchema');
const donerRouter = require('./Routes/donerRoute');
const cors = require('cors');
 require('dotenv').config({quiet: true});
const app = express();
const otpRouter = require('./Routes/otpRoute');


app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));


app.use('/', donerRouter);
app.use('/otp' , otpRouter);



main()
    .then(() => {
        console.log('connected to db');

        app.listen(3000, () => {
            console.log('listening at port no 3000');

        })

    })
    .catch((err) => console.log('Error: ' + err.message))



