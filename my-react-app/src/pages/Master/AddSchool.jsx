import { useContext, useState } from "react";
import Imgdemo from "../../assets/dummy/dummy-user.png";
import { SchoolContext } from "../../context/SchoolContext";
import { useForm } from "react-hook-form";
import { createSchool, deleteSchool, getSchool, updateSchool } from "@/api";
import { toast } from "react-toastify";

function AddSchool() {
    const modeOpt= ["Insert Mode", "Update Mode", "Delete Mode"];
    const [existingLogo, setExistingLogo] = useState(null);
    const [newSearch, setNewSearch]= useState("");
    const [mode, setMode] =useState(modeOpt[0]);
    const { setSchoolLogo } = useContext(SchoolContext);

    const handleSearch = async () => {

        if (newSearch.trim() !== ""){
            try{
                const res= await getSchool(newSearch);
                const data = res?.data;
                reset({
                    schoolName: data.schoolName || "",
                    schoolContact: data.schoolContact || "",
                    email: data.email || "",
                    website: data.website || "",
                    schoolAdd: data.schoolAdd || "",
                    board: data.board || "",
                    established_year: data.established_year || "",
                    code: data.code || "",
                    city: data.city || "",
                    pincode: data.pincode || "",
                });
                 // SET IMAGE URL FROM BACKEND
                setExistingLogo(data.logo);
            }catch(errors){alert(errors)}
            
        }
    }
    const clearForm = () => {
    reset({
            schoolName: "",
            schoolContact: "",
            email: "",
            website: "",
            schoolAdd: "",
            board: "",
            established_year: "",
            code: "",
            city: "",
            pincode: "",
        });

        setExistingLogo(null);   // clear image preview
        setNewSearch("");        // clear search input
    };

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors, isSubmitting }
    } = useForm({
        shouldFocusError: true,
        mode: "onBlur"
    });

    const logoPreview = watch("schoolLogo");

    const onSubmit = async (data) => {
        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        try {
            let res= "";
            switch (mode) {
                
                case "Insert Mode":
                    res = await createSchool(formData);
                    toast.success(res?.data?.message);
                    clearForm();
                    break;
                case "Update Mode":
                    res = await updateSchool(newSearch,formData)
                    toast.success(res?.data?.message);
                    clearForm();

                     break;
                case "Delete Mode":
                    res = await deleteSchool(newSearch);
                    toast.success(res?.data?.message);
                    clearForm();

                    break;
                
                default:
                    break;
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || "Error occurred");
        }
    };

    const handleimg = (e) => {
        const file = e.target.files[0];
        setValue("schoolLogo", file);
        setSchoolLogo(file);
        setExistingLogo(null);    // remove old image
    };

    // Reusable Input Field Component
    const InputField = ({ label, name, type = "text", rules, placeholder }) => (
        <div className="flex flex-col w-full">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                className="border border-gray-300 rounded-sm p-2"
            />
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
        </div>
    );
    return (
        <div className="shadow-xl text-gray-700 bg-white font-semibold rounded-lg">
            <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center justify-center gap-2 p-1 w-1/2 border-2 border-red-200 rounded-lg ">
                    { modeOpt.map((m,i) => {
                        return(
                            <button 
                            onClick={()=> setMode(m)}
                            className={`p-2 rounded-lg ${mode === m? "bg-red-500 text-white":"text-gray-600"}`}
                            key={i}>{m}</button>
                        )
                    })}
                </div>
                {
                    mode !== "Insert Mode" && (
                        <div className="p-2 m-2 space-x-2" >
                            <input type="number" 
                            onChange={(e)=> setNewSearch(e.target.value)}
                            className="p-2 focus:outline-none rounded-lg border-2 border-red-200"
                            name="SchoolId" placeholder="School Number"/> 
                            <button 
                            onClick={handleSearch}
                            className="p-2 text-white rounded-lg bg-red-500"
                            type="search">Search</button>
                        </div>
                    
                    )
                }
            </div>
            <div className="p-4 text-xl">School Detail</div>
            <hr className="h-[2px] bg-gray-200" />

            <form className="flex flex-col p-4 gap-4" onSubmit={handleSubmit(onSubmit)}>

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-6">

                    {/* LEFT */}
                    <div className="flex flex-col gap-4 w-full">

                        <InputField
                            label="School Name"
                            name="schoolName"
                            placeholder="Name of School"
                            rules={{ required: "School name is required" }}
                        />

                        <InputField
                            label="School Contact"
                            name="schoolContact"
                            type="tel"
                            placeholder="Contact Number"
                            rules={{
                                required: "Contact is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter valid 10-digit number"
                                }
                            }}
                        />

                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="School Email"
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email"
                                }
                            }}
                        />

                        <InputField
                            label="Website"
                            name="website"
                            placeholder="Website URL"
                        />

                        <InputField
                            label="School Address"
                            name="schoolAdd"
                            placeholder="Address"
                            rules={{ required: "Address required" }}
                        />

                        {/* Board */}
                        <div>
                            <label>Board</label>
                            <select
                                {...register("board", { required: "Select board" })}
                                className="border border-gray-300 rounded-sm p-2 w-full"
                            >
                                <option value="">Select Board</option>
                                <option value="CBSE">CBSE</option>
                                <option value="ICSE">ICSE</option>
                                <option value="STATE">State Board</option>
                            </select>
                            {errors.board && (
                                <p className="text-red-500 text-sm">{errors.board.message}</p>
                            )}
                        </div>
                    </div>

                    {/* RIGHT (IMAGE) */}
                    <div className="flex flex-col items-center">
                        <span>School Logo</span>

                        <label htmlFor="schoolLogo" className="cursor-pointer">
                            <img
                                src={
                                    logoPreview
                                        ? URL.createObjectURL(logoPreview)  // new uplaod image
                                        : existingLogo ? existingLogo       //backend image 
                                        : Imgdemo                           //fallbace image
                                }
                                alt="preview"
                                className="size-40 rounded-lg border-2"
                            />
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            id="schoolLogo"
                            className="hidden"
                            onChange={handleimg}
                        />

                        {errors.schoolLogo && (
                            <p className="text-red-500 text-sm">
                                {errors.schoolLogo.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid md:grid-cols-2 gap-4">

                    <InputField
                        label="Established Year"
                        name="established_year"
                        type="number"
                        placeholder="2000"
                        rules={{
                            required: "Year required",
                            min: { value: 1900, message: "Invalid year" }
                        }}
                    />

                    <InputField
                        label="School Code"
                        name="code"
                        placeholder="SCH001"
                        rules={{ required: "Code required" }}
                    />

                    <InputField
                        label="City"
                        name="city"
                        placeholder="City"
                        rules={{ required: "City required" }}
                    />

                    <InputField
                        label="Pincode"
                        name="pincode"
                        placeholder="Pincode"
                        rules={{
                            required: "Pincode required",
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "Invalid pincode"
                            }
                        }}
                    />
                </div>

                {/* Submit */}
                <button
                    disabled={isSubmitting}
                    className="bg-red-400 hover:bg-red-500 rounded-lg py-2 text-white"
                >
                    {isSubmitting ? "Submiting..." : mode.slice(0, -5) }
                </button>
            </form>
        </div>
    );
}

export default AddSchool;