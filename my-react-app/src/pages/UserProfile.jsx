//import context
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// autometic form handlear
import { useForm } from "react-hook-form";
import Form from "./EditProfiel";

// impot image
import Dummyuser from '../../src/assets/dummy/dummy-user.png'

import { updateUser } from "@/api";


function UserProfile() {
    const {user , setUser }= useContext(AuthContext);
    const [profielBorder, setProfielBorder]= useState('');
    const [isEdit, setIsEdit]=useState(false);
    const [file, setFile] = useState(null);

    const imageUrl = user?.image
    ? `http://127.0.0.1:8000/storage/${user.image}`
    : Dummyuser;
    
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors, isSubmitting },
    }= useForm();

   

    const onSubmit = async (data) => {

        try {

            const userId = user?.userData?.user_id;

            // Create FormData
            const formData = new FormData();

            // append all fileds
            Object.keys(data).forEach((key)=>  {
                if (data[key] !== undefined && data[key] !== null) {
                    formData.append(key, data[key]);
                }
            });

            // append image 
            console.log('image file',file);
            if (file){
                formData.append('image', file);
            }
             console.log("data pre axios:", formData);

            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            const res= await updateUser(userId, formData);

            console.log("drespoce past axios:", res);
            
            // update localStorage
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            userInfo.userData = res.data.data;
            localStorage.setItem('userInfo',JSON.stringify(userInfo));

            // update context state
           const updatedUser = res.data.data;

            setUser({
            ...user,
            userData: updatedUser
            });


            alert("Profile Updated Successfully");

            setIsEdit(false);

        } catch (error) {

            console.log("ERROR:", error);

            console.log("Error form responce",error.response?.data);

            alert("Update failed");

        }
    };


    useEffect(()=>{

        switch (user?.userData.userType) {
        case 'Admin':
            setProfielBorder('border-red-300');
            break;

        case 'Teacher':
            setProfielBorder('border-green-300');
            break;

        case 'Student':
            setProfielBorder('border-yellow-300');
            break;

        default:
            setProfielBorder('border-gray-300');
    }         
    },[user]);

    const handleEdit = () => {

        reset({
            first_name: user?.userData?.first_name,
            last_name: user?.userData?.last_name,
            email: user?.userData?.email,
            age: user?.userData?.age,
            contact: user?.userData?.contact,
            gender: user?.userData?.gender,
            aadhar: user?.userData?.aadhar,
            userType: user?.userData?.userType,
        });

        setIsEdit(!isEdit);
    };

    const Profile=()=> {
        return(
            <div className={`flex flex-col md:justify-around md:flex-row max-w-md mx-auto md:max-w-full bg-white shadow-lg rounded-xl p-6 border-b-4 ${profielBorder}`}>
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-4">
                    <img
                        src={imageUrl}
                        alt="profile"
                        className="w-28 h-28 rounded-full border-4 border-gray-300 object-cover"
                    />
                    <h2 className="text-xl font-bold mt-3">
                        {user?.userData?.first_name} {user?.userData?.last_name}
                    </h2>
                    <p className="text-gray-500">{user?.userData?.userType}</p>
                </div>

                {/* User Details */}
                <div className="space-y-2 text-sm">

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Email:</span>
                        <span>{user?.userData?.email}</span>
                    </div>

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Gender:</span>
                        <span>{user?.userData?.gender}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Contact:</span>
                        <span>{user?.userData?.contact}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Aadhar:</span>
                        <span>{user?.userData?.aadhar}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">DOB:</span>
                        <span>{user?.userData?.age}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Created:</span>
                        <span>{new Date(user?.userData?.created_at).toLocaleDateString()}</span>
                    </div>
                    <button 
                        type="button"
                        onClick={handleEdit}
                        className="px-6 py-2 text-gray-600 border-2 border-red-500  rounded hover:text-white hover:bg-red-500" 
                    > Edit Profile</button>
                </div>
            </div>
        );
    }
    



    return (<div>
        { !isEdit ? (<Profile/>) : (
            <Form
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
                user={user}
                profielBorder={profielBorder}
                setFile={setFile} 
            />

        )}
    </div>);
}

export default UserProfile;