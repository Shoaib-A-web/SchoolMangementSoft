
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "@/api";

function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {

        try {
            const res= await createUser(data);
            if (res.data.status === false) {
                toast.error(res.data.message);
            } else {
                toast.success("Registration successful");
                navigate("/login");
            }

        } catch (error) {
            const apiErrors= error.response?.data?.errors;
            if (apiErrors){
                    Object.keys(apiErrors).forEach(field => {
                    toast.error(apiErrors[field][0]);
                });
            } else {
                toast.error("Registration failed");
            }

        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-96"
            >

                <h2 className="text-2xl font-bold text-center">Register</h2>
                <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                        <input
                            className="border p-2 rounded w-full"
                            placeholder="First Name"
                            {...register("first_name", { required: "First name required" })}
                        />
                        {errors.first_name && (
                            <p className="text-red-500 text-sm">{errors.first_name.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <input
                            className="border p-2 rounded w-full"
                            placeholder="Last Name"
                            {...register("last_name", { required: "Last name required" })}
                        />
                        {errors.last_name && (
                            <p className="text-red-500 text-sm">{errors.last_name.message}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <input
                    className="border p-2 rounded"
                    placeholder="Email"
                    {...register("email", { required: "Email required" })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <div className="grid grid-cols-2 gap-4">
                    {/* Gender */}
                    <div>
                        <select
                            className="border p-2 rounded w-full"
                            {...register("gender", { required: "Select gender" })}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-500 text-sm">{errors.gender.message}</p>
                        )}
                    </div>

                    {/* User Type */}
                    <div>
                        <select
                            className="border p-2 rounded w-full"
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
                </div>


                {/* Contact */}
                <input
                    className="border p-2 rounded"
                    placeholder="Contact Number"
                    {...register("contact", {
                        required: "Contact number required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter valid 10 digit number"
                        }
                    })}
                />
                {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}

                {/* Aadhar Number */}
                <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="Aadhar Number"
                    {...register("aadhar", {
                        required: "Aadhar required",
                        pattern: {
                            value: /^[0-9]{12}$/,
                            message: "Aadhar must be 12 digits"
                        }
                    })}
                />
                {errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar.message}</p>}

                {/* Age */}
                <input
                    type="date"
                    className="border p-2 rounded"
                    placeholder="Age"
                    {...register("age", {
                        required: "Age required",
                        min: { value: 5, message: "Minimum age 5" }
                    })}
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                {/* Password */}
                <input
                    type="password"
                    className="border p-2 rounded"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password required",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters"
                        }
                    })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                {/* Confirm Password */}
                <input
                    type="password"
                    className="border p-2 rounded"
                    placeholder="Re-type Password"
                    {...register("confirm_password", {
                        required: "Please confirm password",
                        validate: value =>
                            value === password || "Passwords do not match"
                    })}
                />
                {errors.confirm_password && (
                    <p className="text-red-500 text-sm">{errors.confirm_password.message}</p>
                )}

                <button
                    type="submit"
                    className="bg-red-600 text-white p-2 rounded"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Registering..." : "Register"}
                </button>

                <button
                    type="button"
                    className="border-2 border-red-400 hover:bg-red-600 text-gray-500 hover:text-white p-2 rounded"
                    onClick={() => navigate("/login")}
                >
                 Login
                </button>

            </form>

        </div>
    )
}

export default Register;