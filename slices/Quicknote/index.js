import React from 'react';
import { Center, Box, Text, Image } from '@chakra-ui/react';

const Quicknote = ({ slice }) => (
  <Center py={140} fontFamily={'Sora'}>
    <Box>
      <Center pb={20} fontSize={40}>
        {slice.primary.title}
      </Center>
      <Box>
        {slice?.items?.map((item, i) => (
          <Center py={3}>
            <Image src={item.icon.url} alt={item.icon.alt} />
            <Text fontSize={20}>{item.notes}</Text>
          </Center>
        ))}
        <Center align={'center'} width={650} py={19} fontSize={20}>
          {slice.primary.finaldec}
        </Center>
      </Box>
    </Box>
  </Center>
);

export default Quicknote;
