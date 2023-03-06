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
    <HStack
      justify={'center'}
      background={'white01'}
      spacing={'25%'}
      align={'center'}
    >
      <Center width={'13rem'} height={'5.25rem'}>
        <Image
          width={'11rem'}
          height={'3.25rem'}
          src={slice.primary.logo.url}
          alt={slice.primary.logo.alt}
        />
      </Center>
      <Show above="md">
        <Flex gap={6}>
          {slice?.items?.map((item, i) => (
            <HStack key={i}>
              <PrismicLink field={item.buttonlink}>
                <Button background={'white01'} color={'black'}>
                  <Text fontSize={'1.25rem'}>{item.buttonname}</Text>
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
          <Center gap={'1rem'}>
            <Show above="md">
              <PrismicLink field={slice.primary.loglink}>
                <Button
                  variant={'trasnparent'}
                  borderRadius={1}
                  color={'black'}
                >
                  <Text>{slice.primary.login}</Text>
                </Button>
              </PrismicLink>
            </Show>
            <PrismicLink field={slice.primary.startedlink}>
              <Button
                variant={'primary'}
                color={'Black'}
                borderRadius={'6'}
                height="3.125rem"
                width={'8rem'}
              >
                <Text fontSize={'0.85rem'}>{slice.primary.getstarted}</Text>
              </Button>
            </PrismicLink>
            <Hide above="md">
              <Image src="/assets/icons/menu.svg" alt="menu" />
            </Hide>
          </Center>
        </>
      )}
    </HStack>
  );
};

export default Header;
