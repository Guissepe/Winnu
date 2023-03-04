import React from 'react';
import { Center, Box, Text, Image, Flex } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.js';

const Custumers = ({ slice }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  };
  return (
    <Box>
      <Box maxW={533} mx="auto" textAlign="center">
        <Text fontWeight="600" fontSize={{ base: '1.25rem	', sm: '2rem' }}>
          {slice.primary.title}
        </Text>
        <Text mt={'1.5rem'} fontWeight="500" fontSize={'1.25rem'}>
          {slice.primary.description}
        </Text>
      </Box>
      <Box my={'2rem'}>
        <Slider {...settings}>
          {slice?.items?.map((item, i) => (
            <figure key={i}>
              <Image
                height={'3rem'}
                maxW={300}
                mx="auto"
                px="3%"
                mt={'1.25rem'}
                src={item.custumer.url}
                alt={item.custumer.alt}
              />
            </figure>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Custumers;
