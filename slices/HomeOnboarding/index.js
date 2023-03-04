import React from 'react';
import { Box, Image } from '@chakra-ui/react';

/**
 * @typedef {import("@prismicio/client").Content.HomeOnboardingSlice} HomeOnboardingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeOnboardingSlice>} HomeOnboardingProps
 * @param { HomeOnboardingProps }
 */
const HomeOnboarding = ({ slice }) => (
  <Box as="section" backgroundColor={'#E9E9E9E5'} py={'4rem'}>
    <Image
      mx={'auto'}
      src={slice.primary.onboarding_screenshot.url}
      alt={slice.primary.onboarding_screenshot.alt}
    />
  </Box>
);

export default HomeOnboarding;
