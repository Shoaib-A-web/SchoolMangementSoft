// impot image
import { useState } from 'react';
import Dummyuser from '../../src/assets/dummy/dummy-user.png'

// axios 
import { deleteUser } from '@/api';

function Form({register, handleSubmit, onSubmit, errors, isSubmitting, user, setFile, profielBorder}) {

    const [preview, setPreview] = useState(user?.userData.image? `http://127.0.0.1:8000/storage/${user?.userData.image}` : Dummyuser);
console.log(user.id)
    const handleImage = (e) => {
        const selectedFile= e.target.files[0];
        setFile(selectedFile);

        if (selectedFile){
            setPreview(URL.createObjectURL(selectedFile));
        }
    };
    const handleDelete= async () => {
        try{
            const res= await deleteUser(user.id);
            console.log(res.data)
        }catch(errors){
            alert(errors);
        }
        
    }

    return(<>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                className={`flex flex-col md:justify-around md:flex-row max-w-md mx-auto md:max-w-full bg-white shadow-lg rounded-xl p-6 border-b-4 ${profielBorder}`}>
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-4">
                   <label htmlFor="updateProfile">
                        <img
                            src={preview}
                            alt="profile"
                            className={`w-28 h-28 rounded-full border-4  object-cover ${profielBorder} hover:shadow-xl hover:shadow-gray-600`}
                        />
                    </label>
                    <input type="file"
                     id="updateProfile"
                     hidden
                     onChange={handleImage}
                      />

                    <h2 className="text-xl font-bold mt-3">
                        <input
                        className="border m-2  p-2 rounded hover:shadow-lg"
                        {...register("first_name")}
                        />
                        
                        <input
                        className="border m-2  p-2 rounded hover:shadow-lg"
                        {...register("last_name")}
                        />
                    </h2>
                    <select
                        className="border m-2  p-2 rounded hover:shadow-lg w-full"
                        {...register("userType",{required: "Select user Type"})}
                    >
                        <option value="">User Type</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                    </select>
                    {errors.userType && (
                        <p className="text-red-500 text-sm">{errors.userType.message}</p>
                    )}
                </div>
    
                {/* User Details */}
                <div className="space-y-2 text-sm">
    
                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Email:</span>
                        <span><input type="mail"
                        placeholder={user?.userData?.email}
                        className="border m-2  p-2 rounded hover:shadow-lg"
                        {...register('email')}
                        /></span>
                    </div>
    
                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Gender:</span>
                        <span><select
                                className="border m-2  p-2 rounded hover:shadow-lg w-full"
                                {...register("gender")}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-sm">{errors.gender.message}</p>
                            )}</span>
                    </div>
    
                    <div className="flex justify-between">
                        <span className="font-semibold">Contact:</span>
                        <span><input
                        className="border m-2  p-2 rounded hover:shadow-lg"
                        placeholder="Contact Number"
                        {...register("contact", {
                            required: "Contact number required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter valid 10 digit number"
                            }
                        })}
                        />
                        {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}</span>
                    </div>
    
                    <div className="flex justify-between">
                        <span className="font-semibold">Aadhar:</span>
                        <span><input
                        type="number"
                        className="border m-2  p-2 rounded hover:shadow-lg"
                        placeholder="Aadhar Number"
                        {...register("aadhar", {
                            required: "Aadhar required",
                            pattern: {
                                value: /^[0-9]{12}$/,
                                message: "Aadhar must be 12 digits"
                            }
                        })}
                        />
                        {errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar.message}</p>}</span>
                    </div>
    
                    <div className="flex justify-between">
                        <span className="font-semibold">DOB:</span>
                        
                        <span><input
                        type="date"
                        className="border m-2  p-2 rounded hover:shadow-lg"
                        placeholder="Age"
                        {...register("age", {
                            required: "Age required",
                            min: { value: 5, message: "Minimum age 5" }
                        })}
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}</span>
                    </div>
    
                    <div className="flex justify-between">
                        <span className="font-semibold">Created:</span>
                        <span>{new Date(user?.userData?.created_at).toLocaleDateString()}</span>
                    </div>
                    <button 
                        type="submit"
                        className="px-6 py-2  border-2 border-red-500 bg-red-500  rounded text-white hover:bg-red-600" 
                        disabled={isSubmitting}
                    > {`${isSubmitting ? "Updating...":"Update Profile"}`}</button>
                </div>
            </form>
             <button
                type='button'
                className="px-6 py-2 mt-4 w-full border-2 border-red-500 bg-red-500  rounded text-white hover:bg-red-600" 
                onClick={handleDelete}
            >Delete Account</button>
            </>);
}

export default Form;