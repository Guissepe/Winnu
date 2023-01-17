import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box } from '@chakra-ui/react';

const PageInfo = ({ slice }) => (
  <section>
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
        color="text.02"
        mt="30px"
      >
        <PrismicRichText field={slice.primary.body} />
      </Box>
    </Box>
  </section>
);

export default PageInfo;
