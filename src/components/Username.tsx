import React from "react";
import { Box, Flex, Image, Show, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from 'next-auth/react'
const Username = () => {
    const { data: session, status }: any = useSession();
    const loading = status === "loading"

  return (
    <Box bg="black">
      <Flex align="center" justify="space-between" maxW="1280px" mx="auto">
        <Show above="lg">
        <Box>
           {loading && <Box>Loading...</Box>}
           {
            session &&
              <>
                <Text fontSize={'1.75rem'} color='white' >{session.user.name ?? session.user.email}!</Text>
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

export default Username;
