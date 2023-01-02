import { getProviders, signIn } from "next-auth/react"
import {
    Box,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react";

export default function SignIn({ providers }: { providers: any }) {
    try {
        throw new Error('Something bad happened');
      }
      catch(e) {
        console.log(e);
      };
  return (
    <>
    <Box background='black'>
        <Button fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn(providers.id, { callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app' })}>
            Sign in with {providers.name}
        </Button>
    </Box>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  };
};
