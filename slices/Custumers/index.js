import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Flex, Center, Box, Text, Image } from '@chakra-ui/react';

/**
 * @typedef {import("@prismicio/client").Content.CustumersSlice} CustumersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustumersSlice>} CustumersProps
 * @param { CustumersProps }
 */
const Custumers = ({ slice }) => (
  <Box>
    <Box maxW="756px" mx="auto" textAlign="center">
      <Text fontWeight="600" fontSize={{ base: '20px', sm: '24px' }}>
        {slice.primary.title}
      </Text>
    </Box>
    <Center>
      {slice?.items?.map((item, i) => (
        <Image
          px="3%"
          mt="28px"
          src={item.custumer.url}
          alt={item.custumer.alt}
        />
      ))}
    </Center>
  </Box>
);

export default Custumers;
