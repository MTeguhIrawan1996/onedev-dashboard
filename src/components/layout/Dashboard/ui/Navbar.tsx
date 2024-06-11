import { Box, NavLink, Stack, Text } from '@mantine/core';
import { IconHome2 } from '@tabler/icons-react';
import Link from 'next/link';

function Navbar() {
  return (
    <Stack gap='xs'>
      <NavLink
        href='/overview'
        label='Overview'
        leftSection={<IconHome2 size='1rem' stroke={1.5} />}
      />
      <Link href='/example'>
        <Box
          className='mantine-NavLink-root'
          sx={{
            backgroundColor: 'red',
          }}
        >
          <IconHome2 size='1rem' stroke={1.5} />
          <Text size='xs'>Extra small text</Text>
        </Box>
      </Link>
    </Stack>
  );
}

export default Navbar;
