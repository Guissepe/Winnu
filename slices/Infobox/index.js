import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Button, Flex, Center } from '@chakra-ui/react';

const Infobox = ({ slice }) => (
  <Box className="section relative bg-black">
    {slice.variation !== 'singleButton' ? (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: '43px', md: '192px' }}
        pb={{ base: '44px', md: '95px' }}
        px="22px"
        fontSize="20px"
      >
        <Box>
          <Box
            fontWeight="600"
            fontSize={{ base: '20px', md: '42px' }}
            lineHeight={{ base: '26px', md: '60px' }}
            color="text.01"
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: '16px', md: '32px' }}
            fontWeight="300"
            fontStyle="italic"
            color="text.grey02"
            pt="12px"
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt="54px"
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            {slice?.items?.map((item, i) => (
              <Box px="10px">
                <Button
                  width="199px"
                  height=" 60px"
                  variant="primary"
                  py="18px"
                  mt={{ base: '20px', md: '48px' }}
                  borderRadius="0px"
                >
                  <PrismicLink field={item.cta_link}>
                    <PrismicRichText field={item.cta_text}></PrismicRichText>
                  </PrismicLink>
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>
      </Center>
    ) : (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: '43px', md: '192px' }}
        pb={{ base: '44px', md: '95px' }}
        px="22px"
        fontSize="20px"
      >
        <Box>
          <Box
            fontWeight="600"
            fontSize={{ base: '20px', md: '42px' }}
            lineHeight={{ base: '26px', md: '60px' }}
            color="text.01"
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: '16px', md: '22px' }}
            lineHeight={{ base: '26px', md: '44px' }}
            color="text.02"
            mt="16px"
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt="54px"
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          ></Flex>
          <Button
            src={slice.primary.cta_link}
            variant="primary"
            width="199px"
            height=" 60px"
            py="18px"
            px="37px"
            mt={{ base: '20px', md: '48px' }}
            borderRadius="0px"
          >
            <PrismicLink field={slice.primary.cta_link}>
              <PrismicRichText field={slice.primary.cta_text}></PrismicRichText>
            </PrismicLink>
          </Button>
        </Box>
      </Center>
    )}
    ;
  </Box>
);

export default Infobox;
