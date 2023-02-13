import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import { handleGoogleSignin } from '../../src/components/Handlers.tsx';
import { getProviders } from 'next-auth/react';

const GoogBtton = ({ slice }) => (
  <Center bg="black">
    <LogInbutton
      marginTop={'7rem'}
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
