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
        <Flex key={provider.name}>
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



