import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api", 
});

// Add token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Token ${token}`;
  }
  return req;
});

export default API;
