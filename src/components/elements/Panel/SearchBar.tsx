'use client';

import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useQueryStates } from 'nuqs';
import * as React from 'react';

import { examplesParsers } from '@/utils/lib/searchParams';

export function SearchBar() {
  const [_, setQueryParams] = useQueryStates(examplesParsers, {
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <TextInput
      leftSectionPointerEvents='none'
      leftSection={<IconSearch style={{ width: '50%', height: '50%' }} />}
      placeholder='Search'
      w={{ base: '100%', sm: 300 }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          setQueryParams({ search: event.currentTarget.value });
        }
      }}
    />
  );
}
