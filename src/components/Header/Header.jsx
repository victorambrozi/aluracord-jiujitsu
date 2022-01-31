import React from 'react';
import { Box, Text, Button } from '@skynexui/components';

import { styleHeader } from './header-style'; 

const Header = () => {
  return  (
    <>
      <Box
        styleSheet={styleHeader.container}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );;
};

export default Header;