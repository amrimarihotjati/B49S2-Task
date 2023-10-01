import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Spacer,
    HStack
} from '@chakra-ui/react'

export default class Navbar extends React.Component {
  render() {
    return (
    <Flex as='nav' p='10px' alignItems='center'>
        <Heading as={'h1'}>Cakes Tasks</Heading>
        <Spacer/>

        <HStack>
            <Box bg={'gray.200'} p={'10px'}>M</Box>
            <Text>amrimarihotjati@gmail.com</Text>
            <Button colorScheme='purple'>Logout</Button>
        </HStack>
    </Flex>

    //   <Flex bg={'gray.200'} justify='space-between' wrap='wrap' gap='5px'>
    //     <Box w='150px' h='50px' background='red'>1</Box>
    //     <Box w='150px' h='50px' flexGrow='1' bg='green' >2</Box>
    //     <Box w='150px' h='50px' background='red'>3</Box>
    //   </Flex>
    )
  }
}

