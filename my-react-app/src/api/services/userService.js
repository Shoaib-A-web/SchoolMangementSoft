import { API_ENDPOINTS, axiosInstance } from "@/api"; 


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
  // data.append('_method', 'PATCH'); // spoof method
  return axiosInstance.post(`${API_ENDPOINTS.USERS}/${id}`,data);
};

// for feaching number of user in user-table
export const countUser = () => {
  return axiosInstance.get(API_ENDPOINTS.USER_COUNT);
}

// for deleting  user by id user-table
export const deleteUser = (id) => {
  return axiosInstance.delete(`${API_ENDPOINTS.USERS}/${id}`);
}

