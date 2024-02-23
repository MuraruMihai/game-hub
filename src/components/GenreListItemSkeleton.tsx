import { HStack, ListItem, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const GenreListItemSkeleton = () => {
  return (
    <ListItem>
        <HStack>
            <SkeletonCircle />
            <SkeletonText />
        </HStack>
    </ListItem>
  )
}

export default GenreListItemSkeleton