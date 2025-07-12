function ReviewsMaker({data}){
    return(
        <div className=" rounded-2xl  p-2 bg-pink-50 text-black w-[40%] max-sm:w-[70%] flex-none">
                            <div className="flex max-sm:flex-col gap-5 items-center mb-5">
                                <img src={data?.img} className="h-50 w-40 object-cover rounded-2xl" />
                                <div className="min-sm:self-baseline-last ">
                                    <p>{data?.name}</p>
                                    <p className="">{data?.city}, {data?.state}</p>
                                </div>
                            </div>
                            <p className="font-thin italic text-xs max-sm:text-center">{data?.reviews}</p>
                        </div>
    )
}

export default ReviewsMaker;