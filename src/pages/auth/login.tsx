import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react"
import {
    Box,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react";
import Google, { GoogleProfile } from "next-auth/providers/google";
import Nextauth from "../api/auth/[...nextauth]";

// Google handler
async function handleGoogleSignin(){
    signIn('google', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app'})
}
async function handleFacebookSignin(){
    signIn('facebook', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app'})
}
async function handleGitHubSignin(){
    signIn('github', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app'})
}


export default function SignIn({ providers }: { providers: any}) {
  return (
    <>
        <Box  background='black' key={providers.name}>
                    <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={handleGoogleSignin}>
                        Sign in with {providers.name}
                    </Button>
                    <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={handleFacebookSignin}>
                        Sign in with {providers.name}
                    </Button>
                    <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={handleGitHubSignin}>
                        Sign in with {providers.name}
                    </Button>
            {Object.values(providers).map ((provider: any) => (
                <>
                <Flex>
                    {/* <Button width={250} fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn(providers.id, { callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app' })}>
                        Sign in with {providers.name}
                    </Button> */}

                </Flex>

                </>
                    ))}
        </Box>
    </>
  )
}

// SignIn.getInitialProps = async(context: any) => {
//     const {req, res} = context
//     const session = await getSession({req});

//     if (session && res && session.accessToken)
// }

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
