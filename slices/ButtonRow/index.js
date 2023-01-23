import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Center, Flex, Text, Button } from '@chakra-ui/react';
// import Nextauth from '../../src/pages/api/auth/[...nextauth].js';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import { getProviders, signIn } from 'next-auth/react';

async function handleGoogleSignin() {
  signIn('google', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user',
  });
}
async function handleFacebookSignin() {
  signIn('facebook', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user',
  });
}
async function handleGitHubSignin() {
  signIn('github', {
    callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user',
  });
}

const ButtonRow = ({ slice }, { providers }) => (
  <Center bg="black">
    {slice.variation === 'DarkLog' ? (
      <Flex pb="15%" mx="34%">
        {slice?.items?.map((item, i) => (
          <Box px="1%" width="300px">
            <Center>
              <Button
                fontSize={17}
                width={500}
                maxWidth={500}
                height={55}
                fontFamily="Sora"
                px="35px"
                borderRadius="3px"
                mt={{ base: '5px', md: '10px' }}
                color="grey01"
                // onClick={}
              >
                <PrismicLink field={item.cta_link}>
                  <Text> {item.cta_text} </Text>
                </PrismicLink>
              </Button>
            </Center>
          </Box>
        ))}
      </Flex>
    ) : (
      <Flex pb="15%" mx="34%">
        {slice?.items?.map((item, i) => (
          <Box px="1%" width="300px">
            <Center>
              <Button
                fontSize={17}
                width={500}
                maxWidth={500}
                height={55}
                fontFamily="Sora"
                px="35px"
                borderRadius="3px"
                mt={{ base: '5px', md: '10px' }}
                bg="#grey01"
                color="white"
                onClick={signIn}
              >
                <Text> {item.cta_text} </Text>
              </Button>
            </Center>
          </Box>
        ))}
      </Flex>
    )}
  </Center>
);
export default ButtonRow;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
