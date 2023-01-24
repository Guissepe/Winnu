import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Center } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';

import {
  handleGoogleSignin,
  handleGitHubSignin,
} from '../../src/components/Handlers.tsx';
import { getProviders } from 'next-auth/react';

const Btton = ({ slice }) => (
  <Center bg="black">
    {slice.variation === 'goog' ? (
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
    {slice.variation === 'git' ? (
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
    {slice.variation === 'face' ? (
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

export default Btton;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
