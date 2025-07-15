import { motion } from "motion/react";

function DonerMaker({data}){
    return(
        <motion.div 
        className="border rounded-2xl border-white p-2 bg-pink-50 text-black text-center  flex-none hover:bg-black hover:text-white"
        initial={{ opacity:0 , y:-10}}
        whileInView={{opacity:1 , y:0, transition:{ duration:1}}}
        whileHover={{ scale:1.1}}
        >
                            
                                <img src={data?.img} className="h-50 w-40 object-cover rounded-2xl" />
                                <div className=" self-baseline-last">
                                    <p className="text-red-500 text-xl">{data?.blood_group}</p>
                                    <p>{data?.first_name} {data?.last_name}</p>
                                    <p>{data?.city}</p>
                                    <p>{data?.phone_num}</p>
                                </div>
                            
                           
                        </motion.div>
    )
}

export default DonerMaker;