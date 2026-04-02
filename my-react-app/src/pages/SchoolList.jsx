import TablaFormate from "@/components/Table";
import { useEffect, useState } from "react";
import { getSchools } from "@/api";
import Img from "../assets/dummy/dummy-user.png"
import { useNavigate } from "react-router-dom";


function SchoolList (){
    const [schools,setSchools]= useState([]);
    const navigate= useNavigate();


    const columns= [
        { header: "Sch.NO", accessor: "id" },
        { header: "Name", accessor: "schoolName" },
        { header: "Logo", accessor: "logo",  render: (row) => <img src={row.logo? row.logo:Img} className="h-10 w-10 rounded"/> },
        { header: "S.Code", accessor: "code" },
        { header: "Contact", accessor: "schoolContact" },
        { header: "Email", accessor: "email" },
        { header: "Website", accessor: "website" },
        { header: "Board", accessor: "board" },
        { header: "City", accessor: "city" },
    ]      
    
    useEffect(()=>{
        const calldata= async ()=>{
            try{
                const res= await getSchools();
                setSchools(res.data);
                

            }catch(errors){
                alert(errors);
            }
        }

        calldata();

    },[]);

   

    return(
        <div>
            <TablaFormate 
            columns={columns} 
            data={schools} 
            detailsButton={(row)=> (<button 
                onClick={()=> navigate(`/master/schoolDetails/${row.id}`)}
                className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                type="submit">Details</button>)}
            />

        </div>
    );
}
export default SchoolList;