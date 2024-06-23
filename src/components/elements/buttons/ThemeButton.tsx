'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon } from '@tabler/icons-react';
import * as React from 'react';

export function ThemeButton() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      size='md'
      variant='light'
      aria-label='MoonIcon'
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
    >
      <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.2} />
    </ActionIcon>
  );
}
