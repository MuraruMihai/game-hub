import { useQuery } from "@tanstack/react-query";
import platformList from '../data/platforms';
import APIClient from "../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
    staleTime: 24*60*60*1000, // 24h
    initialData: {count: platformList.length, results: platformList}
})

export default usePlatforms;