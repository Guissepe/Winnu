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
      {Object.values(providers).map((provider: any) => (
         <Flex key={provider.name}>
          <Button fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn(provider.id, { callbackUrl: 'https://winnu-git-fix-guissepe.vercel.app' })}>
            Sign in with {provider.name}
          </Button>
        </Flex>
          ))}
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
