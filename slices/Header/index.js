import React from 'react';
import { PrismicLink } from '@prismicio/react';

const Header = ({ slice }) => (
  <section>
    <img src={slice.primary.logo.url} alt={slice.primary.logo.alt} />
    <PrismicLink field={slice.primary.button}>My Link</PrismicLink>
    <PrismicLink field={slice.primary.normalbutton}>help me here</PrismicLink>
  </section>
);

export default Header;
