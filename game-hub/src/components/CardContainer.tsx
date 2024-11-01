import { Box } from '@chakra-ui/react'


interface props {
    children: React.ReactNode;
}

export const CardContainer = ({children} : props) => {
  return (
    <Box width='300px' borderRadius={10} overflow={'hidden'}>
        {children}
    </Box>
  )
}
