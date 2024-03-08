import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
    onSelectPlatform: (platform : Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId} : Props) => {
    const {data, error} = usePlatforms();
    const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId);
    
    if(error) return null;

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                {selectedPlatform ? selectedPlatform.name : 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector