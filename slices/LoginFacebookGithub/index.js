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
      {/* <LogInbutton
        classname={slice.variation}
        color={'white'}
        marginX={2}
        backcolor={'dkgrey01'}
        src={handleFacebookSignin}
        click={handleFacebookSignin}
        provname={<PrismicRichText field={slice.primary.logface} />}
      ></LogInbutton> */}
      {/* <LogInbutton
        classname={slice.variation}
        color={'white'}
        backcolor={'dkgrey01'}
        src={handleFacebookSignin}
        click={handleGitHubSignin}
        marginX={2}
        provname={<PrismicRichText field={slice.primary.loggit} />}
      ></LogInbutton> */}
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
        onClick={() => signIn('github')}
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
        onClick={() => signIn('facebook')}
        mx={'2'}
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
