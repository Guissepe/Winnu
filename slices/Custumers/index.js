import React from 'react';
import { Center, Box, Text, Image, Flex } from '@chakra-ui/react';

const Custumers = ({ slice }) => (
  <Box>
    <Box maxW={756} mx="auto" textAlign="center">
      <Text fontWeight="600" fontSize={{ base: '1.25rem	', sm: '1.5rem' }}>
        {slice.primary.title}
      </Text>
    </Box>
    <Flex justify={'center'} direction={{ base: 'column', md: 'row' }}>
      {slice?.items?.map((item, i) => (
        <Image maxW={300} mx="auto"
          px="3%"
          mt={'1.25rem'}
          src={item.custumer.url}
          alt={item.custumer.alt}
        />
      ))}
    </Flex>
  </Box>
);

export default Custumers;
