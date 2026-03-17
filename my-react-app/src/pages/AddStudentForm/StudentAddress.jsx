
function StudentAddress({ errorCss, inputBoxCss, register, errors, getValues, setValue }){
    
    
    const handleSameAs = (e) => {
        const presentAdd= getValues('presentAdd');
        const sameAdd = e.target.checked;

        if (sameAdd) {
            setValue('permanentadd', presentAdd);
        } else {
            setValue('permanentadd', "");
            
        }
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
               {...register('studentguardian',{
                    required:"Guardian is required."
                })}
                placeholder="Guardian Name"
                />
                {errors.studentguardian && <p className={errorCss}>{errors.studentguardian.message}</p>}
            </div>
            <div className={preinput2}>
                <label className={labelforinp} htmlFor="guardianRelation">Relation With Guardian</label>
                <input
                type="text"
                className={inputcss}
                placeholder="Relation With Guardian"
                id="guardianRelation"
                {...register('guardianRelation',{
                    required:"Relation is required."
                })}
                />
                {errors.guardianRelation && <p className={errorCss}>{errors.guardianRelation.message}</p>}

            </div>
        </div>
        <div className="flex flex-col">
            <label className={labelforinp} htmlFor="presentAdd">Present Address</label>
            <textarea 
            className={inputcss}
            placeholder="Present Addresss"
            id="presentAdd" 
            {...register('presentAdd',{
                required:"Relation is required."
            })} 
            ></textarea>
            {errors.presentAdd && <p className={errorCss}>{errors.presentAdd.message}</p>}

        </div>
        <div className="flex flex-col">
            <div className="flex gap-2">
                <label className={labelforinp} htmlFor="mpermanentadd">Permanent Address</label> 
                <label className={labelforinp} htmlFor="ssameas">
                    <input 
                    id="ssameas" 
                    type="checkbox"
                    onClick={handleSameAs}
                    className={inputcss}
                    ></input>
                    Same as above
                    </label>
            </div>
            <textarea 
           {...register('permanentadd',{
                required:"Relation is required."
            })}
            id="permanentadd" 
            placeholder="Permanent Address" 
            className={inputcss}
            ></textarea>
            {errors.permanentadd && <p className={errorCss}>{errors.permanentadd.message}</p>}

        </div>
        <div className="flex flex-col md:flex-row justify-between md:divide-x-4">
            <div className=" flex flex-col gap-2 md:w-1/2 md:pr-6 mb-4">
                <div className={preinput}>
                    <label htmlFor="district"
                    className="font-semibold text-gray-700 w-full md:w-1/2"
                    >District</label>
                    <div className={`${inputBoxCss}`}>
                        <select 
                        {...register('district',{
                            required:"District is required."
                        })}
                        id="district"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-full"
                        >
                            <option value="">Select District</option>
                            <option value="Dhanbad">Dhanbad</option>
                            <option value="Bokaro">Bokaro</option>
                        </select>
                        {errors.district && <p className={errorCss}>{errors.district.message}</p>}
                    </div>
                </div>
                <div className={preinput}>
                    <label htmlFor="area"
                    className="font-semibold text-gray-700 w-full md:w-1/2"
                    >Area</label>
                    <div className={inputBoxCss}>
                        <select 
                        {...register('area',{
                            required:"Area is required."
                        })}
                        id="area"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2  w-full"
                        >
                            <option value="">Select Area</option>
                            <option value="Bhuli">Bhuli</option>
                            <option value="Kendua">Kendua</option>
                        </select>
                        {errors.area && <p className={errorCss}>{errors.area.message}</p>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 md:pl-6 mb-4">
                <div className={preinput}>
                    <label htmlFor="state"
                    className="font-semibold text-gray-700 w-full md:w-1/2"
                    >State</label>
                    <div className={inputBoxCss}>
                        <select 
                        {...register('state',{
                            required:"State is required."
                        })} 
                        id="state"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2  w-full"

                        >
                            <option value="">Select State</option>
                            <option value="Jharkhane">Jharkhane</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Jharkhane">Jharkhane</option>
                        </select>
                        {errors.state && <p className={errorCss}>{errors.state.message}</p>}
                    </div>

                </div>
                <div className={preinput}>
                    <label htmlFor="pin"
                    className="font-semibold text-gray-700 w-full md:w-1/2"
                    >Pin Code</label>
                    <div className={inputBoxCss}>
                        <select 
                        {...register('pin',{
                            required:"Pin Code is required."
                        })} 
                        id="pin"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2  w-full"
                        >
                            <option value="">Select Pin Code</option>
                            <option value="828104">828104</option>
                            <option value="828102">828102</option>
                        </select>
                        {errors.pin && <p className={errorCss}>{errors.pin.message}</p>}
                    </div>

                </div>
            </div>
        </div>
        
        
    </div>)
}
export default StudentAddress;