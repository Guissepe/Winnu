import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Flex, Center, Image, Text } from '@chakra-ui/react';

const Textimg = ({ slice }) => (
  <Box background={'black01'} pt="10%">
    {slice.variation !== 'textimgImgBottom' ? (
      <Center>
        <Flex gridGap="4rem" direction={{ base: 'column', lg: 'row' }}>
          <Box maxW={450}>
            <Box
              pt={'5rem'}
              color={'white'}
              fontWeight="600"
              fontSize={'2.5rem'}
            >
              <PrismicRichText field={slice.primary.title} />
            </Box>
            <Box
              color={'white'}
              fontSize={'1.15rem'}
              py={'1.5rem'}
              fontWeight="500"
              width={'25.7rem'}
            >
              <PrismicRichText field={slice.primary.subtitle} />
            </Box>
            <Box
              width={'22rem'}
              color={'BrowGray'}
              fontSize={'110%'}
              fontWeight="500"
            >
              <PrismicRichText field={slice.primary.description} />
            </Box>
          </Box>
          <Image
            borderStyle={'solid'}
            borderWidth={'3rem'}
            borderColor={'BrowGray'}
            width="52%"
            height="38%"
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
          />
        </Flex>
      </Center>
    ) : (
      <Box
        bg="brand.secondary"
        pt={'2.5rem'}
        fontFamily="sora"
        textAlign="center"
        px={'1.5rem'}
      >
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
              fontSize={{ base: '0.875rem', md: '1.5rem' }}
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
