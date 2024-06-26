'use client';

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

import { theme as mantinetheme } from '@/theme';

export interface IProviderWrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({});

export function ProviderWrapper({ children }: IProviderWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantinetheme} defaultColorScheme='auto'>
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
