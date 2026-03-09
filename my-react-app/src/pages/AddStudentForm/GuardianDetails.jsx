import { useState } from "react"
const inputBoxCss= "w-auto"
// inputBoxCss
function GuardianDetails({errorCss, register, errors, getValues, setValue, watch}){
    
    const handleSameAs = (checkField, presentField, permanentField) => {

        const checked = getValues(checkField);

        if (checked) {
            const address = getValues(presentField);
            setValue(permanentField, address);
        } else {
            setValue(permanentField, "");
        }
    };
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
    const inputcss=" w-full border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"

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
                            <div className={inputBoxCss}>
                                <input
                                className={inputcss}
                                id="fname"
                                type="text"
                                placeholder="Father Name"
                                {...register('fname',{
                                    required:"Father Name is required."
                                })}
                                ></input>
                                {errors.fname && <p className={errorCss}>{errors.fname.message}</p>}
                            </div>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fqualificatin">Qualification</label>
                            <div className={inputBoxCss}>
                                <select 
                                {...register('fqualificatin',{
                                    required:"Qualification is required."
                                })}
                                className={inputcss} id="fqualificatin">
                                    <option value="none">None</option>
                                    <option value="Matriculation">Matriculation</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Post-Graduate">Post-Graduate</option>
                                </select>
                                {errors.fqualificatin && <p className={errorCss}>{errors.fqualificatin.message}</p>}

                            </div>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="foccupation">Occupation</label>
                            <div className={inputBoxCss}>
                                <select 
                                {...register('foccupation',{
                                    required:"Occupation is required."
                                })}
                                className={inputcss} id="foccupation">
                                    <option value="none">None</option>
                                    <option value="House Hold">House Hold</option>
                                    <option value="Business">Business</option>
                                    <option value="Entrepreneur">Entrepreneur</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                    <option value="Employee">Employee</option>
                                </select>
                                {errors.foccupation && <p className={errorCss}>{errors.foccupation.message}</p>}
                            </div>
                        </div>

                    </div>
                    {/* father detaile second column */}
                    <div className="flex flex-col md:w-1/2 gap-4 p-2 ">
                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fmobile">Mobile No.</label>
                            <div className={inputBoxCss}>
                                <input
                                type="tel"
                                className={inputcss}
                                id="fmobile"
                                placeholder="Father Mobile"
                                {...register('fmobile',{
                                    required:"Mobile No is required."
                                })}
                                />
                                {errors.fmobile && <p className={errorCss}>{errors.fmobile.message}</p>}
                            </div>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fwhatsapp">WhatsApp No.</label>
                            <div className={inputBoxCss}>
                                <input
                                type="tel"
                                className={inputcss}
                                id="fwhatsapp"
                                placeholder="Father WhatsApp"
                                {...register('fwhatsapp',{
                                    required:"WhatsApp No is required."
                                })}
                                />
                                {errors.fwhatsapp && <p className={errorCss}>{errors.fwhatsapp.message}</p>}
                            </div>
                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="fincome">Monthly Income(Rs.)</label>
                            <div className={inputBoxCss}>
                                <input
                                type="number"
                                className={inputcss}
                                placeholder="Monthly Income"
                                id="fincome"
                                {...register('fincome',{
                                    required:"Monthly Income is required."
                                })}
                                ></input>
                                {errors.fincome && <p className={errorCss}>{errors.fincome.message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col gap-4">
                        <label className={labelforinp} htmlFor="fmail">E-mail ID</label>
                            <div className={inputBoxCss}>
                                <input type="mail"
                                {...register('fmail',{
                                    required:"E-mail is required."
                                })} 
                                id="fmail"
                                placeholder="E-mail Id"
                                className={inputcss}
                                />
                                {errors.fmail && <p className={errorCss}>{errors.fmail.message}</p>}
                            </div>
                        <br />
                    </div>

                    <div className={preinput2}>
                        <label className={labelforinp} htmlFor="fpresentadd">Present Address</label>
                            <div className={inputBoxCss}>
                                <textarea
                                {...register('fpresentadd',{
                                    required:"Present Address is required."
                                })} 
                                id="fpresentadd" placeholder="Present Address" className={inputcss}></textarea>
                                {errors.fpresentadd && <p className={errorCss}>{errors.fpresentadd.message}</p>}
                            </div>
                    </div><br />

                    <div className={preinput2}>
                        <div className="flex gap-2">
                            <label className={labelforinp} htmlFor="fpermanentadd">Permanent Address</label> 
                            <label className={labelforinp} htmlFor="fsameas">
                            
                                <input  
                                {...register('fsameas',{ onChange: () => handleSameAs("fsameas","fpresentadd","fpermanentadd") })} 
                                id="fsameas"
                                type="checkbox"
                                className='border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 mx-4'></input>
                                Same as above
                                </label>
                            

                        </div>
                            <textarea 
                            {...register('fpermanentadd',{
                                required:"Present Address is required."
                            })} 
                            id="fpermanentadd" placeholder="Permanent Address" className={inputcss}></textarea>
                            {errors.fpermanentadd && <p className={errorCss}>{errors.fpermanentadd.message}</p>}

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
                            placeholder="Mother Name"
                            type="text"
                            {...register('mname',{
                                required:"Name is required."
                            })} 
                            ></input>
                            {errors.mname && <p className={errorCss}>{errors.mname.message}</p>}

                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mqualificatin">Qualification</label>
                            <select 
                            {...register('mqualificatin',{
                                required:"Qualification is required."
                            })} 
                            className={inputcss} id="mqualificatin">
                                <option value="none">None</option>
                                <option value="Matriculation">Matriculation</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Post-Graduate">Post-Graduate</option>
                            </select>
                            {errors.mqualificatin && <p className={errorCss}>{errors.mqualificatin.message}</p>}

                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="moccupation">Occupation</label>
                            <select 
                            {...register('moccupation',{
                                required:"Occupation is required."
                            })}
                            className={inputcss} id="moccupation">
                                <option value="none">None</option>
                                <option value="House Hold">House Hold</option>
                                <option value="Business">Business</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Employee">Employee</option>
                            </select>
                            {errors.moccupation && <p className={errorCss}>{errors.moccupation.message}</p>}

                        </div>

                    </div>
                    {/* mother detaile second column */}
                    <div className="flex flex-col md:w-1/2 gap-4 p-2 ">

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mmobile">Mobile No.</label>
                            <input
                            type="tel"
                            className={inputcss}
                            placeholder="Mother Mobile"
                            id="mmobile"
                            {...register('mmobile',{
                                required:"Mobile No is required."
                            })}
                            />
                            {errors.mmobile && <p className={errorCss}>{errors.mmobile.message}</p>}

                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mwhatsapp">WhatsApp No.</label>
                            <input
                            type="tel"
                            className={inputcss}
                            placeholder="Mother WhatsApp"
                            id="mwhatsapp"
                            {...register('mwhatsapp',{
                                required:"WhatsApp No is required."
                            })}
                            />
                            {errors.mwhatsapp && <p className={errorCss}>{errors.mwhatsapp.message}</p>}

                        </div>

                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="mincome">Monthly Income(Rs.)</label>
                            <input
                            type="number"
                            className={inputcss}
                            placeholder="Monthly Income"
                            id="mincome"
                            {...register('mincome',{
                                required:"Monthly Income is required."
                            })}
                            ></input>
                            {errors.mincome && <p className={errorCss}>{errors.mincome.message}</p>}

                        </div>
                    </div>
                </div>
                    <div className="flex flex-col gap-4">
                        <label className={labelforinp} htmlFor="mmail">E-mail ID</label>
                        <input 
                        type="mail"
                        {...register('mmail',{
                            required:"E-mail ID is required."
                        })}
                        id="mmail"
                        placeholder="E-mail Id"
                        className={inputcss}
                        />
                            {errors.mmail && <p className={errorCss}>{errors.mmail.message}</p>}
                        <br />
                    </div>

                    <div className={preinput2}>
                        <label className={labelforinp} htmlFor="mpresentadd">Present Address</label>
                        <textarea 
                        {...register('mpresentadd',{
                            required:"Present Address is required."
                        })}
                        id="mpresentadd" placeholder="Present Address" className={inputcss}></textarea>
                    </div>
                        {errors.mpresentadd && <p className={errorCss}>{errors.mpresentadd.message}</p>}
                    <br />

                    <div className={preinput2}>
                        <div className="flex gap-2">
                            <label className={labelforinp} htmlFor="mpermanentadd">Permanent Address</label> 
                            <label className={labelforinp} htmlFor="msameas">
                                <input 
                                {...register('msameas',{ onChange: () => handleSameAs("msameas","mpresentadd","mpermanentadd") })}
                                id="msameas" 
                                type="checkbox" 
                                className=" border mx-4 border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"
                                ></input>
                                Same as above
                                </label>

                        </div>
                        <textarea 
                        {...register('mpermanentadd',{
                            required:"Permanent Address is required."
                        })}
                        id="mpermanentadd" placeholder="Permanent Address" className={inputcss}></textarea>
                        {errors.mpermanentadd && <p className={errorCss}>{errors.mpermanentadd.message}</p>}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default GuardianDetails;