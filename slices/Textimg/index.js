import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Image, Text } from '@chakra-ui/react';

const Textimg = ({ slice }) => (
  <Box pt="10%">
    {slice.variation !== 'textimgImgBottom' ? (
      <Center>
        <Flex gridGap="70px">
          <Box maxW="450px">
            <Box fontWeight="600" fontSize="42px" lineHeight="60px">
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box fontSize="30px" fontWeight="500" lineHeight="80px">
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box lineHeight="24px">
              <PrismicRichText field={slice.primary.description} />
            </Box>
            <Box
              borderWidth="1.5px"
              borderColor="black"
              mt="24px"
              mb="44px"
            ></Box>
            <Text fontWeight="600" fontSize="42px" lineHeight="60px">
              {slice.primary.title2}
            </Text>
            <Text fontWeight="600" fontSize="42px" lineHeight="60px">
              {slice.primary.title2}
            </Text>
          </Box>
          <Image
            width="100%"
            height="100%"
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
          />
        </Flex>
      </Center>
    ) : (
      <Box
        bg="brand.secondary"
        pt="80px"
        fontFamily="sora"
        textAlign="center"
        px="22px"
      >
        <Center>
          <Box>
            <Box fontWeight="600" fontSize={{ base: '14px', md: '35px' }}>
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box
              fontWeight="500"
              fontSize={{ base: '16px', md: '30px' }}
              mt="20px"
            >
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box
              color="text.grey02"
              mt={{ base: '10px', md: '24px' }}
              fontSize={{ base: '14px', md: '22px' }}
              maxW="618px"
              mx="auto"
            >
              <PrismicRichText field={slice.primary.description} />
            </Box>
          </Box>
        </Center>
        <Center mt="64px">
          <Image
            width={840}
            height={500}
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
          />
        </Center>
      </Box>
    )}
  </Box>
);

export default Textimg;
