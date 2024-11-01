import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './colorModeSwitch'
import { SearchInput } from './searchInput'

interface Props {
  onSearch: (search: string) => void;
}

export const Navbar = ({onSearch} : Props) => {
  return (

    // HStack: horizontal stack
    <HStack padding='15px'>
        <Image src={logo} alt="Game Hub" boxSize='60px' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar;
