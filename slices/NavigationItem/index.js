import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param { NavigationItemProps }
 */
const NavigationItem = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.name} />

    <PrismicLink field={slice.primary.link}>My Link</PrismicLink>

    {slice?.items?.map((item, i) => (
      <PrismicRichText field={item.child_name} />
    ))}
    {slice?.items?.map((item, i) => (
      <PrismicLink field={item.child_link}>{item.child_name}</PrismicLink>
    ))}
  </section>
);

export default NavigationItem;
