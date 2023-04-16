import axios from "axios";
import { BASE_URL } from "./Constants";

axios.defaults.baseURL = BASE_URL;


export const publicAxios = axios.create({ 
    baseURL: BASE_URL,
});

publicAxios.interceptors.response.use(
    function (res) {
        return res.data;
    },
    async function (err) {
        
        return Promise.reject(err);
    }
);