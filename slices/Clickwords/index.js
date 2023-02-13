import React from 'react';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { Box, Center, Text } from '@chakra-ui/react';

const Clickwords = ({ slice }) => (
  <Box>
    <Center fontFamily={'sora'} pb={'4rem'} background={'black'}>
      <Box>
        <Text color={'Yellow01'}>{slice.primary.word}</Text>
      </Box>
    </Center>
  </Box>
);

export default Clickwords;
