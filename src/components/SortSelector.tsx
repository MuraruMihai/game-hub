import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {

    const sortOrders  = [
        {value: '' , label: 'Relevance'},
        {value: 'name' , label: 'Name'},
        {value: '-released' , label: 'Release Date'},
        {value: '-added' , label: 'Date Added'},
        {value: '-rating' , label: 'Average Rating'},
        {value: '-metacritic' , label: 'Popularity'},
    ];
     
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const setSortOrder = useGameQueryStore(s => s.setSortOrder);
    const curentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Order by: {curentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                { sortOrders.map(item => 
                    <MenuItem onClick={() => setSortOrder(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>) }
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector