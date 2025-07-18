import { useForm } from "react-hook-form";

import DonerMaker from "../components/donerMaker";
import axiosClient from "../utils/axiosClient";
import { useEffect } from "react";
import { useState } from "react";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from "motion/react";


const formSchema = z.object({
    city: z.string().min(3, 'City is required*'),
    blood_group: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-', 'O+'], "blood group is required")
});


function FindADoner() {

    const [allDoner, setAllDoner] = useState(null);
    const [btnClicked, setBtnClicked] = useState(false);
    const [ placeInJaipur  ,setPlaceInJaipur] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    // console.log(allDoner);


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


    // Fetching all doner details
    useEffect(() => {

        async function fetchData() {
            try {
                const { data } = await axiosClient.get('/alldoner');
                setAllDoner(data);
            }
            catch (err) {
                console.log('Error: ', err.message);

            }
        }

        fetchData();
    }, []);

    // Fetching single doner detail
    const handleDoner = async (datas) => {

        setPlaceInJaipur(datas?.city);
        console.log(placeInJaipur);
        
        try {

            const { data } = await axiosClient.post('/profile', datas);
            console.log(data);

            setAllDoner(data);
            setBtnClicked(true);
        }
        catch (err) {
            console.error('Error: ', err);

        }
    }

    return (
        <>
            <div className="pt-25">
                <motion.form onSubmit={handleSubmit(handleDoner)} className=" justify-center flex-col  shadow-xl flex items-center pb-5"
                initial={{opacity:0}}
                whileInView={{opacity:1 , transition:{duration:1}}}>

                    
                    {/* container */}
                    <div className=" flex gap-2 h-20 mb-2">

                        {/* City */}
                        <div className="flex flex-col min-h-25">
                            <label className="label mb-1">City</label>
                            <select
                                {...register('city')}
                                className="select">
                                <option value="">select city</option>
                                {
                                    jaipurAreas?.map((item, index) => (
                                        <option key={index} value={`${item}`}>{item}</option>
                                    ))
                                }
                            </select>
                            {errors?.city && (<span className="text-red-600 text-xs">{errors?.city?.message}</span>)}
                        </div>

                        {/* Blood Group */}
                        <div className="flex flex-col min-h-25">
                            <label className="label mb-1">Blood Group:</label>
                            <select
                                {...register("blood_group", { required: "Blood Group is required" })}
                                className={`select ${errors.blood_group ? 'border-red-500' : ''}`} >
                                <option value="" disabled>Select Blood Group</option>
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
                            {errors.blood_group && <span className="text-xs text-red-600 ">Blood group is required*</span>}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-error">Submit</button>


                </motion.form>

                <div>
                    <div>
                        {/* displaying area name */}
                        <motion.h3 className="text-center text-3xl mt-30"
                        initial={{opacity:0 , y:-20}}
                        whileInView={{opacity:1 , y:0 , transition:{duration:1}}}>{btnClicked ? `Our Heroes in ${placeInJaipur} are` : "Our Heroes in Jaipur are"}</motion.h3>
                        <div className="p-10 flex gap-5 flex-wrap justify-center">
                            {
                                allDoner?.map((item, index) => <DonerMaker key={index} data={item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FindADoner;