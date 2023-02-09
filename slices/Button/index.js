import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Center } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';

import {
  handleGoogleSignin,
  handleGitHubSignin,
} from '../../src/components/Handlers.tsx';
import { getProviders } from 'next-auth/react';

const Button = ({ slice }) => (
  <Center bg="black">
    {slice.variation === 'google' ? (
      <LogInbutton
        classname={slice.variation}
        variant="primary"
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={slice.primary.cta_text} />}
      ></LogInbutton>
    ) : (
      <Box />
    )}
    {slice.variation === 'github' ? (
      <LogInbutton
        classname={slice.variation}
        variant="primary"
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={handleGitHubSignin} />}
      ></LogInbutton>
    ) : (
      <Box />
    )}
    {slice.variation === 'facebook' ? (
      <LogInbutton
        classname={slice.variation}
        variant="primary"
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={handleGitHubSignin} />}
      ></LogInbutton>
    ) : (
      <Box />
    )}
  </Center>
);

export default Button;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
