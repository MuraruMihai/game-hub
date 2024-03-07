import axios from "axios";
const apikey = import.meta.env.VITE_API_KEY;
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apikey
    }
})

export interface FetchResponse<T>{
    count: number,
    results: T[]
 }