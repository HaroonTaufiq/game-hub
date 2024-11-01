import { Box } from '@chakra-ui/react'


interface props {
    children: React.ReactNode;
}

export const CardContainer = ({children} : props) => {
  return (
    <Box  borderRadius={10} overflow={'hidden'}>
        {children}
    </Box>
  )
}
