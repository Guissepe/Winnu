import React, { Component } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, Flex, Image, Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

const updateform = e => {
  e.currentTarget.panels.forEach(panel => {
    const rotateVal = -panel.progress * 50;
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 180 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};

const Carousell = ({ slice }) => (
  <Center>
    <carouselComp />
    <Flex pb={200}>
      <Box className="slide" px={5}>
        <Flicking horizontal={true} onReady={updateform} onMove={updateform}>
          {slice?.items?.map((item, i) => (
            <img
              width={1100}
              height={1100}
              src={item.image.url}
              alt={item.image.alt}
            />
          ))}
          <ViewportSlot>
            <div className="date-panel-border"></div>
            <div className="shadow-top"></div>
            <div className="shadow-bottom"></div>
          </ViewportSlot>
        </Flicking>
      </Box>
    </Flex>
  </Center>
);

export default Carousell;
