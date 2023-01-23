import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Center, Button, Text } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import Link from 'next/link';
import {
  handleGoogleSignin,
  handleFacebookSignin,
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

    {/* <LogInbutton
        fontSize={17}
        width={350}
        maxWidth={350}
        height={55}
        fontFamily="Sora"
        variant="primary"
        margin="20"
        borderRadius="3px"
        mt={{ base: '20px', md: '48px' }}
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={slice.primary.cta_text} />}
      ></LogInbutton>


      if({slice.variation === 'goog'})
    {
      <LogInbutton
        classname={slice.variation}
        variant="primary"
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={slice.primary.cta_text} />}
      ></LogInbutton>
    }
    else if({slice.variation === 'git'})
    {
      <LogInbutton
        classname={slice.variation}
        variant="primary"
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={handleGitHubSignin} />}
      ></LogInbutton>
    }
    else
    {
      <LogInbutton
        classname={slice.variation}
        variant="primary"
        src={slice.primary.cta_link}
        handler={handleGoogleSignin}
        provname={<PrismicRichText field={handleGitHubSignin} />}
      ></LogInbutton>
    }
      */}
  </Center>
);

export default Btton;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
