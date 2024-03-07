import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import genres from '../data/genres';

export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.get,
    staleTime: 24*60*60*1000, // 24h
    initialData: {count: genres.length, results: genres}
})

export default useGenres;