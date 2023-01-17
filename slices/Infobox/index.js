import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import Head from 'next/head';
import { FiArrowUpRight } from 'react-icons/fi';
import {
  Box,
  Button,
  Flex,
  Show,
  Text,
  Center,
  VStack,
} from '@chakra-ui/react';
import CustomLink from '../../src/components/CustomLink.tsx';
import RichText from '../../src/components/RichText.tsx';
import { PrismicNextImage } from '@prismicio/next';

const Infobox = ({ slice }) => (
  <Box className="section relative bg-black">
    {slice.variation !== 'SingleButton' ? (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: '43px', md: '192px' }}
        pb={{ base: '44px', md: '95px' }}
        px="22px"
        fontSize="20px"
      >
        <VStack>
          <Box
            fontWeight="600"
            fontSize={{ base: '20px', md: '42px' }}
            lineHeight={{ base: '26px', md: '60px' }}
            color="text.01"
          >
            <RichText field={slice.primary.title} />
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
            <Button
              src={slice.primary.cta_link}
              variant="primary"
              py="18px"
              px="37px"
              mt={{ base: '20px', md: '48px' }}
              borderRadius="0px"
            >
              <PrismicRichText field={slice.primary.cta_text}></PrismicRichText>
            </Button>
          </Flex>
        </VStack>
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
        <VStack>
          <Box
            fontWeight="600"
            fontSize={{ base: '20px', md: '42px' }}
            lineHeight={{ base: '26px', md: '60px' }}
            color="text.01"
          >
            <RichText field={slice.primary.title} />
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
        </VStack>
      </Center>
    )}
    ;
  </Box>
);

export default Infobox;
