import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Spacer,
    HStack,
    Image
} from '@chakra-ui/react'

export default class Navbar extends React.Component {
  render() {
    return (
    <Flex flexWrap='wrap' as='nav' p='20px' alignItems='center'>
        <Heading as={'h1'}>Cakes Menu</Heading>
        <Spacer/>
        <HStack flexWrap='wrap' gap='10px' mt='10px'>
            <Box>
              <Image w='30px' src='https://cdn-icons-png.flaticon.com/512/2919/2919906.png'/>
            </Box>
            <Text>amrimarihotjati@gmail.com</Text>
            <Button colorScheme='purple'>Logout</Button>
        </HStack>
    </Flex>
    )
  }
}

