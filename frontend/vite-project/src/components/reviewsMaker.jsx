import { motion } from "motion/react";

function ReviewsMaker({data}){
    return(
        <motion.div 
        className=" rounded-2xl  p-2 bg-pink-50 text-black w-[40%] max-sm:w-[70%] flex-none hover:bg-black hover:text-white"
        initial={{ opacity:0 , x:-30}}
        whileInView={{opacity:1 , x:30 , transition:{duration:1}}}>
            
                            <div className="flex max-sm:flex-col gap-5 items-center mb-5">
                                <img src={data?.img} className="h-50 w-40 object-cover rounded-2xl" />
                                <div className="min-sm:self-baseline-last ">
                                    <p>{data?.name}</p>
                                    <p className="">{data?.city}, {data?.state}</p>
                                </div>
                            </div>
                            <p className="font-thin italic text-xs max-sm:text-center">{data?.reviews}</p>
                        
                        </motion.div>
    )
}

export default ReviewsMaker;