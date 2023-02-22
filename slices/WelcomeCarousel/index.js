import React, { useRef, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Center, Flex, Box, Image, Text } from '@chakra-ui/react';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Arrow, Pagination } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/arrow.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import '@egjs/react-flicking/dist/flicking.css';

const WelcomeCarousel = ({ slice }) => {
  const plugins = [new Arrow(), new Pagination({ type: 'bullet' })];

  return (
    <Box bg={'black'} minH={'100vh'} pt={'3rem'}>
      <Box className="slide">
        <Flicking horizontal={true} plugins={plugins}>
          
          {slice?.items?.map((item, index) => (
            <Box key={index} width={586} px={'2rem'}>
              <Box bg="white" p={'3rem'}>
                <Image
                  width={462}
                  height={327}
                  src={item.image.url}
                  alt={item.image.alt}
                />
              </Box>
              <Box bg={'#EBC142'} p={'3rem'} minHeight={271}>
                <Text fontSize={'1.5rem'} fontWeight="600">
                  {item.title}
                </Text>
                <Box fontWeight="500">
                  <PrismicRichText field={item.note} />
                </Box>
              </Box>
            </Box>
          ))}
          <ViewportSlot>
            <span className="flicking-arrow-prev is-circle"></span>
            <span className="flicking-arrow-next is-circle"></span>
          </ViewportSlot>
          <ViewportSlot>
            <div className="flicking-pagination"></div>
          </ViewportSlot>
        </Flicking>
        
      </Box>
    </Box>
  );
};

export default WelcomeCarousel;
