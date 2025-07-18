import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from '@hookform/resolvers/zod';
import axiosClient from '../utils/axiosClient';
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { motion } from "motion/react";


// Calculating age of doner
const calculateAage = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthdiff = today.getMonth() - birthDate.getMonth();

    if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < birthDate.getDate()))
        age--;

    return age;

}

// schema validation
const donerSchema = z.object({
    first_name: z.string().trim().min(3, "firstname is required"),
    last_name: z.string().min(0),
    Dob: z.string().refine((dob) => {
        const age = calculateAage(dob);
        return age >= 18;
    }, {
        message: 'Age should be at least 18 years'
    }),
    gender: z.enum(['male', 'female']),
    blood_group: z.string().min(1, "please select a blood group"),
    phone_num: z.string().refine((num) => {
        if (!isNaN(num))
            return num;            
    }, {
        message: "enter valid phone number"
    }),
    email: z.string().email('invilid email'),
    city: z.string().min(1, "place is required"),
    isAvailable: z.enum(['yes', 'no'])
});

// Area names
const jaipurAreas = [
    "Adarsh Nagar",
    "Ajmer Road",
    "Ambabari",
    "Bais Godam",
    "Bani Park",
    "Bhankrota",
    "C-Scheme",
    "Chandpole",
    "Chomu House",
    "Civil Lines",
    "Durgapura",
    "Ganesh Nagar",
    "Ghat Gate",
    "Gopalpura",
    "Gopalpura Bypass",
    "Jagatpura",
    "Janta Colony",
    "Jawahar Nagar",
    "Jhotwara",
    "Kalwar Road",
    "Karni Vihar",
    "Khatipura",
    "Kisan Marg",
    "Kukas",
    "Lal Kothi",
    "Malviya Nagar",
    "Mansarover",
    "Mansarovar Extension",
    "MI Road",
    "Murlipura",
    "Nirman Nagar",
    "Pratap Nagar",
    "Raja Park",
    "Rambagh",
    "Sanganer",
    "Shastri Nagar",
    "Shivdaspura",
    "Shyam Nagar",
    "Shipra Path",
    "Sikar Road",
    "Sindhi Camp",
    "Sitapura",
    "Sirsi Road",
    "Sodala",
    "Tonk Road",
    "Vaishali Nagar",
    "Vidhyadhar Nagar"
];


