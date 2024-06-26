'use client';

import { ActionIcon, em, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';
import * as React from 'react';

import { FilterButton, PeriodButton } from '@/components/elements/buttons';
import { SearchBar } from '@/components/elements/panels';

interface IControlPanelProps {
  openModal?: () => void;
}

export function ControlPanel({ openModal }: IControlPanelProps) {
  const isBase = useMediaQuery(`(max-width: ${em(768)})`);
  return (
    <Group justify='space-between' wrap={isBase ? 'wrap' : 'nowrap'}>
      <Group>
        <FilterButton />
        <PeriodButton />
      </Group>
      <Group w={{ base: '100%', sm: 'fit-content' }} wrap='nowrap'>
        <SearchBar />
        <ActionIcon
          variant='default'
          size='lg'
          aria-label='plus'
          onClick={openModal}
        >
          <IconPlus style={{ width: '60%', height: '60%' }} stroke={1.2} />
        </ActionIcon>
      </Group>
    </Group>
  );
}
