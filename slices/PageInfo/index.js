import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box } from '@chakra-ui/react';

const PageInfo = ({ slice }) => (
  <Box>
    {slice.variation !== 'login' ? (
      <Box>
        <Box
          textAlign="center"
          fontWeight="600"
          fontSize={{ base: '20px', md: '46px' }}
          lineHeight={{ base: '26px', md: '80px' }}
          color="text.01"
          pt="5%"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
        <Box
          px="28%"
          width="100%"
          textAlign="center"
          fontFamily="sora"
          pb="8%"
          fontSize={{ base: '16px', md: '16px' }}
          lineHeight="24px"
          color="text.03"
          mt="30px"
        >
          <PrismicRichText field={slice.primary.body} />
        </Box>
      </Box>
    ) : (
      <Box bg="black">
        <Box
          textAlign="center"
          fontWeight="600"
          fontSize={{ base: '20px', md: '46px' }}
          lineHeight={{ base: '26px', md: '80px' }}
          color="white"
          pt="5%"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
        <Box
          px="28%"
          width="100%"
          textAlign="center"
          fontFamily="sora"
          fontSize={{ base: '16px', md: '16px' }}
          lineHeight="24px"
          color="grey03"
          mt="30px"
        >
          <PrismicRichText field={slice.primary.body} />
        </Box>
      </Box>
    )}
  </Box>
);

export default PageInfo;
