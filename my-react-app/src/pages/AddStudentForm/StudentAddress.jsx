import { useState } from "react";

function StudentAddress(){
    const [input, setInput]=useState({
        studentguardian:"",
        guardianRelation:"",
        presentAdd:"",
        mpermanentadd:"",
        district:"",
        area:"",
        state:"",
        pin:"",
    })
    
    const handleChange = (e) => {
    const { name, value } = e.target;

        setInput(prev => ({...prev,[name]: value}));
    };

    const preinput= "flex justify-between"
    const preinput2="flex flex-col md:w-1/2"
    const labelforinp= "font-semibold text-gray-700"
    const inputcss="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"
    
    return(<div className="flex flex-col gap-4 text-sm lg:text-xl">
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className={preinput2}>
                <label className={labelforinp} htmlFor="studentguardian">Guardian</label>
                <input
                type="text"
                className={inputcss}
                id="studentguardian"
                name="studentguardian"
                onChange={handleChange}
                value={input.studentguardian}
                placeholder="Guardian Name"
                />
            </div>
            <div className={preinput2}>
                <label className={labelforinp} htmlFor="guardianRelation">Relation With Guardian</label>
                <input
                type="text"
                className={inputcss}
                id="guardianRelation"
                name="guardianRelation"
                onChange={handleChange}
                value={input.guardianRelation}
                placeholder="Relation With Guardian"
                />
            </div>
        </div>
        <div className="flex flex-col">
            <label className={labelforinp} htmlFor="presentAdd">Present Address</label>
            <textarea name="presentAdd" onChange={handleChange} value={input.presentAdd} id="presentAdd" placeholder="Present Addresss"
            className={inputcss}></textarea>
        </div>
        <div className="flex flex-col">
            <div className="flex gap-2">
                <label className={labelforinp} htmlFor="mpermanentadd">Permanent Address</label> 
                <label className={labelforinp} htmlFor="msameas"><input id="msameas" type="checkbox" className={inputcss}></input>Same as above</label>
            </div>
            <textarea name="mpermanentadd" onChange={handleChange} value={input.mpermanentadd} id="mpermanentadd" placeholder="Permanent Address" className={inputcss}></textarea>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:divide-x-4">
            <div className=" flex flex-col gap-2 md:w-1/2 md:pr-6 mb-4">
                <div className={preinput}>
                    <label htmlFor="district"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >District</label>
                    <select 
                    name="district" 
                    onChange={handleChange}
                    value={input.district}
                    id="district"
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select District</option>
                        <option value="Dhanbad">Dhanbad</option>
                        <option value="Bokaro">Bokaro</option>
                    </select>
                </div>
                <div className={preinput}>
                    <label htmlFor="area"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Area</label>
                    <select 
                    name="area" 
                    onChange={handleChange}
                    value={input.area}
                    id="area"
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select Area</option>
                        <option value="Bhuli">Bhuli</option>
                        <option value="Kendua">Kendua</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 md:pl-6 mb-4">
                <div className={preinput}>
                    <label htmlFor="state"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >State</label>
                    <select 
                    name="state"
                    onChange={handleChange}
                    value={input.state} 
                    id="state"
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"

                    >
                        <option value="">Select State</option>
                        <option value="Jharkhane">Jharkhane</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Jharkhane">Jharkhane</option>
                    </select>
                </div>
                <div className={preinput}>
                    <label htmlFor="pin"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Pin Code</label>
                    <select 
                    name="pin" 
                    onChange={handleChange}
                    value={input.pin}
                    id="pin"
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select Pin Code</option>
                        <option value="828104">828104</option>
                        <option value="828102">828102</option>
                    </select>
                </div>
            </div>
        </div>
        
        
    </div>)
}
export default StudentAddress;