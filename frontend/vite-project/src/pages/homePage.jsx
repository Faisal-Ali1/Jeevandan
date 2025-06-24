import { reviews } from "../assets/utils/reviews";
import ReviewsMaker from "../components/reviewsMaker";
import {NavLink } from 'react-router'

function HomePage() {
    return (
        <div >
            <div className="pt-20">
                <img src="https://images.pexels.com/photos/5206975/pexels-photo-5206975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-100 w-full object-cover " />

                <h1 className="text-3xl text-center font-extrabold mt-20 mb-5">Be A Hero. Donate <span className="text-red-500">Blood</span> Save Life</h1>
                <div className="flex justify-center gap-x-5 mb-10">
                    <NavLink to="/registerDoner" className="btn btn-error text-white">Become a doner</NavLink>
                    <NavLink to="/findadoner" className="btn btn-primary text-white">Find doner</NavLink>
                </div>

                {/* Showing blood donation data  */}
                <div className="flex justify-center gap-20 my-40 items-center">

                    <div className=" flex flex-col items-center ">
                        <div className="w-30 h-30 p-4 border-10 rounded-[50%] border-l-white border-red-500 flex justify-center items-center bg-pink-50 text-black">2 Million</div>

                        <div className="flex gap-3 items-center mt-10">

                            <div className="p-2 bg-white w-3 h-3"></div> <span className="mr-5">2 million</span>
                            <div className="p-2 bg-red-500 w-3 h-3" ></div> <span>13 million</span>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <h2 className="text-2xl mb-4">India has a shortage of <span className="text-red-500">2 Million Blood Units</span></h2>
                        <p>There is a requirement of 15 million units of blood annually. However, we are only able to collect 13 million units. We just need <span className="text-red-500">2% of India’s youth to donate regularly</span> to address the complete demand.</p>
                    </div>
                </div>

                {/* Motivating to donate blood */}
                <div className="flex flex-col items-center mb-40">
                    <h3 className="text-3xl mb-10">We, The Youth, Can Make India <span className="text-red-500">Blood Sufficient</span></h3>
                    <p className=" w-[50%] text-center text-gray-400">JeevanDan is one of the India’s youth-led organization that works to help the blood banks be blood sufficient. We provide a 360° solution to the problem: from motivating people to donate blood, helping anyone in dire need via a helpline.</p>
                </div>

                {/* Potster  */}
                <div className="h-70 object-cover bg-[url(https://www.bloodconnect.org/img/homepage/impact.jpg)] flex justify-center items-center relative gap-[30%]">
                    <h3 className="text-3xl absolute left-[43%] top-5">Our Impact</h3>

                    <div className=" text-center mt-15">
                        <h5 className="text-3xl">128500 +</h5>
                        <p>Blood units collected</p>
                    </div>
                    <div className=" text-center mt-15">
                        <h5 className="text-3xl">385500 +</h5>
                        <p>Lives Saved</p>
                    </div>

                </div>

                {/* FeedBack Section  */}
                <div>
                    <h3 className="text-center text-3xl mt-30">What are Heroes Say</h3>
                    <div className="p-10 flex gap-5 flex-wrap justify-center">
                        {
                            reviews.map( item => <ReviewsMaker data={item}/>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;