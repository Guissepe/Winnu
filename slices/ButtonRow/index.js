import React from 'react';
import { PrismicLink } from '@prismicio/react';
import { Box, Center, Flex, Text, Button } from '@chakra-ui/react';
import Rowbutton from '../../src/components/Rowbutton.tsx';
import { getProviders } from 'next-auth/react';

const ButtonRow = ({ slice }, { providers }) => (
  <Center bg="black">
    {slice.variation === 'DarkLog' ? (
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
                mt={{ base: '5px', md: '10px' }}
                color="grey01"
              >
                <PrismicLink field={item.cta_link}>
                  <Text> {item.cta_text} </Text>
                </PrismicLink>
              </Button>
            </Center>
          </Box>
        ))}
      </Flex>
    ) : (
      <Flex pb="15%" mx="34%">
        {slice?.items?.map((item, i) => (
          <Box px="1%" width="300px">
            <Center>
              <Rowbutton
                bgcolor="#yellow"
                colors="black"
                text={item.cta_text}
              ></Rowbutton>
            </Center>
          </Box>
        ))}
      </Flex>
    )}
  </Center>
);
export default ButtonRow;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
