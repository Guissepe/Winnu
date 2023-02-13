import React from 'react';
import { PrismicLink } from '@prismicio/react';
import { Flex, Image, Text, Button, Center, HStack } from '@chakra-ui/react';

const Header = ({ slice }) => (
  <Center py={'1rem'} background={'black'}>
    <Flex>
      <Center>
        <Image
          pr={'24rem'}
          height={'1.25rem'}
          src={slice.primary.logo.url}
          alt={slice.primary.logo.alt}
        />
      </Center>
      <Center mx={'11rem'}>
        {slice?.items?.map((item, i) => (
          <HStack>
            <PrismicLink field={item.buttonlink}>
              <Button background={'black'} color={'white'}>
                <Text>{item.buttonname}</Text>
              </Button>
            </PrismicLink>
          </HStack>
        ))}
      </Center>
    </Flex>
    <Center ml={'16rem'}>
      <PrismicLink field={slice.primary.loglink}>
        <Button borderRadius={1} background={'black'} color={'white'}>
          <Text>{slice.primary.login}</Text>
        </Button>
      </PrismicLink>
      <PrismicLink field={slice.primary.startedlink}>
        <Button borderRadius={1} variant={'primary'} color={'Black'}>
          <Text>{slice.primary.getstarted}</Text>
        </Button>
      </PrismicLink>
    </Center>
  </Center>
);

export default Header;
