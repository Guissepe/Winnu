import { getProviders, signIn } from "next-auth/react"
import {
    Box,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react";

  import Google, { GoogleProfile } from "next-auth/providers/google";
  import Nextauth from "../api/auth/[...nextauth]";


  async function handleGoogleSignin(){
    signIn('google', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user'})
}
async function handleFacebookSignin(){
    signIn('facebook', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user'})
}
async function handleGitHubSignin(){
    signIn('github', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user'})
}


export default function SignIn({ providers }: { providers: any }) {


// Google handler

  return (
    <>
    <Box background='black'>
            <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={ () => handleGoogleSignin()}>
                Sign in with {providers.name}
            </Button>
            <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={ () => handleFacebookSignin()}>
                Sign in with {providers.name}
            </Button>
            <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={ () => handleGitHubSignin()}>
                Sign in with {providers.name}
            </Button>
    {/* {Object.values(providers).map((provider: any) => (
        <Flex key={provider.name}>


            <Button fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn()}>
                Sign in with {provider.name}
            </Button>
        </Flex>
          ))} */}
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
