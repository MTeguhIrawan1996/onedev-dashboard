import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './globals.css';

import { MantineWrapper } from '@/components/ui/wrapper';

const roboto = Roboto({
  weight: ['400', '500', '700', '300'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body className={roboto.className}>
        <MantineWrapper>{children}</MantineWrapper>
      </body>
    </html>
  );
}
