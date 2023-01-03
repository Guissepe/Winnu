import React from "react";
import Head from "next/head";
import {
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { InputField } from "../../components/inputfield";
import  Dropdown  from "../../components/drpdwn";
import { useSession, signIn, signOut } from 'next-auth/react'

const about = () => {

    const { data: session, status }: any = useSession();

  return (
    <Box background='black'>
      <Head>
      </Head>
      <Box
        textAlign="center"
        fontFamily="sora"
        pt={{ base: "47px", md: "94px" }}
        pb={{ base: "26px", md: "106px" }}
        px="22px"
      >

            {
            session &&
              <>
                <Text color='white' >{session.user.name ?? session.user.email}!</Text>
               <Text mb='10px'> </Text> <br />
              </>
            }

        <Box>
            <InputField title = 'Username'/>
            <InputField title = 'Display name'/>
            <Dropdown
                text1 ='Designer'
                text2='Front-End Developer'
                text3='Back-End Developer'
                text4='Developer'
                text5='Freelancer'
                text6='Project Manager'
                text7='Product Manager'
                text8='Student'
                text9='Other'
            />
            <Dropdown
                text1 ='Institutional'
                text2='Personal'
                text3='Student'
                text4='Other'
            />
        </Box>
      </Box>
    </Box>
  );
};

export default about;
