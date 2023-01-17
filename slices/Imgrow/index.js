import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Text, Image } from '@chakra-ui/react';

const Imgrow = ({ slice }) => (
  <Box>
    <Box>
      <Text textAlign="center" fontFamily="Sora" fontSize="32px">
        {slice.primary.main_title}
      </Text>
    </Box>
    <Box>
      <Center>
        <Flex>
          {slice?.items?.map((item, i) => (
            <Box>
              <Image
                width="150px"
                heigth="150px"
                src={item.image.url}
                alt={item.image.alt}
              />
              <Box pb="40px" textAlign="center">
                <PrismicRichText field={item.title} />
                <PrismicRichText field={item.description} />
              </Box>
            </Box>
          ))}
        </Flex>
      </Center>
    </Box>
  </Box>
);
export default Imgrow;
