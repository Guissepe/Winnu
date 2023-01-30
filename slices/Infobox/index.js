import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Button, Flex, Center } from '@chakra-ui/react';

const Infobox = ({ slice }) => (
  <Box className="section relative bg-black">
    {slice.variation !== 'singleButton' ? (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: 23, md: 192 }}
        pb={{ base: 44, md: 95 }}
        px={22}
        fontSize={20}
      >
        <Box>
          <Box fontWeight={600} fontSize={{ base: 20, md: 42 }} color="text.01">
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: 11, md: 22 }}
            fontWeight={300}
            fontStyle="italic"
            color="text.grey02"
            pt="12px"
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt={34}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            {slice?.items?.map((item, i) => (
              <Box pt={10} px="10px">
                <PrismicLink field={item.cta_link}>
                  <Button
                    width={199}
                    height="60%"
                    variant="primary"
                    py="15%"
                    borderRadius="0"
                  >
                    <PrismicRichText field={item.cta_text}></PrismicRichText>
                  </Button>
                </PrismicLink>
              </Box>
            ))}
          </Flex>
        </Box>
      </Center>
    ) : (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: 23, md: 192 }}
        pb={{ base: 44, md: 95 }}
        px={22}
        fontSize={20}
      >
        <Box>
          <Box fontWeight={200} fontSize={{ base: 20, md: 42 }} color="text.01">
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box fontSize={{ base: 16, md: 22 }} color="text.02" mt={3}>
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt={34}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            <Box pt={10} px="10px">
              <PrismicLink field={slice.primary.cta_link}>
                <Button
                  width={199}
                  height="60%"
                  variant="primary"
                  py="15%"
                  borderRadius="0"
                >
                  <PrismicRichText
                    field={slice.primary.cta_text}
                  ></PrismicRichText>
                </Button>
              </PrismicLink>
            </Box>
          </Flex>
        </Box>
      </Center>
    )}
    ;
  </Box>
);

export default Infobox;
