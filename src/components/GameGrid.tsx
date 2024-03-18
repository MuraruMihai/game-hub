import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const GameGrid = () => {
    const {data, error, isLoading, hasNextPage, fetchNextPage} = useGames();
    
    const skeletons = [1,2,3,4,5,6];

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
    
  return (
    <>
        {error && <Text>{error.message}</Text>}
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage} // !! if is undefines !! will convert it in false
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding={'10px'}>
                { isLoading && skeletons.map(skeleton => 
                <GameCardContainer key={skeleton}> 
                    <GameCardSkeleton /> 
                </GameCardContainer>) }
                { data?.pages.map((page, index) => 
                    <React.Fragment key={index}>
                        {
                            page.results.map(game => 
                                <GameCardContainer key={game.id}>
                                    <GameCard   game={game}/>
                                </GameCardContainer>)}
                    </React.Fragment>) 
                }
            </SimpleGrid>
        </InfiniteScroll>
    </>
  )
}

export default GameGrid