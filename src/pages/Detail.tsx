import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Image, HStack, Tag, TagLabel, TagCloseButton, Center, Flex, Badge } from "@chakra-ui/react"; // Import Chakra UI components or any other components you need

interface ApiItem {
  id: number;
  name: string;
  badge: string;
  description: string;
  categories: string[];
  imageUrl: string;
}

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the 'id' from the route parameter
  const [item, setItem] = useState<ApiItem | null>(null);

  useEffect(() => {
    // Fetch the item details based on the 'id' from your data source
    // Replace the following fetch logic with your actual data fetching code
    fetch(`https://api.npoint.io/624c99ed50dcd45fb160/${id}`)
      .then((response) => response.json())
      .then((data: ApiItem) => {
        setItem(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!item) {
    return <div>Loading...</div>; // You can display a loading indicator while fetching data
  }

  return (
    <Box my='20px'>
      <Box justifyContent='center' alignItems="center">
        <Center my='20px'>
          <Image h='500px' w='900px' mb='20px' src={item.imageUrl} alt={item.name} borderRadius='lg' objectFit='cover'/>
        </Center>
      </Box>
      <Flex>
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
      </Flex>
      <Heading as="h2" size="lg"  my='20px'>{item.name}
        <Badge ml='10px' colorScheme='red' size='xg'>
          {item.badge}
        </Badge>
      </Heading>
      <Text textAlign='justify' my='20px'>{item.description}</Text>
    </Box>
  );
};

export default Detail;
