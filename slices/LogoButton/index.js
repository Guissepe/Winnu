import React from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  Button,
  Center,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
} from '@chakra-ui/react';

const LogoButton = ({ slice }) => (
  <VStack fontFamily={'Sora'} pb={'6rem'} background={'grey01'}>
    <Center>
      <Image
        height={'3.5rem'}
        m={'3rem'}
        src={slice.primary.logo.url}
        alt={slice.primary.logo.alt}
      />
    </Center>

    <Center>
      <Text fontSize={'1.5rem'} color={'white'}>
        {slice.primary.follow}
      </Text>
    </Center>
    <HStack>
      <Text fontSize={'1.5rem'} color={'white'}>
        {slice.primary.poweredby}
      </Text>
      {slice?.items?.map((item, i) => (
        <Center key={i}>
          <Image height={'2.25rem'} src={item.icon.url} alt={item.icon.alt} />
          <PrismicLink field={item.link}>{item.icon.url}</PrismicLink>
        </Center>
      ))}
    </HStack>
  </VStack>
);

export default LogoButton;
