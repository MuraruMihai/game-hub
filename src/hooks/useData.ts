import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResult<T>{
    count: number,
    results: T[]
 }

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResult<T>>(endpoint, {signal: controller.signal})
            .then((res) => {
                console.log(res.data)
                setData(res.data.results)
                setLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                console.log(err.message)
                setError(err.message)
                setLoading(false);
            })

            return () => controller.abort();
    },[])

    return {data, error, isLoading};
}

export default useData;