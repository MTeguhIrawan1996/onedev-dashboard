import { Avatar, Group, rem, Text, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

import classes from '@/components/elements/buttons/Button.module.css';

import { useReadAuthUser } from '@/services/supabase/auth/useReadAuthUser';

export function UserButton() {
  const { data } = useReadAuthUser();

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png'
          radius='xl'
        />

        <div style={{ flex: 1 }}>
          <Text size='sm' fw={500}>
            -
          </Text>
          <Text c='dimmed' size='xs'>
            {data?.email || '-'}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}
