import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/imge-utl'
import Emoji from './Emoji'

interface Props{
    game: Game,
}

const GameCard = ({game} : Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            
            <HStack justify='space-between' marginBottom={3}>
                <PlatformIconList platforms={game.parent_platforms}></PlatformIconList>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <Emoji rating={game.rating_top}/>
        </CardBody>
    </Card>
  )
}

export default GameCard