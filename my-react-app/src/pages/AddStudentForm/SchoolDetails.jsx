import { useState } from "react"

export default function SchoolDetails({ errorCss, inputBoxCss, register, errors }){
    const preinput= "flex justify-between"
    const preinput2="flex flex-col"
    const labelforinp= "font-semibold text-gray-700 w-1/2"
    const inputcss="border w-full  border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"
    
    
    return(
        <div className="flex flex-col md:divide-x-4 xl:gap-0 md:flex-row text-sm lg:text-xl">
        {/* left side input */}
        <div className="flex flex-col xl:w-1/2 gap-4 mb-4 md:pr-6">
            <div className={preinput}>
                <label htmlFor="session"
                className={labelforinp}
                >Session</label>
                <div className={inputBoxCss}>
                    <select 
                    {...register('session', {required: "Select session"})}
                    id="session"
                    className={inputcss}
                    >
                        <option value="">Select Session</option>
                        <option value="2000-01">2000-1</option>
                        <option value="2000-02">2000-2</option>
                        <option value="2000-03">2000-3</option>
                        <option value="2000-04">2000-4</option>
                        <option value="2000-05">2000-5</option>
                        <option value="2000-06">2000-6</option>
                    </select>
                    {errors.session && <p className={errorCss}>{errors.session.message}</p>}
                </div>
            </div>
            <div className={preinput}>
            <label htmlFor="doj"
            className={labelforinp}>Date Of Admission</label>
                <div className={inputBoxCss}>
                    <input
                    className={inputcss}
                    id="doj"
                    type="date"
                    {...register('dateOfJoin',{
                        required:"Date of joining is required."
                    })}
                    ></input>
                    {errors.dateOfJoin && <p className={errorCss}>{errors.dateOfJoin.message}</p>}
                </div>          
            </div>

            <div className={preinput}>
            <label className={labelforinp} htmlFor="S.id">Student.Id</label>
                <div className={inputBoxCss}>
                    <input
                    id="S_id"
                    type="number"
                    placeholder="ID"
                    {...register('S_id',{
                        required: "Student ID is required"
                    })}
                    className={inputcss}
                    ></input>
                    {errors.S_id && <p className={errorCss}>{errors.S_id.message}</p>}
                </div>
            </div>
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="admFormNO">Form NO.</label>
                <div className={inputBoxCss}>

                <input
                className={inputcss}
                id="admFormNO"
                type="number"
                placeholder="Form No."
                {...register('admFormNo',{
                    required: "Form No. is required"
                })}
                ></input>
                {errors.S_id && <p className={errorCss}>{errors.S_id.message}</p>}
            </div>

            </div>
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="admNo">Addmission No.</label>
                <div className={inputBoxCss}>
                    <input
                    className={inputcss}
                    id="admNo"
                    placeholder="Addmission No."
                    type="number"
                    {...register('admNo',{
                        required: "Addmission No. is required"
                    })}
                    ></input>
                    {errors.admNo && <p className={errorCss}>{errors.admNo.message}</p>}

                </div>
            </div>
        </div>
        {/* right side inputs */}
        <div className="flex flex-col xl:w-1/2 gap-4 mb-4 md:pl-6">
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="stdType">Student Type</label>
                <div className={inputBoxCss}>
                    <select className={inputcss} 
                    {...register('stdType',{
                        required: "Student Type is required"
                    })}
                    id="stdType">
                        <option value="">Select Student Type</option>
                        <option value="raguler">Raguler</option>
                        <option value="distance">Distane</option>
                    </select>
                    {errors.stdType && <p className={errorCss}>{errors.stdType.message}</p>}     
                </div>

            </div>
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="stdName">Name</label>
                <div className={inputBoxCss}>
                    <input
                    className={inputcss}
                    id="stdName"
                    placeholder="Name"
                    type="text"
                    {...register('stdName',{
                        required: "Student Name is required"
                    })}
                    ></input>
                    {errors.stdName && <p className={errorCss}>{errors.stdName.message}</p>}     

                </div>
            </div>
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="class">Class</label>
                <div className={inputBoxCss}>
                    <input
                    className={inputcss}
                    id="class"
                    placeholder="Class"
                    type="number"
                    {...register('stdClass',{
                        required: "Student Class is required"
                    })}
                    ></input>
                    {errors.stdClass && <p className={errorCss}>{errors.stdClass.message}</p>}     

                </div>
            </div>
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="section">Section</label>
                <div className={inputBoxCss}>
                    <select className={inputcss} 
                    {...register('stdSection',{
                        required: "Student Section is required"
                    })}
                    id="section">
                        <option value="">Select Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    {errors.stdClass && <p className={errorCss}>{errors.stdClass.message}</p>}     
                    
                </div>
            </div>
                
            <div className={preinput}>
            <label className={labelforinp} htmlFor="roll">Roll No.</label>
                <div className={inputBoxCss}>
                    <input
                    className={inputcss}
                    id="roll"
                    placeholder="Roll"
                    type="number"
                    {...register('stdroll',{
                        required: "Student Roll is required"
                    })}
                    ></input>
                    {errors.stdClass && <p className={errorCss}>{errors.stdClass.message}</p>}        
                </div>
            </div>
        </div>
        </div>
    )
}