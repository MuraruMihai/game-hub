import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/imge-utl';

const GenreList = () => {

    const {data} = useGenres();

  return (
    <List>
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