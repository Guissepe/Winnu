import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Box, Text, Flex, Center } from '@chakra-ui/react';

const Footer = ({ slice }) => (
  <Box fontFamily={'Sora'} background={'black'}>
    <Center mr={20}>
      <Flex>
        <Box px={140} display={'Box'}>
          <Text color="white" my={4}>
            {slice.primary.support}
          </Text>
          <Box color={'text.peach'}>
            <Text my={4}>{slice.primary.winnuhelp}</Text>
            <Text my={4}>{slice.primary.contactus}</Text>
          </Box>
        </Box>
        <Box display={'Box'}>
          <Text color="white" my={4}>
            {slice.primary.company}
          </Text>
          <Box color="text.peach">
            <Text my={4}>{slice.primary.about_us}</Text>
            <Text my={4}>{slice.primary.careers}</Text>
            <Text my={4}>{slice.primary.terms_and_policies}</Text>
          </Box>
        </Box>
      </Flex>
    </Center>
  </Box>
);

export default Footer;
