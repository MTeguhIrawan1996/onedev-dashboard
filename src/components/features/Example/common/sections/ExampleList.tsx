import * as React from 'react';

import { ClientDataTable } from '@/components/features/Example/common/ui/ClientDataTable';

export const ExampleList = async () => {
  // const limit = examplesCache.get('l');
  // const page = examplesCache.get('p');
  // const search = examplesCache.get('search');
  // const data = await getData({ limit, page, search });

  return <ClientDataTable />;
};
