
import { toast } from "react-toastify";
import {  useContext } from "react"
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";


// import Basestyle from '../style/Basestyle.css'
import Dummyuser from '../assets/dummy/dummy-user.png'
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "@/api";

    function Login() {
        const navigate= useNavigate();

        const{
            register,
            handleSubmit,
            formState:{ errors, isSubmitting },
        }=useForm();

        const  {login, loginGuest }= useContext(AuthContext);

        const onSubmit=async (data)=>{

            try{
                const res= await loginUser(data);
                if (res.data.status === false) {
                    toast.error(res.data.message);
                    console.log(res.data.message);
                } else {
                    
                    const userInfo= {
                        id: res.data.user.user_id,
                        userData: res.data.user
                    }
                    localStorage.setItem("token", res.data.token);
                    login(userInfo);
                    navigate('/');

                }

                }catch(errors){
                alert( `${errors}, see credentioals `);
                
                }
            
        }
           


        return (<div className="w-full max-w-sm ">
             <div className="flex justify-center items-center flex-col gap-4 w-full bg-white rounded-xl shadow-2xl my-4
             md:scale-100 md:gap-6 md:px-6
             ">
                <h1 className=" text-2xl pt-8 font-bold text-gray-700">LOG IN</h1>
                <img src={Dummyuser} alt="Longin Image" className="rounded-full w-24 h-24 border-2 border-red-400" />
                <form className="flex flex-col gap-4 w-full" 
                    onSubmit={handleSubmit(onSubmit)}>
                
                    <select 
                    {...register('userType')}
                    className="border-2 p-2 rounded w-full border-red-100 hover:border-red-300 hover:shadow-md" 
                    required>
                    <option value="">Select user type</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    </select>
                    

                    <input
                    className="border-2 p-2 rounded w-full border-red-100 hover:border-red-300 hover:shadow-md"
                    placeholder="Email"
                    {...register("email", { required: "Email required" })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <input
                    type="password"
                    className="border-2 p-2 rounded w-full border-red-100 hover:border-red-300 hover:shadow-md"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password required",
                        minLength: { value: 6, message: "Minimum 6 characters" }
                    })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    <div className="flex justify-around">
                        <button className=" px-6 py-2 border-2 border-red-400 text-gray-600 rounded hover:bg-red-600 hover:text-white" type="reset">Reset</button>
                        <button className=" px-6 py-2 bg-red-600 text-white rounded  hover:bg-red-700" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                    </div>
                    <div className="flex flex-col">

                        <Link
                            to="/register"
                            className="text-center border-2 border-red-400 text-gray-600  hover:text-white py-2 rounded hover:bg-red-700"
                        >Create a new account</Link>

                    
                    <a href="#" className=" underline underline-offset-1 text-sky-500 text-center pb-4">forgate password</a>
                    <a href="#" className=" underline underline-offset-1 text-sky-500 text-center pb-4"
                        onClick={(e)=>{
                            e.preventDefault();
                            loginGuest();
                            navigate('/');
                        }}
                    >Login ass guset</a>
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