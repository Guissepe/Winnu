import { getProviders, signIn } from "next-auth/react"
import {
    Box,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react";

export default function SignIn({ providers }: { providers: any }) {
  return (
    <>
    <Box background='black'>
        <Button fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn()}>
            Sign in with
        </Button>
      {Object.values(providers).map((provider: any) => (
         <Flex key={provider.name}>
          <Button fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn()}>
            Sign in with {provider.name}
          </Button>
        </Flex>
          ))}
    </Box>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const providers = getProviders()
  return {
    props: { providers },
  };
};
