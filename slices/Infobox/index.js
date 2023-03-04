import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Button, Flex, Center, Image } from '@chakra-ui/react';

const Infobox = ({ slice }) => (
  <Box className="section relative bg-black">
    {slice.variation !== 'singleButton' ? (
      <Center
        textAlign="center"
        fontFamily="manrope"
        pt={{ base: '2.5rem', md: '4rem' }}
        pb={{ base: '3rem', md: '	4.5rem' }}
        px={'1.5rem'}
        fontSize={'1.25rem'}
      >
        <Box width={720}>
          <Box
            fontWeight="600"
            fontSize={{ base: '1.25rem', md: '2rem' }}
            color="#1E1E1E"
            fontFamily={'manrope'}
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: '1rem', md: '1.125rem' }}
            lineHeight={'2rem'}
            fontFamily="manrope"
            fontWeight="400"
            color="#1E1E1E"
            mt={'2rem'}
            mx={'auto'}
            width={562}
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt={54}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            {slice?.items?.map((item, i) => (
              <Box key={i} height="10%" px={2}>
                <PrismicLink field={item.cta_link}>
                  <Button variant={'primary'}>
                    <PrismicRichText field={item.cta_text}></PrismicRichText>
                  </Button>
                </PrismicLink>
              </Box>
            ))}
          </Flex>
        </Box>
      </Center>
    ) : (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: '2.5rem', md: '12rem' }}
        pb={{ base: '2.5rem', md: '	6rem' }}
        px={'1.5rem'}
        fontSize={'1.25rem'}
      >
        <Box>
          <Box
            fontWeight="600"
            fontSize={{ base: '1.25rem', md: '2.5rem' }}
            color="text.01"
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: '1rem', md: '1.5rem' }}
            color="text.02"
            mt="16px"
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt="54px"
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          ></Flex>
          <PrismicLink field={slice.primary.cta_link}>
            <Box height="15%">
              <Button
                src={slice.primary.cta_link}
                variant="primary"
                width={'12rem'}
                height="15%"
                py={'1rem'}
                px={'2.25rem'}
                mt={{ base: '0.625rem', md: '1.25rem' }}
                borderRadius="0"
              >
                <PrismicRichText
                  field={slice.primary.cta_text}
                ></PrismicRichText>
              </Button>
            </Box>
          </PrismicLink>
        </Box>
      </Center>
    )}
    ;
  </Box>
);

export default Infobox;
