import { getProviders } from "next-auth/react"
import { signIn } from "next-auth/react";
import {
    Box,
    Button,
  } from "@chakra-ui/react";
  import {  } from "../../slices";

  export const LogInbutton = (props: any) => (
    <Box>
        <Button
          borderRadius="3px"
          mt={props.marginTop}
          mb={props.marginBot}
          fontSize={17}
          width={350}
          maxWidth={850}
          height={55}
          color={props.color}
          background={props.backcolor}
          fontFamily="Sora"
          variant="primary"
          onClick={ () => signIn()}
          mx={props.marginX}>
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
