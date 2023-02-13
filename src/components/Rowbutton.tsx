import React from 'react';
import { Center, Text, Button } from '@chakra-ui/react';

const Rowbutton = (props: any) => (
  <Center  px={props.Padx}>
    <Button
      borderRadius={1}
      my={props.My}
      mx={props.Mx}
      fontSize={17}
      width={250}
      height={75}
      color={props.color}
      background={props.backcolor}
      fontFamily="Sora"
      variant="primary">
        <Text fontSize={20}>
          {props.placehold}
        </Text>

    </Button>
  </Center>
)
export default Rowbutton
