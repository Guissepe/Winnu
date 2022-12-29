import React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Show,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const about = () => {
  const team = [
    {
      image: "jorge",
      name: "Jorge Cohen",
      role: "CEO",
    },
    {
      image: "manuel",
      name: "Manuel Sá",
      role: "PM",
    },
    {
      image: "borges",
      name: "Borges Ed",
      role: "Engineer",
    },
    {
      image: "felix",
      name: "Felix Abiola",
      role: "Engineer",
    },
    {
      image: "sam",
      name: "Sam Antony",
      role: "Designer",
    },
  ];

  return (
    <div>
      <Head>
        <title>Winnu | About</title>
      </Head>
      <Box
        textAlign="center"
        fontFamily="sora"
        pt={{ base: "47px", md: "94px" }}
        pb={{ base: "26px", md: "106px" }}
        px="22px"
      >
        <Box maxW="804px" mx="auto">
          <Text
            fontWeight="600"
            fontSize={{ base: "20px", md: "46px" }}
            lineHeight={{ base: "26px", md: "80px" }}
            color="text.01"
          >
            About Winnu
          </Text>
          <Text
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight="24px"
            color="text.02"
            mt="30px"
          >
            Winnu is a free, user-friendly website-building platform that
            strives to connect small businesses and online creators with their
            audience. We feature an abundance of tools that allow you to grow
            and monetize your audience at ease. Our goal is to empower
            entrepreneurs who aim to scale their businesses online.
          </Text>
        </Box>
      </Box>
      <Box
        style={{
          background:
            "radial-gradient(41.25% 356.23% at 45.42% 136.15%, #FFBDB4 0%, rgba(109, 63, 9, 0) 100%)",
        }}
        fontFamily="sora"
        pt={{ base: "47px", md: "25px" }}
        pb={{ base: "26px", md: "118px" }}
        px="22px"
      >
        <Text
          textAlign="center"
          fontWeight="500px"
          fontSize="32px"
          lineHeight="80px"
        >
          Team
        </Text>

        <Grid
          templateColumns={{ sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
          maxW="640px"
          mx="auto"
          rowGap="35px"
        >
          {team.map(({ name, image, role }) => (
            <GridItem key={name} textAlign="center">
              <Flex justifyContent="center">
                <Image
                  src={`/assets/images/team/${image}.svg`}
                  width={131}
                  height={131}
                  alt={name}
                />
              </Flex>
              <Text
                fontWeight="500"
                lineHeight="24px"
                color="text.grey01"
                mt="10px"
              >
                {name}
              </Text>
              <Text fontWeight="500" lineHeight="24px" color="text.grey03">
                {role}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default about;
