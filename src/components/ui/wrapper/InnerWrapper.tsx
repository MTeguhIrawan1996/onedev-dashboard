import { Stack, Title } from '@mantine/core';
import * as React from 'react';

export interface IInnerWrapperProps {
  children?: React.ReactNode;
  title?: string;
}

export function InnerWrapper({ children, title }: IInnerWrapperProps) {
  return (
    <section>
      <Stack py='md' gap='xl'>
        <Title order={1} c='primary'>
          {title}
        </Title>
        {children}
      </Stack>
    </section>
  );
}
