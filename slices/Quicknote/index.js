import React from 'react';
import { Center, Box, Text, Image } from '@chakra-ui/react';

const Quicknote = ({ slice }) => (
  <Center fontFamily={'sora'} py={'9rem'}>
    <Box>
      <Center pb={'1.25rem'} fontSize={'2.5rem'}>
        {slice.primary.title}
      </Center>
      <Box>
        {slice?.items?.map((item, i) => (
          <Center py={3}>
            <Image src={item.icon.url} alt={item.icon.alt} />
            <Text fontSize={'1.25rem'}>{item.notes}</Text>
          </Center>
        ))}
        <Center
          align={'center'}
          width={650}
          py={'1.25rem'}
          fontSize={'1.25rem'}
        >
          {slice.primary.finaldec}
        </Center>
      </Box>
    </Box>
  </Center>
);

export default Quicknote;
