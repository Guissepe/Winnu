import React from 'react';
import { Center, Box, Text, Image } from '@chakra-ui/react';

const Custumers = ({ slice }) => (
  <Box>
    <Box maxW={756} mx="auto" textAlign="center">
      <Text fontWeight="600" fontSize={{ base: 20, sm: 24 }}>
        {slice.primary.title}
      </Text>
    </Box>
    <Center>
      {slice?.items?.map((item, i) => (
        <Image
          px="3%"
          mt={18}
          src={item.custumer.url}
          alt={item.custumer.alt}
        />
      ))}
    </Center>
  </Box>
);

export default Custumers;
