import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import { Badge, HStack, Heading, Spinner, Text, VStack } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data: game, error, isLoading} = useGame(slug!);

    if(isLoading) return <Spinner />

    if(error || !game) throw error;

    console.log(game)
  return (
    <>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        
        <DefinitionItem term='Plarforms'>
            { game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>) }
        </DefinitionItem>
        <DefinitionItem term='Metascore'>
           <CriticScore score={game.metacritic}/>
        </DefinitionItem>
    </>
  )
}

export default GameDetailPage