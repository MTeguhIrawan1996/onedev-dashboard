import { MantineProvider } from '@mantine/core';
import * as React from 'react';

import { theme as mantinetheme } from '@/theme';

export interface IMantineWrapperProps {
  children: React.ReactNode;
}

export function MantineWrapper({ children }: IMantineWrapperProps) {
  return (
    <MantineProvider theme={mantinetheme} defaultColorScheme='auto'>
      {children}
    </MantineProvider>
  );
}
