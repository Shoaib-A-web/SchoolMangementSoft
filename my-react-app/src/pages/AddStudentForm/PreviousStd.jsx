import React, { useState } from "react"

function PreviousStd(){
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
                    onChange={handleChange}
                    name="familyschoolRelation" 
                    id="familyschoolRelation"
                    value={input.value}
                    className="border border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2 w-1/2"
                    >
                        <option value="">Select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className={preinput2}>
                    <label className={labelforinp} htmlFor="whatRelation">If yes, Specify Name With Details</label>
                    <input
                    type="text"
                    className={inputcss}
                    onChange={handleChange}
                    id="whatRelation"
                    name="whatRelation"
                    value={input.whatRelation}
                    placeholder="Guardian acceotion with School"
                    />
                </div>
            </div>
            <div>
                <h3 className=" underline font-semibold py-4">Particulars of previous studies</h3>
                <div className="p-4 flex flex-col gap-4">
                    <div className={preinput2}>
                        <label className={labelforinp} htmlFor="previousSchoolName">A:- Name & Address of school</label>
                        <input
                        type="text"
                        className={inputcss}
                        id="previousSchoolName"
                        name="previousSchoolName"
                        onChange={handleChange}
                        value={input.previousSchoolName}
                        placeholder="Previus School Name"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="tcNo">B:- Transfer Certificate No./ School Leaving Certificate No.</label>
                                <input
                                type="number"
                                className={inputcss}
                                id="tcNo"
                                name="tcNo"
                                value={input.tcNo}
                                onChange={handleChange}
                                placeholder="T.C No. or S.L.C No."
                                />
                            </div>
                            <div>
                                <label className={labelforinp} htmlFor="leavedate">C:- Date of issuance</label>
                                <input
                                type="date"
                                className={inputcss}
                                id="leavedate"
                                name="leavedate"
                                onChange={handleChange}
                                value={input.leavedate}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="affilated">D:- Affilated to</label>
                                <input
                                type="text"
                                className={inputcss}
                                id="affilated"
                                name="affilated"
                                onChange={handleChange}
                                value={input.affilated}
                                placeholder="Affliation From"
                                />
                            </div>
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="medium">E:- Medium of school</label>
                                <input
                                type="text"
                                className={inputcss}
                                id="medium"
                                name="medium"
                                onChange={handleChange}
                                value={input.medium}
                                placeholder="Mediun"
                                />
                            </div>
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="lastClass">F:- Class in which Reading</label>
                                <input
                                type="text"
                                className={inputcss}
                                id="lastClass"
                                name="lastClass"
                                onChange={handleChange}
                                value={input.lastClass}
                                placeholder="Last Class"
                                />
                            </div>
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="rollno">G:- Roll No.</label>
                                <input
                                type="number"
                                className={inputcss}
                                id="rollno"
                                name="rollno"
                                onChange={handleChange}
                                value={input.rollno}
                                placeholder="Last Roll No."
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="marks">H:- Grade or % </label>
                                <input
                                type="text"
                                className={inputcss}
                                id="marks"
                                name="marks"
                                onChange={handleChange}
                                value={input.marks}
                                placeholder="Grade or Percentage"
                                />
                            </div>
                            <div className={preinput2}>
                                <label className={labelforinp} htmlFor="passingYear">I:- Passing Year</label>
                                <input
                                type="text"
                                className={inputcss}
                                id="passingYear"
                                name="passingYear"
                                onChange={handleChange}
                                value={input.passingYear}
                                placeholder="Passing year"
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default PreviousStd;