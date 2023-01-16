import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Text } from '@chakra-ui/react';
const NavigationItem = ({ slice }) => (
  <section>
    <Text>Just to see if it shows up</Text>

    <PrismicRichText field={slice.primary.name} />

    <PrismicLink field={slice.primary.link}>My Link</PrismicLink>
    {slice?.items?.map((item, i) => (
      <PrismicLink field={item.child_link}>{item.child_name}</PrismicLink>
    ))}
  </section>
);

export default NavigationItem;
