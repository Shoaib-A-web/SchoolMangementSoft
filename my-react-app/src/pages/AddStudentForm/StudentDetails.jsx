import { useState } from "react"
import Select from 'react-select';
import { Controller } from "react-hook-form";
import Img from "../../assets/dummy/dummy-user.png"

function StudentDetailes({ control, errorCss, inputBoxCss, register, errors }) {
    const preinput= "flex justify-between"
    const preinput2="flex flex-col"
    const labelforinp= "font-semibold text-gray-700 w-1/2"
    const inputcss="border w-full border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"

    // const preinput= "flex"
    // const preinput2="flex flex-col"
    // const labelforinp= "pr-4 font-semibold text-blue-400"
    // const inputcss= "grow px-2 border-2 border-blue-300 rounded-lg"
    const [imageFile, setImageFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(Img);
    
    const handleFileChange= (e) =>{
        const file= e.target.files[0];
        if ( file && file.type.substring(0,5) === "image"){
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }else{
            setImageFile(null);
            setPreviewUrl(Img);
        }
    }
    const [inputs, setInputs]= useState({
        std_ph:"",
        gender:"",
        blood:"",
        ph:"",
        mothertongue:"",
        religion:"",
        bankname:"",
        identitymark:"",
        dob:"",
        category:"",
        bpl:"",
        minority:"",
        uid:"",
        bankAc:"",
        hostel:"",
        deo:"",
    });

    const handleChange= (e) => {    
        const name= e.target.name;
        const value= e.target.value;
        setInputs(values=>({...values,[name]:value} ))
    }

    const colourOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
    { value: "purple", label: "Purple" },
    ];
    
    return(
        <div className="flex flex-col md:flex-row justify-between md:divide-x-4 text-sm lg:text-xl">
                            {/* first column of Guardian details */}
                            <div className="flex flex-col md:w-1/2 gap-4 pb-4 md:pr-6">
                                    {/* kskdjdkdnskdns */}
                                     <div className="mb-4">
                                        <label className="font-semibold text-gray-700 block mb-2">
                                            Select Colors
                                        </label>

                                        <Controller
                                            name="colors"
                                            control={control}
                                            rules={{ required: "Please select at least one color" }}
                                            render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={colourOptions}
                                                isMulti
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                onChange={(selected) => field.onChange(selected)}
                                            />
                                            )}
                                        />

                                        {errors.colors && (
                                            <p className="text-red-500 text-sm mt-1">
                                            {errors.colors.message}
                                            </p>
                                        )}
                                    </div>
                                    {/* kskdjdkdnskdns */}
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="std.ph">Student M.No.</label>
                                    <div className={inputBoxCss}>
                                        <input
                                        className={inputcss}
                                        id="std.ph"
                                        placeholder="Phone No."
                                        type="tel"
                                        {...register('std_ph',{
                                            required:"Phone No. is required."
                                        })}
                                        ></input>
                                        {errors.std_ph && <p className={errorCss}>{errors.std_ph.message}</p>}
                                    </div>
                                </div>

                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="gender">Gender</label>
                                    <div className={inputBoxCss}>
                                        <select 
                                        {...register('gender',{
                                            required:"Gender is required."
                                        })}
                                        className={inputcss}  id="gender">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && <p className={errorCss}>{errors.gender.message}</p>}

                                    </div>
                                </div>

                                <div className={preinput}>
                                        <label className={labelforinp} htmlFor="blood">Blood Group</label>
                                        <div className={inputBoxCss}>
                                            <select 
                                            {...register('blood',{
                                                required:"Blood Group is required."
                                            })}
                                            className={inputcss}  id="blood">
                                            <option value="">Select Blood Group</option>
                                            <option value="-A">-A</option>
                                            <option value="+A">+A</option>
                                            <option value="-AB">-AB</option>
                                            <option value="+AB">+AB</option>
                                            <option value="-B">-B</option>
                                            <option value="+B">+B</option>
                                            <option value="-O">-O</option>
                                            <option value="+O">+O</option>
                                            </select>
                                          {errors.blood && <p className={errorCss}>{errors.blood.message}</p>}
                                        </div>
                                </div>                                
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="ph">Handicapped</label>
                                    <div className={inputBoxCss}>
                                        <select className={inputcss}
                                        {...register('ph',{
                                            required:"Select Handicapped is required."
                                        })}
                                        id="ph">
                                            <option value="">Select Handicapped</option>
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                        {errors.ph && <p className={errorCss}>{errors.ph.message}</p>}

                                    </div>
                                </div>                                
                                
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="mothertongue">Mother Tongue</label>
                                    <select className={inputcss} 
                                    onChange={handleChange}
                                    value={inputs.mothertongue}
                                    name="mothertongue" id="mothertongue">
                                        <option value="hindi">Hindi</option>
                                        <option value="english">English</option>
                                        <option value="bangali">Bangali</option>
                                    </select>
                                </div>                                
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="religion">Religion</label>
                                    <select className={inputcss} 
                                    onChange={handleChange}
                                    value={inputs.religion}
                                    name="religion" id="religion">
                                        <option value="hinduism">Hinduism</option>
                                        <option value="islam">Islam</option>
                                        <option value="christianity">Christianity</option>
                                        <option value="buddhism">Buddhism</option>
                                        <option value="jainism">Jainism</option>
                                        <option value="sikhism">Sikhism</option>
                                        <option value="other"></option>
                                    </select>
                                </div>

                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="bankname">Bank Name</label>
                                    <div className={inputBoxCss}>
                                        <input
                                        className={inputcss}
                                        id="bankname"
                                        placeholder="Bank Name"
                                        type="text"
                                        name="bankname"
                                        onChange={handleChange}
                                        value={inputs.bankname}
                                        ></input>
                                        
                                    </div>
                                </div>
                                 <div className={preinput}>
                                    <label className={labelforinp} htmlFor="identitymark">Mark of Identity</label>
                                    <input
                                    className={inputcss}
                                    id="identitymark"
                                    type="text"
                                    name="identitymark"
                                    onChange={handleChange}
                                    value={inputs.identitymark}
                                    placeholder="Identity mark"
                                    ></input>
                                </div>

                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="dob">D.O.B</label>
                                    <input
                                    className={inputcss}
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    onChange={handleChange}
                                    value={inputs.dob}
                                    ></input>
                                </div>                                
                                
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="category">Catogory</label>
                                    <select className={inputcss} 
                                    onChange={handleChange}
                                    value={inputs.category}
                                    name="category" id="category">
                                        <option value="general">General</option>
                                        <option value="obc">O.B.C</option>
                                        <option value="sc">SC</option>
                                        <option value="st">St</option>
                                    </select>
                                </div>                                
                                
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="bpl">B.P.L Card</label>
                                    <select className={inputcss} 
                                    onChange={handleChange}
                                    value={inputs.bpl}
                                    name="bpl" id="bpl">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>                                
                            </div>
                            {/* second column of guardian details */}
                            <div className="flex flex-col md:w-1/2 gap-4 md:pl-6">
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="minority">Minority</label>
                                    <select className={inputcss} 
                                    onChange={handleChange}
                                    value={inputs.minority}
                                    name="minority" id="minority">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>


                               
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="uid">Aadhar No.</label>
                                    <input
                                    className={inputcss}
                                    id="uid"
                                    type="number"
                                    name="uid"
                                    onChange={handleChange}
                                    value={inputs.uid}
                                    placeholder="Aadhar No."
                                    ></input>
                                </div>

                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="bankAc">Bank Account No.</label>
                                    <input
                                    className={inputcss}
                                    id="bankAc"
                                    type="number"
                                    name="bankAc"
                                    onChange={handleChange}
                                    value={inputs.bankAc}
                                    placeholder="Account No."
                                    ></input>
                                </div>
                                        
                                <div className={preinput}>
                                    <label className={labelforinp} htmlFor="hostel">Hostel Facility</label>
                                    <select className={inputcss} 
                                    onChange={handleChange}
                                    value={inputs.hostel}
                                    name="hostel" id="hostel">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>

                                <div className={preinput2}>
                                    <label className={labelforinp} htmlFor="deo"> D.E.O Permission
                                    </label>
                                    <textarea 
                                    onChange={handleChange}
                                    value={inputs. deo}
                                    className={`border w-full border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2`} name="deo" id="deo" placeholder="permissin">
                                    </textarea>


                                </div>

                                <div className="flex justify-center items-center gap-4 flex-col">
                                        Upload student image
                                    <label className="size-40 md:size-60 p-2 border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl rounded-lg" htmlFor="fileimg">
                                        <img className="size-full" src={previewUrl} alt="student image" /></label>
                                    <input
                                    id="fileimg"
                                    className="grow mb-4 visible"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    hidden
                                    ></input>
                                </div>
                            </div>
                            
                        </div>
    )
}

export default StudentDetailes;