import { create } from "zustand";

export interface GameQuery{
    genreId?: number;
    platformId?: number;
    sortOrder?: string,
    search?: string
}

interface StoreGameQuery {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<StoreGameQuery>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => 
        set(() => ({gameQuery: {search: searchText}})), 
    setGenreId: (genreId) => 
        set(store => ({ gameQuery: {...store.gameQuery, genreId} })),
    setPlatformId: (platformId) => 
        set(store => ({ gameQuery: {...store.gameQuery, platformId }})),
    setSortOrder: (sortOrder) => 
        set(store => ({ gameQuery: {...store.gameQuery, sortOrder} }))
}))

export default useGameQueryStore;