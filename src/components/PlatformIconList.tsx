import { HStack, Icon } from '@chakra-ui/react';
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Platform } from "../entities/Platform";

interface Props{
    platforms: { platform:  Platform} []
}

const PlatformIconList = ({platforms} : Props) => {

    const iconMap : {[key: string] : IconType}= { //index signature
        pc : FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

  return (
    <>
        <HStack marginY={1}> 
            {platforms.map(({platform}) => 
                <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}/>
            )}
        </HStack>
    </>
  )
}

export default PlatformIconList