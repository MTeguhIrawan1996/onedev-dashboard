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
  primaryColor: 'brown',
  colors: {
    'light-blue': [
      '#e0fbff',
      '#cbf2ff',
      '#9ae2ff',
      '#64d2ff',
      '#3cc5fe',
      '#23bcfe',
      '#09b8ff',
      '#00a1e4',
      '#0090cd',
      '#007cb5',
    ],
    brown: [
      '#f7f3f2',
      '#e7e5e5',
      '#d2c9c6',
      '#bdaaa4',
      '#ab9087',
      '#a17f75',
      '#9d766b',
      '#896459',
      '#7b584e',
      '#6d4b40',
    ],
    primary: virtualColor({
      name: 'primary',
      dark: 'light-blue',
      light: 'brown',
    }),
  },

  other: {
    heroHeight: rem(400),
    primaryLight: '#87de57',
    primaryDark: '#3cc5fe',
  },

  defaultGradient: {
    from: 'light-blue',
    to: 'brown',
    deg: 30,
  },

  /* Component */

  // components: {
  //   TextInput: TextInput.extend({
  //     styles: (th, props) => ({}),
  //   }),
  // },

  /* Other */
  defaultRadius: 'lg',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});
