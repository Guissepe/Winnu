import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Flex, Center } from '@chakra-ui/react';

/**
 * @typedef {import("@prismicio/client").Content.CustumersSlice} CustumersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustumersSlice>} CustumersProps
 * @param { CustumersProps }
 */
const Custumers = ({ slice }) => (
  <section>
    <span>{slice.primary.title}</span>
    <Flex>
      <Center>
        {slice?.items?.map((item, i) => (
          <img width="200px" src={item.custumer.url} alt={item.custumer.alt} />
        ))}
      </Center>
    </Flex>
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default Custumers;
