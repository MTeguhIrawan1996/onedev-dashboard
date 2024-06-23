import { Button } from '@mantine/core';
import { IconChevronDown, IconFilter } from '@tabler/icons-react';
import * as React from 'react';

export interface IFilterButtonProps {}

// eslint-disable-next-line unused-imports/no-unused-vars
export function FilterButton(props: IFilterButtonProps) {
  return (
    <Button
      variant='light'
      leftSection={<IconFilter size={14} />}
      rightSection={<IconChevronDown size={14} />}
    >
      Filter
    </Button>
  );
}
