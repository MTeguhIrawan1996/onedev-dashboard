import { Badge, Box, rem, Text } from '@mantine/core';

import classes from '@/styles/Navbar.module.css';

import { SearchButtonMenu, UserButton } from '@/components/elements/Button';
import { PrimaryLink } from '@/components/elements/Link';

import { collections, links } from '@/utils/constans/dashboardNavigation';

export function Navbar() {
  const mainLinks = links.map((link) => (
    <PrimaryLink href={link.href} key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size='sm' variant='filled' className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </PrimaryLink>
  ));

  const collectionLinks = collections.map((collection) => (
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
      <SearchButtonMenu />
      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>
      <div className={classes.section}>
        <Box className={classes.collectionsHeader}>
          <Text size='xs' fw={500} c='dimmed'>
            Collention
          </Text>
        </Box>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}
