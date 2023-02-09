import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Button, Flex, Center, Image } from '@chakra-ui/react';

const Infobox = ({ slice }) => (
  <Box fontFamily={'sora'}>
    {slice.variation !== 'singleButton' ? (
      <Center
        textAlign="center"
        pt={{ base: '2.5rem', md: '12rem' }}
        pb={{ base: '3rem', md: '6rem' }}
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
            fontSize={{ base: 16, md: 32 }}
            fontWeight="18rem"
            fontStyle="italic"
            color="text.grey02"
            pt={2}
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt={'3.5rem'}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            {slice?.items?.map((item, i) => (
              <Box height="10%" px={2}>
                <PrismicLink field={item.cta_link}>
                  <Button
                    height="10%"
                    width={'12rem'}
                    variant="primary"
                    py={4}
                    mt={{ base: '1.25rem', md: '1.25rem' }}
                    borderRadius="0"
                  >
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
        pt={{ base: '2.5rem', md: '12rem' }}
        pb={{ base: '3rem', md: '6rem' }}
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
            fontSize={{ base: '1rem', md: '1.25rem' }}
            color="text.02"
            mt="1rem"
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt="3.5rem"
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
                py={'1.25rem'}
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
