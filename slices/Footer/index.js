import React from 'react';
import { Box, Text, Center, VStack, HStack } from '@chakra-ui/react';

const Footer = ({ slice }) => (
  <Box pt={'4rem'} pb={'2rem'} fontFamily={'Sora'} background={'grey01'}>
    <Center>
      <HStack spacing={'8rem'}>
        <VStack spacing={'1.5rem'} color={'text.peach'}>
          <Text fontSize={'1.5rem'} color="Yellow03">
            {slice.primary.support}
          </Text>
          <HStack fontSize={'1.33rem'} spacing={'3rem'} color="white">
            <Text>{slice.primary.winnuhelp}</Text>
            <Text>{slice.primary.contactus}</Text>
          </HStack>
        </VStack>
        <VStack spacing={'1.5rem'} color="text.peach">
          <Text fontSize={'1.5rem'} color="Yellow03">
            {slice.primary.company}
          </Text>
          <HStack fontSize={'1.33rem'} spacing={'3rem'} color="white">
            <Text>{slice.primary.about_us}</Text>
            <Text>{slice.primary.terms_and_policies}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Center>
  </Box>
);

export default Footer;
