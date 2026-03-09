import axios from "axios";
import {createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

export const AuthProvider =({children}) => {

    const userInfo = localStorage.getItem('userInfo');
    const [user, setUser]= useState(
        userInfo ? JSON.parse(userInfo) : null
    );

    const loginGuest = () => {
        setUser({ guest: true })
    }

    const login = (userData) => {
        localStorage.setItem("userInfo", JSON.stringify(userData));
        setUser(userData);
    }

    const logout =async () => {
        try{
            const res= await axios.post("http://127.0.0.1:8000/api/logout",
                {},
                {
                    headers:{
                        Authorization:`Bearer ${user.token}`,
                        Accept: "application/json"
                    },
                }
            );
            if (res.data.status === false){
                toast.error(res.data.message); 
            }else {
                toast.success(res.data.message)
            }
            
        }catch (error){
            alert(error.message);
        }

        localStorage.removeItem("userInfo");
        setUser(null);

    }

    return(
        <AuthContext.Provider value={{
            user, login, logout, loginGuest
        }}>
            {children}

        </AuthContext.Provider>
    )
}