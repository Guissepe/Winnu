import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Center, Text, Image } from '@chakra-ui/react';

const Imagerow = ({ slice }) => (
  <Box fontFamily={'sora'} bgGradient="linear(to-r, white, peach01  , white)">
    <Text textAlign="center" fontSize="32px">
      {slice.primary.main_title}
    </Text>
    <Box pt={{ base: '3rem', md: '6rem' }} pb={{ base: '1.75rem', md: '7rem' }}>
      <Box>
        <Center max height={30}>
          {slice?.items?.map((item, i) => (
            <Box>
              <Image
                px="13%"
                width={'9rem'}
                heigth={'9rem'}
                src={item.image.url}
                alt={item.image.alt}
              />
              <Box pt={1} textAlign="center">
                <Box textColor="grey01">
                  <PrismicRichText field={item.title} />
                </Box>
                <Box textColor="grey03">
                  <PrismicRichText field={item.description} />
                </Box>
              </Box>
            </Box>
          ))}
        </Center>
      </Box>
    </Box>
  </Box>
);
export default Imagerow;
