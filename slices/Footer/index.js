import React from 'react';
import { Box, Text, Flex, Center, VStack, HStack } from '@chakra-ui/react';

const Footer = ({ slice }) => (
  <Box pt={'4rem'} pb={'10rem'} fontFamily={'Sora'} background={'black'}>
    <Center>
      <HStack spacing={'8rem'}>
        <VStack
          mb={'3rem'}
          align={'start'}
          spacing={'1.5rem'}
          color={'text.peach'}
        >
          <Text color="white">{slice.primary.support}</Text>
          <Text>{slice.primary.winnuhelp}</Text>
          <Text>{slice.primary.contactus}</Text>
        </VStack>
        <VStack align={'start'} spacing={'1.5rem'} color="text.peach">
          <Text color="white">{slice.primary.company}</Text>
          <Text>{slice.primary.about_us}</Text>
          <Text>{slice.primary.careers}</Text>
          <Text>{slice.primary.terms_and_policies}</Text>
        </VStack>
      </HStack>
    </Center>
  </Box>
);

export default Footer;
