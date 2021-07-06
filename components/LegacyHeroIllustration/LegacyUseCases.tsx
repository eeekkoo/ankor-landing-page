import React from 'react';
import { Container, Box, Text } from '@modulz/radix';

export const LegacyUseCases = () => (
  <Box>
    <Container size={2} mt={8} mb={[5, 7]}>
      <Text as="h3" size={8} mb={[5, 7]} px={[0, 8]} sx={{ lineHeight: 4 }}>
        Time-tracking apps today are not suited to the user who relies on keyboard shortcuts. Performing repetitive
        tasks by pointing and clicking is frustrating. With Ankor, we optimise for the keyboard
      </Text>
    </Container>

    {/* <Container size={1}>
      <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
        Almost all design tools are optimised for illustration. Drawing tools are great for exploration but when it
        comes to designing websites, apps, and user interfaces, we need something more powerful.
      </Text>
      <Text as="p" size={5} mb={5} px={[0, 9]} sx={{ lineHeight: 3 }}>
        Modulz is optimised for designing digital products and design systems.
      </Text>
    </Container> */}
  </Box>
);
