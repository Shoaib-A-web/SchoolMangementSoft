
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";

// import context
import { AuthContext } from "../context/AuthContext";


function Student(){
    const { totel } = useContext(AuthContext);

    const navigate= useNavigate();  
    
    // data of students
    const students = totel.studentList;
   
    // search inputs states
    const [searchName, setSearchName] = useState("");
    const [searchRoll, setSearchRoll] = useState("");
    const [searchClass, setSearchClass] = useState("");

    // logic for serching
    useEffect(() => {
        const result = students.filter((std) => {
            return (
            (searchName === "" || std.name.toLowerCase().includes(searchName.toLowerCase())) &&
            (searchRoll === "" || std.roll.includes(searchRoll)) &&
            (searchClass === "" || std.class.includes(searchClass))
            );
        });

        setFilteredStudents(result);

    }, [searchName, searchRoll, searchClass]);

    //final sutdent data
    const [filteredStudents, setFilteredStudents] = useState(students);

    // editable states
    const [editCell, setEditCell] = useState({ row: null, column: null });
    const [studentsData, setStudentsData] = useState(students);

    const tableclass="w-full table-auto divide-y divide-gray-400 rounded-2 text-xs md:text-sm text-center"
    const theadclass="sticky top-0 w-full"
    const thclass=" px-4 py-2 font-medium text-center text-white bg-gray-600"
    const tbodyclass="divide-y divide-gray-300"
    const trclass="hover:bg-red-100 odd:bg-white even:bg-red-50"
    const tdclass="px-2 py-1 text-gray-700"
    return(<div className="bg-white p-3 rounded-lg shadow-xl">
        
        <div>
            <h2 className="text-2xl pb-4 text-gray-700 font-semibold">Student List</h2>
        </div>
        <div className="h-96 overflow-x-auto overflow-y-auto  rounded-lg border-2 border-gray-300">
            <table className={tableclass}>
                <thead className={theadclass}>
                    <tr className={trclass}>
                        <th className={thclass}>S.NO</th>
                        <th className={thclass}>Date</th>
                        <th className={thclass}>Image</th>
                        <th className={thclass}>S.id</th>
                        <th className={thclass}>Addmition No.</th>
                        <th className={thclass}>Name</th>
                        <th className={thclass}>Gender</th>
                        <th className={thclass}>Date of birth</th>
                        <th className={thclass}>Class</th>
                        <th className={thclass}>Section</th>
                        <th className={thclass}>Roll No.</th>
                        <th className={thclass}>Father Name</th>
                        <th className={thclass}>Father occupation</th>
                        <th className={thclass}>Full details</th>
                    </tr>
                </thead>
                <tbody className={tbodyclass}>
                    {filteredStudents.map((std, index) => (
                        <tr key={std.id} className={trclass}>
                            <td className={tdclass}>{index + 1}</td>
                            <td className={tdclass}>{std.date}</td>
                            <td className={tdclass}>
                                <img className="size-10 rounded-full" src={std.img} alt="std"/>
                            </td>
                            <td className={tdclass}>{std.id}</td>
                            <td className={tdclass}>{std.admission}</td>
                            <td
                                onDoubleClick={() => setEditCell({ row: index, column: "name" })}
                                className={tdclass}
                                >
                                {editCell.row === index && editCell.column === "name" ? (
                                    <input
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].name}
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].name = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() => setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.name
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "gender" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "gender" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].gender}
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].gender = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.gender
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "dob" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "dob" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].dob}
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].dob = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.dob
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "class" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "class" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].class}
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].class = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.class
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "section" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "section" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].section}
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].section = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.section
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "roll" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "roll" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].roll}
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].section = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.roll
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "father" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "father" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].father   }
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].section = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.father
                                )}
                            </td>
                            <td 
                                onDoubleClick={() => setEditCell({ row: index, column: "occupation" })}
                                className={tdclass}
                                > 

                                {editCell.row === index && editCell.column === "occupation" ?  (
                                    <input 
                                    className="p-2 border-2 rounded-md text-center"
                                    value={studentsData[index].occupation   }
                                    onChange={(e) => {
                                        const updated = [...studentsData];
                                        updated[index].section = e.target.value;
                                        setStudentsData(updated);
                                    }}
                                    onBlur={() =>  setEditCell({ row: null, column: null })}
                                    />
                                ) : (
                                    std.occupation
                                )}
                            </td>
                            <td className={tdclass}>
                                {editCell.row === index ? (
                                    <button 
                                    className="px-6 py-2 text-gray-500 border-2 border-red-500 hover:text-white rounded hover:bg-red-500"
                                    onClick={() => setEditRow(null)}>Update</button>
                                ) : (
                                    <button
                                        onClick={()=> navigate(`/studentdetails/${std.id}`)}
                                        className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                                    >Details</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="flex flex-wrap gap-4 justify-between min-h-14 mt-8 p-4 rounded-lg border-2 border-gray-300">
            <input 
            type="text" 
            name="s_name"
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Student Name"
            className="w-full md:w-auto p-2 rounded-lg  border-2 border-gray-400"
            />
            <input 
            type="number" 
            onChange={(e) => setSearchRoll(e.target.value)}
            name="s_roll"
            placeholder="Student Roll"
            className="w-full md:w-auto p-2 rounded-lg border-2 border-gray-400"

            />
            <input 
            type="number" 
            name="class"
            onChange={(e) => setSearchClass(e.target.value)}
            placeholder="Student Class"
            className="w-full md:w-auto p-2 rounded-lg border-2 border-gray-400"

            />
            <button
            className="p-2 bg-red-400 rounded-lg text-white hover:bg-red-500 w-full"
            
            >Search</button>
        </div>

    </div>)    
}


export default Student