import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { VStack, Box, Flex, Text } from '@chakra-ui/react';
import { InputField } from '../../src/components/inputfield.tsx';
import SmallDropdown from '../../src/components/Smalldropdown.tsx';
import BigDropdown from '../../src/components/Bigdropdown copy.tsx';
import username from '../../src/components/Username.tsx';

const Welcome = ({ slice }) => (
  <Box>
    <VStack>
      <span>
        {slice.primary.welcome}, {username}
      </span>
      <Text>{slice.primary.username}</Text>
      <InputField></InputField>
      <Text>{slice.primary.displayname}</Text>
      <InputField></InputField>
      <Text>{slice.primary.describeyourrole}</Text>
      <BigDropdown
        text1={'Designer'}
        text2={'Front-End Developer'}
        text3={'Back-End Developer'}
        text4={'Developer'}
        text5={'Freelancerr'}
        text6={'Project Managar'}
        text7={'Product Manager'}
        text8={'Student'}
        text9={'Other'}
      ></BigDropdown>
      <Text>{slice.primary.howwinnu}</Text>
      <SmallDropdown
        text1={'Institutional'}
        text2={'Personal'}
        text3={'Student'}
        text4={'Other'}
      ></SmallDropdown>
    </VStack>
  </Box>
);

export default Welcome;
