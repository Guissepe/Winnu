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
      {Object.values(providers).map((provider: any) => (
        <Flex alignContent={'center'} ml={'33%'} key={provider.name}>
          <Image src="https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/github.svg"></Image>
          <Button fontFamily="Sora" variant="primary" py="16px" px="35px" borderRadius="3px" onClick={() => signIn(provider.id, { callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app' })}>
            Sign in with {provider.name}
          </Button>
        </Flex>
      ))}
    </Box>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
