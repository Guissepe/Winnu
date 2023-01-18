import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import Head from 'next/head';
import { FiArrowUpRight } from 'react-icons/fi';
import { Box, Button, Flex, Center } from '@chakra-ui/react';
import { PrismicNextImage } from '@prismicio/next';

const Infobox = ({ slice }) => (
  <Box className="section relative bg-black">
    {slice.variation !== 'singleButton' ? (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: '43px', md: '192px' }}
        pb={{ base: '44px', md: '95px' }}
        px="22px"
        fontSize="20px"
      >
        <Box>
          <Box
            fontWeight="600"
            fontSize={{ base: '20px', md: '42px' }}
            lineHeight={{ base: '26px', md: '60px' }}
            color="text.01"
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: '16px', md: '32px' }}
            fontWeight="300"
            fontStyle="italic"
            color="text.grey02"
            pt="12px"
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt="54px"
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            {slice?.items?.map((item, i) => (
              <Button
                variant="primary"
                py="18px"
                px="37px"
                mt={{ base: '20px', md: '48px' }}
                borderRadius="0px"
              >
                <PrismicLink field={item.cta_link}>
                  <PrismicRichText field={item.cta_text}></PrismicRichText>
                </PrismicLink>
              </Button>
            ))}
          </Flex>
        </Box>
      </Center>
    ) : (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: '43px', md: '192px' }}
        pb={{ base: '44px', md: '95px' }}
        px="22px"
        fontSize="20px"
      >
        <Box>
          <Box
            fontWeight="600"
            fontSize={{ base: '20px', md: '42px' }}
            lineHeight={{ base: '26px', md: '60px' }}
            color="text.01"
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: '16px', md: '22px' }}
            lineHeight={{ base: '26px', md: '44px' }}
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
          <Button
            src={slice.primary.cta_link}
            variant="primary"
            py="18px"
            px="37px"
            mt={{ base: '20px', md: '48px' }}
            borderRadius="0px"
          >
            <PrismicLink field={slice.primary.cta_link}>
              <PrismicRichText field={slice.primary.cta_text}></PrismicRichText>
            </PrismicLink>
          </Button>
        </Box>
      </Center>
    )}
    ;
  </Box>
);

export default Infobox;
