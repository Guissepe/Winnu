// import React from "react";
// import Head from "next/head";
// import {
//   Box,
//   Text,
//   Button,
//   Image,
//   Center,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import { InputField } from "../../components/inputfield";
// import  Dropdown  from "../../components/drpdwn";
// import { useSession } from 'next-auth/react'

// const about = () => {
//     const { data: session, status }: any = useSession();

//   return (
//         <Box fontFamily='Sora' background='black'>
//             <Head>
//             </Head>
//         {session &&
//         <Center>
//           <Box
//             textAlign="center"
//             fontFamily="sora"
//             pt={{ base: "47px", md: "94px" }}
//             pb={{ base: "26px", md: "106px" }}
//           >
//             {
//             session &&
//             <>
//                 <Image src={session.user.picture}/>
//                 <Text
//                 color='white' >
//                     {session.user.name ?? session.user.email}!
//                 </Text>
//             <Text mb='10px'> </Text>
//             <br />
//             </>
//             }
//             <Box>
//               <Box >
//                 <Text pt='20px' pb='5px' mr='88%' color='#787878'>
//                   Username
//                 </Text>
//                 <InputField/>
//                 <Text pt='20px' pb='5px' mr='85%' color='#787878'>
//                   Display name
//                 </Text>
//                 <InputField/>
//               </Box>
//               <Box mt='20px'>
//                 <Text
//                 color='#787878'
//                 mr='79%'
//                 pb='5px'
//                 >
//                   Describe your role
//                 </Text>
//                 <Dropdown
//                   text1 ='Designer'
//                   text2='Front-End Developer'
//                   text3='Back-End Developer'
//                   text4='Developer'
//                   text5='Freelancer'
//                   text6='Project Manager'
//                   text7='Product Manager'
//                   text8='Student'
//                   text9='Other'
//                 />
//               </Box>
//               <Box mb='50px' mt='20px'>
//                 <Text
//                   color='#787878'
//                   mr='65%'
//                   pb='5px'
//                 >
//                   How do you want to use Winnu
//                 </Text>
//                 <Dropdown
//                   text1 ='Institutional'
//                   text2='Personal'
//                   text3='Student'
//                   text4='Other'
//                 />
//               </Box>
//             </Box>
//             <Box >
//             <Button
//             width='423px'
//             height='65px'
//             background='#EBC142'
//             >
//             <Text >
//                 Create an account
//             </Text>
//           </Button>
//         </Box>
//         </Box>
//         </Center>},
//         {!session &&
//             <Box>
//                 <Text py='25%' textAlign='center' color = 'white'>
//                     You are not logged in, Log in first to access your user profile
//                 </Text>
//                 <Link href={'/auth/login'} >
//                     <Button mb='100px' mx='400px' textAlign='center'>
//                         Login / Signin
//                     </Button>
//                 </Link>
//             </Box>

//         }
//     </Box>
//     );
//     };

// export default about;
