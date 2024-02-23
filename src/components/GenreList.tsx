import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/imge-utl';
import GenreListItemSkeleton from './GenreListItemSkeleton';

const GenreList = () => {

    const {data, isLoading, error} = useGenres();
    const skeletonData = [1,2,3,4,5,6,7]

    if(error) return null;
  return (
    <List>
        {isLoading && skeletonData.map(skeleton => <GenreListItemSkeleton key={skeleton}/>)}
        {data.map(genre => <ListItem padding={1}>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList