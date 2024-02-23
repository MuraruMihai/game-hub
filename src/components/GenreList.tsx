import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/imge-utl';
import GenreListItemSkeleton from './GenreListItemSkeleton';

interface Props{
    onSelectGenre: (genre: Genre) => void,
}

const GenreList = ({onSelectGenre} : Props) => {

    const {data, isLoading, error} = useGenres();
    const skeletonData = [1,2,3,4,5,6,7]

    if(error) return null;
    const onGenreClick= (genre: Genre) => {
        console.log(genre.name)
        onSelectGenre(genre);
    }
  return (
    <List>
        {isLoading && skeletonData.map(skeleton => <GenreListItemSkeleton key={skeleton}/>)}
        {data.map(genre => <ListItem padding={1} key={genre.id}>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                <Button fontSize='lg' variant='link' onClick={() => onGenreClick(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList