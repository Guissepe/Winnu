import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import Link from 'next/link';

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
const Header = ({ slice }) => (
  <section>
    <img src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
    <PrismicLink field={slice.primary.button}>My Link</PrismicLink>
    <PrismicLink field={slice.primary.normalbutton}>help me here</PrismicLink>

    {/* <PrismicLink field={slice.primary.home}>Homepage </PrismicLink>
    <PrismicLink field={slice.primary.pricing}>Pricing</PrismicLink>
    <PrismicLink field={slice.primary.aboutus}>aboutus</PrismicLink>
    <PrismicLink field={slice.primary.login}>login</PrismicLink>
    <PrismicLink field={slice.primary.getstarted}>getstarted</PrismicLink> */}
  </section>
);

export default Header;
