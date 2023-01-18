import { getProviders, signIn } from "next-auth/react"
import {
    Box,
    Flex,
    Text,
    Center,
  } from "@chakra-ui/react";
import { LogInbutton } from "../../components/loginbutton";


import Google, { GoogleProfile } from "next-auth/providers/google";
import Nextauth from "../api/auth/[...nextauth]";

import * as prismic from '@prismicio/client'
import sm from '../../../sm.json'
import { components } from '../../../slices'
import { SliceZone } from '@prismicio/react'

function Page({page}: any) {
  return(
    <SliceZone slices={page.data.slices} components={components}/>
  )
};

export default Page

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint)
  const page = await client.getByUID('page', 'login')

  return {
    props: {
      page
    }
  }
}




async function handleGoogleSignin(){
    signIn('google', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user'})
}
async function handleFacebookSignin(){
    signIn('facebook', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user'})
}
async function handleGitHubSignin(){
    signIn('github', {callbackUrl: 'https://winnu-git-auth-guissepe.vercel.app/user'})
}


// export function SignIn({ providers }: { providers: any }) {

//   return (
//     <>
//     <Box  background='black'>
//         <Box pb='150px' pt='150px'>
//             <Text
//             fontSize='30px'
//             textAlign='center'
//             color='white'
//             fontFamily='Sora'
//             px='400px'
//             >
//                 Sign in to Winnu
//             </Text>
//             <Text
//             textAlign='center'
//             color='#787878'
//             pb='30px'
//             >
//                 Build your dream website with simplicity
//             </Text>
//             <Center >
//               <LogInbutton
//               margin = {''}
//               color = 'black'
//               backcolor = '#EBC142'
//               provname = 'Google'
//               handler = {handleGoogleSignin}
//               />
//             </Center>
//             <Center>
//               <Flex pt='15px' mx='34%'>
//                 <Box
//                 pr='12px'
//                 >
//                   <LogInbutton
//                   color = 'white'
//                   backcolor = '#1E1E1E'
//                   provname = 'Facebook'
//                   handler = {handleFacebookSignin}
//                 />
//                 </Box>
//                   <LogInbutton
//                   color = 'white'
//                   backcolor = '#1E1E1E'
//                   provname = 'GitHub'
//                   handler = {handleGitHubSignin}
//                   />
//             </Flex>
//             </Center>

//         </Box>

//     </Box>
//     </>
//   );
// };

// export async function getServerSideProps(context: any) {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   };
// };
