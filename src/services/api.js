import axios from "axios";

const api = axios.create({
    baseURL: 'https://json-mock-blog.onrender.com/'
});

export default api;