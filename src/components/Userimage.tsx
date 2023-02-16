import React from "react";
import { Box, Flex, Image, Show, Text } from "@chakra-ui/react";
import { useSession, getSession, getProviders, getCsrfToken } from 'next-auth/react'
import { userInfo } from "os";
const Userimage = () => {
  const { data: session, status, user }: any = useSession();
    const loading = status === "loading"

    console.log('Session: ' + session, status, user )


  return (
    <Box bg="black" py="1.5rem" pl="0.75rem" pr="1.5rem">
      <Flex align="center" justify="space-between" maxW="1280px" mx="auto">
        <Show above="lg">
        <Box>
           {loading && <Box>Loading...</Box>}
           {
            session &&
              <>
                <Image borderRadius={'360px'} src={session.user.image}></Image>
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

export default Userimage;
