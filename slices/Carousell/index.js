import React from 'react';
import { Center, Flex, Box, Image } from '@chakra-ui/react';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

const updateform = e => {
  e.currentTarget.panels.forEach(panel => {
    const rotateVal = -panel.progress * 50;
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 180 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};
const updateform2 = e => {
  e.currentTarget.panels.forEach(panel => {
    const rotateVal = 1;
    const depth = 1;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};

const Carousell = ({ slice }) => (
  <Box>
    {slice.variation !== 'simple' ? (
      <Center>
        <Flex pb={'12rem'}>
          <Box className="slide" px={'0.375rem'}>
            <Flicking
              horizontal={true}
              onReady={updateform}
              onMove={updateform}
            >
              {slice?.items?.map((item, i) => (
                <img
                  key={i}
                  width={1100}
                  height={1100}
                  src={item.image.url}
                  alt={item.image.alt}
                />
              ))}
            </Flicking>
          </Box>
        </Flex>
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

export default Carousell;
