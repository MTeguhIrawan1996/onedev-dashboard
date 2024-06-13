import * as React from 'react';

import { ClientDataTable } from '@/components/features/Example/common/elements/ClientDataTable';
import { ControlPanel } from '@/components/ui/templates';
import { DashboardWrapper } from '@/components/ui/wrapper';

export const ExampleList = () => {
  return (
    <DashboardWrapper
      renderItem={<ControlPanel />}
      paperProps={{
        py: 'xl',
      }}
    >
      <ClientDataTable />
    </DashboardWrapper>
  );
};
