import React from 'react';
import { Box, Text, Flex, Center, VStack } from '@chakra-ui/react';

const Footer = ({ slice }) => (
  <Box fontFamily={'Sora'} background={'black'}>
    <Center mr={'1.25rem'}>
      <Flex>
        <Box px={'9rem'} display={'Box'}>
          <Text color="white" my={'0.25rem'}>
            {slice.primary.support}
          </Text>
          <VStack spacing={'0.25rem'} color={'text.peach'}>
            <Text>{slice.primary.winnuhelp}</Text>
            <Text>{slice.primary.contactus}</Text>
          </VStack>
        </Box>
        <Box display={'Box'}>
          <Text color="white" my={4}>
            {slice.primary.company}
          </Text>
          <VStack spacing={'0.25rem'} color="text.peach">
            <Text>{slice.primary.about_us}</Text>
            <Text>{slice.primary.careers}</Text>
            <Text>{slice.primary.terms_and_policies}</Text>
          </VStack>
        </Box>
      </Flex>
    </Center>
  </Box>
);

export default Footer;
