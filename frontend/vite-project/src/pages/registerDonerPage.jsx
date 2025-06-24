import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from '@hookform/resolvers/zod';

const donerSchema = z.object({
  firstname: z.string().min('first name should contain 3-20 character '),
  age:z.number(),
  gender:z.string(),
  bloodGroup:z.string('blood group is required'),
  phone_num:z.string().min(10 , 'invilid phone num'),
  email:z.string().email('invilid email'),
  city:z.string('city is required')
});


function RegisterDonerPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(donerSchema) });

    const submitedData = (data) => {
        console.log(data);

    }


    return (
        <div className="flex items-center justify-center flex-col gap-10 p-5">
            <h2 className="title text-3xl font-sans">Doner Registration Form</h2>
            <form onSubmit={handleSubmit(data => submitedData(data))} className="border border-gray-600 px-20 py-10 rounded-2xl shadow-xl flex flex-col gap-5">

                <div className="flex flex-col">
                    <label className="label">First name</label>
                    <input {...register('firstName', { required: true })} placeholder="John" className="input w-[15rem]" />
                    {errors.firstname ? <span className='text-[12px] text-red-600'>{errors.firstname.message}</span> : null}
                </div>

                <div className="flex flex-col">
                    <label className="label">last name</label>
                    <input {...register('lastname')} placeholder="kal" className="input w-[15rem]" />
                </div>

                <div className="flex flex-col">
                    <label className="label">Age</label>
                    <input {...register('age')} className="input w-[15rem]" />
                    {errors.age ? <span className='text-[12px] text-red-600'>{errors.age.message}</span> : null}
                </div>

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
                        <label>
                            <input
                                type="radio"
                                value="other"
                                {...register("gender", { required: "Gender is required" })} className="mx-2 ml-3"
                            />
                            Other
                        </label>
                    </div>
                    {errors.gender ? <span className='text-[12px] text-red-600'>{errors.gender.message}</span> : null}
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

                <div className="flex flex-col gap-2">
                    <label className="label">Address</label>
                    <label className="label">colony</label>
                    <input {...register('address')} className="input w-[15rem]" />
                    <label className="label">city</label>
                    <input {...register('address')} className="input w-[15rem]" />
                    {errors.city ? <span className='text-[12px] text-red-600'>{errors.city.message}</span> : null}
                    <label className="label">state</label>
                    <input {...register('address')} className="input w-[15rem]" />
                </div>

                <div className="flex flex-col">
                    <label className="label">Phone_number</label>
                    <input {...register('phone_num' , {required:true})} placeholder="443322114455" className="input w-[15rem]" />
                    {errors.phone_num ? <span className='text-[12px] text-red-600'>{errors.phone_num.message}</span> : null}

                </div>

                <div className="flex flex-col">
                    <label className="label">email</label>
                    <input {...register('email' , {required:'email is required'})} placeholder="john@gmail.com" className="input w-[15rem]" />
                    {errors.email ? <span className='text-[12px] text-red-600'>{errors.email.message}</span> : null}
                </div>

                <div className="flex flex-col">
                    <label className="label">Available</label>
                    <input {...register('isAvailable')} className="input w-[15rem]" />
                </div>

                <button type="submit" className="btn btn-error">Submit</button>

            </form>
        </div>


    )
}

export default RegisterDonerPage;