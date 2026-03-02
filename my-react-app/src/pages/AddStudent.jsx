import { useState } from "react"
import { useForm } from "react-hook-form"
import Img from "../assets/dummy/dummy-user.png"
// import forms
import StudentDetailes from "./AddStudentForm/StudentDetails"
import GuardianDetails from "./AddStudentForm/GuardianDetails"
import StudentAddress from "./AddStudentForm/StudentAddress"
import TransportDetails from "./AddStudentForm/Transportdetails"
import PreviousStd from "./AddStudentForm/PreviousStd"
import SchoolDetails from "./AddStudentForm/SchoolDetails"

const preinput= "flex justify-between"
const preinput2="flex flex-col"
const labelforinp= "font-semibold text-gray-700 w-1/2"
const inputcss="border w-1/2 border-gray-300 hover:border-gray-500 hover:shadow-xl rounded-sm p-2"


function AddStudent(){
    const errorCss="text-red-500 text-xs md:text-sm"
    const inputBoxCss="w-full"
    const {
        register,
        control,
        handleSubmit,
        watch,
        trigger,
        formState:{ errors }
    }= useForm();
    // usestate for backends
    const [addStudentDet, setAddStudentDet]= useState({
        // student details
        session:"",
        dateOfJoin:"",
        S_id:"",
        admFormNo:"",
        admNo:"",
        stdType:"",
        stdName:"",
        class:"",
        section:"",
        roll:"",
    });

    const handleChange= (e) => {    
        const name= e.target.name;
        const value= e.target.value;
        setAddStudentDet({...addStudentDet,[name]:value} )
    }
    // usestate for steps
    const [step, setStep]= useState(1)
    const steplist=["School Details", "Student Details", "Guardian Details", "Address", "Transport", "Previous Studies" ]

    const nextStep= async () => {
        const valid= await trigger(); // validate current fild 
        if (valid) setStep(step + 1);
    }
    const prevStep= () => setStep(step - 1)

    return(<>
        <h1 className="text-xl lg:text-2xl py-4 text-gray-700 font-bold">Add Student's details</h1>
        <div className="my-2 md:my-4 lg:my-8  rounded-lg bg-white">  
            {/* px-2 md:px-12 lg:px-auto md:px:8 py-4 it is messing in this dev */}
            <form>
                {/* 🔹 Step Tracker */}
                <div className=" flex flex-wrap md:flex-row justify-between p-2 mb-8 text-sm rounded-t-lg bg-gray-600">
                    {steplist.map((label, index) => (
                        <div key={index} className="flex-1 text-center">
                            <div
                                className={`mx-auto size-5 md:size-10 flex text-xs md:text-sm items-center justify-around rounded-full font-bold
                                ${step === index + 1 ? "bg-red-400 text-white" : "bg-gray-300 text-gray-700"}`}
                            >
                            {index + 1}
                            </div>
                            <p className={`text-xs mt-2   ${step === index+1?"text-white block":"hidden"}`}>{label}</p>
                            {/* mt-2 text-xs text-white hidden sm:block */}
                        </div>
                    ))}
                </div>

                {/*section 1 school details*/}
                {step === 1 && (
                <div className="px-2 md:px-12 lg:px-auto md:px:8 py-4">
                <h2 className="text-2xl pb-4 text-gray-700 font-bold">{steplist[step - 1]}</h2>
                <SchoolDetails errorCss={errorCss} inputBoxCss={inputBoxCss} register={register} errors={errors}/>
                <button
                type="button"
                onClick={nextStep}
                className="w-full bg-red-400 text-white my-4 p-2 rounded hover:bg-red-500"
                >
                Next
                </button> 
                </div>
                )}
                {/* section 2 student detail */}
                {step === 2 &&(
                    <div className="text-xl px-2 md:px-12 lg:px-auto md:px:8 py-4">
                        <h2 className="text-2xl pb-4 text-gray-700 font-bold">{steplist[step -1]}</h2>
                        {/* space for student details */}
                        <StudentDetailes control={control} errorCss={errorCss} inputBoxCss={inputBoxCss} register={register} errors={errors}/>
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-red-500 hover:text-white"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                            >
                                Next
                            </button>
                        </div>

                     </div>
                )}
                {/* section 3 guardian details */}
                {/* const preinput= "flex"
                const labelforinp= "pr-4 font-semibold text-blue-400"
                const inputcss= "grow px-2 border-2 border-blue-300 rounded-lg" */}
                
                {step === 3 &&(
                    <div className="text-xl flex flex-col gap-4 justify-center px-2 md:px-12 lg:px-auto md:px:8- pb-4">
                        <h2 className="text-2xl  pb-4 text-gray-700 font-bold">{steplist[step -1]}</h2>
                    {/* place for step three guardian details */}
                    <GuardianDetails/>
                    <div className="flex justify-between">
                        <button
                            onClick={prevStep}
                            className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-red-500 hover:text-white"
                        >
                            Back
                        </button>
                        <button
                            onClick={nextStep}
                            className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500" >
                            Next
                        </button>
                    </div>


                    </div>
                )}
                {/* section 4 address detail */}
                {step === 4 &&(
                    <div className="text-xl px-2 md:px-12 lg:px-auto md:px:8 py-4">
                        <h2 className="text-2xl pb-4 text-gray-700 font-bold">{steplist[step -1]}</h2>
                        {/* space for address */}
                        <StudentAddress />
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-red-500 hover:text-white"
                            >
                                Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                            >
                                Next
                            </button>
                        </div>

                     </div>
                )}
                 {/* section 5 transport detail */}
                {step === 5 &&(
                    <div className="text-xl px-2 md:px-12 lg:px-auto md:px:8 py-4">
                        <h2 className="text-2xl pb-4 text-gray-700 font-bold">{steplist[step -1]}</h2>
                        {/* space for transport */}
                        <TransportDetails/>
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-red-500 hover:text-white"
                            >
                                Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                            >
                                Next
                            </button>
                        </div>

                     </div>
                )}
                 {/* section 6 previous studies detail */}
                {step === 6 &&(
                    <div className="text-xl px-2 md:px-12 lg:px-auto md:px:8 py-4">
                        <h2 className="text-2xl pb-4 text-gray-700 font-bold">{steplist[step -1]}</h2>
                        {/* space for previous studies */}
                        <PreviousStd />
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-red-500 hover:text-white"
                            >
                                Back
                            </button>
                            <button
                                // onClick={nextStep}
                                className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                            >
                                Next
                            </button>
                        </div>

                     </div>
                )}
                 
            </form>
        </div>
        </>)
}
export default AddStudent;
