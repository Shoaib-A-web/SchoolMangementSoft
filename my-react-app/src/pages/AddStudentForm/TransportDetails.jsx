import { useState } from "react"

function TransportDetails( {errorCss, register, errors} ){

    const [ transport, setTransport ]= useState( false );

    function handleTransport (){
        setTransport( !transport );
    }
    
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
        <fieldset className={`border-2 border-gray-300 p-4 md:p-12 rounded-lg flex flex-col gap-2 md:gap-8 ${!transport? "bg-gray-300":""}`}>
            <legend>
                <input type="checkbox" onClick={handleTransport} id="enable" name="enable" className="size-5"></input>
                <label htmlFor="enable" className="px-2">{`${transport ? "Enable": "Disabled" }`}</label>
            </legend>
            <div className="flex flex-col md:flex-row justify-between">
                    <label htmlFor="busFee"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Select Bus Fee</label>
                        <select 
                        {...register('busFee',{
                            required: transport ? "Bus Fee is required" : false
                            
                        })}
                        disabled={!transport}
                        id="busFee"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 md:w-full"
                        >
                            <option value="">Bus Fee</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                        </select>
                        {errors.busFee && transport && <p className={errorCss}>{errors.busFee.message}</p>}  
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6">
                <div className={preinput}>
                    <label htmlFor="trinpNo"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Trip No</label>
                    <div  className="w-1/2">
                        <select 
                        { ...register('tripNo',{
                            required: transport ? "Trip No is required" : false

                        })}
                        disabled={!transport}
                        id="tripNo"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-full"
                        >
                            <option value="">Select Trip</option>
                            <option value="132">132</option>
                            <option value="4255">4255</option>
                        </select>
                        {errors.tripNo && transport && <p className={errorCss}>{errors.tripNo.message}</p>}
                    </div>
                </div>
                <div className={preinput}>
                    <label htmlFor="routeNo"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Route</label>
                    <div  className="w-1/2">
                        <select 
                        { ...register('routeNo',{
                            required: transport ? "Route No is required" : false
                        })}
                        disabled={!transport}
                        id="routeNo"
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-full"
                        >
                            <option value="">Select Route</option>
                            <option value="23">23</option>
                            <option value="34">34</option>
                        </select>
                        {errors.routeNo && transport && <p className={errorCss}>{errors.routeNo.message}</p>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6">
                <div className={preinput}>
                    <label htmlFor="vahicalNo"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Vahical No</label>
                    <div  className="w-1/2">
                        <select 
                        disabled={!transport}
                        id="vahicalNo"
                        {...register('vahicalNo',{
                            required: transport ? "Vahical No is required" : false

                        })}
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-full"
                        >
                            <option value="">Select Vahical No</option>
                            <option value="5215">5215</option>
                            <option value="7895">7895</option>
                        </select>
                        {errors.vahicalNo && transport && <p className={errorCss}>{errors.vahicalNo.message}</p>}
                    </div>
                </div>
                <div className={preinput}>
                    <label htmlFor="stopage"
                    className="font-semibold text-gray-700 md:w-1/2"
                    >Stopage</label>
                    <div  className="w-1/2">
                        <select 
                        disabled={!transport}
                        id="stopage"
                        {...register('stopage', {
                            required: transport ? "Stopage is required" : false
                        })}
                        className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-full"
                        >
                            <option value="">Select Stopage</option>
                            <option value="Dhanbad">Dhanbad</option>
                            <option value="Bokaro">Bokaro</option>
                        </select>
                        {errors.stopage && transport && <p className={errorCss}>{errors.stopage.message}</p>}
                    </div>
                </div>
            </div>
                
        </fieldset>
        <fieldset className="border-2 border-gray-300 p-4 rounded-lg flex flex-col lgflex-row gap-4">
            <legend className="font-semibold text-gray-600 px-2">Documents</legend>
            
                <div className={preinput2}>
                    <label className={labelforinp} htmlFor="studentAadhar"> Student Aadhar</label>
                    <input
                    className={inputcss}
                    type="file"
                    id="studentAadhar"
                    {...register('studentAadhar', {
                        required:"Student Aadhar is required"
                    })}
                    placeholder="Passing year"
                    />
                        {errors.studentAadhar && <p className={errorCss}>{errors.studentAadhar.message}</p>}

                </div>
                <div className="flex flex-col justify-between w-full">
                    <label htmlFor="studetParentRelation"
                    className="font-semibold text-gray-700"
                    >Relation with parent</label>
                    <select 
                    id="studetParentRelation"
                    {...register('studetParentRelation', {
                        required:"Relation with parent is required"
                    })}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 "
                    >
                        <option value="">Select Relation</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Other">Other</option>
                    </select>
                        {errors.studetParentRelation && <p className={errorCss}>{errors.studetParentRelation.message}</p>}

                </div>
                <div className={preinput2}>
                    <label className={labelforinp} htmlFor="parentAadhar"> Parent's Aadhar</label>
                    <input
                    type="file"
                    className={inputcss}
                    id="parentAadhar"
                    {...register('parentAadhar', {
                        required:"Parent's Aadha is required"
                    })}
                    />
                        {errors.parentAadhar && <p className={errorCss}>{errors.parentAadhar.message}</p>}

                </div>
            
        </fieldset>
    </div>
    )
}
export default TransportDetails;