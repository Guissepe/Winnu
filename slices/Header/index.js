import React from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Center,
  HStack,
  Hide,
  Show,
} from '@chakra-ui/react';

const Header = ({ slice }) => (
  <Box py={'1rem'} background={'black'}>
    <Flex justify={'space-between'} align={'center'} maxW={1280} mx="auto">
      <Box>
        <Image
          height={'1.25rem'}
          src={slice.primary.logo.url}
          alt={slice.primary.logo.alt}
        />
      </Box>
      <Show above="md">
        <Flex gap={6}>
          {slice?.items?.map((item, i) => (
            <HStack>
              <PrismicLink field={item.buttonlink}>
                <Button background={'black'} color={'white'}>
                  <Text>{item.buttonname}</Text>
                </Button>
              </PrismicLink>
            </HStack>
          ))}
        </Flex>
      </Show>

      <Flex gap={'1rem'}>
        <Show above="md">
          <PrismicLink field={slice.primary.loglink}>
            <Button borderRadius={1} background={'black'} color={'white'}>
              <Text>{slice.primary.login}</Text>
            </Button>
          </PrismicLink>
        </Show>
        <PrismicLink field={slice.primary.startedlink}>
          <Button borderRadius={1} variant={'primary'} color={'Black'}>
            <Text>{slice.primary.getstarted}</Text>
          </Button>
        </PrismicLink>
        <Hide above="md">
          <Image src="/assets/icons/menu.svg" alt="menu" />
        </Hide>
      </Flex>
    </Flex>
  </Box>
);

export default Header;
