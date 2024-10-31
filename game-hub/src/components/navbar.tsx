import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

export const Navbar = () => {
  return (

    // HStack: horizontal stack
    <HStack>
        <Image src={logo} alt="Game Hub" boxSize='60px' />
        <Text fontSize='2xl'>Game Hub</Text>
    </HStack>
  )
}

export default Navbar;
