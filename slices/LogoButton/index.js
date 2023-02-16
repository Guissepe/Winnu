import React from 'react';
import { PrismicLink } from '@prismicio/react';
import { Button, Center, Text, Image, Flex } from '@chakra-ui/react';

const LogoButton = ({ slice }) => (
  <Center fontFamily={'Sora'} pb={'0.625rem'} background={'black'}>
    <Flex>
      <Image
        height={'2rem'}
        pr={'7rem'}
        src={slice.primary.logo.url}
        alt={slice.primary.logo.alt}
      />
      <Flex>
        <Center>
          <Text color={'text.grey04'} pr={3}>
            {slice.primary.follow}
          </Text>
        </Center>
        {slice?.items?.map((item, i) => (
          <Center key={i}>
            <Image height={5} px={1} src={item.icon.url} alt={item.icon.alt} />
            <PrismicLink field={item.link}>{item.icon.url}</PrismicLink>
          </Center>
        ))}
      </Flex>
    </Flex>
  </Center>
);

export default LogoButton;
