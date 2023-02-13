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
          <Box px="1%" width={'18rem'}>
            <Center>
              <Button
                fontSize={'1rem'}
                width={500}
                maxWidth={500}
                height={'3.5rem'}
                fontFamily="Sora"
                px={'2.25rem'}
                borderRadius={'0.25rem'}
                mt={{ base: '0.375rem', md: '0.625rem' }}
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
          <Box px="1%">
            <Center>
              <Rowbutton
                colors="black"
                text={item.cta_text}
                bkg="yellow"
                Padx=""
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
