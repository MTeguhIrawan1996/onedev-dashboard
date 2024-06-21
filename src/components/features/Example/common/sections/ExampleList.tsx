import * as React from 'react';

import { ClientDataTable } from '@/components/features/Example/common/elements/ClientDataTable';

import { getData } from '@/services/rest-api/useReadAllExample';
import { examplesCache } from '@/utils/lib/searchParams';

export const ExampleList = async () => {
  const limit = examplesCache.get('l');
  const page = examplesCache.get('p');
  const search = examplesCache.get('search');
  const data = await getData({ limit, page, search });

  return <ClientDataTable data={data} />;
};
