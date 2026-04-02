// impot image
import { useNavigate, useParams } from 'react-router-dom';
import Dummyuser from '../../src/assets/dummy/dummy-user.png'
import { useEffect, useState } from 'react';

import { getUsers } from '@/api';

const UserDetails=()=> {
    const navigate= useNavigate();
    const {user_id} = useParams();
    const [profielBorder, setProfielBorder]= useState('');
    const [userDetails, setUserDetails] = useState(null);

    
    useEffect(() => {
        const dataCall= async ()=>{
        
            try{
                const res= await getUsers(user_id);  //cal for user by id 
                setUserDetails(res.data);
                console.log(res.data);
            }catch (errors){
                console.log(errors)
            }
        }
        dataCall();
    }, [user_id]);

    useEffect(()=>{
        switch (userDetails?.userType) {
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
        
    },[userDetails]);

        return(
            <div className={`flex flex-col md:justify-around md:flex-row max-w-md mx-auto md:max-w-full bg-white shadow-lg rounded-xl p-6 border-b-4 ${profielBorder}`}>
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-4">
                    <img
                        src={
                            userDetails?.image
                                ? `http://127.0.0.1:8000/storage/${userDetails?.image}`
                                : Dummyuser
                            }
                        alt="profile"
                        className={`w-28 h-28 rounded-full border-4 ${profielBorder} object-cover`}
                    />
                    <h2 className="text-xl font-bold mt-3">
                        {userDetails?.first_name} {userDetails?.last_name}
                    </h2>
                    <p className="text-gray-500">{userDetails?.userType}</p>
                </div>

                {/* User Details */}
                <div className="space-y-2 text-sm">

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Email:</span>
                        <span>
                            {userDetails?.email}
                        </span>
                    </div>

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Gender:</span>
                        <span>
                            {userDetails?.gender}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Contact:</span>
                        <span>
                            {userDetails?.contact}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Aadhar:</span>
                        <span>
                           {userDetails?.aadhar}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">DOB:</span>
                        <span>
                            {userDetails?.age}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Created:</span>
                        <span>
                            {new Date(userDetails?.created_at).toLocaleDateString()}
                        </span>
                    </div>
                    <button 
                        type="button"
                        onClick={()=> navigate(-1)}
                        className="px-6 py-2 text-gray-600 border-2 border-red-500  rounded hover:text-white hover:bg-red-500" 
                    >Back</button>
                </div>
            </div>
        );
    }
export default UserDetails;