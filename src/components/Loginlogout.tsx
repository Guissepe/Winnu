import React from "react";
import { Box, Button, Flex, Hide, Show, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from "next/image";
import Link from "next/link";
const Loginfunction = () => {

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
console.log(session)

return (

<Box bg="black" py="1.5rem" pl="12px" pr="1.5rem">
<Flex align="center" justify="space-between" maxW="1280px" mx="auto">

  <Show above="lg">
    <Flex align="center">
    {!session &&
      <Link href={"/auth/login"} >
          <Button color="white" px="1.75rem" variant="transparent">
              Login
          </Button>
      </Link>
      }
      {!session &&
       <Button variant="primary" py="1.25rem" px="2.25rem" borderRadius="3px">
        Get started
      </Button>
      }
  <Box>
          {session && <Button onClick={handleSignout} className="btn-signin">Sign out</Button>  }
  </Box>
  <Box>
     {loading && <Box>Loading...</Box>}
     {
      session &&
        <>
          <Text color='white' >{session.user.name}!</Text>
          <Text color='white' >{session.user.email}!</Text>
          <img src={session.user.image}></img>
         <Text mb='0.625rem'> </Text> <br />
        </>
      }
     {
      !session &&
        <>
        </>
     }
   </Box>
    </Flex>
  </Show>
  <Hide above="md">
    <Image
      src="/assets/icons/menu.svg"
      width={24}
      height={10}
      alt="menu"
    />
  </Hide>
</Flex>
</Box>
);
};

export default Loginfunction;
