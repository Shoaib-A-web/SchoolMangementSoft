import React, { useState } from "react"

function PreviousStd({ errorCss, register, errors}){
    const [input, setInput]= useState({
        familyschoolRelation:"",
        whatRelation:"",
        previousSchoolName:"",
        tcNo:"",
        leavedate:"",
        affilated:"",
        medium:"",
        lastClass:"",
        rollno:"",
        marks:"",
        passingYear:""


    });
    const [ familyAccociation, setFamilyAccociation ] = useState( false);
    const [preCoalification, setPreCoalification ] = useState(false);

    function handleFamilyAccociation(e){
        const association = e.target.value;
        if (association === "Yes"){
            setFamilyAccociation(true);
        } else {
            setFamilyAccociation(false)
        }
    }
    
    function handlePreColification (e){
        setPreCoalification(e.target.checked);
    }


    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput(prev => ({...prev,[name]: value}));
    };

    const preinput= "flex flex-col justify-between"
    const preinput2="flex flex-col w-full"
    const labelforinp= "font-semibold text-gray-700"
    const inputcss="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"
    
    return(
    <div className="flex flex-col gap-4 text-sm lg:text-xl">
        <div className={preinput}>
            <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <div>
                    <label htmlFor="familyschoolRelation"
                    className="font-semibold text-gray-700 md:w-1/2">
                    <span>Whether any member of the family was/is associated with school </span>                  
                    </label>
                    <select 
                    onChange={handleFamilyAccociation}
                    id="familyschoolRelation"
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className={preinput2}>
                    <label className={labelforinp} htmlFor="whatRelation">If yes, Specify Name With Details</label>
                    <input
                    {...register('whatRelation',{
                        required: familyAccociation ? "Bus Fee is required" : false
                        
                    })}
                    type="text"
                    className={`${inputcss} ${!familyAccociation ? "bg-gray-200": ""}`}
                    id="whatRelation"
                    placeholder="Guardian acceotion with School"
                    disabled={!familyAccociation}
                    />
                        {errors.whatRelation && familyAccociation   && <p className={errorCss}>{errors.whatRelation.message}</p>}  

                </div>
            </div>
            <div>
                <fieldset className={`border-2 border-gray-300 p-4 mb-4 md:p-12 rounded-lg flex flex-col gap-2 md:gap-8 ${!preCoalification ? "bg-gray-200": ""}`}>
                    <legend className="flex items-center">
                        <h3 className=" underline font-semibold p-4">Particulars of previous studies if any </h3>
                        <input type="checkbox" onClick={handlePreColification}  id="enable"  className="size-5"></input>


                    </legend>
                    <div className="p-4 flex flex-col gap-4">
                        <div className={preinput2}>
                            <label className={labelforinp} htmlFor="previousSchoolName">A:- Name & Address of school</label>
                            <input
                            type="text"
                            disabled= {!preCoalification ? true : false}
                            className={inputcss}
                            id="previousSchoolName"
                             {...register('previousSchoolName',{
                                required: preCoalification ? "Name & Address of school is required"  : false
                            })}
                            placeholder="Previus School Name"
                            />
                            {errors.previousSchoolName && preCoalification && <p className={errorCss}>{errors.previousSchoolName.message}</p>}  
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className={preinput2}>
                                    <label className={labelforinp} htmlFor="tcNo">B:- Transfer Certificate No./ School Leaving Certificate No.</label>
                                    <input
                                    type="number"
                                    className={inputcss}
                                    disabled= {!preCoalification ? true : false}
                                    id="tcNo"
                                    {...register('tcNo',{
                                        required: "T.C No. or S.L.C No. is required" 
                                    })}
                                    placeholder="T.C No. or S.L.C No."
                                    />
                                    {errors.tcNo && preCoalification && <p className={errorCss}>{errors.tcNo.message}</p>}  
                                </div>
                                <div>
                                    <label className={labelforinp} htmlFor="leavedate">C:- Date of issuance</label>
                                    <input
                                    type="date"
                                    disabled= {!preCoalification ? true : false}
                                    className={inputcss}
                                    id="leavedate"
                                    {...register('leavedate',{
                                        required: "Date of issuance is required" 
                                    })}
                                    />
                                    {errors.leavedate && preCoalification && <p className={errorCss}>{errors.leavedate.message}</p>}  

                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div >
                                    <div className={preinput2}>
                                        <label className={labelforinp} htmlFor="affilated">D:- Affilated to</label>
                                        <input
                                        type="text"
                                        disabled= {!preCoalification ? true : false}
                                        className={inputcss}
                                        id="affilated"
                                        {...register('affilated',{
                                            required: "Affilated is required" 
                                        })}
                                        placeholder="Affliation From"
                                        />
                                        {errors.affilated && preCoalification && <p className={errorCss}>{errors.affilated.message}</p>}  
                                    </div>
                                    <div className={preinput2}>
                                        <label className={labelforinp} htmlFor="medium">E:- Medium of school</label>
                                        <input
                                        type="text"
                                        disabled= {!preCoalification ? true : false}
                                        className={inputcss}
                                        id="medium"
                                        {...register('medium',{
                                            required: "Medium of school is required" 
                                        })}
                                        placeholder="Mediun"
                                        />
                                        {errors.medium && preCoalification && <p className={errorCss}>{errors.medium.message}</p>}  
                                    </div>
                                </div>
                                <div >
                                    <div className={preinput2}>
                                        <label className={labelforinp} htmlFor="lastClass">F:- Class in which Reading</label>
                                        <input
                                        type="text"
                                        disabled= {!preCoalification ? true : false}
                                        className={inputcss}
                                        id="lastClass"
                                        {...register('lastClass',{
                                            required: "Class is required" 
                                        })}
                                        placeholder="Last Class"
                                        />
                                        {errors.lastClass && preCoalification && <p className={errorCss}>{errors.lastClass.message}</p>}  
                                    </div>
                                    <div className={preinput2}>
                                        <label className={labelforinp} htmlFor="rollno">G:- Roll No.</label>
                                        <input
                                        type="number"
                                        disabled= {!preCoalification ? true : false}
                                        className={inputcss}
                                        id="rollno"
                                        {...register('rollno',{
                                            required: "Roll No is required" 
                                        })}
                                        placeholder="Last Roll No."
                                        />
                                        {errors.rollno && preCoalification && <p className={errorCss}>{errors.rollno.message}</p>}  
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className={preinput2}>
                                    <label className={labelforinp} htmlFor="marks">H:- Grade or % </label>
                                    <input
                                    type="text"
                                    disabled= {!preCoalification ? true : false}
                                    className={inputcss}
                                    id="marks"
                                   {...register('marks',{
                                        required: "Grade No is required" 
                                    })}
                                    placeholder="Grade or Percentage"
                                    />
                                    {errors.marks && preCoalification && <p className={errorCss}>{errors.marks.message}</p>}  
                                </div>
                                <div className={preinput2}>
                                    <label className={labelforinp} htmlFor="passingYear">I:- Passing Year</label>
                                    <input
                                    type="text"
                                    disabled= {!preCoalification ? true : false}
                                    className={inputcss}
                                    id="passingYear"
                                   {...register('passingYear',{
                                        required: "Passing Year is required" 
                                    })}
                                    placeholder="Passing year"
                                    />
                                    {errors.passingYear && preCoalification && <p className={errorCss}>{errors.passingYear.message}</p>}  
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
    
    )
}
export default PreviousStd;