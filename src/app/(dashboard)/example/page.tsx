import { ExamplePage } from '@/components/features';

import { examplesCache } from '@/utils/lib/searchParams';

export default function Example({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  examplesCache.parse(searchParams);
  return <ExamplePage />;
}
