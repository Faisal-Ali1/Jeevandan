import { useForm } from "react-hook-form";
import { donerDetails } from "../assets/utils/donerDetails";
import DonerMaker from "../components/donerMaker";




function FindADoner() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitedData = (data) => {
        console.log(data);

    }

    return (
        <>
        <div className="pt-25">
            <form onSubmit={handleSubmit(data => submitedData(data))} className=" border-gray-600 px-20 py-10 rounded-2xl shadow-xl flex flex-col gap-5 items-center">
                <div className="flex flex-col">
                    <label className="label">city</label>
                    <input {...register('city', { required: true })} placeholder="John" className="input w-[15rem]" />
                </div>

                <div className="flex flex-col">
                    <label className="label mb-2">Blood Group:</label>
                    <select {...register("bloodGroup", { required: "Blood Group is required" })} >
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
                    {errors.bloodGroup && <span className="text-[12px] text-red-600">{errors.bloodGroup.message}</span>}
                </div>

                <button type="submit" className="btn btn-error">Submit</button>
            </form>

            <div>
                <div>
                    <h3 className="text-center text-3xl mt-30">Our Heroes are</h3>
                    <div className="p-10 flex gap-5 flex-wrap justify-center">
                        {
                            donerDetails.map(item => <DonerMaker data={item} />)
                        }
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default FindADoner;