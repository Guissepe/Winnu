import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box } from '@chakra-ui/react';

const PageInfo = ({ slice }) => (
  <Box fontFamily={'sora'}>
    {slice.variation !== 'login' ? (
      <Box>
        <Box
          textAlign="center"
          fontWeight="600"
          fontSize={{ base: '1.25rem', md: '3rem' }}
          color="text.01"
          pt="5%"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
        <Box
          px="28%"
          width="100%"
          textAlign="center"
          pb="8%"
          fontSize={16}
          color="text.03"
          mt={'2rem'}
        >
          <PrismicRichText field={slice.primary.body} />
        </Box>
      </Box>
    ) : (
      <Box bg="black">
        <Box
          textAlign="center"
          fontWeight="600"
          fontSize={{ base: '1.25rem', md: '3rem' }}
          color="white"
          pt="5%"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
        <Box
          px="28%"
          width="100%"
          textAlign="center"
          fontSize={16}
          color="grey03"
          mt={'2rem'}
        >
          <PrismicRichText field={slice.primary.body} />
        </Box>
      </Box>
    )}
  </Box>
);

export default PageInfo;
