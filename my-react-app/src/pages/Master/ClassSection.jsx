
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ClassSection(){
    const [classSection, setClassSection]= useState(["a", "b"])
    const [newGroup, setNewGroup]= useState("")
    const [newSearch, setNewSearch]= useState("")
    const navigate= useNavigate();

    // Delete Function
    const handleDelete = (indexToDelete) => {
        const updatedList = classSection.filter((_, index) => index !== indexToDelete);
        setClassSection(updatedList);
    };

    // Add function 
    const handleAdd = () => {
        if (newGroup.trim() !== "") {
            // Add new string to array and clear input field
            setClassSection([...classSection, newGroup]); 
            setNewGroup(""); 
        }
    }

    // Search function 
    const handleSearch= () => {
        if (newSearch.trim() !== ""){
            const searchlist = classSection.filter((x) => x.toUpperCase() === newSearch.toUpperCase());
            setClassSection(searchlist);
            setNewSearch("")
        }
    }
    const delButCss="bg-red-400 px-4 py-2 rounded-lg text-white hover:bg-red-500 active:shadow-lg my-1"
    const trCss="odd:bg-white even:bg-red-50 hover:bg-red-100 text-sm text-gray-700"
    return(
        <div>
            <div className="bg-white rounded-xl lg:text-xl">
                <div className="border-b-2 px-2">
                    <div className="flex items-center lg:py-4 justify-between gap-2">
                    <h2 className="font-semibold text-gray-700">Class Section List</h2>
                    <div className="flex flex-row gap-2">
                        <div className="flex justify-center items-center gap-2 px-2 border hover:border-gray-500 rounded-xl  hover:shadow-lg">
                            <CiSearch />
                            <input type="text"
                            placeholder="Search..."
                            className="focus:outline-none w-full"
                            value={newSearch}
                            onChange={(e)=> setNewSearch(e.target.value)}
                            />
                        </div>
                        <button className="flex items-center gap-2 border border-gray-300 bg-red-400 text-white p-2 rounded-xl hover:bg-red-500 active:shadow-lg"
                        onClick={handleSearch}
                        >
                            <CiFilter />
                            <p>Filter</p>
                        </button>
                    </div>
                </div>
                </div>
                <div className="p-2">
                <div className="max-h-96 min-h-80 border border-gray-300 rounded-2xl overflow-auto">
                    <table className="min-w-full">
                        <thead className="sticky top-0  border-b-2 bg-gray-600 text-white">
                            <tr>
                                <th className="font-semibold">S.No</th>
                                <th className="font-semibold">Name</th>
                                <th className="font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {classSection.map((x, index) => (
                                <tr 
                                key={index}
                                className={trCss}>
                                    <td>{index+1}</td>
                                    <td>{x.toUpperCase()}</td>
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

                <div className="border-t-2 border-gray-200 ">
                    <h2 className="font-semibold text-gray-700 px-2">Cantrole Box</h2>
                    <div className="flex justify-between gap-2 p-2">
                        <button className={delButCss}
                        onClick={()=> navigate(-1)}
                        >
                            <span>Go Back</span>
                        </button>

                        <div className="flex gap-2">
                            <input type="text" 
                            name="sectionGrup"
                            placeholder="Class Section"
                            value={newGroup}
                            className="border hover:border-gray-500 hover:shadow-lg focus:outline-none rounded-lg my-1 px-2 w-full"
                            onChange={(e) => setNewGroup(e.target.value)}
                            />

                            <button className={delButCss}
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
export default ClassSection;