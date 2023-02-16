import React from 'react';
import { Center, Box, Text, Image } from '@chakra-ui/react';

const Custumers = ({ slice }) => (
  <Box>
    <Box maxW={756} mx="auto" textAlign="center">
      <Text fontWeight="600" fontSize={{ base: '1.25rem	', sm: '1.5rem' }}>
        {slice.primary.title}
      </Text>
    </Box>
    <Center>
      {slice?.items?.map((item, i) => (
        <Image
          key={i}
          px="3%"
          mt={'1.25rem'}
          src={item.custumer.url}
          alt={item.custumer.alt}
        />
      ))}
    </Center>
  </Box>
);

export default Custumers;
