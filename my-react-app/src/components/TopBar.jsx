// icon imports
import { RiMenuFoldFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";

// image imports
import Imgdemo from "../assets/dummy/dummy-user.png"

// context imports
import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// Component imports
import ProfileMenu from "./ProfileMenu";




function TopBar({isOpen, sideToggle}){
    
    const [profielBorder, setProfielBorder]= useState('');

    const [profile, setProfile]= useState(false)
    const [openProfile, setOpenProfile]= useState(false)
    const [isNotification, setIsNotification] =useState(false)
    const demoName= "XXXXXX";

    //context variable and methods 
    const { user}= useContext(AuthContext);

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


    const handelprofiel = () =>{
        if(isNotification) setIsNotification(false)
        setProfile(!(profile))
    }

    const handelNotification=() => {
        if (profile) setProfile(false)
        setIsNotification(!(isNotification))
    }

    const handelOpneProfle=() => {
        setOpenProfile(!(openProfile))
    }

    return(<>
        <div className="flex justify-between bg-white items-center p-2 lg:p-4 border-b-2 border-gray-300 shadow-2xl">
            <div className="flex gap-1 md:gap-8">
                <button
                onClick={sideToggle}
                className="flex items-center gap-2 border border-white hover:border-gray-500 bg-red-400 hover:bg-red-500 text-white p-4 md:p-4 rounded-xl hover:bg-bule-800 active:shadow-lg active:shadow-gray-500"
                >
                    {isOpen ? <IoMdClose />:<RiMenuFoldFill/>}
                    
                </button>
                <h1 className="flex md:hidden items-center text-center text-2xl font-bold">My School</h1>
                <div className=" hidden md:flex items-center border border-gray-300 hover:border-gray-500 hover:shadow-lg rounded-xl p-2 gap-2">
                    <CiSearch />
                    <input type="text"
                    className="focus:outline-none"
                    placeholder="Search Your requirment..."
                    />
                    <button
                        className="flex items-center gap-2   bg-red-400 hover:bg-red-500 text-white p-2 rounded-xl  hover:bg-bule-800 active:shadow-lg active:shadow-gray-500"
                    >Search</button>
                </div>
            </div>
            <div className=" hidden lg:flex items-center gap-4  relative">
                <div onClick={handelNotification}
                className=" bg-red-400 hover:bg-red-500 p-4 rounded-full hover:bg-bule-800 active:shadow-lg active:shadow-gray-500 text-white">
                    <RiNotification2Line />
                </div>
                    {isNotification && (
                        <div className="absolute top-full right-0 rounded-xl text-sm text-white mt-6 p-4 bg-gray-600 flex flex-col z-10  max-h-80 w-[400px] overflow-auto shadow-2xl">
                            <ul>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li>
                            </ul>
                        </div>
                    )}
                        
                <button 
                onClick={handelprofiel}
                className="flex items-center gap-4 "
                >
                <div className={`border-4 rounded-full ${profielBorder}`}>
                    <img
                    className=" size-8 rounded-full  border-2 border-white"
                    src={Imgdemo} alt="demmy" />
                </div>
                    <span>
                        {(user)? (user?.userData?.first_name) : demoName}
                    </span>
                    <div>
                        <IoIosArrowDown />
                    </div>
                    { profile && (
                        <ProfileMenu/>
                    )}
                </button>  
            </div>
            <button
            onClick={handelOpneProfle}
            className="p-4 border hover:border-2 rounded-xl border-gray-400 hover:border-gray-600  lg:hidden hover:shadow-xl">
                
                {openProfile ?<IoMdClose />: <BsThreeDotsVertical/>}
            </button>
        </div>
        {openProfile && (
            <div className="flex justify-between items-center gap-4 px-4 py-1 border border-blue-300 lg:hidden relative">
                <div
                onClick={handelNotification}
                className="bg-red-400 hover:bg-red-500 p-4 rounded-full  active:shadow-lg active:shadow-gray-500 text-white">
                    <RiNotification2Line />
                </div>
                        { isNotification && (
                        <div className="absolute top-full w-1/2 left-0 rounded-xl text-sm m-0  p-4 bg-gray-500 flex flex-col z-10  max-h-80 overflow-auto">
                             <ul>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li><hr className="h-[2:px]  rounded-full"/>
                                <li className=" p-2 my-1 hover:text-gray-700 hover:bg-gray-300 rounded">Letest notification this </li>
                            </ul>
                        </div>
                    )}
                <button 
                onClick={handelprofiel}
                className="flex items-center gap-4"
                >
                    <div className={`border-4 rounded-full ${profielBorder}`}>
                        <img
                        className=" size-8 rounded-full"
                        src={Imgdemo} alt="demmy" />
                    </div>
                    <span>{(user)? (user?.userData?.first_name) : demoName}</span>
                    <div>
                        <IoIosArrowDown />
                    </div>
                    { profile && (
                        <ProfileMenu/>
                    )}
                </button>  
        </div>
        )}
        
    </>)
}
export default TopBar;