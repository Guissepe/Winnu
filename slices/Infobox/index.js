import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import Head from 'next/head';
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
  <section className="section relative bg-black">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black bg-opacity-75  mix-blend-multiply" />
    </div>
    <div className="container relative py-48">
      <Center fontSize="20px" background="yellow">
        <VStack>
          <Box fontSize="50px" width="750px" textAlign="center">
            <RichText
              field={slice.primary.title}
              className="text-2xl text-blue font-bold"
            />
          </Box>
          <div>
            {slice?.items?.map((item, i) => (
              <PrismicLink field={item.cta_link}>{item.cta_text}</PrismicLink>
            ))}
          </div>
          <RichText field={slice.primary.description} className="text-white" />
        </VStack>
      </Center>
    </div>
  </section>
);

export default Infobox;
