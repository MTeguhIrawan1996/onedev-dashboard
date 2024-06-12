import {
  Badge,
  Box,
  Code,
  rem,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import {
  IconBulb,
  IconCheckbox,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';

import classes from '@/styles/Navbar.module.css';

import { UserButton } from '@/components/elements/Button';
import { PrimaryLink } from '@/components/elements/Link';

import { dashboardNavigation } from '@/utils/constans/dashboardNavigation';

const links = [
  { icon: IconBulb, label: 'Activity', notifications: 3 },
  { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
  { icon: IconUser, label: 'Contacts' },
];

export function Navbar() {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size='sm' variant='filled' className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = dashboardNavigation.map((collection) => (
    <PrimaryLink
      href={collection.href}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{' '}
      {collection.label}
    </PrimaryLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <UserButton />
      </div>

      <TextInput
        placeholder='Search'
        size='xs'
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb='sm'
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Box className={classes.collectionsHeader}>
          <Text size='xs' fw={500} c='dimmed'>
            Menu
          </Text>
        </Box>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}
