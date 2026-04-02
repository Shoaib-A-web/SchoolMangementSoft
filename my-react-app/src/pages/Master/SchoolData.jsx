// impot image
import { getSchool } from '@/api';
import { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const SchoolData=()=> {
    const [school, setSchool]= useState([]);
    const navigate= useNavigate();
    const {schoolId}= useParams();

    useEffect( () => {
        const getData = async ()=>{
        try {const res = await getSchool(schoolId);
            setSchool(res.data);
        }catch (errors){
            alert(errors);
        }
        }
        getData();
    },[schoolId]);

    

        return(
            <div className={`flex flex-col md:justify-around md:flex-row max-w-md mx-auto md:max-w-full bg-white shadow-lg rounded-xl p-6 border-b-4`}>
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-4">
                    <img
                        src={school?.logo}
                        alt="profile"
                        className={`w-28 h-28 rounded-full border-4  object-cover`}
                    />
                    <h2 className="text-xl font-bold mt-3">
                        {school?.schoolName }
                    </h2>
                    <p className="text-gray-500">{school?.website }</p>
                    <div className='flex gap-2'>
                        <span>Since :- </span><p className="text-gray-500">{school?.established_year }</p>
                    </div>
                </div>

                {/* User Details */}
                <div className="space-y-2 text-sm">

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">School Id :</span>
                        <span>
                            {school?.id}
                        </span>
                    </div>

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Email:</span>
                        <span>
                            {school?.email}
                        </span>
                    </div>

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Contect:</span>
                        <span>
                            {school?.schoolContact}
                        </span>
                    </div>

                    <div className="flex justify-between gap-12">
                        <span className="font-semibold">Address:</span>
                        <span>
                            {school?.schoolAdd}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Board:</span>
                        <span>
                            {school?.board}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">School Code:</span>
                        <span>
                            {school?.code}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">City:</span>
                        <span>
                            {school?.city}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-semibold">Pin Code:</span>
                        <span>
                            {school?.pincode}
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
export default SchoolData;