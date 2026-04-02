import { API_ENDPOINTS, axiosInstance } from "@/api";

// for  inserting data to  school-table
export const createSchool = (data) => {
  return axiosInstance.post(API_ENDPOINTS.SCHOOLS, data);
}

// get all data from school table
export const getSchools = () => {
  return axiosInstance.get(API_ENDPOINTS.SCHOOLS);
}

// get specific  data from school table
export const getSchool = (id) => {
  return axiosInstance.get(`${API_ENDPOINTS.SCHOOLS}/${id}`);
}