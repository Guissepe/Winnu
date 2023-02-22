import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, HStack, Box, Image } from '@chakra-ui/react';

const Topimage = ({ slice }) => (
  <Center>
    <Image
      mb={'2rem'}
      mt={'10rem'}
      height={'2rem'}
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
    />
  </Center>
);

export default Topimage;