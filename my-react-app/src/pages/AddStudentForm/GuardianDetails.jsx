import { useState } from "react"

function GuardianDetails(){
    const [inputs, setInputs]= useState({
        //father detailes
        fname:"",
        fqualificatin:"",
        foccupation:"",
        fmobile:"",
        fwhatsapp:"",
        fincome:"",
        fmail:"",
        fpresentadd:"",
        fpermanentadd:"",
        //mother details
        mname:"",
        mqualificatin:"",
        moccupation:"",
        mmobile:"",
        mwhatsapp:"",
        mincome:"",
        mmail:"",
        mpresentadd:"",
        mpermanentadd:""
    })

    const handleChange= (e) => {    
        const name= e.target.name;
        const value= e.target.value;
        setInputs(values=>({...values,[name]:value} ))
    } 

    const preinput= "flex justify-between"
    const preinput2="flex flex-col"
    const labelforinp= "font-semibold text-gray-700"
    const inputcss="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"

    return(
        <div className="flex flex-col xl:flex-row justify-between gap-4">
            
            {/* first column of Guardian details */}
                <div className="text-sm lg:text-xl border-2 border-gray-300 rounded-lg p-2 lg:w-1/2">
                    <h2 className="text-xl pb-4 text-gray-600 font-bold">Father Details</h2>
                    
                <div className="flex flex-col md:flex-row">
                    {/* father details first column */}
                    <div className="flex flex-col md:w-1/2 gap-4 p-2">
                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fname">Name</label>
                            <input
                            className={inputcss}
                            id="fname"
                            type="text"
                            name="fname"
                            onChange={handleChange}
                            value={inputs.fname}
                            placeholder="Father Name"
                            ></input>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fqualificatin">Qualification</label>
                            <select name="fqualificatin" 
                            onChange={handleChange}
                            value={inputs.fqualificatin}
                            className={inputcss} id="fqualificatin">
                                <option value="none">None</option>
                                <option value="Matriculation">Matriculation</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post-Graduate">Post-Graduate</option>
                            </select>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="foccupation">Occupation</label>
                            <select name="foccupation" 
                            onChange={handleChange}
                            value={inputs.foccupation}
                            className={inputcss} id="foccupation">
                                <option value="none">None</option>
                                <option value="House Hold">House Hold</option>
                                <option value="Business">Business</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                    </div>
                    {/* father detaile second column */}
                    <div className="flex flex-col md:w-1/2 gap-4 p-2 ">
                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fmobile">Mobile No.</label>
                            <input
                            type="tel"
                            className={inputcss}
                            id="fmobile"
                            name="fmobile"
                            onChange={handleChange}
                            value={inputs.fmobile}
                            placeholder="Father Mobile"
                            />
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fwhatsapp">WhatsApp No.</label>
                            <input
                            type="tel"
                            className={inputcss}
                            id="fwhatsapp"
                            name="fwhatsapp"
                            onChange={handleChange}
                            value={inputs.fwhatsapp}
                            placeholder="Father WhatsApp"
                            />
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fincome">Monthly Income(Rs.)</label>
                            <input
                            type="number"
                            className={inputcss}
                            id="fincome"
                            name="fincome"
                            onChange={handleChange}
                            value={inputs.fincome}
                            placeholder="Monthly Income"></input>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col gap-4">
                        <label className={labelforinp} htmlFor="fmail">E-mail ID</label>
                        <input type="mail"
                        name="fmail"
                        onChange={handleChange}
                        value={inputs.fmail} 
                        id="fmail"
                        placeholder="E-mail Id"
                        className={inputcss}
                        />
                        <br />
                    </div>

                    <div className={preinput2}>
                        <label className={labelforinp} htmlFor="fpresentadd">Present Address</label>
                        <textarea name="fpresentadd" 
                        onChange={handleChange}
                        value={inputs.fpresentadd}
                        id="fpresentadd" placeholder="Present Address" className={inputcss}></textarea>
                    </div><br />

                    <div className={preinput2}>
                        <div className="flex gap-2">
                            <label className={labelforinp} htmlFor="fpermanentadd">Permanent Address</label> 
                            <label className={labelforinp} htmlFor="fsameas"><input id="fsameas" type="checkbox" className={inputcss}></input>Same as above</label>
                        </div>
                        <textarea name="fpermanentadd" 
                        onChange={handleChange}
                        value={inputs.fpermanentadd}
                        id="fpermanentadd" placeholder="Permanent Address" className={inputcss}></textarea>
                    </div>

                
                </div>
            

            <div className="flex  flex-col xl:flex-row justify-around text-sm lg:text-xl gap-4 lg:w-1/2">
                {/* first column of Guardian details */}
                <div className="w-full border-2 border-gray-300 rounded-lg p-2">
                    <h2 className="text-xl pb-4 text-gray-600 font-bold">Mother Details</h2>
                    
                <div className="flex flex-col md:flex-row">
                    {/* Mother details first column */}
                    <div className="flex flex-col md:w-1/2 gap-4 p-2">
                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mname">Name</label>
                            <input
                            className={inputcss}
                            id="mname"
                            type="text"
                            name="mname"
                            onChange={handleChange}
                            value={inputs.mname}
                            placeholder="Mother Name"
                            ></input>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mqualificatin">Qualification</label>
                            <select name="mqualificatin" 
                            onChange={handleChange}
                            value={inputs.mqualificatin}
                            className={inputcss} id="mqualificatin">
                                <option value="none">None</option>
                                <option value="Matriculation">Matriculation</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post-Graduate">Post-Graduate</option>
                            </select>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="moccupation">Occupation</label>
                            <select name="moccupation"
                            onChange={handleChange}
                            value={inputs.moccupation}
                            className={inputcss} id="moccupation">
                                <option value="none">None</option>
                                <option value="House Hold">House Hold</option>
                                <option value="Business">Business</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                    </div>
                    {/* mother detaile second column */}
                    <div className="flex flex-col md:w-1/2 gap-4 p-2 ">

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mmobile">Mobile No.</label>
                            <input
                            type="tel"
                            className={inputcss}
                            id="mmobile"
                            name="mmobile"
                            onChange={handleChange}
                            value={inputs.mmobile}
                            placeholder="Mother Mobile"
                            />
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mwhatsapp">WhatsApp No.</label>
                            <input
                            type="tel"
                            className={inputcss}
                            id="mwhatsapp"
                            name="mwhatsapp"
                            onChange={handleChange}
                            value={inputs.mwhatsapp}
                            placeholder="Mother WhatsApp"
                            />
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mincome">Monthly Income(Rs.)</label>
                            <input
                            type="number"
                            className={inputcss}
                            id="mincome"
                            name="mincome"
                            onChange={handleChange}
                            value={inputs.mincome}
                            placeholder="Monthly Income"></input>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col gap-4">
                        <label className={labelforinp} htmlFor="mmail">E-mail ID</label>
                        <input type="mail"
                        name="mmail"
                        onChange={handleChange}
                        value={inputs.mmail}
                        id="mmail"
                        placeholder="E-mail Id"
                        className={inputcss}
                        /><br />
                    </div>

                    <div className={preinput2}>
                        <label className={labelforinp} htmlFor="mpresentadd">Present Address</label>
                        <textarea name="mpresentadd"
                        onChange={handleChange}
                        value={inputs.mpresentadd}
                        id="mpresentadd" placeholder="Present Address" className={inputcss}></textarea>
                    </div><br />

                    <div className={preinput2}>
                        <div className="flex gap-2">
                            <label className={labelforinp} htmlFor="mpermanentadd">Permanent Address</label> 
                            <label className={labelforinp} htmlFor="msameas"><input id="msameas" type="checkbox" className={inputcss}></input>Same as above</label>
                        </div>
                        <textarea name="mpermanentadd" 
                        onChange={handleChange}
                        value={inputs.mpermanentadd}
                        id="mpermanentadd" placeholder="Permanent Address" className={inputcss}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GuardianDetails;