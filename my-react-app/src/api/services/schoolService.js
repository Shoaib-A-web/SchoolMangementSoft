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

// update school data in school table 
export const updateSchool = (id, formData) => {
  formData.append("_method", "PUT"); //  important

  return axiosInstance.post(
    `${API_ENDPOINTS.SCHOOLS}/${id}`,
    formData
  );
};

// for delete school for school table
export const deleteSchool = (id) => {
  return axiosInstance.delete(`${API_ENDPOINTS.SCHOOLS}/${id}`);
};
