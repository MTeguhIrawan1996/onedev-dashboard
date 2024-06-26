'use client';

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';

import { theme as mantinetheme } from '@/theme';

export interface IProviderWrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     gcTime: 1000 * 60 * 60 * 24, // 24 hours
  //     staleTime: 2000,
  //     retry: 0,
  //   },
  // },
  // // configure global cache callbacks to show toast notifications
  // mutationCache: new MutationCache({
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // }),
});

export function ProviderWrapper({ children }: IProviderWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantinetheme} defaultColorScheme='auto'>
        {children}
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
