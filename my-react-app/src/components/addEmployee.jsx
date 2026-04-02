function AddEmployee(){
    return(<>
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-8 bg-white p-4 rounded-xl md:w-1/2" > 
                <button className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500">Add Staff</button>
                <button className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500">Add Teacher</button>
                <button className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500">Add Guard</button>
            </div>
        </div>
    </>);
}
export default AddEmployee;