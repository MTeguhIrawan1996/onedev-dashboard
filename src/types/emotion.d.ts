import type { EmotionStyles, EmotionSx } from '@mantine/emotion';
import '@mantine/core';

declare module '@mantine/core' {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }
}
