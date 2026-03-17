import { useNavigate, useParams } from "react-router-dom";
import DomyImg from "../../../src/assets/dummy/dummy-user.png"

function StudentDetails(){ 

    const { studentId } = useParams();
    const navigare= useNavigate();

    return (<>
    <div className="bg-gray-100 p-6 rounded-lg mb-4 space-y-6">

      {/* Student Details */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Student Details
        </legend>
        <div className="md:flex justify-between">
            <div className=" lg:pl-8 flex justify-center items-center">

                <img
                src={DomyImg}
                alt="Student"
                className="w-36 h-36 object-cover border rounded"
                />
                <h1> ID: {studentId}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3">

                <p>Name : </p>
                <p>Phone : </p>
                <p>Gender : </p>
                <p>DOB : </p>
                <p>Blood Group : </p>
                <p>Religion : </p>
                <p>Category : </p>
                <p>BPL : </p>
                <p>Bank : </p>
                <p>Bank AC : </p>
                <p>Aadhar : </p>
                <p>Identity Mark : </p>
                <p>Minority : </p>
                <p>Phycial Handicap : </p>

                <p>
                Mother Tongue :
                {" "}
                </p>
            </div>
            
        </div>

        {/* <div className="flex justify-evenly gap-6">

          <img
            src={formData?.stdImage?.preview}
            alt="Student"
            className="w-36 h-36 object-cover border rounded"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p>Name : {formData.stdName}</p>
            <p>Phone : {formData.std_ph}</p>
            <p>Gender : {formData.gender}</p>
            <p>DOB : {formData.dob}</p>
            <p>Blood Group : {formData.blood}</p>
            <p>Religion : {formData.stdReligion}</p>
            <p>Category : {formData.category}</p>
            <p>BPL : {formData.bpl}</p>
            <p>Bank : {formData.bankname}</p>
            <p>Bank AC : {formData.bankAc}</p>
            <p>Aadhar : {formData.uid}</p>
            <p>Identity Mark : {formData.identitymark}</p>
            <p>Minority : {formData.minority}</p>
            <p>Phycial Handicap : {formData.ph}</p>

            <p>
              Mother Tongue :
              {" "}
              {formData?.mTongue?.map(l => l.label).join(" | ")}
            </p>

          </div>
        </div> */}
      </fieldset>

      {/* Address */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Address
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Present Address : </p>
          <p>Permanent Address : </p>
          <p>District : </p>
          <p>Area : </p>
          <p>State : </p>
          <p>Pin : </p>

        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Present Address : {formData.presentAdd}</p>
          <p>Permanent Address : {formData.permanentadd}</p>
          <p>District : {formData.district}</p>
          <p>Area : {formData.area}</p>
          <p>State : {formData.state}</p>
          <p>Pin : {formData.pin}</p>

        </div> */}
      </fieldset>


      {/* Father Details */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Father Details
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Name : </p>
          <p>Qualification : </p>
          <p>Occupation : </p>
          <p>Mobile : </p>
          <p>Whatsapp : </p>
          <p>Email : </p>
          <p>Income : </p>
          <p>Present Address : </p>
          <p>Permanent Address : </p>

        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Name : {formData.fname}</p>
          <p>Qualification : {formData.fqualificatin}</p>
          <p>Occupation : {formData.foccupation}</p>
          <p>Mobile : {formData.fmobile}</p>
          <p>Whatsapp : {formData.fwhatsapp}</p>
          <p>Email : {formData.fmail}</p>
          <p>Income : {formData.fincome}</p>
          <p>Present Address : {formData.fpresentadd}</p>
          <p>Permanent Address : {formData.fpermanentadd}</p>

        </div> */}
      </fieldset>


      {/* Mother Details */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Mother Details
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Name : </p>
          <p>Qualification : </p>
          <p>Occupation : </p>
          <p>Mobile : </p>
          <p>Whatsapp : </p>
          <p>Email : </p>
          <p>Income : </p>
          <p>Present Address : </p>
          <p>Permanent Address : </p>

        </div> 

        {/* 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Name : {formData.mname}</p>
          <p>Qualification : {formData.mqualificatin}</p>
          <p>Occupation : {formData.moccupation}</p>
          <p>Mobile : {formData.mmobile}</p>
          <p>Whatsapp : {formData.mwhatsapp}</p>
          <p>Email : {formData.mmail}</p>
          <p>Income : {formData.mincome}</p>
          <p>Present Address : {formData.mpresentadd}</p>
          <p>Permanent Address : {formData.mpermanentadd}</p>

        </div> */}
      </fieldset>

      {/* guardian and its assiciotion */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Guardian and Association with School
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Guardian  :  is  </p>
          <p>Family association : </p>
          
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Guardian  : {formData.studentguardian} is {formData.guardianRelation} </p>
          <p>Family association : {formData.whatRelation}</p>
          
        </div> */}
      </fieldset>


      {/* Admission Details */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Admission Details
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Session : </p>
          <p>Student Id : </p>
          <p>Date Of Join : </p>
          <p>Admission No : </p>
          <p>Admission Form No : </p>
          <p>Class : </p>
          <p>Section : </p>
          <p>Roll : </p>
          <p>Student Type : </p>
          <p>Hostel Aproved : </p>


        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Session : {formData.session}</p>
          <p>Student Id : {formData.S_id}</p>
          <p>Date Of Join : {formData.dateOfJoin}</p>
          <p>Admission No : {formData.admNo}</p>
          <p>Admission Form No : {formData.admFormNo}</p>
          <p>Class : {formData.stdClass}</p>
          <p>Section : {formData.stdSection}</p>
          <p>Roll : {formData.stdroll}</p>
          <p>Student Type : {formData.stdType}</p>
          <p>Hostel Aproved : {formData.hostel}</p>


        </div> */}
      </fieldset>


      {/* Transport */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Transport Details
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Bus Fee : </p>
          <p>Trip No : </p>
          <p>Route No : </p>
          <p>Vehicle No : </p>
          <p>Stopage : </p>

        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>Bus Fee : {formData.busFee}</p>
          <p>Trip No : {formData.tripNo}</p>
          <p>Route No : {formData.routeNo}</p>
          <p>Vehicle No : {formData.vahicalNo}</p>
          <p>Stopage : {formData.stopage}</p>

        </div> */}
      </fieldset>


      {/* Previous School */}
      <fieldset className="border-2 border-gray-300 rounded-lg p-4">
        <legend className="px-2 font-bold text-gray-600">
          Previous School
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>School : </p>
          <p>TC No : </p>
          <p>Leave Date : </p>
          <p>Affiliated : </p>
          <p>Medium : </p>
          <p>Last Class : </p>
          <p>Roll No : </p>
          <p>Marks : </p>
          <p>Passing Year : </p>

        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <p>School : {formData.previousSchoolName}</p>
          <p>TC No : {formData.tcNo}</p>
          <p>Leave Date : {formData.leavedate}</p>
          <p>Affiliated : {formData.affilated}</p>
          <p>Medium : {formData.medium}</p>
          <p>Last Class : {formData.lastClass}</p>
          <p>Roll No : {formData.rollno}</p>
          <p>Marks : {formData.marks}</p>
          <p>Passing Year : {formData.passingYear}</p>

        </div> */}
      </fieldset>
        {/* <pre>{JSON.stringify(formData,null,2)}</pre> */}

    </div>
    <div className="flex justify-between">
        <button
            onClick={()=>navigare(-1)}
            className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded hover:bg-red-500 hover:text-white"
        >
            Back
        </button>
        <button
            className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500"
        >
            Next
        </button>
    </div>
    
  </>)
}
export default StudentDetails;