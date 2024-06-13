'use client';

import { ActionIcon, em, Group, TextInput } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import * as React from 'react';

import { FilterButton, PeriodButton } from '@/components/elements/Button';

interface IControlPanelProps {}

// eslint-disable-next-line unused-imports/no-unused-vars
export function ControlPanel(props: IControlPanelProps) {
  const isBase = useMediaQuery(`(max-width: ${em(768)})`);
  return (
    <Group justify='space-between' wrap={isBase ? 'wrap' : 'nowrap'}>
      <Group>
        <FilterButton />
        <PeriodButton />
      </Group>
      <Group w={{ base: '100%', sm: 'fit-content' }} wrap='nowrap'>
        <TextInput
          leftSectionPointerEvents='none'
          leftSection={<IconSearch style={{ width: '50%', height: '50%' }} />}
          placeholder='Search'
          w={{ base: '100%', sm: 300 }}
        />
        <ActionIcon variant='default' size='lg' aria-label='Settings'>
          <IconPlus style={{ width: '60%', height: '60%' }} stroke={1.2} />
        </ActionIcon>
      </Group>
    </Group>
  );
}
