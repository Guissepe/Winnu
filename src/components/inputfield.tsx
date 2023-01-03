import React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Show,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const title = ''

export const InputField = (props: any) => {

    return (
      <Box background='black'>
          <Box >
              <Text color = ' white'>
                  {props.title}
              </Text>
              <Input focusBorderColor='#C9A538' borderRadius='0' border='#383838' background='#383838'>
              </Input>
          </Box>
        </Box>
    );
  };

