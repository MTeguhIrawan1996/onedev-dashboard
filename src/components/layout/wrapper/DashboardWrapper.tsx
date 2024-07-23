import { Paper, PaperProps, Stack, StackProps } from '@mantine/core';
import * as React from 'react';

export interface IDashboardWrapperProps {
  children: React.ReactNode;
  renderItem?: React.ReactNode;
  paperProps?: PaperProps;
  stackProps?: StackProps;
}

export function DashboardWrapper({
  children,
  renderItem,
  paperProps,
  stackProps,
}: IDashboardWrapperProps) {
  const { mt = 'md', gap = 'lg', ...restStackProps } = stackProps || {};
  const {
    shadow = 'sm',
    p = 'md',
    withBorder = true,
    ...restPaperProps
  } = paperProps || {};
  return (
    <Stack mt={mt} gap={gap} {...restStackProps}>
      {renderItem || null}
      <Paper shadow={shadow} p={p} withBorder={withBorder} {...restPaperProps}>
        {children}
      </Paper>
    </Stack>
  );
}
