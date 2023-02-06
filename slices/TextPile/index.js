import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Text } from '@chakra-ui/react';

const TextPile = ({ slice }) => (
  <Box px="20" display="flex">

    <Box px="20"><PrismicRichText field={slice.primary.aaaaaa} /></Box>
    {slice?.items?.map((item, i) => (
      <Text>{item.text}</Text>
    ))}
  </Box>
);

export default TextPile;
