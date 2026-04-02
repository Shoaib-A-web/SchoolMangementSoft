import axios from "axios";
import { ENV } from "@/config/env";

const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL || "http://127.0.0.1:8000/api",

});

//  Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // add token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // if (config.data instanceof FormData) {
    //   // for form type data 
    //   config.headers["Content-Type"]= "multipart/form-data";
    // } else {
    //   //  For JSON requests
    //   config.headers["Content-Type"] = "application/json";
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;