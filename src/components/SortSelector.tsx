import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (item: string) => void;
    sortOrder: string
}

const SortSelector = ({onSelectSortOrder, sortOrder} : Props) => {

    const sortOrders  = [
        {value: '' , label: 'Relevance'},
        {value: 'name' , label: 'Name'},
        {value: '-released' , label: 'Release Date'},
        {value: '-added' , label: 'Date Added'},
        {value: '-rating' , label: 'Average Rating'},
        {value: '-metacritic' , label: 'Popularity'},
    ];
        
    const curentSortOrder = sortOrders.find(order => order.value === sortOrder)

    const handleSortClick = (item: string) => {
        onSelectSortOrder(item);
    }

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Order by: {curentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                { sortOrders.map(item => 
                    <MenuItem onClick={() => handleSortClick(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>) }
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector