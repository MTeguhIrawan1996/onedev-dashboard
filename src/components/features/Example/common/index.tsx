import * as React from 'react';

import { ExampleList } from '@/components/features/Example/common/sections/ExampleList';
import { InnerWrapper } from '@/components/ui/wrapper';

export default function ExamplePage() {
  return (
    <InnerWrapper title='Exampel App'>
      <ExampleList />
    </InnerWrapper>
  );
}
