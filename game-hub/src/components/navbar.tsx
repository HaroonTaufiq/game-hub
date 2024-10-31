import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './colorModeSwitch'

export const Navbar = () => {
  return (

    // HStack: horizontal stack
    <HStack justifyContent='space-between' padding='15px'>
        <Image src={logo} alt="Game Hub" boxSize='60px' />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar;
