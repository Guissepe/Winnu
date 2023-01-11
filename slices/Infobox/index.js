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
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import CustomLink from '../../src/components/CustomLink.tsx';
import RichText from '../../src/components/RichText.tsx';
import { PrismicNextImage } from '@prismicio/next';

const Infobox = ({ slice }) => (
  <section className="section relative bg-black">
    <div className="absolute inset-0">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
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

          <RichText field={slice.primary.description} className="text-white" />
        </VStack>
      </Center>
    </div>
  </section>
);

export default Infobox;
