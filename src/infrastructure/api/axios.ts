import axios from "axios";

const isProd = import.meta.env.MODE === "production";

const baseURL = isProd
  ? import.meta.env.VITE_PROD_API_URL
  : import.meta.env.VITE_LOCAL_API_URL;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
