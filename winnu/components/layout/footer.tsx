import { Box, Flex, Hide, List, ListItem, Show, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <Box bg="black" py="40px" fontFamily="sora">
      <Show above="sm">
        <Flex justifyContent="center" gridGap="136px">
          <List spacing="22" color="text.peach">
            <ListItem color="white" fontSize="18px">
              Support
            </ListItem>
            <ListItem cursor="pointer">Winnu Help</ListItem>
            <ListItem cursor="pointer">Contact Us</ListItem>
          </List>

          <List spacing="22" color="text.peach">
            <ListItem color="white" fontSize="18px">
              Company
            </ListItem>
            <ListItem cursor="pointer">About Us</ListItem>
            <ListItem cursor="pointer">Careers</ListItem>
            <ListItem cursor="pointer">Terms and Policies</ListItem>
          </List>
        </Flex>
        <Flex mt="24px" justifyContent="center" gridGap="93px">
          <Image
            src="/assets/winnu-logo.svg"
            width={143}
            height={48}
            alt="winnu logo"
          />
          <Flex gridGap="14px" alignItems="center">
            <Text fontWeight="600" fontSize="14px" color="#949292">
              Follow us
            </Text>
            <Image
              src="/assets/icons/linkedin.svg"
              width={19}
              height={19}
              alt="linkedin logo"
            />
            <Image
              src="/assets/icons/twitter.svg"
              width={22}
              height={19}
              alt="linkedin logo"
            />
            <Image
              src="/assets/icons/instagram.svg"
              width={19}
              height={19}
              alt="linkedin logo"
            />
          </Flex>
        </Flex>
      </Show>
      <Hide above="sm">
        <List spacing="22" color="text.peach" textAlign="center">
          <ListItem color="white" fontSize="18px">
            Product
          </ListItem>
          <ListItem cursor="pointer">About Us</ListItem>
          <ListItem cursor="pointer">Pricing</ListItem>
          <ListItem cursor="pointer">Company</ListItem>
        </List>

        <Flex mt="42px" alignItems="center" direction="column">
          <Text fontWeight="600" fontSize="14px" color="#949292">
            Follow us
          </Text>
          <Flex gridGap="16px" mt="13px" alignItems="center">
            <Image
              src="/assets/icons/linkedin.svg"
              width={19}
              height={19}
              alt="linkedin logo"
            />
            <Image
              src="/assets/icons/twitter.svg"
              width={22}
              height={19}
              alt="linkedin logo"
            />
            <Image
              src="/assets/icons/instagram.svg"
              width={19}
              height={19}
              alt="linkedin logo"
            />
          </Flex>
        </Flex>
        <Flex mt="42px" justifyContent="center">
          <Image
            src="/assets/winnu-logo.svg"
            width={143}
            height={48}
            alt="winnu logo"
          />
        </Flex>
      </Hide>
    </Box>
  );
};

export default footer;
