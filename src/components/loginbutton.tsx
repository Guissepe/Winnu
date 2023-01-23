import { getProviders, signIn } from "next-auth/react"
import {
    Box,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react";
  import {  } from "../../slices";

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
          display='flex'
          onClick={ () => props.handler()}
          mx={props.margin}>
          {props.provname}
        </Button>
    </Box>
);

export async function getServerSideProps(context: any) {
  const providers = await getProviders()
  return {
    props: { providers },
  };
};
