import { getProviders, signIn } from "next-auth/react"
import {
    Box,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react";

  export const LogInbutton = (props: any) => (
    <Box>
        <Button
        color={props.color}
        background={props.backcolor}
        width={300}
        maxWidth={300}
        height={45}
        fontFamily="Sora"
        variant="primary"
        py="16px"
        px="35px"
        borderRadius="3px"
        onClick={ () => props.handler()}
        display='flex'
        mx={props.margin}
        >
            Sign in with {props.provname}
        </Button>
    </Box>
);