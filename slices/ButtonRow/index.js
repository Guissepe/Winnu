import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Center, Flex, Text, Button } from '@chakra-ui/react';

const ButtonRow = ({ slice }) => (
  <Center bg="black">
    <Flex pb="15%" mx="34%">
      {slice?.items?.map((item, i) => (
        <Box px="1%" width="300px">
          <Center>
            <Button
              fontSize={17}
              width={500}
              maxWidth={500}
              height={55}
              fontFamily="Sora"
              px="35px"
              borderRadius="3px"
              src={slice.primary.cta_link}
              mt={{ base: '5px', md: '10px' }}
              color="#1E1E1E"
            >
              <Text>{item.cta_text}</Text>
              <PrismicLink field={item.cta_link}>My Link</PrismicLink>
            </Button>
          </Center>
        </Box>
      ))}
    </Flex>
  </Center>
);

export default ButtonRow;
