import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

// react icons 
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { SchoolContext } from "../context/SchoolContext";
import { ImGift } from "react-icons/im";
// image import
import Imgdemo from "../assets/dummy/dummy-user.png"





function Sidebar({ isOpen }) {
  // contex
  const {schoolLogo}= useContext(SchoolContext);

  // for link button navigater
  const navigate = useNavigate();
  //  state to open/close settings dropdown
  const [openSettings, setOpenSettings] = useState(false);
  //  state to open/close settings master
  const [openMaster, setOpenMaster] = useState(false)

  //side bar hover state
  const [isHover, setIsHover]= useState(false)


  // common NavLink style logic
  const navClass = ({ isActive }) =>
    `px-2 py-3 transition flex gap-2 items-center justify-between flex-1
     ${isActive ? "font-semibold border border-white bg-gray-800 text-red-400" 
                : "hover:bg-gray-400"}`;

  return (
    <aside 
    onMouseEnter={()=> setIsHover(true)}
    onMouseLeave={()=> setIsHover(false)}
    className={` ${(isOpen || isHover)? " md:w-1/6 " : "hidden md:w-16"}  bg-gray-600 text-white md:flex flex-col items-center justify-between text-sm md:text-lg overflow-auto h-screen flex-shrink-0`}
    >
      
      {/* MAIN NAV LINKS */}
      <div className="w-full flex  flex-col">
      {/* LOGO */}
        
        {(!isOpen && !isHover)  ?
          (<h1 className="bg-red-400 text-center text-lg md:text-xl lg:text-2xl font-bold p-2 mb-4 md:mb-4">
              <img 
              className={`size-14 my-2 rounded-full`}
              src={
                schoolLogo ? URL.createObjectURL(schoolLogo) : Imgdemo
              } alt="opps" />
            </h1>
          ): (<h1 className=" bg-red-400 w-full text-center text-lg md:text-xl lg:text-2xl font-bold p-2 mb-4 md:mb-4 flex justify-evenly items-center">
                <img 
                  className={`size-14 my-2 rounded-full`}
                  src={
                    schoolLogo
                    ? URL.createObjectURL(schoolLogo)
                    : Imgdemo
                  } alt="opps" />
                <span>My School</span>
              </h1>)}
        {/* nav option */}
        <nav className="flex flex-1 flex-col lg:gap-3 space-y-2 ">

          {/* ✅ CHANGED: <a> → <NavLink> */}


          <NavLink to="/" end className={navClass}>
          <RxDashboard />
          {(isOpen || isHover) && (<div className="flex flex-1  items-center justify-between">
            <span>Dashboard</span>
            <IoIosArrowDown />
          </div>)}
          </NavLink>
          {/* Button to toggle dropdown for master */}
          <button
            onClick={() => setOpenMaster(!openMaster)}
            className="w-full text-left px-1 py-2 rounded-lg hover:bg-gray-400 flex items-center justify-between gap-4"
          >
            <MdOutlineAddBox />
            {(isOpen || isHover) && (
              <div className="flex flex-1 items-center justify-between">
                <span>Master</span>
                <IoIosArrowDown />
              </div>
            )}
          </button>
            {/* dropdown option for master */}
            {(openMaster && (isOpen || isHover)) && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                {/* 👇 These link from master pages */}
                <NavLink to="/master/addSchool" className={navClass}>
                  Add School
                </NavLink>

                <NavLink to="/master/class" className={navClass}>
                  Add Class
                </NavLink>

                <NavLink to="/master/section" className={navClass}>
                  Add Section
                </NavLink>

                <NavLink to="/master/blood" className={navClass}>
                  Blood Group
                </NavLink>

                <NavLink to="/master/Category" className={navClass}>
                  Category
                </NavLink>

                <NavLink to="/master/state" className={navClass}>
                  State
                </NavLink>

                <NavLink to="/student" className={navClass}>
                  Student List
                </NavLink>

                <NavLink to="/addstudent" className={navClass}>
                  Add Student
                </NavLink>
              </div>
            )}

          {/* SETTINGS WITH DROPDOWN */}
          <div>
            {/* Button to toggle dropdown */}
          <button
            onClick={() => setOpenSettings(!openSettings)}
            className="w-full text-left px-1 py-2 rounded-lg hover:bg-gray-400 flex items-center justify-between gap-4"
            >
            <IoSettingsSharp />
            {(isOpen || isHover) && (
              <div className="flex flex-1 items-center justify-between">
                Setting
                <IoIosArrowDown />
              </div>
            )}
          </button>
            {/* DROPDOWN OPTION for Setting */}
            {(openSettings && (isOpen || isHover)) && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">

                {/*These link to dummy setting pages */}
                <NavLink to="/settings/general" className={navClass}>
                  General
                </NavLink>

                <NavLink to="/settings/security" className={navClass}>
                  Security
                </NavLink>

                <NavLink to="/settings/notifications" className={navClass}>
                  Notifications
                </NavLink>

              </div>
            )}
          </div>

            <NavLink to="/report"  className={navClass}>
              <TbReportSearch />
              {(isOpen || isHover) && (
                <div className="flex flex-1 items-center justify-between">
                <span>Report</span>
                <IoIosArrowDown />
                </div>
              )}
            </NavLink>

             <NavLink to="/testting"  className={navClass}>
              <TbReportSearch />
              {(isOpen || isHover) && (
                <div className="flex flex-1 items-center justify-between">
                <span>testThing</span>
                <IoIosArrowDown />
                </div>
              )}
            </NavLink>

            
        </nav>
      </div>

      <div  className="p-2">
      {
        (isOpen || isHover)? (
          <button onClick={()=> navigate("/login")}
          className="w-full font-semibold bg-white text-red-500 py-3 px-6 md:px-10 lg:px-14   rounded-lg hover:bg-gray-100">
            Log In
          </button>
        ):(
          <button
          className="w-full font-semibold bg-white text-red-500 py-3 px-3   rounded-lg hover:bg-gray-100">
            <CiLogin/>
          </button>
        )
      }
      </div>
    </aside>
  );
}

export default Sidebar;
