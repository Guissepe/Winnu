import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Center, Button } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';

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

const Btton = ({ slice }) => (
  <Center bg="black">
    <Button
      fontSize={17}
      width={350}
      maxWidth={350}
      height={55}
      fontFamily="Sora"
      variant="primary"
      px="35px"
      borderRadius="3px"
      mt={{ base: '20px', md: '48px' }}
      src={slice.primary.cta_link}
      onClick={handleGoogleSignin}
    >
      <PrismicRichText field={slice.primary.cta_text} />
    </Button>
  </Center>
);

export default Btton;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
