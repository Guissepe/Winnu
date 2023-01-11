import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.ButtonSlice} ButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ButtonSlice>} ButtonProps
 * @param { ButtonProps }
 */
const Button = ({ slice }) => (
  <section>
    <PrismicLink field={slice.primary.cta_link}>
      {slice.primary.cta_text}
    </PrismicLink>
    <PrismicRichText field={slice.primary.cta_text} />
  </section>
);

export default Button;
