import { Box, Flex, Image, Show, Text } from "@chakra-ui/react";
import { useSession, getSession, getProviders, getCsrfToken } from 'next-auth/react'
import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';

const Testes = () => {

 const { authenticated, HandleLogin }: any = useContext(AuthContext);

 console.log(authenticated);

 return(
  <button onClick={HandleLogin}>Click me please</button>
 );
}
const Userimage = () => {
  const { data: session, status }: any = useSession();
    const loading = status === "loading"

    console.log('Session: ' + session, status )


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
