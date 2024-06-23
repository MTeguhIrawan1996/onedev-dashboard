import { Button } from '@mantine/core';
import { IconChevronDown, IconClock12 } from '@tabler/icons-react';
import * as React from 'react';

export interface IPeriodButtonProps {}

// eslint-disable-next-line unused-imports/no-unused-vars
export function PeriodButton(props: IPeriodButtonProps) {
  return (
    <Button
      variant='light'
      leftSection={<IconClock12 size={14} />}
      rightSection={<IconChevronDown size={14} />}
    >
      Today
    </Button>
  );
}
