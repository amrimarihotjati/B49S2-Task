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
  const { id } = useParams<{ id: string }>(); // Dapatkan 'id' dari parameter rute
  const [item, setItem] = useState<ApiItem | null>(null);

  useEffect(() => {
    // Ambil detail item berdasarkan 'id' dari sumber data Anda
    // Gantilah logika fetch berikut dengan kode pengambilan data aktual Anda
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
    return <div>Loading...</div>; // Anda dapat menampilkan indikator loading saat mengambil data
  }

  return (
    <Box my='20px'>
      <Box justifyContent='center' alignItems="center">
        <Center my='20px'>
          {/* Tampilkan gambar item */}
          <Image h='500px' w='900px' mb='20px' src={item.imageUrl} alt={item.name} borderRadius='lg' objectFit='cover'/>
        </Center>
      </Box>
      <Flex>
        {/* Tampilkan kategori item */}
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
      {/* Tampilkan judul item */}
      <Heading as="h2" size="lg"  my='20px'>{item.name}
        {/* Tampilkan badge item */}
        <Badge ml='10px' colorScheme='red' size='xg'>
          {item.badge}
        </Badge>
      </Heading>
      {/* Tampilkan deskripsi item */}
      <Text textAlign='justify' my='20px'>{item.description}</Text>
    </Box>
  );
};

export default Detail;
