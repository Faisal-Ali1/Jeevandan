function ReviewsMaker({data}){
    return(
        <div className="border rounded-2xl border-white p-2 bg-pink-50 text-black w-[40%]  flex-none">
                            <div className="flex gap-5 items-center mb-5">
                                <img src={data?.img} className="h-50 w-40 object-cover rounded-2xl" />
                                <div className=" self-baseline-last">
                                    <p>{data?.name}</p>
                                    <p>{data?.city}, {data?.state}</p>
                                </div>
                            </div>
                            <p className="font-thin italic text-xs">{data?.reviews}</p>
                        </div>
    )
}

export default ReviewsMaker;