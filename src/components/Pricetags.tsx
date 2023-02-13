import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Flex, Text, Center } from '@chakra-ui/react';

const Priceplans = (props :any) => (
  <Flex>
        <Box>
          <Center>
            <Box>
              <Center>{props.name}</Center>
              <Center>{props.price}</Center>
              <PrismicRichText field={props.description} />
            </Box>
          </Center>

          <Box>
            {props.items}
          </Box>
          <PrismicLink field={props.button}>My Link</PrismicLink>
        </Box>
  </Flex>
);

export default Priceplans;
