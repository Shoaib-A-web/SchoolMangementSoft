import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


export default function ContactForm(){
    const { user } = useContext(AuthContext);

    //get all data function

        const getAll = async () => {

        const res = await axios.get(
            "http://127.0.0.1:8000/api/contact",
            {
                headers:{
                    Authorization: `Bearer ${user?.token}`
                }
            }
        );

        setContacts(res.data.data);
    };

    //search function 

        const searchData = async (data) => {

        const res = await axios.get(
            `http://127.0.0.1:8000/api/contact/${data.id}`,
            {
                headers:{
                    Authorization: `Bearer ${user?.token}`
                }
            }
        );

        const contact = res.data.data;

        // Auto fill form
        setValue("name", contact.name);
        setValue("email", contact.email);
        setValue("phone", contact.phone);
    };


    //delete function 

        const deleteData = async (data) => {

        await axios.delete(
            `http://127.0.0.1:8000/api/contact/${data.id}`,
            {
                headers:{
                    Authorization: `Bearer ${user?.token}`
                }
            }
        );

        alert("Deleted Successfully");
        reset();
    };


    //update function 
        const updateData = async (data) => {

        await axios.put(
            `http://127.0.0.1:8000/api/contact/${data.id}`,
            data,
            {
                headers:{
                    Authorization: `Bearer ${user?.token}`
                }
            }
        );

        alert("Updated Successfully");
    };


    //insert function 
        const insertData = async (data) => {

        await axios.post("http://127.0.0.1:8000/api/contact", data,{
            headers:{
                Authorization:`Bearer ${user?.token}`
            }
        });

        alert("Inserted Successfully");
        reset();
    };

    const { register, handleSubmit, reset, setValue } = useForm();
    const [contacts, setContacts] = useState([]);


        return(
        <div className="flex flex-col gap-4 p-4 m-2">

            <h2>Contact Form</h2>

            {/* ID FIELD - used for update, delete, search */}
            <input 
                type="number"
                placeholder="Enter ID (for update/delete/search)"
                {...register("id")}
            />

            {/* NAME FIELD */}
            <input 
                type="text"
                placeholder="Enter Name"
                {...register("name")}
            />

            {/* EMAIL FIELD */}
            <input 
                type="email"
                placeholder="Enter Email"
                {...register("email")}
            />

            {/* PHONE FIELD */}
            <input 
                type="text"
                placeholder="Enter Phone"
                {...register("phone")}
            />
            {/* INSERT BUTTON */}
            <button onClick={handleSubmit(insertData)}>
                Insert
            </button>

            {/* UPDATE BUTTON */}
            <button onClick={handleSubmit(updateData)}>
                Update
            </button>


            {/* DELETE BUTTON */}
            <button onClick={handleSubmit(deleteData)}>
                Delete
            </button>


            {/* SEARTCH BUTTON */}
            <button onClick={handleSubmit(searchData)}>
                Search
            </button>


            {/* GET ALL CONTECT LIST BUTTONN */}
            <button onClick={getAll}>
                Get All
            </button>

            <ul>
                {contacts.map((item)=>(
                    <li key={item.id}>
                        {item.id} - {item.name} - {item.email}
                    </li>
                ))}
            </ul>

        </div>
    );
}