import React, { useContext } from 'react';
import { PrismicLink } from '@prismicio/react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Center,
  HStack,
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
            <HStack key={i}>
              <PrismicLink field={item.buttonlink}>
                <Button background={'black'} color={'white'}>
                  <Text>{item.buttonname}</Text>
                </Button>
              </PrismicLink>
            </HStack>
          ))}
        </Center>
      </Flex>

      {loading && <Box>Loading...</Box>}
      {session && (
        <Center ml={'16rem'}>
          <Text fontSize={'1.75rem'} color="white">
            {session.user.name ?? session.user.email}!
          </Text>
          <PrismicLink field={slice.primary.userlink}>
            <Image
              height={'3rem'}
              borderRadius={'360px'}
              src={session.user.image}
            ></Image>
          </PrismicLink>

          <PrismicLink field={slice.primary.logoutuser}>
            <Button borderRadius={1} background={'black'} color={'white'}>
              <Text>{slice.primary.user}</Text>
            </Button>
          </PrismicLink>
        </Center>
      )}
      {!session && (
        <>
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
        </>
      )}
    </Center>
  );
};

export default Header;
