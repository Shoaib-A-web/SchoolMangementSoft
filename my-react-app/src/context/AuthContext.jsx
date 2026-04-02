
import {createContext, useState } from "react";
import { toast } from "react-toastify";
import Img from "../assets/dummy/dummy-user.png"
import { logoutUser } from "@/api";


export const AuthContext = createContext(null);

export const AuthProvider =({children}) => {

    const userInfo = localStorage.getItem('userInfo');

    // logedin user's data 
    const [user, setUser]= useState(
        userInfo ? JSON.parse(userInfo) : null
    );

    // guest user login 
    const loginGuest = () => {
        setUser({ guest: true })
    }

    // saviing data on local storage after login 
    const login = (userData) => {
        localStorage.setItem("userInfo", JSON.stringify(userData));
        setUser(userData);
    }

    // logout for every one     
    const logout =async () => {
        try{
            const res= await logoutUser();  // axios call for logout
            if (res.data.status === false){
                toast.error(res.data.message); 
            }else {
                toast.success(res.data.message)
            }
            
        }catch (error){
            alert(error.message);
        }

        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
        setUser(null);
    }

    // totel number of peaple 
    const [totel, setTotel]= useState({
        'studentList': [
                {
                id: 1,
                date: "12/01/22",
                img: Img,
                admission: "1001",
                name: "Sultan",
                gender: "Male",
                dob: "12/01/2006",
                class: "9",
                section: "A",
                roll: "1",
                father: "Salim",
                occupation: "Doctor"
                },
                {
                id: 2,
                date: "13/01/22",
                img: Img,
                admission: "1002",
                name: "Ali",
                gender: "Male",
                dob: "10/03/2006",
                class: "9",
                section: "A",
                roll: "2",
                father: "Rahim",
                occupation: "Teacher"
                },
                {
                id: 3,
                date: "14/01/22",
                img: Img,
                admission: "1003",
                name: "Ayesha",
                gender: "Female",
                dob: "05/07/2006",
                class: "9",
                section: "A",
                roll: "3",
                father: "Karim",
                occupation: "Engineer"
                },
                {
                id: 4,
                date: "15/01/22",
                img: Img,
                admission: "1004",
                name: "Imran",
                gender: "Male",
                dob: "02/05/2006",
                class: "9",
                section: "A",
                roll: "4",
                father: "Aslam",
                occupation: "Driver"
                },
                {
                id: 5,
                date: "16/01/22",
                img: Img,
                admission: "1005",
                name: "Fatima",
                gender: "Female",
                dob: "11/09/2006",
                class: "9",
                section: "A",
                roll: "5",
                father: "Yusuf",
                occupation: "Shopkeeper"
                },
                {
                id: 6,
                date: "17/01/22",
                img: Img,
                admission: "1006",
                name: "Rohit",
                gender: "Male",
                dob: "03/02/2006",
                class: "9",
                section: "A",
                roll: "6",
                father: "Mahesh",
                occupation: "Farmer"
                },
                {
                id: 7,
                date: "18/01/22",
                img: Img,
                admission: "1007",
                name: "Priya",
                gender: "Female",
                dob: "22/06/2006",
                class: "9",
                section: "A",
                roll: "7",
                father: "Suresh",
                occupation: "Police"
                },
                {
                id: 8,
                date: "19/01/22",
                img: Img,
                admission: "1008",
                name: "Arjun",
                gender: "Male",
                dob: "15/04/2006",
                class: "9",
                section: "A",
                roll: "8",
                father: "Ramesh",
                occupation: "Electrician"
                },
                {
                id: 9,
                date: "20/01/22",
                img: Img,
                admission: "1009",
                name: "Sneha",
                gender: "Female",
                dob: "18/08/2006",
                class: "9",
                section: "A",
                roll: "9",
                father: "Vinod",
                occupation: "Banker"
                },
                {
                id: 10,
                date: "21/01/22",
                img: Img,
                admission: "1010",
                name: "Karan",
                gender: "Male",
                dob: "29/03/2006",
                class: "9",
                section: "A",
                roll: "10",
                father: "Raju",
                occupation: "Driver"
                },
                {
                id: 11,
                date: "22/01/22",
                img: Img,
                admission: "1011",
                name: "Pooja",
                gender: "Female",
                dob: "12/11/2006",
                class: "9",
                section: "A",
                roll: "11",
                father: "Mukesh",
                occupation: "Teacher"
                },
                {
                id: 12,
                date: "23/01/22",
                img: Img,
                admission: "1012",
                name: "Aman",
                gender: "Male",
                dob: "09/09/2006",
                class: "9",
                section: "A",
                roll: "12",
                father: "Rafiq",
                occupation: "Tailor"
                },
                {
                id: 13,
                date: "24/01/22",
                img: Img,
                admission: "1013",
                name: "Neha",
                gender: "Female",
                dob: "06/06/2006",
                class: "9",
                section: "A",
                roll: "13",
                father: "Deepak",
                occupation: "Business"
                },
                {
                id: 14,
                date: "25/01/22",
                img: Img,
                admission: "1014",
                name: "Sameer",
                gender: "Male",
                dob: "01/01/2006",
                class: "9",
                section: "A",
                roll: "14",
                father: "Iqbal",
                occupation: "Mechanic"
                },
                {
                id: 15,
                date: "26/01/22",
                img: Img,
                admission: "1015",
                name: "Anjali",
                gender: "Female",
                dob: "17/12/2006",
                class: "9",
                section: "A",
                roll: "15",
                father: "Rakesh",
                occupation: "Farmer"
                }
            ],
        "employees": 0,
        "user": 0,
        "subjects": 0
    })

    return(
        <AuthContext.Provider value={{
            user,
            Img,
            totel,
            setTotel, 
            login, 
            logout, 
            setUser, 
            loginGuest
        }}>
            {children}

        </AuthContext.Provider>
    )
}