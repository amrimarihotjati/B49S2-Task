import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { 
    Heading,
    Text,
    Box,
    SimpleGrid,
    Card,
    CardBody,
    Badge,
    CardFooter,
    Image,
    HStack,
    Tag,
    TagLabel,
    TagCloseButton,
    Flex,
    CheckboxGroup,
    Stack,
    Checkbox,
    Button,
} from "@chakra-ui/react"


interface ApiItem{
    id: number;
    name: string;
    badge: string;
    description: string;
    categories: string[];
    imageUrl: string;
}

interface State {
    apiData: ApiItem[];
}


export default class Dashboard extends Component<object, State> {

    constructor(props: object){
        super(props);
        this.state = {
            apiData:[]
        }
    }
  
    componentDidMount(): void {
        fetch('https://api.npoint.io/624c99ed50dcd45fb160')
        .then((response) => response.json())
        .then((data: ApiItem[]) => {
            this.setState({apiData: data});
            console.log(data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
  
    
    render() {
    return (
        <Flex direction={'column'}>
            <Stack direction={['column', 'row']} spacing='24px' my='20px' justifyContent='center'>
                {/* Category */}
                <Box w='wrap' h='wrap' borderRadius='5px' p='15px'>
                    <Heading as='h3' size='md' my='10px' textAlign='center' color='indigo'>Category</Heading>
                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Borgir'>Borgir</Checkbox>
                            <Checkbox value='Bread'>Bread</Checkbox>
                            <Checkbox value='Breakfast'>Breakfast</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Box>
                {/* Tag */}
                <Box w='wrap' h='wrap' borderRadius='5px' p='15px'>
                    <Heading as='h3' size='md' my='10px' textAlign='center' color='indigo'>Tag</Heading>
                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Favorite'>Favorite</Checkbox>
                            <Checkbox value='Featured'>Featured</Checkbox>
                            <Checkbox value='New'>New</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Box>
                {/* Filter Button */}
                <Box w='wrap' h='wrap' borderRadius='5px' p='15px' mt='20px'>
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='teal' variant='solid'>
                        Filter
                    </Button>
                </Stack>
                </Box>
            </Stack>
            <SimpleGrid p={'10px'} columns={4} spacing={10} minChildWidth={'250px'}>
                {this.state.apiData.map((item) => (
                    <Link to={`/detail/${item.id}`} key={item.id}>
                        <Card key={item.id}>
                            <CardBody>
                                <Image h='250px' w='full' src={item.imageUrl} alt={item.name} borderRadius='lg' objectFit='cover'/>

                                <Stack mt='6' spacing='3'>
                                    <Box>
                                        <Heading size='md'>
                                            {item.name}
                                            <Badge ml='10px' colorScheme='green'>
                                                {item.badge}
                                            </Badge>
                                        </Heading>
                                    </Box>
                                    <Text>{item.description}</Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                {item.categories.map((category) =>
                                (
                                    <HStack spacing={4} m='4px'>
                                        {['md'].map((size) =>(
                                            <Tag
                                                size={size}
                                                key={size}
                                                borderRadius='full'
                                                variant='solid'
                                                colorScheme='green'
                                            >
                                                <TagLabel>{category}</TagLabel>
                                                <TagCloseButton/>
                                            </Tag>  
                                        ))}
                                    </HStack>
                                ))}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
        </Flex>
    )
  }
}

  