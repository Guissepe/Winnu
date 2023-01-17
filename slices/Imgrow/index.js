import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Text, Image } from '@chakra-ui/react';

const Imgrow = ({ slice }) => (
  <Box bgGradient="linear(to-r, white, #fcd2cc, white)">
    <Text textAlign="center" fontFamily="Sora" fontSize="32px">
      {slice.primary.main_title}
    </Text>
    <Box
      fontFamily="sora"
      pt={{ base: '47px', md: '94px' }}
      pb={{ base: '26px', md: '106px' }}
    >
      <Box>
        <Center max height="30px">
          {slice?.items?.map((item, i) => (
            <Box>
              <Image
                px="13%"
                width="150px"
                heigth="150px"
                src={item.image.url}
                alt={item.image.alt}
              />
              <Box pt="20px" textAlign="center">
                <Box textColor="#1E1E1E">
                  <PrismicRichText field={item.title} />
                </Box>
                <Box textColor="#787878">
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
export default Imgrow;
