import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_localhost || "http://localhost:5000"
});

export default axiosPublic;