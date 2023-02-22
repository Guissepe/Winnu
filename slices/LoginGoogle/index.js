import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, Button } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import { handleGoogleSignin } from '../../src/components/Handlers.tsx';
import { getProviders, signIn } from 'next-auth/react';

const GoogBtton = ({ slice }) => (
  <Center bg="black">
    <Button
      borderRadius="3px"
      mt={'7rem'}
      fontSize={17}
      width={350}
      maxWidth={850}
      height={55}
      variant="primary"
      fontFamily="Sora"
      onClick={
        (() => signIn('google'),
        {
          callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/userpage',
        })
      }
    >
      <PrismicRichText field={slice.primary.title} />
    </Button>
  </Center>
);

export default GoogBtton;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
