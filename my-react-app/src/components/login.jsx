import axios from "axios";
import { toast } from "react-toastify";
import {  useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


// import Basestyle from '../style/Basestyle.css'
import Dummyuser from '../assets/dummy/dummy-user.png'
import { AuthContext } from "../context/AuthContext";

    function Login() {
        const navigate= useNavigate();

        const{
            register,
            handleSubmit,
            watch,
            formState:{ errors, isSubmitting },
        }=useForm();

        const  {login }= useContext(AuthContext);

        const onSubmit=async (data)=>{

            try{
                const res=await axios.post("http://127.0.0.1:8000/api/authenticate",
                    data,
                    {
                    headers:{
                    'content-type': 'application/json'
                    }
                }); 
            
                if (res.data.status === false) {
                    toast.error(res.data.message);
                } else {
                    const userInfo= {
                        id: res.data.id,
                        token: res.data.token,
                        name: res.data.name,
                        email: res.data.email
                    }
                    
                    login(userInfo);
                    navigate('/')

                }

                }catch(error){
                alert("Error:", error);
                
                }
            
        }
           


        return (<div className="w-full md:w-1/2 ">
             <div className="flex justify-center items-center flex-col gap-4 w-full bg-white rounded-xl shadow-2xl my-4
             md:scale-100 md:gap-6 md:px-6
             ">
                <h1 className=" text-2xl pt-8 font-bold text-gray-700">LOG IN</h1>
                <img src={Dummyuser} alt="Longin Image" className="rounded-full size-40 border-2 border-red-400" />
                <form className="flex flex-col gap-10 text-xs
                    md:text-base
                    "  onSubmit={handleSubmit(onSubmit)}>
                    <label className="flex items-center text-gray-700 font-bold" htmlFor="userType">User Type
                        <select 
                        className="mx-2 grow border-2 border-red-200 p-2 rounded hover:border-red-400" 
                        name="userType" 
                        required>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                        </select>
                    </label>

                    <label
                    className="flex items-center text-gray-700 font-bold"
                    >User Email :- 
                        <div>
                        <input 
                            className="mx-2 grow border-2 border-red-200 p-2 rounded hover:border-red-400" 
                            type="text" 
                            {
                                ...register('email',{
                                    required:'email requird'
                                })
                            }
                            placeholder="User Email" 
                            />
                            {
                                errors.email && (<p className="pl-4 text-red-400 text-xs">{errors.email.message}</p>)
                            }
                        </div>
                    </label>
                    <label className="flex items-center text-gray-700 font-bold">
                        Password :- 

                        <div>
                            <input 
                            className="  mx-2 grow border-2 border-red-200 p-2 rounded hover:border-red-400" 
                            type="password" 
                            {
                                ...register('password',
                                    {
                                        required:'password is  requird',
                                        minLength: {
                                            value: 6,
                                            message:"minimun 6 char allowded"
                                        }
                                    }
                                )
                            }
                            placeholder="*******" 
                            />
                            {
                                errors.password && (<p className="pl-4 text-red-400 text-xs">{errors.password.message}</p>)
                            }
                        </div>
                    </label>
                    <div className="flex justify-around">
                        <button className=" px-6 py-2 border-2 border-red-400 text-gray-600 rounded hover:bg-red-600 hover:text-white" type="reset">Reset</button>
                        <button className=" px-6 py-2 bg-red-600 text-white rounded  hover:bg-red-700" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                    </div>
                    <div className="flex flex-col">

                    <a href="#" className=" underline underline-offset-1 text-sky-500 text-center pb-4">Create a new account</a>
                    <a href="#" className=" underline underline-offset-1 text-sky-500 text-center pb-4">forgate password</a>
                    </div>

                </form>
            </div>
        </div>)
    }


function Auth() {


    return(
     
        <div className="min-h-dvh flex justify-center items-center bg-gray-300">
            <Login/>
        </div>
    )
}
export default Auth;