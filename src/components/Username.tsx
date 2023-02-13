import React from "react";
import { Box, Button, Flex, Hide, Show, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from "next/image";
import Link from "next/link";
import { any } from "io-ts";
const username = () => {

    const handleSignin = (e: any) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e: any) => {
        e.preventDefault()
        signOut()
    }
    const { data: session, status }: any = useSession();
    const loading = status === "loading"

  return (
    <Box bg="black" py="1.5rem" pl="0.75rem" pr="1.5rem">
      <Flex align="center" justify="space-between" maxW="1280px" mx="auto">
        <Show above="lg">
        <Box>
           {loading && <Box>Loading...</Box>}
           {
            session &&
              <>
                <Text color='white' >{session.user.name ?? session.user.email}!</Text>
               <Text mb='0.625rem'> </Text> <br />
              </>
            }
           {
            !session &&
              <>
              </>
           }
         </Box>
        </Show>
      </Flex>
    </Box>
  );
};

export default username;
