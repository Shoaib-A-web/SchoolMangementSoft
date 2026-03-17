//import context 
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//icon imports 
import { MdManageAccounts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



function ProfileMenu(){
    const navigate = useNavigate();
    
    const demoName= "XXXXXX";
    const {user, logout} = useContext(AuthContext);

    return(
        <div className="absolute top-full right-0 text-white rounded-xl mt-6 p-4 bg-gray-600 flex flex-col gap-4 z-10">
            <div className="flex flex-col pb-2 border-b-[1px] border-blue-50">
                <span className="font-semibold text-lg">{(user)? (user?.userData?.first_name)+" "+(user?.userData?.last_name) : demoName}</span>
                <span className="text-sm">{(user)? (user?.userData?.email) : demoName}</span>
            </div>
            <ul className="border-b-[1px] pb-2 border-blue-50">
                <li >
                    <span 
                        onClick={() => navigate("/userProfile")}
                        className="flex gap-2 items-center">
                        <MdManageAccounts/>
                        <span>Edit Profile</span>
                    </span>
                </li>
                <li>
                    <a href="#" className="flex gap-2 items-center">
                        <CgProfile/>
                        <span>Acount Setting</span>
                    </a>
                </li>

            </ul>
            <div>
                <a href="#" className="flex gap-2 items-center">
                    <CiLogout/>
                    <span onClick={logout}>logout</span>
                </a>
            </div>
        </div>
    );
}
export default ProfileMenu;