import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Center, Button, Text } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import Link from 'next/link';
import { handleGoogleSignin } from '../../src/components/Handlers.tsx';
import { getProviders } from 'next-auth/react';

const GoogBtton = ({ slice }) => (
  <Center bg="black">
    <LogInbutton
      marginTop={115}
      classname={slice.variation}
      variant="primary"
      src={handleGoogleSignin}
      handler={handleGoogleSignin}
      provname={<PrismicRichText field={slice.primary.title} />}
    ></LogInbutton>
  </Center>
);

export default GoogBtton;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
