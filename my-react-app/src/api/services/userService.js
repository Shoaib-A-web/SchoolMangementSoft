import { API_ENDPOINTS, axiosInstance } from "@/api";
import { useParams } from "react-router-dom";


// export const createUser = (data) => {
//   return axiosInstance.post(API_ENDPOINTS.USERS, data);
// };


// for regester user of user_table 
export const createUser = (data) => {
  return axiosInstance.post(API_ENDPOINTS.USER_TYPE, data);
};

// for getting info of user by id  in user_table
export const getUsers = (id) => {
  return axiosInstance.get(`${API_ENDPOINTS.USERS}/${id}`);
};

// for getting info of user's list in user_table.
export const getUsersList = () => {
  return axiosInstance.get(API_ENDPOINTS.USER_TYPE);
};

// for  updating user info  by id user_table
export const updateUser = (id,data) => {

  return axiosInstance.patch(`${API_ENDPOINTS.USERS}/${id}`,data);
};