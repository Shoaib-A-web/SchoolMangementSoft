
import { PiGraduationCapLight } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { GiBookCover } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { BiCalendarAlt } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaRegCalendarPlus } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";


// imports of externam jsx
import Calendar from "../components/Calendar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate= useNavigate();
  return(<>
    <div className="bg-white rounded-lg shadow-xl py-4">
      <ul className="flex flex-col md:flex-row md:items-start items-center justify-around divide-y-2 md:divide-y-0 md:divide-x-2 px-4">
        <li className="w-full md:w-1/4">
          <div className="flex justify-between md:justify-center">
            <span className=" text-blue-400 text-7xl">
              <PiGraduationCapLight/>
            </span>
            <div className="flex flex-col justify-between text-center text-gray-600 px-2">
              <span className="text-2xl">12</span>
              <span>Totel Students</span>
            </div>
          </div>
        </li>
        <li className="w-full md:w-1/4">
          <div className="flex justify-between md:justify-center">
            <span className=" text-orange-500 text-7xl">
              <IoPeopleSharp/>
            </span>
            <div className="flex flex-col justify-between text-center text-gray-600 px-2">
              <span className="text-2xl">7</span>
              <span>Totel Employees</span>
            </div>
          </div>
        </li>
        <li className="w-full md:w-1/4">
          <div className="flex justify-between md:justify-center">
            <span className=" text-yellow-500 text-7xl">
              <GiBookCover/>
            </span>
            <div className="flex flex-col justify-between text-center text-gray-600 px-2">
              <span className="text-2xl">10</span>
              <span>Totel Subjects</span>
            </div>
          </div>
        </li>
        <li className="w-full md:w-1/4">
          <div className="flex justify-between md:justify-center">
            <span className=" text-green-300 text-7xl">
              <BiCalendarAlt/>
            </span>
            <div className="flex flex-col justify-between text-center text-gray-600 px-2">
              <span className="text-2xl">12</span>
              <span>Totel Holidays</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
      <div className="my-4 flex flex-col md:flex-row justify-between">
        <div className=" lg:w-2/3 flex md:mr-4">
          <Calendar/>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 lg:w-1/3 gap-4">
          <div className="flex gap-4 w-full">
            <button 
            onClick={()=>navigate("/addstudent")}
            className="bg-white grow rounded-xl flex flex-col items-center justify-center max-h-32 gap-2 py-2 hover:bg-blue-50 active:shadow-2xl"
            >
              <span className="text-4xl text-blue-400"><MdOutlineAddBox/></span>
              <span className="text-sm text-gray-600">
                Add Studenet
              </span>
            </button>
            <button className="bg-white grow rounded-xl flex flex-col items-center justify-center max-h-32 gap-2 py-2 hover:bg-blue-50 active:shadow-2xl">
              <span className="text-4xl text-blue-400">
                <BsPersonFillAdd/>
              </span>
              <span className="text-sm text-gray-600">Add Employee</span>
            </button>
          </div>
          
          <div className="flex gap-4 w-full">
            <button className="bg-white grow rounded-xl flex flex-col items-center justify-center max-h-32 gap-2 py-2 hover:bg-blue-50 active:shadow-2xl">
              <span className="text-4xl text-blue-400">

              <FaRegCalendarPlus/>
              </span>
              <span className="text-sm text-gray-600"> Plan Academic Clander</span>
            </button>
            <button className="bg-white grow rounded-xl flex flex-col items-center justify-center max-h-32 gap-2 py-2 hover:bg-blue-50 active:shadow-2xl">
              <span className="text-4xl text-blue-400">

              <GrAnnounce/>
              </span>
              <span className="text-sm text-gray-600">Send Announcement</span>
            </button>
          </div>
        </div>
        {/* <div>
          <div className="flex gap-4">
            <button>
              <MdOutlineAddBox/>
              <span>Add Studenet</span>
            </button>
            <button>
              <BsPersonFillAdd/>
              <span>Add Employee</span>
            </button>
          </div>
          <div className="flex gap-4">
            <button>
              <FaRegCalendarPlus/>
              <span> Plan Academic Clander</span>
            </button>
            <button>
              <GrAnnounce/>
              <span>Send Announcement</span>
            </button>
          </div>
          
        </div> */}
      </div>
  </>)
}
