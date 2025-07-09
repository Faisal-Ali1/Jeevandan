const validator = require('validator');
const doner = require('../Models/donerSchema');

const donerValidate = async (req, res, next) => {
    try {
        if (!req.body)
            return res.status(404).send('enter doner detail');
        // console.log(req.body);

        const importantFields = ['first_name', 'Dob', 'gender', 'blood_group', 'city', 'phone_num', 'isAvailable'];

        const isPresent = importantFields.every(item => Object.keys(req.body).includes(item));

        if (!isPresent)
            return res.status(400).send('fields missing');

        const { first_name, Dob, gender, blood_group, phone_num, isAvailable } = req.body;


        req.body.gender = gender.toLowerCase();
        req.body.blood_group = blood_group.toUpperCase();
        

        if (!(first_name.length > 3 && first_name.length < 20))
            return res.status(400).send('first_name should have contain character between 3-20');


        // age
        const birthData = new Date(Dob);
        const today = new Date();
        let age = today.getFullYear() - birthData.getFullYear();
        let monthDiff = birthData.getMonth() - today.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthData.getDate())) {
            age--;
        }

        if (!(age >= 18 && age <= 60))
            return res.status(400).send('age should have 18yrs to 60yrs');

        

        // gender
        if (!(gender === 'male' || gender === 'female'))
            return res.status(400).send('gender should be "male" or "female"');

        
        // blood group
        if (!(blood_group === 'O-' || blood_group === 'O+' || blood_group === 'A-' || blood_group === 'A+' || blood_group === 'B' || blood_group === 'B-' || blood_group === 'B+' || blood_group === 'AB-' || blood_group === 'AB+'))
            return res.status(400).send('invalid blood group');

        

        // phone number
        if (!phone_num.length === 10)
            return res.status(400).send('invalid number');

        const person = await doner.findOne({ phone_num });

        

        if (person)
            return res.status(400).send(`${phone_num} number is already registered `);

        // isAvailable
        if (!(isAvailable === 'yes' || isAvailable === 'no'))
            return res.status(400).send('invalid input');


        // email
        if (req.body.email)
            if (!validator.isEmail(req.body.email))
                return res.status(400).send('invalid email_id');

        next();
    }
    catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
}

module.exports = donerValidate;