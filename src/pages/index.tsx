import React from "react";
import Head from "next/head";
import { Box, Button, Flex, Show, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { useSession } from 'next-auth/react'
import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices/index'

const Page = ({ page, navigation, settings }: any) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')
  return {
    props: {
      page,
    },
  }
}





// }
// const Index = (props: any, {
//   page,
//   navigation,
//   settings,
// }: {
//   page: any;
//   navigation: any;
//   settings: any;
// }) => {

//   return(

//     <div>
//       <pre>{JSON.stringify(props, null, 2)}</pre>
//     </div>

//   )
  // return <SliceZone slices={page.data.slices} components={components} />;
//   return (
//     <div>
//       <Head>
//         <title>Winnu | Home</title>
//       </Head>
//       <Box
//         textAlign="center"
//         fontFamily="sora"
//         pt={{ base: "43px", md: "192px" }}
//         pb={{ base: "44px", md: "95px" }}
//         px="22px"
//       >
//         <Box maxW="710px" mx="auto">
//           <Text
//             fontWeight="600"
//             fontSize={{ base: "20px", md: "42px" }}
//             lineHeight={{ base: "26px", md: "60px" }}
//             color="text.01"
//           >
//             Build your dream Website simple and easy
//           </Text>
//           <Text
//             fontSize={{ base: "16px", md: "22px" }}
//             lineHeight={{ base: "26px", md: "44px" }}
//             color="text.02"
//             mt="16px"
//           >
//             With Winnu, you will be able to put your businness online with easy
//             and full support
//           </Text>
//           <Flex
//             mt="54px"
//             direction={{ base: "column", md: "row" }}
//             justifyContent="center"
//           >
//             <Button variant="primary" py="18px" px="56px">
//               Get started
//             </Button>
//             <Button
//               rightIcon={<FiArrowUpRight />}
//               variant="transparent"
//               px="17px"
//               fontWeight="400"
//             >
//               Contact us
//             </Button>
//           </Flex>
//         </Box>
//       </Box>
//       <Box
//         bg="white"
//         px="22px"
//         py={{ base: "48px", md: "118px" }}
//         fontFamily="sora"
//       >
//         <Box maxW="756px" mx="auto" textAlign="center">
//           <Text fontWeight="600" fontSize={{ base: "20px", sm: "24px" }}>
//             Working with great customers
//           </Text>
//           <Flex
//             justifyContent="space-between"
//             alignItems="center"
//             gridGap="14px"
//             direction={{ base: "column", md: "row" }}
//             mt="28px"
//           >
//             <Image
//               src="/assets/logos/relume.svg"
//               width={200}
//               height={56}
//               alt="relume"
//             />
//             <Image
//               src="/assets/logos/flowninja.svg"
//               width={200}
//               height={56}
//               alt="flowninja"
//             />
//             <Image
//               src="/assets/logos/webflow.svg"
//               width={200}
//               height={48}
//               alt="webflow"
//             />
//           </Flex>
//         </Box>
//       </Box>
//       <Box
//         bg="white"
//         fontFamily="sora"
//         position="relative"
//         py="100px"
//         px="22px"
//         border="2px"
//         overflow="hidden"
//       >
//         <Flex maxW="1024px" mx="auto" alignItems="center" gridGap="70px">
//           <Box maxW="450px">
//             <Text fontWeight="600" fontSize="42px" lineHeight="60px">
//               Design
//             </Text>
//             <Text fontSize="30px" fontWeight="500" lineHeight="80px">
//               Matching pixel Perfect
//             </Text>
//             <Text lineHeight="24px">
//               We pay a special attention to institutions, focusing on making the
//               tool easy for them to use and maximize their online presence
//             </Text>
//             <Box
//               borderWidth="1.5px"
//               borderColor="black"
//               mt="24px"
//               mb="44px"
//             ></Box>
//             <Text fontWeight="600" fontSize="42px" lineHeight="60px">
//               Develop
//             </Text>
//             <Text fontWeight="600" fontSize="42px" lineHeight="80px">
//               Ship
//             </Text>
//           </Box>
//         </Flex>
//         <Show above="lg">
//           <Box position="absolute" right="-160px" top="60px">
//             <Image
//               src="/assets/images/dashboard.svg"
//               width={840}
//               height={599}
//               alt="dashboard"
//             />
//           </Box>
//         </Show>
//       </Box>
//       <Box
//         bg="brand.secondary"
//         pt="80px"
//         fontFamily="sora"
//         textAlign="center"
//         px="22px"
//       >
//         <Text fontWeight="600" fontSize={{ base: "14px", md: "35px" }}>
//           Collaboration
//         </Text>
//         <Text
//           fontWeight="500"
//           fontSize={{ base: "16px", md: "30px" }}
//           mt="20px"
//         >
//           Bringing everyone to the file
//         </Text>
//         <Text
//           color="text.grey02"
//           mt={{ base: "10px", md: "24px" }}
//           fontSize={{ base: "14px", md: "22px" }}
//           maxW="618px"
//           mx="auto"
//         >
//           We allow you to collaborate with your teammates anytime - and anywhere
//         </Text>
//         <Flex mt="64px" justifyContent="center">
//           <Image
//             src="/assets/images/dashboard.svg"
//             width={840}
//             height={500}
//             alt="dashboard"
//           />
//         </Flex>
//       </Box>
//       <Box bg="white" textAlign="center" pt="80px" pb="60px">
//         <Text
//           fontSize={{ base: "16px", md: "40px" }}
//           fontFamily="sora"
//           color="text.grey02"
//           fontWeight="600"
//         >
//           Get your Business Online
//         </Text>
//         <Text
//           fontSize={{ base: "16px", md: "32px" }}
//           fontWeight="300"
//           fontStyle="italic"
//           color="text.grey02"
//           pt="12px"
//         >
//           Build Your Website
//         </Text>
//         <Button
//           variant="primary"
//           py="18px"
//           px="37px"
//           mt={{ base: "20px", md: "48px" }}
//           borderRadius="0px"
//         >
//           Get started now
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export async function getServerSideProps({res}:any) {
//   return{
//     props: {
//       date: Date.now()
//     }
//   }

// }
// export default Index;

