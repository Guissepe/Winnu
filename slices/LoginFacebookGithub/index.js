import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, Flex, Button } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import {
  handleFacebookSignin,
  handleGitHubSignin,
} from '../../src/components/Handlers.tsx';
import { getProviders, signIn } from 'next-auth/react';

const FaceBtton = ({ slice }) => (
  <Center bg="black">
    <Flex mb={435} mt={'1rem'}>
      <Button
        borderRadius="3px"
        fontSize={17}
        width={350}
        maxWidth={850}
        height={55}
        color={'white'}
        background={'dkgrey01'}
        fontFamily="Sora"
        variant="primary"
        onClick={() =>
          signIn('facebook', {
            callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/userpage',
          })
        }
        mx={'2'}
      >
        <PrismicRichText field={slice.primary.logface} />
      </Button>
      <Button
        borderRadius="3px"
        fontSize={17}
        width={350}
        maxWidth={850}
        height={55}
        color={'white'}
        background={'dkgrey01'}
        fontFamily="Sora"
        variant="primary"
        mx={'2'}
        onClick={() =>
          signIn('github', {
            callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/userpage',
          })
        }
      >
        <PrismicRichText field={slice.primary.loggit} />
      </Button>
    </Flex>
  </Center>
);

export default FaceBtton;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
