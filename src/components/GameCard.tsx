import { Game } from "../entities/Game"
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/imge-utl'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

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
            <Heading fontSize={'2xl'}>
                <Link to={'/games/' + game.slug} >
                    {game.name}
                </Link>
                
            </Heading>
            <Emoji rating={game.rating_top}/>
        </CardBody>
    </Card>
  )
}

export default GameCard