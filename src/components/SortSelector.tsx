import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'

const SortSelector = () => {
    const data = ['Relevance','Date Added','Name','Release Date', 'Popularity', 'Average Rating']
  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                { data.map(item => <MenuItem key={item}>{item}</MenuItem>) }
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector