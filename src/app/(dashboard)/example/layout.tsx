import * as React from 'react';

import { InnerWrapper } from '@/components/ui/wrapper';

export default function ExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InnerWrapper title='Exampel App'>{children}</InnerWrapper>;
}
