import React from 'react';
import { Box, Center, Flex, Text, Button } from '@chakra-ui/react';

const Rowbutton = (props: any) => (
  <Box px={40}>
          <Button
          fontSize={17}
          width={700}
          maxWidth={700}
          height={55}
          fontFamily="Sora"
          borderRadius="3px"
          mt={{ base: '5px', md: '10px' }}
          background={'black'}
          color= {props.colors}
          >
          <Text> {props.text} </Text>
        </Button>
      </Box>
)
export default Rowbutton