function RegisterDonerPage() {

    const [optSent, setOtpSent] = useState(false);
    const [number, setNumber] = useState(null);
    const [disableBtn, setDisableBtn] = useState(false);
    const [otp, setOtp] = useState("");
    const [isOtpTrue, setIsOtpTrue] = useState(false);
    const [actualOtp, setActualOtp] = useState(null);
    const [backendError, setBackendError] = useState(null);


    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(donerSchema) });

    useEffect(() => {
        if (backendError?.response?.data) {
            alert(backendError?.response?.data)
            setBackendError(null);
        }
    }, [backendError])


    // Submiting doner details
    const submitedData = async (donerData) => {
        try {

            if (!isOtpTrue)
                return alert("number verification is important");
            console.log(donerData);
            
            await axiosClient.post('/register', donerData);
            
            
            alert('🎉 you have successfully got registered as a doner');
            navigate('/findadoner');
        }
        catch (err) {
            setBackendError(err);
            console.log('Error: ', err);

        }

    }

    // handling otp
    const handleOtp = () => {
        if (!number)
            return alert("enter mobile number first");

        if (!(number.toString().length === 10))
            return alert("phone num should be of 10 digit")

        setOtpSent(true);
        setDisableBtn(true);

        let otpnumber = '';
        for (let i = 1; i <= 6; i++) {
            otpnumber += Math.floor(Math.random() * 6)
        };

        setActualOtp(otpnumber.trim())
    }

    // sending otp through alert
    useEffect(() => {
        if (actualOtp) {
            setTimeout(() => {
                alert(`your opt is : ${actualOtp}`);
            }, 1000)
        }
    }, [actualOtp])


    // Checking otp
    const checkOtp = () => {

        if (actualOtp == otp) {
            setIsOtpTrue(true)
        } else
            alert('Enter valid otp');


    }


    return (
        <motion.div 
        className="min-sm:p-15 border"
        initial={{opacity:0}}
        whileInView={{opacity:1 , transition:{duration:1}}}>
            <div className="mt-20">
                <motion.h2 
                className="title text-3xl font-sans text-center font-bold max-sm:mt-25 "
                initial={{opacity:0 , y:-20}}
                whileInView={{opacity:1 , y:0 , transition:{ duration:1} }}>Doner Registration Form</motion.h2>

                <form onSubmit={handleSubmit(submitedData)} className=" px-[10vw] py-10 rounded-2xl shadow-xl flex flex-col gap-5">

                    {/* first name */}
                    <div className="flex flex-col">
                        <label className="label">First name</label>
                        <input
                            type="text"
                            {...register('first_name', { required: true })}
                            placeholder="John"
                            className="input w-[15rem]" />
                        {errors.first_name ? <span className='text-[12px] text-red-600'>{errors.first_name.message}</span> : null}
                    </div>

                    {/* last name */}
                    <div className="flex flex-col">
                        <label className="label">last name</label>
                        <input
                            type="text"
                            {...register('last_name')}
                            placeholder="kal"
                            className="input w-[15rem]" />
                    </div>

                    {/* Dob */}
                    <div className="flex flex-col">
                        <label className="label">Dob</label>
                        <input
                            type="date"
                            {...register('Dob')}
                            className="input w-[15rem]" />
                        {errors?.Dob ? <span className='text-[12px] text-red-600'>{errors?.Dob?.message}</span> : null}
                    </div>

                    {/* gender */}
                    <div className="flex flex-col">
                        <label className="label">Gender:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="male"
                                    {...register("gender", { required: "Gender is required" })} className="mr-2"
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="female"
                                    {...register("gender", { required: "Gender is required" })} className="mr-2 ml-3"
                                />
                                Female
                            </label>

                        </div>
                        {errors.gender ? <span className='text-[12px] text-red-600'>{errors.gender.message}</span> : null}
                    </div>

                    {/* Blood group */}
                    <div className="flex flex-col">
                        <label className="label mb-2">Blood Group:</label>
                        <select {...register("blood_group", { required: true })} className="select" >
                            <option value="" className="label">Select...</option>
                            <option value="A+" className="text-black">A+</option>
                            <option value="A-" className="text-black">A-</option>
                            <option value="B+" className="text-black">B+</option>
                            <option value="B-" className="text-black">B-</option>
                            <option value="AB+" className="text-black">AB+</option>
                            <option value="AB-" className="text-black">AB-</option>
                            <option value="O+" className="text-black">O+</option>
                            <option value="O-" className="text-black">O-</option>
                        </select>
                        {errors.blood_group && <span className="text-[12px] text-red-600">{errors.blood_group.message}</span>}
                    </div>

                    {/* city */}
                    <div className="flex flex-col">
                        <label className="label">Area in jaipur</label>
                        <select {...register('city', { required: true })} className="select">
                            <option value="">select area</option>
                            {jaipurAreas.map(item => (
                                <option key={item} value={`${item}`}>{item}</option>
                            ))}
                        </select>
                        {errors.city && (<span className="text-red-600 text-xs">{errors.city?.message}</span>)}
                    </div>

                    {/* phone_number */}
                    <div className="flex flex-col">
                        <label className="label">Phone_number</label>
                        <div className="flex gap-3 items-center">
                            <input
                                type="text"
                                {...register('phone_num', { required: true })}
                                placeholder="4433221144"
                                className="input w-[15rem]" onChange={(e) => setNumber(e.target.value)}
                                disabled={disableBtn} />

                            {/* Opt send/resend button */}
                            {isOtpTrue ? (<span className="text-green-400 text-xs">Phone number has varified successfully</span>) : (<button className="btn" type="button" onClick={handleOtp}>{optSent ? 'Resend otp' : 'send otp'}</button>)}

                        </div>
                        {errors.phone_num ? <span className='text-[12px] text-red-600'>{errors.phone_num.message}</span> : null}
                        {
                            isOtpTrue ? " " : (
                                optSent ? (<div className="mt-2">
                                    <p className="text-red-600 text-xs">Opt has been sent to {number}</p>

                                    {/* opt box */}
                                    <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter opt"
                                        className="input w-30 " value={otp} onChange={(e) => setOtp(e.target.value)} />

                                    {/* opt submit button */}
                                    <button className="btn" type="button" onClick={checkOtp}>Submit</button>
                                    </div>
                                </div>) : ""
                            )
                        }


                    </div>

                    {/* email */}
                    <div className="flex flex-col">
                        <label className="label">email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'email is required' })}
                            placeholder="john@gmail.com" className="input w-[15rem]" />
                        {errors.email ? <span className='text-[12px] text-red-600'>{errors.email.message}</span> : null}
                    </div>

                    {/* isAvailable */}
                    <div className="flex flex-col">
                        <label className="label">isAvailable</label>

                        <div className="flex gap-1">

                            <input
                                id="yes"
                                type="radio"
                                value="yes"
                                {...register('isAvailable', { required: true })}
                            />
                            <label htmlFor="yes">yes</label>
                        </div>

                        <div className="flex gap-1">
                            <input
                                id="no"
                                type="radio"
                                value="no"
                                {...register('isAvailable', { required: true })}
                            />
                            <label htmlFor="no">No</label>
                        </div>
                        {errors?.isAvailable && (<span className="text-red-600 text-xs">{errors?.isAvailable?.message}</span>)}
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-error">Submit</button>

                </form>
            </div>
        </motion.div>


    )
}

export default RegisterDonerPage;