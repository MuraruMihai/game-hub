import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/imge-utl'

interface Props{
    game: Game,
}

const GameCard = ({game} : Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justify={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms}></PlatformIconList>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Text>{game.rating}</Text>
        </CardBody>
    </Card>
  )
}

export default GameCard