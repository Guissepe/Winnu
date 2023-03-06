import React, { useState, useEffect } from 'react';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import {
  Center,
  Flex,
  Box,
  Image,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/arrow.css';

const updateform2 = e => {
  e.currentTarget.panels.forEach(panel => {
    const index = panel.getIndex();
    const rotateVal = 1;
    const depth = 1;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};
const Carousell = ({ slice }) => {
  const defaultOffer = slice.primary.ofer1;
  const defaultDecription = slice.primary.desc1;
  const defaultImage = slice.primary.image01.url;
  const [displayOffer, setDisplayOffer] = useState('');
  const [displayDescription, SetDisplayDescription] = useState('');
  const [image, SetImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButton1Click = newIndex => {
    setDisplayOffer(slice.primary.ofer1);
    SetDisplayDescription(slice.primary.desc1);
    SetImage(slice.primary.image01.url);
    setSelectedIndex(newIndex);
  };

  const handleButton2Click = newIndex => {
    setDisplayOffer(slice.primary.ofer2);
    SetDisplayDescription(slice.primary.des2);
    SetImage(slice.primary.image02.url);
    setSelectedIndex(newIndex);
  };

  const handleButton3Click = newIndex => {
    setDisplayOffer(slice.primary.ofer3);
    SetDisplayDescription(slice.primary.desc3);
    SetImage(slice.primary.image03.url);
    setSelectedIndex(newIndex);
  };
  console.log(`Selected index: ${selectedIndex}`);

  useEffect(() => setDisplayOffer(defaultOffer), []);
  useEffect(() => SetDisplayDescription(defaultDecription), []);
  useEffect(() => SetImage(defaultImage), []);
  return (
    <Box fontFamily={'sora'}>
      {slice.variation !== 'simple' ? (
        <Center pt={'5rem'} background={'Yellow03'}>
          <VStack pb={'6rem'}>
            {displayOffer && (
              <Center>
                <Flicking
                  onSelect={e =>
                    console.log(`Selected item: ${e.currentTarget}`)
                  }
                  bound={true}
                  horizontal={true}
                  moveType={['strict', { count: 1 }]}
                  defaultIndex={selectedIndex}
                  onMoveEnd={i => {
                    if (i.index !== undefined) {
                      setSelectedIndex(i.index);
                      console.log(`Current index: ${i.index}`); // add this line to log the index
                    }
                  }}
                ></Flicking>
                <VStack>
                  <Text fontSize={'2rem'}>{slice.primary.title}</Text>
                  <Text fontSize={'2rem'}>{displayOffer}</Text>
                  <Text width={'46rem'} fontSize={'1.4rem'} align={'center'}>
                    {displayDescription}
                  </Text>
                </VStack>
              </Center>
            )}
            <HStack background={'white02'} mt={2}>
              <Button
                isActive={selectedIndex === 0}
                onClick={() => handleButton1Click(0)}
              >
                {slice.primary.button1}
              </Button>
              <Button
                isActive={selectedIndex === 1}
                onClick={() => handleButton2Click(1)}
              >
                {slice.primary.button2}
              </Button>
              <Button
                isActive={selectedIndex === 2}
                onClick={() => handleButton3Click(2)}
              >
                {slice.primary.button3}
              </Button>
            </HStack>
            {displayOffer && (
              <Center>
                <Image
                  width={700}
                  height={600}
                  src={image}
                  alt={slice.primary.image01.alt}
                />
              </Center>
            )}
          </VStack>
        </Center>
      ) : (
        <Center>
          <Flex bg="black" pb={'12rem'}>
            <Box className="slide" px={'0.375rem'}>
              <Flicking
                horizontal={true}
                onReady={updateform2}
                onMove={updateform2}
              >
                {slice?.items?.map((item, i) => (
                  <Image
                    key={i}
                    width={900}
                    height={800}
                    src={item.image.url}
                    alt={item.image.alt}
                    px={'1.25rem'}
                  />
                ))}
              </Flicking>
            </Box>
          </Flex>
        </Center>
      )}
    </Box>
  );
};

export default Carousell;
