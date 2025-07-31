import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Or your API base URL
  withCredentials: true, // ← THIS IS CRUCIAL FOR CREDENTIALS
});

export default axiosInstance;