import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

import { useForm } from "react-hook-form";

function TempStudentForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/tempStudent",
        data
      );

      
      alert("Data inserted successfully!");
    //   reset(); // clear form
       
    if (response.data.status === true){
        console.log(response.data?.status)
        console.log(response.data?.message)
      }else{
        console.log(response.data?.status)
        console.log(response.data?.message)
      }
     
    } catch (error) {
      console.log(error.response?.data);
      console.log(error);
    }

  };

  return (
    <form className="flex flex-col justify-center items-center min-h-dvh gap-4" onSubmit={handleSubmit(onSubmit)}>

      <input
        type="text"
        placeholder="Enter Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email", {
          required: "Email is required"
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="text"
        placeholder="Enter Phone"
        {...register("phone")}
      />

      <button type="submit">Submit</button>
    </form>

  );
}

export default TempStudentForm;