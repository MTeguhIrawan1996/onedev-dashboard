import { Group, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import * as React from 'react';

interface IFieldErrorMessageProps {
  children: React.ReactNode;
  color?: string;
}

export function FieldErrorMessage({
  children,
  color,
}: IFieldErrorMessageProps) {
  return (
    <Group gap={2} component='span'>
      <IconAlertCircle
        style={{ marginRight: 5, height: 16, width: 16 }}
        color={color}
      />
      <Text span fw={400} fz={12} c={color}>
        {children}
      </Text>
    </Group>
  );
}
