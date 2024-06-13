'use client';

import { Box } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import * as React from 'react';

import { ControlPanel } from '@/components/ui/templates';
import { DashboardWrapper } from '@/components/ui/wrapper';

export const ExampleList = () => {
  return (
    <DashboardWrapper renderItem={<ControlPanel />}>
      <DataTable
        highlightOnHover
        // provide data
        records={[
          { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
          { id: 2, name: 'Joe', bornIn: 1888, party: 'asdasd' },
          // more records...
        ]}
        // define columns
        columns={[
          {
            accessor: 'id',
            // this column has a custom title
            title: '#',
            // right-align column
            textAlign: 'right',
            sortable: true,
          },
          { accessor: 'name' },
          {
            accessor: 'party',
            // this column has custom cell data rendering
            render: ({ party }) => (
              <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
                {party.slice(0, 3).toUpperCase()}
              </Box>
            ),
          },
          { accessor: 'bornIn' },
        ]}
        // execute this callback when a row is clicked
        // onRowClick={({ record: { name, party, bornIn } }) =>
        //   showNotification({
        //     title: `Clicked on ${name}`,
        //     message: `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
        //     withBorder: true,
        //   })
        // }
      />
    </DashboardWrapper>
  );
};
