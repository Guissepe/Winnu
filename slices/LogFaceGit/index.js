import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, Flex } from '@chakra-ui/react';
import { LogInbutton } from '../../src/components/loginbutton.tsx';
import {
  handleFacebookSignin,
  handleGitHubSignin,
} from '../../src/components/Handlers.tsx';
import { getProviders } from 'next-auth/react';

const FaceBtton = ({ slice }) => (
  <Center bg="black">
    <Flex mb={435} mt={15}>
      <LogInbutton
        classname={slice.variation}
        color={'white'}
        marginX={2}
        backcolor={'dkgrey01'}
        src={handleFacebookSignin}
        handler={handleFacebookSignin}
        provname={<PrismicRichText field={slice.primary.logface} />}
      ></LogInbutton>
      <LogInbutton
        classname={slice.variation}
        color={'white'}
        backcolor={'dkgrey01'}
        src={handleFacebookSignin}
        handler={handleGitHubSignin}
        marginX={2}
        provname={<PrismicRichText field={slice.primary.loggit} />}
      ></LogInbutton>
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
