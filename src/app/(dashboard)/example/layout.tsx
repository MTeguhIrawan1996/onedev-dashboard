import * as React from 'react';

import { InnerWrapper } from '@/components/layout';

export default function ExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InnerWrapper title='Exampel App'>{children}</InnerWrapper>;
}
