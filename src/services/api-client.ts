import axios, { AxiosRequestConfig } from "axios";
const apikey = import.meta.env.VITE_API_KEY;
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apikey
    }
})

export interface FetchResponse<T>{
    count: number,
    results: T[],
    next: string | null,
    previous: string | null
 }

 class APIClient <T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res=>res.data);
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res=>res.data)
    }
 }

 export default APIClient;