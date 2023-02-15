import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Flex, Text, Center, VStack } from '@chakra-ui/react';
import Rowbutton from '../../src/components/Rowbutton.tsx';

const Priceplan = ({ slice }) => (
  <Center px={'12rem'} fontFamily={'Sora'}>
    <Flex>
      {slice?.items?.map((item, i) => (
        <Box px={'0.625rem'}>
          <Center
            borderWidth={2}
            borderStyle={'solid'}
            borderColor={'border01'}
          >
            <Text py={5} fontSize={'2.5rem'}>
              {item.name}
            </Text>
          </Center>
          <Box borderWidth={2} borderStyle={'solid'} borderColor={'border01'}>
            <Center fontSize={'3rem'}>{item.price}</Center>
            <Center px={'1rem'} fontSize={'1.25rem'}>
              <Text align={'center'}>{item.description}</Text>
            </Center>
          </Box>
          <VStack
            spacing={'2.5rem'}
            py={'1.5rem'}
            px={'1.25rem'}
            fontSize={'1.25rem'}
            borderWidth={2}
            borderStyle={'solid'}
            borderColor={'border01'}
            height={750}
          >
            <Box>{item.item1}</Box>
            <Box>{item.item2}</Box>
            <Box>{item.item3}</Box>
            <Box>{item.item4}</Box>
            <Box>{item.item5}</Box>
            <Box>{item.item6}</Box>
            <Box>{item.item7}</Box>
          </VStack>

          <PrismicLink field={item.button}>
            <Box borderWidth={2} borderStyle={'solid'} borderColor={'border01'}>
              <Rowbutton
                variant="primary"
                text={item.cta_text}
                placehold="Get Started"
                My={'1.5rem'}
                Mx={5}
              ></Rowbutton>
            </Box>
          </PrismicLink>
        </Box>
      ))}
    </Flex>
  </Center>
);

export default Priceplan;
