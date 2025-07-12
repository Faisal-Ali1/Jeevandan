import { reviews } from "../assets/utils/reviews";
import ReviewsMaker from "../components/reviewsMaker";
import { NavLink } from 'react-router'
import { motion } from 'motion/react'

function HomePage() {
    return (
        <div >
            <div className="pt-20">
                <motion.img
                    src="https://images.pexels.com/photos/5206975/pexels-photo-5206975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="h-100 w-full object-cover "
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 1 }
                    }} />

                <div>
                    <motion.h1
                        className="text-3xl text-center font-extrabold mt-20 mb-5 "
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    >Be A Hero. Donate <span className="text-red-500">Blood</span> Save Life</motion.h1>

                    {/* button */}
                    <motion.div
                        className="flex justify-center gap-x-5 mb-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}>

                        <NavLink to="/registerDoner" className="btn btn-error text-white">Become a doner</NavLink>
                        <NavLink to="/findadoner" className="btn btn-primary text-white">Find doner</NavLink>
                    </motion.div>
                </div>

                {/* Showing blood donation data  */}
                <div className="flex justify-center gap-20 my-40 items-center max-sm:flex-col">

                    <motion.div
                        className=" flex flex-col items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }}>
                        <div className="w-30 h-30 p-4 border-10 rounded-[50%] border-l-black border-red-500 flex justify-center items-center bg-pink-50 text-black">2 Million</div>

                        <div className="flex gap-3 items-center mt-10">

                            <div className="p-2 bg-black w-3 h-3"></div> <span className="mr-5">2 million</span>
                            <div className="p-2 bg-red-500 w-3 h-3" ></div> <span>13 million</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-[50%]  max-sm:w-[70%] text-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}>
                        <h2 className="text-2xl mb-4 font-bold">India has a shortage of <span className="text-red-500">2 Million Blood Units</span></h2>
                        <p>There is a requirement of 15 million units of blood annually. However, we are only able to collect 13 million units. We just need <span className="text-red-500">2% of India’s youth to donate regularly</span> to address the complete demand.</p>
                    </motion.div>
                </div>

                {/* Motivating to donate blood */}
                <div
                    className="flex flex-col items-center gap-5 mb-40 text-center"
                >
                    <motion.h3
                        className="text-3xl tracking-wide font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>We, The Youth, Can Make India <span className="text-red-500">Blood Sufficient</span></motion.h3>

                    <motion.p
                        className=" w-[50%] text-center text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    >JeevanDan is one of the India’s youth-led organization that works to help the blood banks be blood sufficient. We provide a 360° solution to the problem: from motivating people to donate blood, helping anyone in dire need via a helpline.</motion.p>
                </div>

                {/* Potster  */}
                <motion.div
                    className="h-70 object-cover bg-[url(https://www.bloodconnect.org/img/homepage/impact.jpg)] flex justify-center items-center relative gap-[30%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                >

                    <motion.h3
                        className="text-3xl absolute text-center top-5 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}>Our Impact</motion.h3>

                    <motion.div
                        className=" text-center mt-15 text-white"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}>
                        <h5 className="text-3xl">128500 +</h5>
                        <p>Blood units collected</p>
                    </motion.div>

                    <motion.div
                        className=" text-center mt-15 text-white"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}>

                        <h5 className="text-3xl">385500 +</h5>
                        <p>Lives Saved</p>
                    </motion.div>

                </motion.div>

                {/* FeedBack Section  */}
                <div>
                    <motion.h3 
                        className="text-center text-3xl mt-30 font-bold"
                        initial={{opacity:0 , y:-30}}
                        whileInView={{opacity:1, y:0 , transition:{duration:1.3}}}>What are <span className="text-red-500">Heroes</span> Say</motion.h3>
                    <div className="p-10 flex gap-5 flex-wrap justify-center">
                        {
                            reviews.map(item => <ReviewsMaker data={item} />)
                        }
                    </div>
                </div>

            </div >
        </div >
    )
}

export default HomePage;