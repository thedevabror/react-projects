import axios from "axios";
import { getToken } from "./axiosConfig";

const api = axios.create({
  baseURL: "http://143.110.239.160:5000/api/",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
