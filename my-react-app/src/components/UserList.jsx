import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//table styleing 
    const tableclass="w-full table-auto divide-y divide-gray-400 rounded-2 text-xs md:text-sm text-center"
    const theadclass="sticky top-0 w-full"
    const thclass=" px-4 py-2 font-medium text-center text-white bg-gray-600"
    const tbodyclass="divide-y divide-gray-300"
    const trclass="hover:bg-red-100 odd:bg-white even:bg-red-50"
    const tdclass="px-2 py-1 text-gray-700"


function UserList(){

    
    const navigate= useNavigate();
    const [users, setUsers]=  useState([]);
    
    useEffect(()=>{
        UserList()
    },[])
    const UserList= async()=>{
        try {

            const token = localStorage.getItem("token"); // sanctum token

            const res = await axios.get(
                `http://127.0.0.1:8000/api/user-types`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
        setUsers(res.data.data);

        } catch (error) {

            console.log("ERROR:", error);

            console.log(error.response?.data);

            alert("Update failed");

        }
    }
    
    return(<div className="bg-white p-3 rounded-lg shadow-xl">
                <div>
                    <h2 className="text-2xl pb-4 text-gray-700 font-semibold">Student List</h2>
                </div>
                <div className="h-96 overflow-x-auto overflow-y-auto  rounded-lg border-2 border-gray-3000">
                    <table className={tableclass}>
                        <thead className={theadclass}>
                            <tr className={trclass}>
                            <th className={thclass}>S.No</th>
                            <th className={thclass}>User Id</th>
                            <th className={thclass}>Name</th>
                            <th className={thclass}>E-mail</th> 
                            <th className={thclass}>Gender</th>
                            <th className={thclass}>Date of Birth</th>
                            <th className={thclass}>Aadhar</th>
                            <th className={thclass}>Contect</th>
                            <th className={thclass}>User Type</th>
                            <th className={thclass}>Details</th>
                            </tr>
                        </thead>
                        <tbody className={tbodyclass}>
                            {
                                users.map((user,index) =>{
                                    return(<tr className={trclass} key={index}>
                                            <td className={tdclass}>{index+1}</td>
                                            <td className={tdclass}>{user.user_id}</td>
                                            <td className={tdclass}>{user.first_name+" "+user.last_name}</td>
                                            <td className={tdclass}>{user.email}</td>
                                            <td className={tdclass}>{user.gender}</td>
                                            <td className={tdclass}>{user.age}</td>
                                            <td className={tdclass}>{user.aadhar}</td>
                                            <td className={tdclass}>{user.contact}</td>
                                            <td className={tdclass}>{user.userType}</td>
                                            <td className={tdclass}>    
                                                <button
                                                    onClick={()=> navigate(`/user/userDetails/${user.user_id}`)}
                                                    className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                                                >Details</button>
                                                
                                            </td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>

    
        <table>
            <thead>
                <tr>
                    
                </tr>
            </thead>    
            <tbody>
               
            </tbody>
        </table>
    </div>);
}
export default UserList;