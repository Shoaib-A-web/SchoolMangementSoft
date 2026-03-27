import { useContext, useState } from "react";
import Imgdemo from "../../assets/dummy/dummy-user.png"
import { SchoolContext } from "../../context/SchoolContext";

import axios from "axios";

function AddSchool(){
    const {schoolLogo, setSchoolLogo}= useContext(SchoolContext);


    const [school, setSchool] = useState({
        schoolName: "",
        schoolContact: "",
        schoolAdd: "",
        schoolLogo: null
    });

    const handleChange = (e) => {
        const name= e.target.name;
        const value= e.target.value
        setSchool({...school, [name]:value});
    };
    

        const handleSubmit = async (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("schoolName", school.schoolName);
            formData.append("schoolContact", school.schoolContact);
            formData.append("schoolAdd", school.schoolAdd);
            formData.append("schoolLogo", school.schoolLogo);

            try {
                const res = await axios.post(
                "http://127.0.0.1:8080/api/schools",
                formData,
                {
                    headers: {
                    "Content-Type": "multipart/form-data"
                    }
                }
                );

                alert(res.data.message);
            } catch (error) {
                console.log(error);
            }
        };

    const handleimg =(e) => {
        const file= e.target.files[0];
        setSchool({
            ...school, schoolLogo: file
        })
        setSchoolLogo(file);
    }

    return(<>
   
        <div className=" shadow-xl text-gray-700 bg-white font-semibold rounded-lg ">
            <div className="p-4 text-xl">
                School Detail
            </div>
            <hr className="h-[2px] bg-gray-200" />
            <form className="flex flex-col p-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col gap-4 w-full"> 
                        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-0 md:gap-3" >
                            <label htmlFor="schoolName">
                                School Name
                            </label>
                                <input 
                                onChange={handleChange}
                                type="text"
                                name="schoolName" 
                                id="schoolName"
                                placeholder="Name of School"
                                className="flex-1 w-full border border-gray-300 rounded-sm text-gray-600 p-2 focus:outline-none hover:border-gray-400 hover:shadow-xl"
                                />
                        </div>
                        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-0 md:gap-3">
                        <label htmlFor="schoolContact">
                            School Contact
                        </label>
                            <input 
                            onChange={handleChange}
                            type="tel"
                            name="schoolContact"
                            id="schoolContact"
                            placeholder="School Contact No."
                            className="flex-1 w-full border border-gray-300 rounded-sm text-gray-600 p-2 focus:outline-none hover:border-gray-400 hover:shadow-xl"

                            />
                        </div>
                        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-0 md:gap-3">
                            <label htmlFor="schoolAdd">
                                School Address
                            </label>
                                <input 
                                onChange={handleChange}
                                type="text" name="schoolAdd" id="schoolAdd" placeholder="Address of school"
                                className="flex-1 w-full border border-gray-300 rounded-sm text-gray-600 p-2 focus:outline-none hover:border-gray-400 hover:shadow-xl"
                               
                            />
                        </div>

                    </div>
                
                    <div className="flex flex-col items-center ">

                        <span className="mt-4">School Logo</span>
                        <label htmlFor="schoolLogo"
                        className="flex justify-center m-2"
                        >
                            <img src={
                                    school.schoolLogo
                                    ? URL.createObjectURL(school.schoolLogo)
                                    : Imgdemo
                                } alt="opps"
                            className="size-60 md:size-40 rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:shadow-lg "
                            />
                        </label>
                        <input 
                        className=" invisible"
                        onChange={handleimg} type="file" name="schoolLogo" accept="image/*" id="schoolLogo" />
                    </div>

                </div>
                <button className="bg-red-400 hover:bg-red-500 shadow-xl rounded-lg py-2 text-white my-2">Submit</button>
            </form>
        </div>
    </>    
    )
}

export default AddSchool;