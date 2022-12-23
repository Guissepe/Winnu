import React from 'react';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.Slice1Slice} Slice1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Slice1Slice>} Slice1Props
 * @param { Slice1Props }
 */
const Slice1 = ({ slice }) => (
    <section>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.body} />
        <PrismicRichText field={slice.primary.btext} />
        <img
            src={slice.primary.backgroud.url}
            alt={slice.primary.backgroud.alt}
        />
    </section>
);

export default Slice1;
