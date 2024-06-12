'use client';

import { Button, ButtonProps, Code, rem } from '@mantine/core';
import { Spotlight, spotlight, SpotlightActionData } from '@mantine/spotlight';
import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import '@mantine/spotlight/styles.css';
import classes from './Button.module.css';

export interface ISearchButtonMenuProps extends ButtonProps {}

export function SearchButtonMenu({
  mb = 'sm',
  ...rest
}: ISearchButtonMenuProps) {
  const router = useRouter();
  const actions: SpotlightActionData[] = [
    {
      id: 'overview',
      label: 'Overview',
      description: 'Get to overview page',
      onClick: () => router.push('/overview'),
      leftSection: (
        <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
      ),
    },
    {
      id: 'example',
      label: 'Example',
      description: 'Get full information about current system status',
      onClick: () => router.push('/example'),
      leftSection: (
        <IconDashboard
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: 'documentation',
      label: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onClick: () => router.push('/foo'),
      leftSection: (
        <IconFileText
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
  ];
  return (
    <>
      <Button
        fullWidth
        mb={mb}
        variant='default'
        size='sm'
        leftSection={
          <IconSearch
            style={{ width: rem(14), height: rem(14) }}
            stroke={1.5}
          />
        }
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        justify='space-between'
        styles={(theme) => ({
          label: {
            width: '60%',
            fontSize: 12,
            fontWeight: 300,
            color: theme.colors.gray[6],
          },
        })}
        onClick={spotlight.open}
        {...rest}
      >
        Search
      </Button>
      <Spotlight
        actions={actions}
        nothingFound='Nothing found...'
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
