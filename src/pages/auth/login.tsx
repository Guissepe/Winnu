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

    </>
  )
}

export async function getServerSideProps(context: any) {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }
