function DonerMaker({data}){
    return(
        <div className="border rounded-2xl border-white p-2 bg-pink-50 text-black text-center  flex-none">
                            
                                <img src={data?.img} className="h-50 w-40 object-cover rounded-2xl" />
                                <div className=" self-baseline-last">
                                    <p className="text-red-500 text-xl">{data?.bloodGroup}</p>
                                    <p>{data?.name}</p>
                                    <p>{data?.city}</p>
                                    <p>{data?.contact}</p>
                                </div>
                            
                           
                        </div>
    )
}

export default DonerMaker;