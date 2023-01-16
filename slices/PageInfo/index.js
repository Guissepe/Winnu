import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Text } from '@chakra-ui/react';

const PageInfo = ({ slice }) => (
  <section>
    <Box alignContent="center">
      {/* <Text align="center">{slice.primary.title}</Text> */}
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicRichText field={slice.primary.btext} />
    </Box>

    <Center>
      <Flex>
        {slice?.items?.map((item, i) => (
          <Box>
            <img
              width="200px"
              heigth="200px"
              src={item.membimg.url}
              alt={item.membimg.alt}
            />
            <PrismicRichText
              field={item.name}
              components={{
                heading3: ({ children }) => <h1 className="text-center" />,
              }}
            />
            <PrismicRichText field={item.function} />
          </Box>
        ))}
      </Flex>
    </Center>
  </section>
);

export default PageInfo;
