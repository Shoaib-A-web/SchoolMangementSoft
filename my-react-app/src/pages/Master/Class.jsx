
    import { RiDeleteBin6Line } from "react-icons/ri";
    import { CiFilter } from "react-icons/ci";
    import { CiSearch } from "react-icons/ci";
    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { useForm } from "react-hook-form";
    import axios from "axios";
    import { toast } from "react-toastify";


    function AddClass(){
        const [classList, setClassList]= useState([])
        const [newGroup, setNewGroup]= useState("")
        const [newSearch, setNewSearch]= useState("")
        const navigate= useNavigate();
        const {
            watch,
            setValue,   
            getValues,
            register,
            formState: {errors}
        }= useForm();

        // featching function 
        const feachclass= async ()=> {
            const res= await axios.get(`http://127.0.0.1:8000/api/class`);
            setClassList(res.data.data);

        }

        useEffect(()=>{

            feachclass();
        }, []);

        

        // Delete Function
        const handleDelete = async (indexToDelete) => {
            const res= await axios.delete(
                `http://127.0.0.1:8000/api/class/${classList[indexToDelete].id}`
            );
            toast.success(res.data.message)
            const updatedList = classList.filter((_, index) => index !== indexToDelete);
            setClassList(updatedList);
        };

        // Add function 
        const handleAdd = async () => {
            const data= getValues();
            
            try{

                const res= await axios.post(
                    `http://127.0.0.1:8000/api/class`,
                    {
                        classGrup: data.classGrup
                    }   
                    
                );
                
                if (!(res.data.status)){
                    console.log(res.data.message)
                }
                feachclass();
                toast.success( data.classGrup +" "+res.data.message);
                setValue("classGrup", "")
            }catch(error){
                console.log(error);
            }
        }

        // Search function 
        const handleSearch= () => {
            if (newSearch.trim() !== ""){
                const searchlist = classList.filter((x) => x.class.toUpperCase() === newSearch.toUpperCase());
                setClassList(searchlist);
                setNewSearch("")
            }
        }


        const trCss="odd:bg-white even:bg-red-50 hover:bg-red-100 text-sm text-gray-700"
        const delButCss="bg-red-400 px-4 py-2 rounded-lg text-white hover:bg-red-500 active:shadow-lg my-1"
        return(
            <div>
                <div className="  rounded-xl lg:text-xl bg-white">
                    <div className="border-b-2 px-2">
                        <div className="flex items-center lg:py-4 justify-between gap-2">
                        <h2 className="font-semibold text-gray-700">Class List</h2>
                        <div className="flex flex-row gap-2">
                            <div className="flex border  justify-center items-center gap-2 px-2 border-2border-gray-300 rounded-xl hover:border-gray-500 hover:shadow-lg">
                                <CiSearch />
                                <input type="text"
                                placeholder="Search..."
                                className="focus:outline-none w-full"
                                value={newSearch}
                                onChange={(e)=> setNewSearch(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-2 border-2border-gray-300 bg-red-400 text-white p-2 rounded-xl hover:bg-red-500 active:shadow-lg"
                            onClick={handleSearch}
                            >
                                <CiFilter />
                                <p>Filter</p>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="p-2">
                    <div className="max-h-96 min-h-80 border-2 border-gray-300 rounded-2xl overflow-auto">
                        <table className="min-w-full">
                            <thead className="sticky top-0  border-b-2 bg-gray-600 text-white">
                                <tr>
                                    <th className="font-semibold">S.No</th>
                                    <th className="font-semibold">Name</th>
                                    <th className="font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {classList.map((x, index) => (
                                    <tr 
                                    key={index}
                                    className={trCss}>
                                        <td>{index+1}</td>
                                        <td>{x.class.toUpperCase()}</td>
                                        <td>
                                            <button className={delButCss}
                                            onClick={() => handleDelete(index)}
                                            >
                                                <RiDeleteBin6Line />
                                            </button>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    </div>

                    <div className="border-t-2 border-gray-300 shadow-2xl">
                        <h2 className="font-semibold text-gray-700 px-2">Cantrole Box</h2>
                        <div className="flex justify-between gap-2 p-2">
                            <button className={delButCss}
                            onClick={()=> navigate(-1)}
                            >
                                <span>Go Back</span>
                            </button>

                            <div className="flex gap-2">
                                <input type="text" 
                                className="border-2 border-gray-300 hover:border-gray-500 hover:shadow-lg focus:outline-none rounded-lg my-1 px-2 w-full"
                                placeholder="Class"
                                {...register('classGrup')}
                                />

                                <button type='button' className={delButCss}
                                onClick={handleAdd}
                                >
                                    <span>Add</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    export default AddClass