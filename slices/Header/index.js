import React from 'react';
import { PrismicLink } from '@prismicio/react';
import { Flex, Image, Text, Button, Center, Box } from '@chakra-ui/react';

const Header = ({ slice }) => (
  <Center background={'black'}>
    <Flex>
      <Center>
        <Image
          pr={'2.5rem'}
          height={'0.5rem'}
          width={'100%'}
          src={slice.primary.logo.url}
          alt={slice.primary.logo.alt}
        />
      </Center>

      {slice?.items?.map((item, i) => (
        <Center ml={'0.375rem'}>
          <PrismicLink field={item.buttonlink}>
            <Button background={'black'} color={'white'}>
              <Text>{item.buttonname}</Text>
            </Button>
          </PrismicLink>
        </Center>
      ))}
    </Flex>
    <Center pl={520}>
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
