import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Image, Text } from '@chakra-ui/react';

const Textimg = ({ slice }) => (
  <Box pt="10%">
    {slice.variation !== 'textimgImgBottom' ? (
      <Center>
        <Flex gridGap="70px">
          <Box maxW={450}>
            <Box fontWeight="600" fontSize={42}>
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box fontSize={30} fontWeight="500">
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box>
              <PrismicRichText field={slice.primary.description} />
            </Box>
            <Box borderWidth={1.5} borderColor="black" mt={8} mb={10}></Box>
            <Text fontWeight="600" fontSize={42}>
              {slice.primary.title2}
            </Text>
            <Text fontWeight="600" fontSize={42}>
              {slice.primary.title3}
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
        pt={40}
        fontFamily="sora"
        textAlign="center"
        px={22}
      >
        <Center>
          <Box>
            <Box fontWeight="600" fontSize={{ base: 14, md: 35 }}>
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box fontWeight="500" fontSize={{ base: 16, md: 30 }} mt={5}>
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box
              color="text.grey02"
              mt={{ base: 3, md: 6 }}
              fontSize={{ base: 14, md: 22 }}
              maxW={618}
              mx="auto"
            >
              <PrismicRichText field={slice.primary.description} />
            </Box>
          </Box>
        </Center>
        <Center mt={20}>
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
