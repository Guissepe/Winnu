import React from 'react';
import { Text, Center, VStack, Image, HStack, Button } from '@chakra-ui/react';
import BigDropdown from '../../src/components/Bigdropdown.tsx';
import SmallDropdown from '../../src/components/Smalldropdown.tsx';
import { InputField } from '../../src/components/inputfield.tsx';
import Username from '../../src/components/Username.tsx';
import Userimage from '../../src/components/Userimage.tsx';
import Rowbutton from '../../src/components/Rowbutton.tsx';

const Welcom = ({ slice }) => (
  <Center fontFamily={'sora'} background={'black'}>
    <VStack>
      <Image
        mb={'2rem'}
        mt={'10rem'}
        height={'2rem'}
        src={slice.primary.logo.url}
        alt={slice.primary.logo.alt}
      />
      <Center>
        <Userimage />
      </Center>
      <HStack>
        <Text color={'white'} fontSize={'1.75rem'}>
          {slice.primary.welcome}
        </Text>
        <Username />
      </HStack>
      <VStack spacing={'1rem'} color={'grey03'} align={'start'}>
        <Text>{slice.primary.username}</Text>
        <InputField></InputField>
        <Text>{slice.primary.display_name}</Text>
        <InputField></InputField>
        <Text>{slice.primary.describe_your_role}</Text>
        <BigDropdown
          text1="Designer"
          text2="Front-End Developer"
          text3="Back-End Developer"
          text4="Developer"
          text5="Freelancer"
          text6="Project Manager"
          text7="Product Manager"
          text8="Student"
          text9="Other"
        ></BigDropdown>
        <span>{slice.primary.how_do_want_to_use_winnu}</span>
        <SmallDropdown
          text1="Institutional"
          text2="Personal"
          text3="Student"
          text4="Other"
        ></SmallDropdown>
      </VStack>
      <Center pt={'2rem'}>
        <Button
          borderRadius={'0.25rem'}
          height={'3rem'}
          width={'16rem'}
          variant="primary"
          placeholder={'Create an account'}
        >
          {slice.primary.button}
        </Button>
      </Center>
    </VStack>
  </Center>
);

export default Welcom;
