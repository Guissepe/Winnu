import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import {
  Container,
  Box,
  Button,
  Text,
  Image,
  Flex,
  Center,
  VStack,
} from '@chakra-ui/react';

/**
 * @typedef {import("@prismicio/client").Content.TemplatesSlice} TemplatesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TemplatesSlice>} TemplatesProps
 * @param { TemplatesProps }
 */
const Templates = ({ slice }) => (
  <Container as="section" maxW={'6xl'} py={'8rem'}>
    <Text fontWeight="bold" fontSize={'2rem'} maxW={345}>
      {slice.primary.title}
    </Text>

    <Flex wrap={'wrap'} justify={'center'} gap={'3rem'} mt={'2rem'}>
      {slice?.items?.map((item, i) => (
        <Box key={i}>
          <Box position={'relative'}>
            <Flex
              _hover={{ opacity: '100%' }}
              transition={'all 300ms ease-in-out'}
              position={'absolute'}
              inset={'0'}
              bg={'#0000008A'}
              opacity={'0'}
              height={'100%'}
              justify={'center'}
              alignItems={'center'}
            >
              <VStack>
                <Button variant={'primary'}>{item.btn_start}</Button>
                <Button variant={'transparent'}>{item.btn_preview}</Button>
              </VStack>
            </Flex>
            <Image src={item.image.url} alt={item.image.alt} />
          </Box>
          <Text mt={'1.5rem'} fontWeight="semibold">
            {item.name}
          </Text>
        </Box>
      ))}
    </Flex>
  </Container>
);

export default Templates;
