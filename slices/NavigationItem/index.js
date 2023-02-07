import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { Text } from '@chakra-ui/react';
const NavigationItem = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.name} />

    <PrismicLink field={slice.primary.link}>My Link</PrismicLink>
    {slice?.items?.map((item, i) => (
      <PrismicLink field={item.child_link}>{item.child_name}</PrismicLink>
    ))}
  </section>
);

export default NavigationItem;
