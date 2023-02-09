import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Image, Text } from '@chakra-ui/react';

const Textimg = ({ slice }) => (
  <Box fontFamily={'sora'} pt="10%">
    {slice.variation !== 'textimgImgBottom' ? (
      <Center>
        <Flex gridGap="4rem">
          <Box maxW={450}>
            <Box fontWeight="600" fontSize={'2.5rem'}>
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box fontSize={'2rem'} fontWeight="500">
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box>
              <PrismicRichText field={slice.primary.description} />
            </Box>
            <Box
              borderWidth={1.5}
              borderColor="black"
              mt={'0.5rem'}
              mb={'0.625rem'}
            ></Box>
            <Text fontWeight="600" fontSize={'2.5rem'}>
              {slice.primary.title2}
            </Text>
            <Text fontWeight="600" fontSize={'2.5rem'}>
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
      <Box bg="brand.secondary" pt={'2.5rem'} textAlign="center" px={'1.25rem'}>
        <Center>
          <Box>
            <Box
              fontWeight="600"
              fontSize={{ base: '0.875rem', md: '2.25rem' }}
            >
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box
              fontWeight="500"
              fontSize={{ base: '1rem', md: '2rem' }}
              mt={5}
            >
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box
              color="text.grey02"
              mt={{ base: 3, md: 6 }}
              fontSize={{ base: '0.875rem', md: '1.25rem' }}
              maxW={618}
              mx="auto"
            >
              <PrismicRichText field={slice.primary.description} />
            </Box>
          </Box>
        </Center>
        <Center mt={'1.25rem'}>
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
