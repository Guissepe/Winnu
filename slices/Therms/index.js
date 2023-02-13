import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, Text } from '@chakra-ui/react';

const Therms = ({ slice }) => (
  <Center color={'white'} pt={'6rem'} background={'black'} fontFamily={'sora'}>
    <Text pb={'1rem'}>{slice.primary.title}</Text>
  </Center>
);

export default Therms;
