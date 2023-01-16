import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center } from '@chakra-ui/react';

const Textimg = ({ slice }) => (
  <section>
    {slice.variation !== 'textimgImgBottom' ? (
      <Flex>
        <Box>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
          <PrismicRichText field={slice.primary.description} />
          <span>{slice.primary.title2}</span>
        </Box>
        <img
          width="200px"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
        />
      </Flex>
    ) : (
      <Box>
        <Box>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
          <PrismicRichText field={slice.primary.description} />
          <span>{slice.primary.title2}</span>
        </Box>
        <img
          width="200px"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
        />
      </Box>
    )}
    <style jsx>{`
      section {
        max-width: 900px;
        margin: 4em auto;
        text-align: left;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default Textimg;
