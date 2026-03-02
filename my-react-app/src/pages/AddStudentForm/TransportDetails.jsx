import { useState } from "react"

function TransportDetails(){
    
    const [input, setInput]= useState({
        parentAadhar:"",
        studetParentRelation:"",
        studentAadhar:"",
        stopage:"",
        vahicalNo:"",
        routeNo:"",
        trinpNo:"",
        busFee:"",
    });

    const handleChange = (e) => {
    const { name, value } = e.target;

        setInput(prev => ({...prev,[name]: value}));
    };
    const preinput= "flex justify-between md:w-1/2"
    const preinput2="flex flex-col md:w-1/2"
    const labelforinp= "font-semibold text-gray-700"
    const inputcss="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"
    
    return(
    <div className="flex flex-col gap-4 text-sm lg:text-xl mb-4">
        <fieldset className="border-2 border-gray-300 p-4 md:p-12 rounded-lg flex flex-col gap-2 md:gap-8">
            <legend>
                <input type="checkbox" id="enable" name="enable" className="size-5"></input>
                <label htmlFor="enable" className="px-2">Enable</label>
            </legend>
            <div className="flex flex-col md:flex-row justify-between">
                    <label htmlFor="busFee"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Select Bus Fee</label>
                    <select 
                    name="busFee" 
                    id="busFee"
                    onChange={handleChange}
                    value={input.busFee}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 md:w-1/2"
                    >
                        <option value="">Bus Fee</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                    </select>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6">
                <div className={preinput}>
                    <label htmlFor="trinpNo"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Trip No</label>
                    <select 
                    name="trinpNo" 
                    id="trinpNo"
                    onChange={handleChange}
                    value={input.trinpNo}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select Trip</option>
                        <option value="132">132</option>
                        <option value="4255">4255</option>
                    </select>
                </div>
                <div className={preinput}>
                    <label htmlFor="routeNo"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Route</label>
                    <select 
                    name="routeNo" 
                    id="routeNo"
                    onChange={handleChange}
                    value={input.routeNo}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select Route</option>
                        <option value="23">23</option>
                        <option value="34">34</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6">
                <div className={preinput}>
                    <label htmlFor="vahicalNo"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Vahical No</label>
                    <select 
                    name="vahicalNo" 
                    id="vahicalNo"
                    onChange={handleChange}
                    value={input.vahicalNo}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select Vahical No</option>
                        <option value="5215">5215</option>
                        <option value="7895">7895</option>
                    </select>
                </div>
                <div className={preinput}>
                    <label htmlFor="stopage"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Stopage</label>
                    <select 
                    name="stopage" 
                    id="stopage"
                    onChange={handleChange}
                    value={input.stopage}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select Stopage</option>
                        <option value="Dhanbad">Dhanbad</option>
                        <option value="Bokaro">Bokaro</option>
                    </select>
                </div>
            </div>
                
        </fieldset>
        <fieldset className="border-2 border-gray-300 p-4 rounded-lg flex flex-col lgflex-row gap-4">
            <legend className="font-semibold text-gray-600 px-2">Documents</legend>
            
                <div className={preinput2}>
                    <label className={labelforinp} htmlFor="studentAadhar"> Student Aadhar</label>
                    <input
                    type="file"
                    className={inputcss}
                    id="studentAadhar"
                    name="studentAadhar"
                    onChange={handleChange}
                    placeholder="Passing year"
                    />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <label htmlFor="studetParentRelation"
                    className="font-semibold text-gray-700"
                    >Relation with parent</label>
                    <select 
                    name="studetParentRelation" 
                    id="studetParentRelation"
                    onChange={handleChange}
                    value={input.studetParentRelation}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 "
                    >
                        <option value="">Select Relation</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={preinput2}>
                    <label className={labelforinp} htmlFor="parentAadhar"> Parent's Aadhar</label>
                    <input
                    type="file"
                    className={inputcss}
                    id="parentAadhar"
                    name="parentAadhar"
                    onChange={handleChange}
                    />
                </div>
            
        </fieldset>
    </div>
    )
}
export default TransportDetails;