'use client';

import { CSSVariablesResolver, MantineProvider } from '@mantine/core';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import * as React from 'react';

import { theme as mantinetheme } from '@/theme';
import { RootStyleRegistry } from '@/utils/wrapper/EmotionRootStyleRegistry';

export interface IMantineWrapperProps {
  children: React.ReactNode;
}

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-hero-height': theme.other.heroHeight,
  },
  light: {
    '--mantine-color-primary': theme.other.primaryLight,
  },
  dark: {
    '--mantine-color-primary': theme.other.primaryDark,
  },
});

export function MantineWrapper({ children }: IMantineWrapperProps) {
  return (
    <RootStyleRegistry>
      <MantineEmotionProvider>
        <MantineProvider
          stylesTransform={emotionTransform}
          theme={mantinetheme}
          cssVariablesResolver={resolver}
        >
          {children}
        </MantineProvider>
      </MantineEmotionProvider>
    </RootStyleRegistry>
  );
}
