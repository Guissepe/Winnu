import React from 'react';
// import Head from 'next/head';
// import { Box, Button, Flex, Text } from '@chakra-ui/react';
// import { FiCheck } from 'react-icons/fi';
// import { AiOutlineLineChart } from 'react-icons/ai';
// import { BiWallet } from 'react-icons/bi';

// type planTypes = {
//   name: String;
//   price: String;
//   description: String;
//   benefits: String[];
// };

// const pricing = () => {
//   const plans: planTypes[] = [
//     {
//       name: 'Standard',
//       price: 'Free',
//       description: 'Fremium plan for you to start developing your website',
//       benefits: ['Editor', '120 CMS Items', '1,500 Visitors', 'Personal Sites'],
//     },
//     {
//       name: 'Teams',
//       price: '$8',
//       description: 'Plans spefically for teams building amazing products',
//       benefits: [
//         'Everything from Standard',
//         '500 CMS Items',
//         '5000 Visitors',
//         'Team Pages',
//         'Site Analytics',
//         'Custom Domain',
//         'Team Workflows',
//       ],
//     },
//     {
//       name: 'Ultimate',
//       price: '$15',
//       description: 'Ultimate plan with amazing for you and your team',
//       benefits: [
//         'Team Pages',
//         'Site Staging',
//         'Custom Domain',
//         '10,000 Visitors',
//         '2000 CMS Items',
//         ' Standard and Teams',
//         'Multiple Team Workflows',
//       ],
//     },
//   ];
//   return (
//     <div>
//       <Head>
//         <title>Winnu | Pricing</title>
//       </Head>
//       <Box
//         textAlign="center"
//         fontFamily="sora"
//         pt={{ base: '47px', md: '94px' }}
//         pb={{ base: '26px', md: '72px' }}
//         px="22px"
//       >
//         <Box maxW="804px" mx="auto">
//           <Text
//             fontWeight="600"
//             fontSize={{ base: '20px', md: '46px' }}
//             lineHeight={{ base: '26px', md: '80px' }}
//             color="text.01"
//           >
//             Pricing
//           </Text>
//           <Text
//             fontSize={{ base: '16px', md: '24px' }}
//             lineHeight="24px"
//             color="text.02"
//             mt="8px"
//           >
//             We've got different plans for differents needs
//           </Text>
//         </Box>
//       </Box>

//       <Flex
//         maxW="1024px"
//         mx="auto"
//         px="22px"
//         justifyContent="space-between"
//         alignItems="center"
//         gridGap="36px"
//         direction={{ base: 'column', md: 'row' }}
//       >
//         {plans.map((plan, index) => {
//           const { name, price, description, benefits } = plan;
//           return (
//             <Box
//               key={index}
//               height={{ base: 'auto', md: '752px' }}
//               border="1px"
//               borderColor="#FFBDB4"
//               width="304px"
//               fontFamily="sora"
//               position="relative"
//             >
//               <Box
//                 py="20px"
//                 textAlign="center"
//                 borderBottom="1px"
//                 borderColor="#FFBDB4"
//               >
//                 <Text fontSize="28px" fontWeight="600">
//                   {name}
//                 </Text>
//               </Box>
//               <Box py="20px" px="24px" textAlign="center">
//                 <Text fontSize="32px" fontWeight="600">
//                   {price}
//                 </Text>
//                 <Text fontSize="16px" color="text.grey03" lineHeight="30px">
//                   {description}
//                 </Text>
//               </Box>
//               <Box px="12px">
//                 <Box>
//                   {benefits.map((benefit, index) => {
//                     return (
//                       <Flex
//                         key={index}
//                         alignItems="center"
//                         gridGap="8px"
//                         mb="14px"
//                       >
//                         <FiCheck />
//                         <Text fontSize="16px" lineHeight="30px">
//                           {benefit}
//                         </Text>
//                       </Flex>
//                     );
//                   })}
//                 </Box>
//               </Box>
//               <Flex
//                 justifyContent="center"
//                 py="20px"
//                 borderTop="1px"
//                 borderColor="#FFBDB4"
//                 position={{ base: 'relative', md: 'absolute' }}
//                 bottom="0"
//                 width="100%"
//                 borderRadius="none"
//               >
//                 <Button mx="auto" variant="primary">
//                   Get Started
//                 </Button>
//               </Flex>
//             </Box>
//           );
//         })}
//       </Flex>

//       <Box
//         mt="63px"
//         fontFamily="sora"
//         maxW="554px"
//         mx="auto"
//         pb={{ base: '17px', md: '156px' }}
//         px="22px"
//       >
//         <Text
//           fontWeight="500"
//           fontSize={{ base: '16px', md: '32px' }}
//           textAlign="center"
//         >
//           Quick Notes
//         </Text>

//         <Flex
//           alignItems="center"
//           gridGap="12px"
//           justifyContent="center"
//           mt="32px"
//         >
//           <AiOutlineLineChart />
//           <Text>Prices in USD. Taxes may apply.</Text>
//         </Flex>

//         <Flex
//           alignItems="center"
//           gridGap="12px"
//           justifyContent="center"
//           mt="24px"
//         >
//           <BiWallet />
//           <Text>No credit card, cancel any time.</Text>
//         </Flex>

//         <Text lineHeight="24px" textAlign="center" mt="32px">
//           If you're interested in becoming an official Winnu partner, reach out
//           to partners@togdesign.com
//         </Text>
//       </Box>
//     </div>
//   );
// };

// export default pricing;
