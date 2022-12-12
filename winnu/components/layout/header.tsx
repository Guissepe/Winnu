import React from "react";
import { Box, Button, Flex, Hide, Show } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  type navRoutes = {
    name: string;
    route: string;
  };

  const navs: navRoutes[] = [
    { name: "Home", route: "/" },
    { name: "Pricing", route: "/pricing" },
    { name: "About Us", route: "/about" },
  ];

  return (
    <Box bg="black" py="24px" pl="12px" pr="22px">
      <Flex align="center" justify="space-between" maxW="1280px" mx="auto">
        <Image
          src="/assets/winnu-logo.svg"
          width={112}
          height={27}
          alt="winnu logo"
        />

        <Show above="md">
          <Flex color="white" fontWeight="600" gridGap="55px">
            {navs.map((nav) => {
              return (
                <Link href={nav.route} key={nav.name}>
                  {nav.name}
                </Link>
              );
            })}
          </Flex>
        </Show>

        <Show above="lg">
          <Flex align="center">
            <Button color="white" px="29px" variant="transparent">
              Login
            </Button>
            <Button variant="primary" py="16px" px="35px" borderRadius="3px">
              Get started
            </Button>
          </Flex>
        </Show>
        <Hide above="md">
          <Image
            src="/assets/icons/menu.svg"
            width={24}
            height={10}
            alt="menu"
          />
        </Hide>
      </Flex>
    </Box>
  );
};

export default header;
