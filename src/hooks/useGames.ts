import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating: number,
    rating_top: number,
    slug: string,
    description_raw: string
}

const apiClient = new APIClient<Game>('/games')

const useGames = () =>{
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam}) => apiClient.getAll({ params: {
                genres : gameQuery.genreId, 
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.search,
                page: pageParam 
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24*60*60*1000 // 24h
    })
} 

export default useGames;