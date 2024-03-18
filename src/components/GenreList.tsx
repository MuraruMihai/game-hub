import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/imge-utl';
import GenreListItemSkeleton from './GenreListItemSkeleton';
import useGameQueryStore from '../store';

const GenreList = () => {

    const {data, isLoading, error} = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setGenreId = useGameQueryStore(s=>s.setGenreId);
    const skeletonData = [1,2,3,4,5,6,7]

    if(error) return null;
  
    if(isLoading) return <List>{skeletonData.map(skeleton => <GenreListItemSkeleton key={skeleton}/>)}</List>

  return (
    <>
        <Heading fontSize='2xl' marginBottom={5} paddingLeft={2}>Genres</Heading>
        <List>
            {data?.results.map(genre => <ListItem padding={1} key={genre.id}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => setGenreId(genre.id)}>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    </>
    
  )
}

export default GenreList