import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers:{
    "Content-Type": "multipart/form-data",
  }

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
    //   config.headers["Content-Type"]= "multipart/form-data";
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;