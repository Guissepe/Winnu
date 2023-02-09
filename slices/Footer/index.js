import React from 'react';
import { Box, Text, Flex, Center, HStack, VStack } from '@chakra-ui/react';

const Footer = ({ slice }) => (
  <Box fontFamily={'sora'} background={'black'}>
    <Center mr={'9rem'}>
      <Flex>
        <Box px={'9rem'}>
          <Text color="white" my={4}>
            {slice.primary.support}
          </Text>
          <VStack spacing={4} color={'text.peach'}>
            <Text>{slice.primary.winnuhelp}</Text>
            <Text>{slice.primary.contactus}</Text>
          </VStack>
        </Box>
        <VStack pb={'3.5rem'} display={'Box'}>
          <Text color="white" my={4}>
            {slice.primary.company}
          </Text>
          <VStack align={'start'} spacing={4} color="text.peach">
            <Text>{slice.primary.about_us}</Text>
            <Text>{slice.primary.careers}</Text>
            <Text>{slice.primary.terms_and_policies}</Text>
          </VStack>
        </VStack>
      </Flex>
    </Center>
  </Box>
);

export default Footer;
