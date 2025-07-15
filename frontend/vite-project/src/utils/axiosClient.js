import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.BACKEND_CONNECTION_URL,
    withCredentials: true,
    headers:{
        'Content-Type': 'application/json'
    }
})

export default axiosClient;