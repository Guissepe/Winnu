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
import {
  useSession,
  getSession,
  getProviders,
  getCsrfToken,
} from 'next-auth/react';

const Header = ({ slice }) => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
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
              <HStack key={i}>
                <PrismicLink field={item.buttonlink}>
                  <Button background={'black'} color={'white'}>
                    <Text>{item.buttonname}</Text>
                  </Button>
                </PrismicLink>
              </HStack>
            ))}
          </Flex>
        </Show>
        {loading && <Box>Loading...</Box>}
        {session && (
          <Flex gap={'1rem'}>
            <Show above="md">
              <Text fontSize={'1rem'} color="white" pr={'1rem'}>
                {session.user.name ?? session.user.email}!
              </Text>
              <PrismicLink field={slice.primary.userlink}>
                <Image
                  height={'3rem'}
                  borderRadius={'360px'}
                  src={session.user.image}
                ></Image>
              </PrismicLink>
            </Show>
            <PrismicLink field={slice.primary.logoutuser}>
              <Button borderRadius={1} background={'black'} color={'white'}>
                <Text>{slice.primary.user}</Text>
              </Button>
            </PrismicLink>
            <Hide above="md">
              <Image src="/assets/icons/menu.svg" alt="menu" />
            </Hide>
          </Flex>
        )}
        {!session && (
          <>
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
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
