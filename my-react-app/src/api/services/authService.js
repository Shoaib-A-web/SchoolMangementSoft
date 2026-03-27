import { API_ENDPOINTS, axiosInstance} from '@/api';  // import axios 

// LOGIN FOR WITH THE TABLE OF USER TYPE TABLE 
export const loginUser = (data) => {
  return axiosInstance.post(API_ENDPOINTS.USER_TYPE_LOGIN, data);
};

// LOGIN WITH THE TABLE OF USER TABLE 
export const loginSuperUser = (data) => {
  return axiosInstance.post(API_ENDPOINTS.SUPER_USER_LOGIN, data);
};

// LOGOUT = IT DOSE DELET TOKEN FROM TOKEN TABLE
export const logoutUser= () => {
  return axiosInstance.post(API_ENDPOINTS.USER_LOGOUT);
}