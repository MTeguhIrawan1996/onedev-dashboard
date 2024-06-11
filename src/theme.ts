'use client';

import { createTheme, rem, virtualColor } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  /* Typography */
  fontFamily: 'Roboto, sans-serif',
  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
  },

  /* Colors */
  primaryShade: 5,
  primaryColor: 'bright-orange',
  colors: {
    'bright-orange': [
      '#fff8e1',
      '#ffefcc',
      '#ffdd9b',
      '#ffca64',
      '#ffba38',
      '#ffb01b',
      '#ffab09',
      '#e39500',
      '#ca8500',
      '#af7100',
    ],
    'bright-green': [
      '#effee7',
      '#e0f8d4',
      '#c2efab',
      '#a2e67e',
      '#87de57',
      '#75d940',
      '#6bd731',
      '#59be23',
      '#4da91b',
      '#3d920c',
    ],
    primary: virtualColor({
      name: 'primary',
      dark: 'bright-orange',
      light: 'bright-green',
    }),
  },

  defaultGradient: {
    from: 'bright-green',
    to: 'bright-orange',
    deg: 30,
  },

  /* Other */
  defaultRadius: 'md',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});
