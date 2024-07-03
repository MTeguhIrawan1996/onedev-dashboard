/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */

'use client';

import { MantineProvider } from '@mantine/core';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import * as React from 'react';

import { theme as mantinetheme } from '@/theme';

export interface IProviderWrapperProps {
  children: React.ReactNode;
}

const persister = createSyncStoragePersister({
  storage: typeof window !== 'undefined' ? window.localStorage : undefined,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: Infinity,
      retry: 0,
    },
  },
  // configure global cache callbacks to show toast notifications
  mutationCache: new MutationCache({
    onSuccess: (data) => {
      console.log('On Success Mutation Cache');
    },
    onMutate: () => {
      console.log('On mutate Mutation Cache');
    },
    onError: (error) => {
      console.log(error);
      console.log('On Error Mutation Cache');
    },
  }),
});

export function ProviderWrapper({ children }: IProviderWrapperProps) {
  const [resuming, setResuming] = React.useState(false);
  return (
    <PersistQueryClientProvider
      persistOptions={{ persister }}
      client={queryClient}
      onSuccess={() => {
        if (!resuming) {
          console.log('resume');
          setResuming(true);
          queryClient.resumePausedMutations().then(() => {
            queryClient.invalidateQueries();
            setResuming(false);
          });
        }
      }}
    >
      <MantineProvider theme={mantinetheme} defaultColorScheme='auto'>
        {children}
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen />
    </PersistQueryClientProvider>
  );
}
