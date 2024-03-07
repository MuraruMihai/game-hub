import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import apiClient, { FetchResponse } from "../services/api-client";
import platformList from '../data/platforms';

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24*60*60*1000, // 24h
    initialData: {count: platformList.length, results: platformList}
})

export default usePlatforms;