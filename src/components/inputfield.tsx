import React from "react";
import Head from "next/head";
import {
  Box,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";

export const InputField = (props: any) => {

    return (
      <Box width='519px' background='black'>
          <Box >
              <Input color='white' focusBorderColor='#C9A538' borderRadius='0' border='#383838' background='#383838'>
              </Input>
          </Box>
        </Box>
    );
  };

