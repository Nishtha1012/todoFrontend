//third party imports
import axios from "axios";

//axios instance
const axiosInstance = axios.create({
    baseURL: "https://todo-backend-fawn.vercel.app",
    headers: {
        'Accept': 'application/json'
    },
    withCredentials: true
})

//static functions for get , put and post requests
export class Api {
    static async post(config) {
        const { url, headers = {}, data, ...restConfig } = config
        return axiosInstance.post(url, data, {
            headers: { ...axiosInstance.headers, ...headers },
            ...restConfig,
        })
    }

    static async get(config) {
        const { url, headers = {}, ...restConfig } = config
        return axiosInstance.get(url, {
            headers: { ...axiosInstance.headers, ...headers },
            ...restConfig,
        })
    }

    static async put(config) {
        const { url, headers, ...restConfig } = config
        return axiosInstance.put(url, {
            headers: { ...axiosInstance.headers, ...headers },
            ...restConfig,
        })
    }
}

