import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box } from '@chakra-ui/react';

const PageInfo = ({ slice }) => (
  <section>
    <Box>
      <Box
        pt="5%"
        textAlign="center"
        fontFamily="sora"
        fontSize="32px"
        pb="35px"
      >
        <PrismicRichText field={slice.primary.title} />
      </Box>
      <Box
        px="31%"
        width="100%"
        textAlign="center"
        fontFamily="sora"
        fontSize="15px"
        pb="8%"
      >
        <PrismicRichText field={slice.primary.body} />
      </Box>
    </Box>
  </section>
);

export default PageInfo;
