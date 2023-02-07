import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import Rowbutton from '../../src/components/Rowbutton.tsx';

const Priceplan = ({ slice }) => (
  <Center px={200} fontFamily={'Sora'}>
    <Flex>
      {slice?.items?.map((item, i) => (
        <Box px={10}>
          <Center
            borderWidth={2}
            borderStyle={'solid'}
            borderColor={'border01'}
          >
            <Text py={5} fontSize={40}>
              {item.name}
            </Text>
          </Center>
          <Box borderWidth={2} borderStyle={'solid'} borderColor={'border01'}>
            <Center fontSize={50}>{item.price}</Center>
            <Center px={15} fontSize={20}>
              <Text align={'center'}>{item.description}</Text>
            </Center>
          </Box>
          <Box
            py={25}
            px={20}
            fontSize={22}
            borderWidth={2}
            borderStyle={'solid'}
            borderColor={'border01'}
            height={750}
          >
            <Box py={5}>{item.item1}</Box>
            <Box py={5}>{item.item2}</Box>
            <Box py={5}>{item.item3}</Box>
            <Box py={5}>{item.item4}</Box>
            <Box py={5}>{item.item5}</Box>
            <Box py={5}>{item.item6}</Box>
            <Box py={5}>{item.item7}</Box>
          </Box>

          <PrismicLink field={item.button}>
            <Box borderWidth={2} borderStyle={'solid'} borderColor={'border01'}>
              <Rowbutton
                variant="primary"
                text={item.cta_text}
                Placehold="Get Started"
                My={25}
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
