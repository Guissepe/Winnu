import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Box, Button, Flex, Center, Image } from '@chakra-ui/react';

const Infobox = ({ slice }) => (
  <Box className="section relative bg-black">
    {slice.variation !== 'singleButton' ? (
      <Center
        textAlign="center"
        fontFamily="sora"
        pt={{ base: 43, md: 192 }}
        pb={{ base: 44, md: 95 }}
        px={22}
        fontSize={20}
      >
        <Box>
          <Box fontWeight="600" fontSize={{ base: 20, md: 42 }} color="text.01">
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box
            fontSize={{ base: 16, md: 32 }}
            fontWeight="300"
            fontStyle="italic"
            color="text.grey02"
            pt={2}
          >
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt={54}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          >
            {slice?.items?.map((item, i) => (
              <Box height="10%" px={2}>
                <PrismicLink field={item.cta_link}>
                  <Button
                    height="10%"
                    width={199}
                    variant="primary"
                    py={4}
                    mt={{ base: 20, md: 20 }}
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
        pt={{ base: 43, md: 192 }}
        pb={{ base: 44, md: 95 }}
        px={22}
        fontSize={20}
      >
        <Box>
          <Box fontWeight="600" fontSize={{ base: 20, md: 42 }} color="text.01">
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box fontSize={{ base: 16, md: 22 }} color="text.02" mt="16px">
            <PrismicRichText field={slice.primary.description} />
          </Box>
          <Flex
            mt="54px"
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
          ></Flex>
          <PrismicLink field={slice.primary.cta_link}>
            <Box height="15%">
              <Button
                src={slice.primary.cta_link}
                variant="primary"
                width={199}
                height="15%"
                py={18}
                px={37}
                mt={{ base: 10, md: 20 }}
                borderRadius="0"
              >
                <PrismicRichText
                  field={slice.primary.cta_text}
                ></PrismicRichText>
              </Button>
            </Box>
          </PrismicLink>
        </Box>
      </Center>
    )}
    ;
  </Box>
);

export default Infobox;
